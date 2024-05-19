import { useState } from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero_section/Hero'
import WhyChoose from './components/why_us/WhyChoose'
import Services from './components/services/Services'
import Package from './components/packages/Package'
import HContact from './components/home_contact/HContact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Nav/>
      </header>
      <Hero/>
      <WhyChoose/>
      {/* <Services/> */}
      <Package/>
      <HContact/>
      {/* NOTES/ASK PEOPLE 
      - NAV LINK FONT WEIGHT 400 vs 600?
      */}
    </>

  )
}

export default App
