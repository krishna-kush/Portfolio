import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import images from '../../constants/images';

import './Testimonial.scss';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Tajmohammad Tajzai",
      company: "Ceo & Founder of TMT Securities",
      feedback: "Krishna is great to work with. He was working on my website from scratch. He understands what the need of the client is and delivers excellent work in good time. Highly recommended.",
      img: images.man,
    },
    {
      name: "Rahul Singh",
      company: "CEO & Founder of Code Buddy Sync",
      feedback: "Krishna is a Indeed a Absolute Jem. He understand Clients Needs and Delivers even Better Products and Services. He is Beyond Expectation.",
      img: images.man,
    },
    {
      name: "Ismail T.",
      company: "CEO & Founder of SR9 LTD",
      feedback: "Excellent website from Krishna. Very flexible with requests and reasonable rates.",
      img: images.man,
    },
  ]

  const brands = [
    {
      _id: "1",
      name: "Web Jadugar",
      img: images.wj,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.img} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
