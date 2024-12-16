import React, { useState } from 'react';
import './footer.scss';
import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import emailjs from 'emailjs-com';
import { BsFillChatDotsFill, BsFillTelephoneFill } from 'react-icons/bs'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_jloffq5';
    const templateID = 'template_zu0rw14';
    const userID = '6vb12mMzM0Q85As7G';

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          {/* <BsFillChatDotsFill  className='img'/> */}
          <a href='mailto:sakariyauabdullateef993@gmail.com' className='p-text'>sakariyauabdullateef993@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          {/* <BsFillTelephoneFill  className='img'/> */}
          <a href='tel:+2349117383809' className='p-text'>+234 911-7383-809</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className='p-text'
              type='text'
              name='name'
              placeholder='Your Name'
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className='p-text'
              type='email'
              name='email'
              placeholder='Your Email'
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
              required
            />
          </div>
          <button
            type='submit'
            className='p-text'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank You for getting in Touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
