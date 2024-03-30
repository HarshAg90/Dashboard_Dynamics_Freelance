import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import { isMobile } from "react-device-detect";

export default function Charge_landing() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
 

  //LANDING PG ANIMATION
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, isMobile ? 1:  0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, isMobile ? 1:  0.9]);

  return (
    <motion.div ref={targetRef} id='Charge_landing' style={{opacity, scale}}>
      <div className="overlay"></div>
        <h1>ELEVATING EV CHARGING NETWORKS WITH OPERATOR-CENTRIC SOLUTIONS</h1>
    </motion.div>
  )
}
