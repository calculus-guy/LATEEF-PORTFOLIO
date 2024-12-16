import React, { useState, useEffect } from 'react';
import './testimonial.scss';
import { motion } from 'framer-motion';
import MotionWrap from '../../wrapper/MotionWrap';
import AppWrap from '../../wrapper/AppWrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { images } from '../../constants'

const qualifications = [
  {
    certification: "B.Sc Computer Engineering",
    institution: "University of Lagos",
    country: "Nigeria",
    duration: "2022 - 2027",
  },
  {
    certification: "West African Senior School Leaving Certificate",
    institution: "CDSS IKEJA",
    country: "Nigeria",
    duration: "2016 - 2022",
  },
  {
    certification: "Certified Professional in Information Systems Management.",
    institution: "Aptech Education Nigeria",
    country: "Nigeria",
    duration: "2024 - 2024",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % qualifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % qualifications.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + qualifications.length) % qualifications.length
    );
  };

  return (
    <>
      <div className="qualification-carousel">
        <h1>Qualification</h1>
        <hr />
        <br />
        <motion.div
          className="qualification-content"
          key={currentIndex}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className='cert'><strong>Certification:</strong> {qualifications[currentIndex].certification}</p>
          <p><strong>Institution:</strong>    {qualifications[currentIndex].institution}</p>
          <p><strong>Country:</strong>        {qualifications[currentIndex].country}</p>
          <p><strong>Duration:</strong>       {qualifications[currentIndex].duration}</p>
        </motion.div>
        <div className="carousel-controls">
          <BsChevronLeft size={25} className="prev-button" onClick={handlePrev} />
          <BsChevronRight size={25} className="next-button" onClick={handleNext} />
        </div>
        <div className="resume-button">
          <a href={images.resume} download="LATEEF_RESUME.pdf">
            Resume 📄
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'qualifications',
  'app__testimonialbg'
);
