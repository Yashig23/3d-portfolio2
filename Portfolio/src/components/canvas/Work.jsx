import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../../styles';
import {github} from "../../assets";
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';

const ProjectCard=({index, name, description, tags, image, source_code_link})=>{
  return (
    <>
    <motion.div variants={fadeIn('up', 'spring', index* 0.5, 0.75)}>
      <Tilt
      option={{
        max: 45,
        scale:1,
        speed: 450
      }}
      className=" rounded-2xl sm:w-[360px] w-full green-pink-gradient p-1"
      >
        <div className=' bg-tertiary rounded-2xl w-full'>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={()=> window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
               <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>

        <div className='w-full mt-5 '>
          <h3 className='flex justify-center items-center text-[20px] font-bold'>{name}</h3>
          <p className=' p-5 flex justify-center text-center text-secondary font-semibold text-[14px]'>{description}</p>
        </div>

        <div className='w-full flex flex-wrap justify-center gap-3 p-3'>
           {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
           ))}          
        </div>
        </div>
      </Tilt>
    </motion.div>
    </>
  )
}

const Work = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
     My work so far...
    </p>
    <h2 className={styles.sectionHeadText}>
     Projects
    </h2>
  </motion.div>

  <div className='w-full flex'>
    <motion.p variants={fadeIn('','',0.1,1)} className='mt-3 text-secondary text-[17px] max-w-3xl loading-[30px]'>
      Following projects showcases my skills and experience through real-world examples of my work, 
      Each project is briefly described with links to code repositories and live demos in it. It reflects
      my ability to solve complex problems, work with different technologies, and manage projects effectively. 
    </motion.p>
  </div>

  <div className='flex flex-wrap gap-7 mt-20'>
    {projects.map((project, index)=>(
      <ProjectCard key={`project-${index}`} index={index} {...project}/>
    ))}
  </div>

    </>
  )
}

export default SectionWrapper(Work, 'work')