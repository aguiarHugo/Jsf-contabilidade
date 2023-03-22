import { BrowserRouter } from "react-router-dom"
import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react"

import Navbar  from './components/Navbar'
import Hero from "./components/Hero"
import Countability from "./components/Countability"
import About from "./components/About"
import Contact from "./components/Contact"
import DotGroup from "./components/DotGroup"

function App() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [selectedPage, setSelectedPage] = useState('home')

  return (
  <div>
    <BrowserRouter>
      <div id="home" className="relative z-0 bg-white-100">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center bg-black">
          <Navbar 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          
          <Hero />
          {isAboveMediumScreens && (
            <DotGroup 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}

        </div>
        <div>
        </div>
        <div id="countability" className="h-6 md:h-0.5"/>
        <Countability />

        <div id="about" className="h-6 md:h-0.5"/>
        <About />

        <div id="contact" className="h-6 md:h-0.5"/>
        <Contact />
        </div>
    </BrowserRouter>
  </div>
  )
}

export default App
