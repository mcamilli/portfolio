import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/header'
import About from './Components/About/About'
import Publications from './Components/Publications/Publications'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Publications/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
