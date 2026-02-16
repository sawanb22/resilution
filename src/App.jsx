import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import NewHome from './pages/Home/NewHome'
import { Navbar } from './Component/Common/Navbar'
import { Footer } from './Component/Common/Footer'
import { Resilution } from './pages/Why_resilution/Resilution'
import { Work } from "./pages/Work/Work"
import { About } from './pages/About/About'
import { EdenChatWidget } from './Component/ChatWidget'
import { NewsletterPopup } from './Component/Common/NewsletterPopup'
import FigmaLanding from './pages/FigmaLanding/FigmaLanding'

// Middleware backend URL from environment
// Middleware backend URL - Fixed to point to Resilution backend
const MIDDLEWARE_URL = 'https://resilution-chat-backend-850632565452.asia-south1.run.app' //'http://localhost:3001'  

const ConditionalNavbar = () => {
  const location = useLocation();
  // Don't show global navbar on NewHome or FigmaLanding pages as they have their own
  if (location.pathname === '/new-home' || location.pathname === '/figma-landing') {
    return null;
  }
  return <Navbar />;
};

const ConditionalFooter = () => {
  const location = useLocation();
  // Don't show global footer on NewHome or FigmaLanding pages as they have their own
  if (location.pathname === '/new-home' || location.pathname === '/figma-landing') {
    return null;
  }
  return <Footer />;
};

function App() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('newsletterPopupShown')
    console.log('[NewsletterPopup] Already shown in session?', popupShown ? 'YES' : 'NO')

    if (!popupShown) {
      // Show popup after 3 seconds
      console.log('[NewsletterPopup] Will show in 3 seconds...')
      const timer = setTimeout(() => {
        console.log('[NewsletterPopup] Showing now!')
        setShowPopup(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
    // Mark popup as shown for this session
    sessionStorage.setItem('newsletterPopupShown', 'true')
  }

  return (
    <>
      <BrowserRouter>
        <ConditionalNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-home' element={<NewHome />} />
          <Route path='/why-resilution' element={<Resilution />} />
          <Route path="/blockchain-paradigm" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/figma-landing" element={<FigmaLanding />} />
        </Routes>
        <ConditionalFooter />
        {/* Eden Chat Widget - Fresh implementation with Socket.IO */}
        <EdenChatWidget
          middlewareUrl={MIDDLEWARE_URL}
          assetsPath="/chat-widget"
          initialOpen={false}
          heartbeatInterval={25000}
        />
        {/* Newsletter Popup - Shows after 3 seconds on first visit */}
        {showPopup && <NewsletterPopup onClose={handleClosePopup} />}
      </BrowserRouter>
    </>
  )
}

export default App
