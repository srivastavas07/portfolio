/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from "../constants/constants.js";
import { fadeIn,textVariant } from '../utils/motion';
//motion properties are already defined.
import { SectionWrapper } from '../hoc/index';
import { Tilt } from 'react-tilt';

const ServicesCard = ({ title, index, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      
        className='w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
          className='bg-tertiary rounded-[10px] py-5 px-12 min-h-[280px] flex items-center justify-evenly flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <motion.div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h1 className={`${styles.sectionHeadText}`}>Overview.</h1>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}

        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Passionate about problem-solving and creating innovative solutions, I am a dedicated Full Stack Developer with a strong focus on AI/ML.
        I thrive on challenging projects that push the boundaries of technology and allow me to explore new realms. With a deep understanding of
        both front-end and back-end development, I am equipped to deliver exceptional user experiences.

      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </motion.div>
  )
}


export default SectionWrapper(About, "about");