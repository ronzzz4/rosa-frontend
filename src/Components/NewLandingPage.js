import React, {useEffect, useRef, useState} from 'react'
import { motion, useScroll, useTransform , useAnimation} from 'framer-motion';
// import { Link } from 'react-router-dom';
import './NewLandingPage.css'
import { Link } from 'react-router-dom';
// import { WavyBackground } from './wavy-background';
// import { SpotLight, Stars } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
import { Spotlight } from './spotlight';
import { SpotlightPreview } from './SpotlightPreview';
import TextWithButton from './TextWithButton'; 
// import { Spotlight } from "./Spotlight";

const NewLandingPage = () => {


    const { scrollY } = useScroll();

    // const rotate2 = useTransform(scrollYProgress, [0, 200], [200, 0]);
    // // const scale = useTransform(scrollYProgress, [0, 200], scaleDimensions());
    // const translate = useTransform(scrollYProgress, [0, 200], [1000, 0]);

    // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.25])
    // const borderRadius = useTransform(scrollY, [400, 1800], [0, 22]);
    // const y = useTransform(scrollY, [0, 200], ["2%",  "0%"]);
    const rotateX = useTransform(scrollY, [0, 500], [20, 0]);
    // const translateY2 = useTransform(scrollY, [0, 600], ["0vh", "-8vh"]);
    // const opacity = useTransform(scrollY, [400, 401], [0, 1]);
   

    // const translateY = useTransform(scrollY, [0, 800], ["70vh", "9vh"]);
    // const rotateY = useTransform(scrollYProgress, [0, 0.5], [-20, 0]);

    const [yBreakpoints, setYBreakpoints] = useState(["70vh", "15vh"]);

  const translateY = useTransform(scrollY, [0,800], yBreakpoints);



    // const translateX1 = useTransform(scrollY, [0, 800], ["70vh", "10vh"]);
    const translateX = useTransform(scrollY, [1200, 2000], ["0vw", "30vw"]);

    // const translateX = useTransform(scrollY, (value) => {
    //     if (value <= 800) {
    //     return translateX1.get();
    //     } else {
    //     return translateX2.get();
    //     } 
    // });

    const scaleNew1 = useTransform(scrollY, [0, 600], [1.1, 1]);
    const scaleNew2 = useTransform(scrollY, [1200, 1800], [1, 1.1]);

    const scaleNew = useTransform(scrollY, (value) => {
        if (value <= 600) {
        return scaleNew1.get();
        } else {
        return scaleNew2.get();
        } 
    });


    // Combine the perspective and rotations into a single transform string
  const transform = useTransform(
    [rotateX, translateY, scaleNew, translateX],
    ([latestRotateX, latestTranslateY, latestScale, latestTranslateX]) =>
        `scale(${latestScale}) perspective(1000px) rotateX(${latestRotateX}deg) translateY(${latestTranslateY}) translateX(${latestTranslateX})`
  );


  const controls = useAnimation();
  const appear = useAnimation();

  // Initial and final values for the background gradient
  const initialBackground = "radial-gradient(125% 125% at 50% 0%, #020617 100%, rgb(22 21 125))";
  const finalBackground = "radial-gradient(125% 125% at 50% 5%, #020617 50%, rgb(22 21 125))";

  const ipadRef = useRef(null)
  const iphoneRef = useRef(null)
  const ipadVidRef = useRef(null)
  const scrollerRef = useRef(null)

  useEffect(()=>{
    const ipad = ipadRef.current
    const iphone = iphoneRef.current
    const ipadVid = ipadVidRef.current
    const scroller = scrollerRef.current

    // Scroll to top on refresh
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set scroll position


    setTimeout(()=>{
      ipad.classList.add('show')
      iphone.classList.add('show')
      ipadVid.classList.add('show')
      window.removeEventListener('scroll', handleScroll);
    },1200)


    const mediaQuery = window.matchMedia("(max-width: 490px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        setYBreakpoints(["70vh", "25vh"]); // Trigger scroll earlier for max width 490px
      } else {
        setYBreakpoints(["70vh", "9vh"]); // Default breakpoints
      }
    };

    // Initial check
    handleMediaChange(mediaQuery);

    // Add listener
    mediaQuery.addEventListener('change', handleMediaChange);


    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  },[])


  return (
    <>
      <motion.div className='background-container'>
      </motion.div>
      <div ref={scrollerRef} style={{zIndex:'0',overflowX:'hidden',display: 'flex', alignItems: 'center', flexDirection:'column',height: '325vh', width:'100%', overflow:'hidden'}}>
        <div className='grid-check'></div>
        <SpotlightPreview></SpotlightPreview>
        <div className='landing-main' style={{ zIndex: '2', height:'100vh', position:'fixed', width: '100%', display:'flex', justifyContent:'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column'}}>             
        </div>
        <motion.img alt='' ref={ipadRef} className='ipad' style={{transform,position: 'fixed', width: '70%',zIndex:'7'}} src="./rectangle.png" />
        <motion.img alt='' ref={iphoneRef} className='iphone' style={{transform,position: 'fixed', width: '70%',zIndex:'7'}} src="./rectangle2.png" />
        <motion.div className='ipad' ref={ipadVidRef} style={{transform,borderRadius:'2%', zIndex:'8',position: 'fixed', width: '57.8%', height:'67.4%', marginTop:'6%', overflow:'hidden'}}>
          <video style={{transform:'scale(1.45)'}} autoPlay playsInline muted loop>
            <source src='./videoplayback.mp4' type='video/mp4'/>
          </video>
        </motion.div>
        <TextWithButton />
      </div>
    </>
  )
}

export default NewLandingPage;