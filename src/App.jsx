import { BrowserRouter } from "react-router-dom"

import { styles } from "./styles/styles"
import Navbar  from './components/Navbar'
import Hero from "./components/Hero"
import Countability from "./components/Countability"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
  <div>
    <BrowserRouter>
      <div className="relative z-0 bg-white-100">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center bg-black">
          <Navbar />
          <Hero />
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
