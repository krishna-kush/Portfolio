import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

import images from '../../constants/images';

const About = () => {

  const abouts = [
    {
      title: "Website Developments",
      description: "I do Website Developments from Scratch, Renew, Update, Customize, etc... On Both Frontend and Backend.",
      img: images.about02,
    },
    {
      title: "Automation",
      description: "Automation of Routine Stuff and Advanced Programming on Python, JavaScript and C++.",
      img: images.automation,
    },
    {
      title: "DevOps",
      description: "From Website Deployment/Hosting, Server Management to Domain Management. I do it all.",
      img: images.about04,
    },
  ]

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.img} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
