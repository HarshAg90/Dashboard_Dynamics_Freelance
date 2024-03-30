import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import { isMobile } from "react-device-detect";

export default function BoardLanding() {

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
        <h1>JOIN US AS A STRATEGIC PARTNER AND INVESTOR IN <br/> SHAPING THE FUTURE OF OUR INNOVATIVE ENDEAVORS </h1>
    </motion.div>
    
  )
}
