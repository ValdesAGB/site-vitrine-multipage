import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact/index'
import Activities from '../pages/Activities'
import Footer from './Footer'

function App() {
  const GloblaStyle = createGlobalStyle`
  *{
    font-family : "montserrat";
  }
  `
  return (
    <React.Fragment>
      <GloblaStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nos-activités" element={<Activities />} />
      </Routes>
      <div className="row">
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App
