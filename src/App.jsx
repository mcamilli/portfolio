import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/header'
import About from './Components/About/About'
import Publications from './Components/Publications/Publications'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Publications/>
      <Contact/>
    </div>
  )
}

export default App
