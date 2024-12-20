import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Accommodations_Home_Overview from '../components/Accommodations_Home_Overview'
import Gallery_Home_Overview from '../components/Gallery_Home_Overview'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Accommodations_Home_Overview />
      <Gallery_Home_Overview />
      
    </div>
  )
}

export default HomePage