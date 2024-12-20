import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './utilities/ScrollToTop';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import ActivitiesAndAmmenities from './pages/ActivitiesAndAmmenities'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import BackToTopButton from './utilities/BackToTop';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/accommodation' element={<Accommodation />} />
        <Route path='/activities' element={<ActivitiesAndAmmenities />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <BackToTopButton />

      <Footer />
    </div>
  )
}

export default App