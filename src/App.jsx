import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "content-wrapper">
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
