import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.EDEN_WEBHOOK_URL!; // Chat Trigger URL ending with /chat
const TIMEOUT_MS = Number(process.env.EDEN_TIMEOUT_MS || 45000);

function createSessionId() {
  return globalThis.crypto?.randomUUID?.() ?? String(Date.now());
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const action = (body?.action as string) || 'sendMessage'; // sendMessage | loadPreviousSession
    const chatInput = (body?.message as string) ?? (body?.chatInput as string) ?? '';
    const metadata = body?.metadata ?? {};

    // persist a session cookie so n8n can keep context
    const existing = req.cookies.get('eden_session')?.value;
    const sessionId = body?.sessionId || existing || createSessionId();

    const url = new URL(WEBHOOK_URL);
    url.searchParams.set('action', action);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const upstream = await fetch(url.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain, */*' },
      body: JSON.stringify({ chatInput, sessionId, metadata }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const text = await upstream.text().catch(() => '');
    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Upstream ${upstream.status}`, details: text.slice(0, 1000) },
        { status: 502 }
      );
    }

    // Normalize to a single "response" string
    let parsed: any;
    try { parsed = JSON.parse(text); } catch { /* keep text */ }
    const response =
      typeof parsed === 'string'
        ? parsed
        : parsed?.response ??
          parsed?.message ??
          parsed?.output ??
          parsed?.data?.output ??
          parsed?.choices?.[0]?.message?.content ??
          text;

    const res = NextResponse.json({ response });
    res.cookies.set('eden_session', sessionId, { httpOnly: true, sameSite: 'lax', path: '/' });
    return res;
  } catch (err: any) {
    const msg = err?.name === 'AbortError' ? 'Upstream timeout' : (err?.message || 'Unknown error');
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}