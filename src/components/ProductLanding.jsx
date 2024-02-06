import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Landing from './Landing'

export default function ProductLanding(){

    const landingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: landingRef,
    offset: ["end end", "end start"],
  });

  //LANDING PG ANIMATION
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, 0.9]);

  return (
    <motion.div ref={landingRef} style={{opacity, scale}}>
    <Landing> 
      </Landing>
      </motion.div>
  )
}
