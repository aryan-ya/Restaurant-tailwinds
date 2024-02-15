import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Service from './Component/Service/Service'
import Banner from './Component/Banner/Banner'
import AppStore from './Component/AppStore/AppStore'
import Testimonial from './Component/TestiMonial/Testimonial'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Component/Footer/Footer'


const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <AppStore/>
      <Testimonial />
      <Footer />
      </div>
  )
}

export default App