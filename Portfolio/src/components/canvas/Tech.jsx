import React from 'react'
import BallCanvas from './Ball';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import {motion} from 'framer-motion';
import {  textVariant } from '../../utils/motion';
import {styles} from '../../styles';

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
     Tech
    </p>
    <h2 className={styles.sectionHeadText}>
     Technologies I worked on !
    </h2>
  </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology)=>(
         <div className='w-28 h-28 key={technology.name} flex justify-center text-center'>
          {/* <BallCanvas icon={technology.icon}/> */}
          <div className=' m-4 hover:scale-110'>
          <img src={technology.icon} alt={technology.name}/>
          </div>
          </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech");