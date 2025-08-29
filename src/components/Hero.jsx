import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { styles } from "../styles";

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x565656, // tertiary color from theme
        backgroundColor: 0x0a0a0a, // primary color from theme
        points: 12.0,
        maxDistance: 20.0,
        spacing: 18.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      id="vanta-bg"
      className="relative w-full min-h-screen mx-auto overflow-hidden flex items-center"
    >
      <div className={`${styles.paddingX} relative z-10 max-w-7xl mx-auto w-full`}>
        <div className="flex flex-col items-center justify-center text-center">
        

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${styles.heroHeadText} text-secondary mt-20 `}
          >
            Hi, I&apos;m <span className="text-tertiary">Aditya</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${styles.sectionHeadText} text-white mb-6`}
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-secondary text-lg max-w-2xl leading-relaxed mb-8"
          >
            A passionate freelance developer specializing in creating digital
            solutions that transform ideas into reality. I craft responsive web
            applications and interactive experiences with modern technologies,
            focusing on clean code, user experience, and scalable architecture.
          </motion.p>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl"
          >
            <div className="bg-black-100/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-tertiary font-semibold mb-2">Frontend</h3>
              <p className="text-white-100 text-sm">
                Modern web development with responsive design
              </p>
            </div>
            <div className="bg-black-100/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-tertiary font-semibold mb-2">Backend</h3>
              <p className="text-white-100 text-sm">
                Server-side development and database management
              </p>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="bg-tertiary text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-95 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-tertiary text-tertiary px-6 py-3 rounded-lg hover:bg-tertiary/10 transition-colors"
            >
              Get In Touch
            </a>
            
          </motion.div>

          
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hidden  absolute bottom-0  w-full md:flex justify-center items-center z-10">
        <a href="#work">
          <div className="w-[2rem] h-[3rem] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2 bg-black-100 bg-opacity-60 backdrop-blur-md">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-tertiary mb-1 shadow-lg"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;