import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'
import JoinUs from '../pages/JoinUs'

export default function AppRouter(){
  return (
    <Router>
      <Header />
      <main className="px-5 py-6 min-h-[70vh] max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/join" element={<JoinUs/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
