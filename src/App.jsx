import { BrowserRouter } from "react-router-dom"

import { styles } from "./styles/styles"
import Navbar  from './components/Navbar'

function App() {
  return (
  <div>
    <BrowserRouter>
      <div className="relative z-0 bg-black-200">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        
        </div>
    </BrowserRouter>
  </div>
  )
}

export default App
