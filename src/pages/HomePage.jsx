import React from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Accommodations_Home_Overview from '../components/home/Accommodations_Home_Overview'
import Gallery_Home_Overview from '../components/home/Gallery_Home_Overview'
import { ImagesSlider } from '../components/ui/images-slider'

const HomePage = () => {
  const images = [
    './homePage/hero/hero1O.webp',
    './homePage/hero/hero2O.webp',
    './homePage/hero/hero3O.webp',
    './homePage/hero/hero4O.webp'
  ]
  return (
    <div>
      <ImagesSlider 
      images={images} 
      children={""}
      autoplay={true}
      overlay={true}
      overlayClassName={'z-8'}
      >
        <Hero />        
      </ImagesSlider>
      <Features />
      <Accommodations_Home_Overview />
      <Gallery_Home_Overview />
      
    </div>
  )
}

export default HomePage