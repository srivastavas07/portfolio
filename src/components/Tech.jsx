import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc/index';
import { technologies } from '../constants/constants';
import{motion} from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';



const Tech = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={`${styles.sectionSubText} mb-10 text-white`}>Skills</motion.p>
  
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills");