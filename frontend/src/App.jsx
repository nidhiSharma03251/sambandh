import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Directors from './pages/Directors'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="grain min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1c1a18',
            color: '#faf8f4',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            borderRadius: '0',
            padding: '16px 20px',
          },
          success: {
            iconTheme: { primary: '#d4a843', secondary: '#1c1a18' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#faf8f4' },
          },
        }}
      />
    </Router>
  )
}
