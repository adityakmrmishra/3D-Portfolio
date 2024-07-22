import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { hero ,hero2} from "../assets";


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 425 });
  return (
    <section className="relative w-full h-[100vh] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[5.5rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`sm: ${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Aditya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className='text-[#915eFF]'>Full stack Developer</span> <br/> <span className='text-[#915eFF]'>UI/UX Designer</span> and <br className='sm:hidden block'/>  <span className='text-[#915eFF]'>Graphic Designer </span>
          </p>
        </div>
      </div>
      
  
      {/* 3d laptop setup */}
      {!isMobile ? (
        <ComputersCanvas />
      ) : (
        <div className="sketchfab-embed-wrapper absolute top-[50%]  flex flex-row justify-center items-center   ">
        <img src={hero2} />
          </div>
      )}


      <div className='absolute xs:bottom-5 bottom-32  w-full flex justify-center items-center'>
        <a href="#about" >
          <div className='w-[2rem] h-[4rem] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
          <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero