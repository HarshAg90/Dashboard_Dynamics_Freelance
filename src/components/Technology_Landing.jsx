import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import { isMobile } from "react-device-detect";

export default function TechnologyLanding() { 

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  //LANDING PG ANIMATION
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, isMobile ? 1:  0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, isMobile ? 1:  0.9]);
  
  const customEasing = (t) => {
    return Math.min(1, Math.max(0, t - 0.5));
  };

  return (
    <div  id='TechLanding'>
      <motion.div ref={targetRef} className='basicLand landing'  style={{opacity, scale}}>
      <div className="fg_img"/>
      <video src="../assets/Technology/dddd2.mov" autoPlay muted></video>
    </motion.div>

    </div>
    )}
