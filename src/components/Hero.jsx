import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import { hero ,hero2} from "../assets";


const Hero = () => {
  // const isMobile = useMediaQuery({ maxWidth: 425 });
  return (
    <section className="relative w-full h-[100vh] mx-auto overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-primary opacity-80"></div>
  <div className={`${styles.paddingX}  z-10 absolute inset-0 top-[5.5rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Glowing animated accent */}
          <motion.div
            initial={{ boxShadow: "0 0 0px #565656" }}
            animate={{ boxShadow: [
              "0 0 20px 5px #565656",
              "0 0 40px 10px #232323",
              "0 0 20px 5px #565656"
            ] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            className="w-5 h-5 rounded-full bg-tertiary"
          />
          <div className="w-1 sm:h-80 h-40 bg-black-200"/>
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`sm: ${styles.heroHeadText} text-secondary`}
          >
            Hi, I&apos;m <span className='text-tertiary'>Aditya</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I&apos;m a <span className='text-tertiary'>Full stack Developer</span> <br/>
            {/* <span className='text-tertiary'>UI/UX Designer</span> and 
            <br className='sm:hidden block'/>
            <span className='text-tertiary'>Graphic Designer </span> */}
          </motion.p>
        </div>
      </div>
      
  
      {/* 3d laptop setup */}
      {/* {!isMobile ? (
        <ComputersCanvas />
      ) : (
        <div className="sketchfab-embed-wrapper absolute top-[50%]  flex flex-row justify-center items-center   ">
        <img src={hero2} />
          </div>
      )} */}


      <div className='absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center z-10'>
        <a href="#about" >
          <div className='w-[2rem] h-[4rem] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2 bg-black-100 bg-opacity-60 backdrop-blur-md'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-tertiary mb-1 shadow-lg'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero