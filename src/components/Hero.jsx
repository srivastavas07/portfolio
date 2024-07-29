import { motion } from 'framer-motion';
import React from 'react';
import { styles } from "../styles";
import ComputerCanvas from './canvas/Computers';
import useWindowSize from './customHooks/useWindowSize';
import Developer from "../assets/Developer.png"
//got to learn about default export and named export;
//default export can be import with any name 
// while normal export should be in {} braces with the exact name;

const Hero = () => {
  const {width} = useWindowSize();
  const name = 'KUNAL..'
  // const here = 'HERE..'
  return (
    <section className=' mx-auto relative h-[800px] w-full' id ="home">
      <div className={`${styles.paddingX} absolute max-w-7xl top-[95px] flex items-start gap-10 inset-0`}>
        <div className="flex flex-col items-center justify-center mt-5 ">
          {/* these are the lines beside the name */}
          <div className="rounded-full bg-main h-5 w-5" />
          <div className="bg-main-stroke w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div >
          <h1 className={`${styles.heroHeadText} tracking-wider`} ><span className='text-[#7a3cff] hey'>Hey! <span className={`${styles.heroSubText} text-white`}>I'm</span></span> <p className="glitch sm:inline-block uppercase">
            <span aria-hidden="true">{name}</span>
            {name}
            <span aria-hidden="true">{name}</span></p></h1>
          <p className={`${styles.heroSubText} mt-2 font-semibold text-white-100`}>I'm a Full-Stack Developer.<br/>developing good Looking Web Applications </p>
        </div>
      </div>

      {width>600 ? <ComputerCanvas/> : <img src={Developer} alt="hero" className='absolute left-[50%] top-[50%] h-[44%] developer-image' />}           

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;