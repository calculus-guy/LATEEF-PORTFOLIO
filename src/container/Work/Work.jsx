import React, { useState } from 'react';
import './work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import { images } from '../../constants';
import { MotionWrap } from '../../wrapper';

const Work = () => {
  const works = [
    {
      title: 'Social Networking Platform',
      description: 'I designed and developed a social website clone inspired by Facebook, featuring a unique design and functionality to distinguish it from its counterpart. This project demonstrates my ability to create engaging, user-focused interfaces and implement core social networking features using modern web development practices.',
      Project_Link: 'https://social-website-clone.vercel.app/',
      Code_Link: 'https://github.com/calculus-guy/Social-website',
      imgURL: images.social,
      Tag: 'Vanilla JS',
    },
    {
      title: 'E-Commerce Web Application',
      description: 'I designed and developed a responsive e-commerce platform using ReactJS and styled with Tailwind CSS, focusing on a seamless shopping experience. Key features include product browsing and secure checkout, all optimized for both desktop and mobile devices.',
      Project_Link: 'https://nike-website-blond-one.vercel.app/#about-us',
      Code_Link: 'https://github.com/calculus-guy/Nike-website',
      imgURL: images.nike,
      Tag: 'React JS',
    },
    {
      title: 'Client-Based Development',
      description: "I developed a renovations website for a client as a freelance project, building it entirely from scratch. Using foundational web technologies such as HTML, CSS, and vanilla JavaScript, and node JS for backend I delivered a clean and responsive user interface that effectively showcases the client's services.",
      Project_Link: 'https://ahmed-web-project.vercel.app/index.html',
      Code_Link: 'https://github.com/calculus-guy/ahmed_WEB_project',
      imgURL: images.lana,
      Tag: 'Client',
    },
    {
      title: 'Full-Stack Portfolio Website',
      description: 'I developed a responsive portfolio website using ReactJS for the front-end, Node.js for the back-end, and Sass for styling. The project features a dynamic user interface, smooth navigation, and optimized performance across devices. It showcases my ability to integrate front-end and back-end technologies while maintaining a strong focus on user experience.',
      Project_Link: 'https://ahmed-web-project.vercel.app/index.html',
      Code_Link: 'https://github.com/calculus-guy/LATEEF-PORTFOLIO',
      imgURL: images.portfolio,
      Tag: 'Full-Stack',
    },
    {
      title: 'Full-Stack Shopping Website',
      description: 'I am developing a dynamic shopping website using React.js for the frontend, Node.js for the backend, MongoDB for database management, and Stripe for secure payments. While the laptop view is complete, I am currently enhancing its responsiveness, ensuring a seamless and user-friendly experience across all devices.',
      Project_Link: '',
      Code_Link: '',
      imgURL: images.shopper,
      Tag: 'Full-Stack',
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [filterWork, setFilterWork] = useState(works);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.Tag === item));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {['Vanilla JS', 'React JS', 'Full-Stack', 'Client', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgURL} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.Project_Link} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.Code_Link} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.Tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
)