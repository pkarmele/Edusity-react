import React, { useCallback, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/programs'
import Title from './Components/Title/title'
import About from './Components/About/about'
import Campus from './Components/Campus/campus'
import Testimonials from './Components/Testimonials/testimonials'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What we Offer'/>
        <Programs/>playState
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='CONTACT US' title='Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
