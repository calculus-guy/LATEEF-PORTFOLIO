import React, {useState, useEffect} from 'react'
import './about.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

const About = () => {
  const abouts = [
      {title: 'Calculus-Guy',
      description: "I believe in learning anything anytime, embracing growth, and living by the motto: 'Today is the second-best time to start, with yesterday being the best.",
      imgURL: images.lateef_image_2},
      {title: 'Frontend Developer',
      description: 'I deliver pixel-perfect designs that offer seamless and effortless user experiences on all devices.',
      imgURL: images.react},
      {title: 'Backend Developer',
      description: 'I specialize in building secure, scalable, and reliable server-side systems with performance in mind.',
      imgURL: images.node},
      {title: 'Web Designer',
      description: 'I craft visually engaging and user-friendly websites that make your brand unforgettable.',
      imgURL: images.figma},
  ]
  return (
    <>
    <h2 className='head-text'>
      I know that <span>Good Design <br /></span> means <span>Good Business</span>
    </h2>
    <div className="app__profiles">
      {
        abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type:'tween'}}
          className='app__profile-item'
          key={about.title + index}
          >
            <img src={about.imgURL}/>
            <h2 className='bold-text' style={{marginTop: 20}}>
              {about.title}
            </h2>
            <p className='p-text' style={{marginTop: 10}}>
              {about.description}
            </p>
          </motion.div>
        ))
      }
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
)