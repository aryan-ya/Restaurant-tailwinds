import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Service from './Component/Service/Service'
import Banner from './Component/Banner/Banner'
import AppStore from './Component/AppStore/AppStore'
import Testimonial from './Component/TestiMonial/Testimonial'


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <AppStore/>
      <Testimonial />
      </div>
  )
}

export default App