import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HoverBorderGradientDemo } from './HoverBorderGradientDemo';
// import HeroHighlightDemo from './HeroHighlightDemo'
import './TextWithButton.css';

const TextWithButton = () => {
  const { scrollY } = useScroll();
  const translateX = useTransform(scrollY, [1200, 2000], ["30vw", "7vw"]);
  const opacity = useTransform(scrollY, [1000, 2000], [0, 1]);

//   scrollY.onChange((latest) => {
//     console.log('scrollY:', latest);
//     console.log('translateX:', translateX.get());
//   });

  return (
    <motion.div style={{ translateX, opacity }} className="text-with-button">
      <span className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
      <h2>Let us find your</h2>
      <h2>Perfect Product.</h2>
      </span>
      <p>Chat and Try It Out!</p>
      
      {/* <HeroHighlightDemo/> */}
    <HoverBorderGradientDemo/>
    </motion.div>
  );
};

export default TextWithButton;
