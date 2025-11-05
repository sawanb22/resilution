/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: { '0%': { transform:'translateY(8px)', opacity:'0' }, '100%': { transform:'translateY(0)', opacity:'1' } },
        scaleIn: { '0%': { transform:'scale(.98)', opacity:'0' }, '100%': { transform:'scale(1)', opacity:'1' } },
      },
      animation: {
        slideUp: 'slideUp 180ms ease-out',
        scaleIn: 'scaleIn 220ms ease-out',
      },
      transitionTimingFunction: {
        'eden-out': 'cubic-bezier(0.2,0.0,0.2,1)',
      },
      borderRadius: {
        eden: '16px',
      },
    },
  },
  plugins: [],
}
