import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/calculus-guy'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a target='_blank' rel="noopener noreferrer" href='www.linkedin.com/in/abdul-lateef-sakariyau-5a799b324'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/'>
          <BsTwitter />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
