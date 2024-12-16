import './skills.scss'
import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import { images } from '../../constants';
import { MotionWrap } from '../../wrapper';
// import ReactTooltip from 'react-tooltip';


const Skills = () => {
  const skills = [
      {name: 'Html',
      imgURL: images.html},
      {name: 'Css',
      imgURL: images.css},
      {name: 'Javascript',
      imgURL: images.javascript},
      {name: 'Sass',
      imgURL: images.sass},
      {name: 'React Js',
      imgURL: images.react},
      {name: 'Node Js',
      imgURL: images.node},
      {name: 'Git',
      imgURL: images.git},
      {name: 'Figma',
      imgURL: images.figma},
      {name: 'Tailwind Css',
      imgURL: images.tailwind},
      {name: 'Framer Motion',
      imgURL: images.framer},
  ]
  const Experiences = [
      {name: 'Frontend Developer',
      company: 'Lana Renovations',
      year: 2024,
      },
  ]
  return (
    <>
    <h2 className='head-text'>Skills & <span>Experience</span></h2>
    <div className="app__skills-container">
      <motion.div className='app__skills-list'>
        {
          skills.map((skill) => (
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5}}
            className='app__skills-item app__flex'
            key={skill.name}
            >
              <div className="app__flex">
                <img src={skill.imgURL} alt="" />
              </div>
            <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))
        }
      </motion.div>
      <motion.div className='app__skills-exp'>
        {
          Experiences.map((experience) => (
            <>
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5}}
            className='app__skills-exp-work app__flex'
            key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
              <h4 className='bold-text'>{experience.name}</h4>
              <p className='p-text'>{experience.company}</p>
              </motion.div>
            </motion.div>
            </>
          ))
        }
      </motion.div>
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)
