import { BrowserRouter } from "react-router-dom"
import { About, Contact,StarCanvas, Experience, Feedback, Hero, Loader, Navbar, Tech, Work} from './components/canvas/compindex'
const App=()=> {
 

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Work/>
      <div className="relative z-0">
        <Contact/>
        <StarCanvas/>
      </div>
    </div>
      </BrowserRouter>
  )
}

export default App
