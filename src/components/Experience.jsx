import React from 'react';
import  {SectionWrapper} from '../hoc/index';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
//error encountered here was forgot to import the css file for the verticalTimeline library.
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants/constants';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience}) => {
  return(
    <VerticalTimelineElement
    contentStyle={{background:"#1d1836", color:"#fff"}}
    contentArrowStyle={{borderRight:"7px solid #68d4ff"}}
    date = {experience.date}
    iconStyle={{background: experience.iconBg,}}
    // 
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name}
        className='w-[60%] h-[60%] object-contain' />
      </div>
    }
    >
      <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {/* list-disc is used to display the bullet points in the list. space-y-2 is used to add some space between the bullet points. ml-5 is used to add some margin to the left of the bullet points. The key is used to uniquely identify the elements in the list. The index is used to keep */}
            {experience.points.map((point,index) => (
              <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
            ))}
          </ul>
      </div>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Timeline</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience = {experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");