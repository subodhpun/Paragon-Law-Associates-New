import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import PracticeAreas from './pages/PracticeAreas.jsx'
import Attorneys from './pages/Attorneys.jsx'
import News from './pages/News.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AdminPanel from "./pages/AdminPanel.jsx"
import { LoadingProvider } from './context/LoadingContext'

function App() {
  return (
    <LoadingProvider>
      <Router>
        <ScrollToTop/>
        <div className="min-h-screen bg-slate-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminPanel />} />  {/* Admin Panel */}
          </Routes>
        </div>
      </Router>
    </LoadingProvider>
  )
}

export default App