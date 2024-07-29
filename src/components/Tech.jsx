import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc/index';
import { technologies } from '../constants/constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import useWindowSize from './customHooks/useWindowSize';



const Tech = () => {
  const { width } = useWindowSize();
  return (
    <>
      <motion.p variants={textVariant()} className={`${styles.sectionSubText} mb-10 text-white`}>Skills</motion.p>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>

            {width > 600 ?
              <BallCanvas icon={technology.icon} />
              :
              <div className='relative w-28 h-28 flex z-[4] items-center justify-center bg-transparent rounded-full border-[3px] border-[#bb7cffb4] techShadow'>
                <div className='absolute top-[50%] left-[50%] w-[50%] h-[50%] rounded-full bg-purple-400 z-[-1] -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute top-[50%] left-[50%] w-[100%] h-[100%] rounded-full backdrop-blur-xl z-[-1] -translate-x-1/2 -translate-y-1/2'></div>
                <img src={technology.icon} alt={technology.name} className='w-1/2 h-1/2 object-contain' />
              </div>}
              
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills");