import React from 'react'
import './header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import AppWrap from '../../wrapper/AppWrap'

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
const Header = () => {
  return (
    <div className='app__header app__flex'>
        <motion.div
        whileInView={{x :[-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className='app__header-info'>
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{marginLeft: 20}}>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text'>Lateef</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
                <p className='p-text'>Frontend Web Developer</p>
                <p className='p-text'>Backend Web Developer</p>
                <p className='p-text'>Freelancer</p>
            </div>
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}} 
        className='app__header-img'>
          <img className='image' src={images.lateef_image_2} alt="profile_bg" />
        <motion.img
        whileInView={{scale: [0, 1]}}
        transition={{duration: 1, ease: 'easeInOut'}} 
        className='overlay_circle'
        src={images.circle} alt='profile_circle' />
        </motion.div>

        <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
        >
          {[images.node, images.react, images.sass].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');