import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import { isMobile } from "react-device-detect";

export default function JourneyLanding() {

    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  //LANDING PG ANIMATION
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, isMobile ? 1:  0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, isMobile ? 1:  0.9]);


  return (
    <motion.div ref={targetRef} className='basicLand landing' style={{opacity, scale}}>
        <h1>EACH MILESTONE ACHIEVED IS A TESTAMENT TO OUR <br/> DEDICATION AND RESILIENCE. HERE'S TO CELEBRATING 
        <br/> OUR JOURNEY, EMBRACING CHALLENGES, AND <br/>REACHING NEW HEIGHTS TOGETHER AS A COMPANY.</h1>
    </motion.div>
    
  )
}
