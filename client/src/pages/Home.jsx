import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PopularBooks from '../components/PopularBooks'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
      <Hero />
      <Features />
      <PopularBooks />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home