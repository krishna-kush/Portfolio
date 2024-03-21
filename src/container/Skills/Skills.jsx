import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';

import images from '../../constants/images';

import './Skills.scss';

const Skills = () => {
  const skills = [
    {
      name: "React",
      img: images.react,
    },
    {
      name: "Redux",
      img: images.redux,
    },
    {
      name: "Node",
      img: images.node,
    },
    {
      name: "Express",
      img: images.expressjs,
    },
    {
      name: "Mongo DB",
      img: images.mongodb,
    },
    {
      name: "TypeScript",
      img: images.typescript,
    },
    {
      name: "C++",
      img: images.cpp,
    },
    {
      name: "Sass",
      img: images.sass,
    },
    {
      name: "Git",
      img: images.git,
    },
    {
      name: "MUI",
      img: images.mu5,
    },
    {
      name: "Linux",
      img: images.linux,
    },
    {
      name: "Docker",
      img: images.docker,
    },
  ]

  const experiences = [
    {
      year: "2024",
      works: [
        {
          name: "Cloud Architect",
          company: "Web Jadugar - Cloud",
          desc: "Working On Cloud Services of Web Jadugar",
        },
        {
          name: "Front End Engineer",
          company: "Code Buddy Sync",
          desc: "Fixed Speed Improvement and Added Multi Cursor Support to the Editor",
        },
      ],
    },
    {
      year: "2023",
      works: [
        {
          name: "Full Stack",
          company: "Solvo",
          desc: "Crafted the design and development of a web application that redefines the way people access expert knowledge and get compensated for their contributions. This project showcases my profound technical capabilities, ingenuity, and commitment to dynamic architecture. With implementation of: Dynamic Panel System: Every panel within the app is designed to be removed or replaced seamlessly, providing an agile and intuitive user experience.",
        },
      ],
    },
  ]

  // const [experiences, setExperiences] = useState([]);


  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.img} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
