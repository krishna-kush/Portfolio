import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import images from '../../constants/images';

import './Work.scss';

const Work = () => {
  const works = [
    {
      title: "Web Jadugar",
      description: "Hosting Provider",
      img: images.wj,
      projectLink: "https://cloud.webjadugar.tech",
      codeLink: "#",
      tags: ['Web'],
    },
    {
      title: "Solvo",
      description: "A Question Answer Platform, Using MERN(MongoDb, Express, React, Node.js)",
      img: images.solvo,
      projectLink: "https://solvo.krishnakush.tech/",
      codeLink: "https://github.com/krishna-kush/Solvo",
      tags: ['Web'],
    },
    {
      title: "Code Buddy Sync",
      description: "A Code Editor, To code with friends in Real Time, Using MERN(MongoDb, Express, React, Node.js)",
      img: images.cbs,
      projectLink: "https://cbs.devrahulsingh.tech",
      codeLink: "#",
      tags: ['Web'],
    },
    {
      title: "Web Terminal",
      description: "A Terminal in Web, to connect with a server",
      img: images.webt,
      projectLink: "https://webt.krishnakush.tech",
      codeLink: "https://github.com/krishna-kush/WebT",
      tags: ['Web'],
    },
    {
      title: "School Management System",
      description: "A Management System for School, Using Python and MySQL",
      img: images.sms,
      projectLink: "#",
      codeLink: "https://github.com/krishna-kush/School-Management-System-SMS",
      tags: ['App'],
    },
    {
      title: "Convey's Game Of Life",
      description: "Convey's Game Of Life Built in Python",
      img: images.convey,
      projectLink: "#",
      codeLink: "https://github.com/krishna-kush/p5.js/blob/main/Convey's%20The%20Game%20Of%20Life%20(with%20p5.js)/sketch.js",
      tags: ['Game'],
    },
    {
      title: "Snake Game",
      description: "A Simple Snake Game Built in Python",
      img: images.snake,
      projectLink: "#",
      codeLink: "https://github.com/krishna-kush/School-Management-System-SMS",
      tags: ['Game'],
    },
    
  ]
  
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['Web', 'Extention', 'Game', 'App', 'All'].map((item, index) => (
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
            <div
              className="app__work-img app__flex"
            >
              <img src={work.img} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
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
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
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
  'app__primarybg',
);
