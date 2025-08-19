
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import ParticlesBg from "./components/background/particleBg";

const App = ()=> {
  const isMobile = useMediaQuery({ maxWidth: 425 });
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className=''>
          <Navbar />
          <Hero />
          
        </div>
        <About />
        <Experience />
        {!isMobile && <Tech />}
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
