import React, { useEffect, useRef } from "react";
// import styled from 'styled-components';
// import Footer from './Footer'
import "./LandingPage.css";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";


let welcomeShown = false;

const LandingPage = ({ onStartChat }) => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const amazonRef = useRef(null);
  const ajioRef = useRef(null);
  const myntraRef = useRef(null);
  const canvasRef = useRef(null);

  const { scrollY } = useScroll();

  // Define the scroll range and transform values
  // const scale = useTransform(scrollY, [400, 1400], [1, 0.55]);
  const scale = useTransform(scrollY, [400, 1800], [1, 0.55]);
  const borderRadius = useTransform(scrollY, [400, 1800], [0, 22]);
  const opacity = useTransform(scrollY, [400, 401], [0, 1]);
  const y = useTransform(scrollY, [400, 1800], ["0%", "7%"]);

  const scaleText = useTransform(scrollY, [400, 1800], [0.5, 1]);
  const opacityText = useTransform(scrollY, [400, 1800], [0, 1]);

  const yText1 = useTransform(scrollY, [400, 1800], [0, 1]);
  const yText2 = useTransform(scrollY, [2800, 3800], [0, 100]);

  const yText = useTransform(scrollY, (value) => {
    if (value >= 400 && value <= 1400) {
      return yText1.get();
    } else if (value >= 2400) {
      return yText2.get();
    } else {
      return 0;
    }
  });

  // const xLD = useTransform(scrollY, [2400, 3400], ["100%","0%" ])
  // const xRD = useTransform(scrollY, [2400, 3400], ["100%","0%" ])
  // const opacityLD = useTransform(scrollY, [2400, 3400], [0,1 ])
  // const opacityRD = useTransform(scrollY, [2400, 3400], [0,1 ])

  const controls = useAnimation();

  // Initial and final values for the background gradient
  const initialBackground =
    "radial-gradient(125% 125% at 50% 0%, #020617 100%, rgb(22 21 125))";
  const finalBackground =
    "radial-gradient(125% 125% at 50% 5%, #020617 50%, rgb(22 21 125))";

  useEffect(() => {
    controls.start({
      backgroundImage: finalBackground,
      transition: { delay: 1.4, duration: 0.6 },
    });
  }, [controls]);

  useEffect(() => {
    if (!welcomeShown) {
      const heading = headingRef.current;
      const paragraph = paraRef.current;
      const amazon = amazonRef.current;
      const ajio = ajioRef.current;
      const myntra = myntraRef.current;
      const canvas = canvasRef.current;

      heading.style.display = "none";
      amazon.style.display = "none";
      ajio.style.display = "none";
      myntra.style.display = "none";

      setTimeout(() => {
        canvas.classList.add("visible");
      }, 1400);

      setTimeout(() => {
        heading.style.display = "flex";
        amazon.style.display = "flex";
        ajio.style.display = "flex";
        myntra.style.display = "flex";

        const textElement = document.getElementById("animatedText");
        const words = textElement.textContent.split(" ");
        textElement.innerHTML = "";

        words.forEach((word, index) => {
          const span = document.createElement("span");
          span.textContent = " " + word + " ";
          span.className = "word";
          textElement.appendChild(span);

          setTimeout(() => {
            span.classList.add("visible");
          }, 120 * index); // Adjust the delay as needed
        });

        setTimeout(() => {
          paragraph.classList.add("visible");
        }, 1300);

        setTimeout(() => {
          amazon.classList.add("visible");
          ajio.classList.add("visible");
          myntra.classList.add("visible");
        }, 1800);

        welcomeShown = true;
      }, 2400);
    }
  }, []);

  // <Container>
  //   <Heading ref={headingRef}>
  //     <div className="text-container">
  //       <p id="animatedText">Your Personal Shopping Assistant</p>
  //     </div>
  //   <div className='paragraph' ref={paraRef}>The easiest way to find the best deals across all your favorite online stores. Find the perfect product at the perfect price.</div>
  //   <div className='images'>
  //     <span id='ajio' ref={ajioRef}>
  //     <img  srcSet='./ajio2.png' alt='Ajio'></img>
  //     </span>
  //     <span id='amazon' ref={amazonRef}>
  //     <img  srcSet='./amazon3.png' alt='Amazon'></img>
  //     </span>
  //     <span id='myntra' ref={myntraRef}>
  //     <img  srcSet='./myntra.png' alt='Myntra'></img>
  //     </span>
  //   </div>
  //   </Heading>
  // </Container>
  // <Container2>

  // <Footer />
  // </Container2>

  return (
    <div className="scroller">
      <div ref={canvasRef} className="sitare">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <motion.div
        className="background-container"
        animate={controls}
        initial={{ backgroundImage: initialBackground }}
      ></motion.div>
      <div className="container landing-page">
        <motion.div className="heading-div" ref={headingRef}>
          
          <div className="text-container">
            <p id="animatedText">Your Personal Shopping Assistant</p>
          </div>
          <div className="paragraph" ref={paraRef}>
            The easiest way to find the best deals across all your favorite
            online stores. Find the perfect product at the perfect price.
          </div>
          <div className="images">
            <span id="ajio" ref={ajioRef}>
              <img srcSet="./ajio2.png" alt="Ajio"></img>
            </span>
            <span id="amazon" ref={amazonRef}>
              <img srcSet="./amazon3.png" alt="Amazon"></img>
            </span>
            <span id="myntra" ref={myntraRef}>
              <img srcSet="./myntra.png" alt="Myntra"></img>
            </span>
          </div>
        </motion.div>
        <motion.div className="video-container" style={{ opacity }}>
          <motion.div
            className="video-text"
            style={{ opacity: opacityText, scale: scaleText, y: yText }}
          >
            Combined Search Box For All.
          </motion.div>
          <motion.video
            src="./videoplayback.mp4"
            autoPlay
            loop
            muted
            className="video"
            style={{ scale, opacity, borderRadius, y }}
          />
          <Link className="start-chat-btn" to="/chat">
            Start chat
          </Link>
        </motion.div>
        {/* <motion.div style={{y:xLD}} className='left-div'></motion.div> */}
        {/* <motion.div style={{x:xRD}} className='right-div'></motion.div> */}
      </div>
    </div>
  );
};

export default LandingPage;
