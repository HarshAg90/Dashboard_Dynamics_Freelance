import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Landing from '../components/Landing';

export default function EV_users_Landing() {

    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  //LANDING PG ANIMATION
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, 0.9]);


  return (
    <motion.div ref={targetRef} style={{opacity, scale}}>
        <Landing>
            <h1>POWERING THE ELECTRIC REVOLUTION,<br/> ACCELERATING YOUR <br/> JOURNEY</h1>
    </Landing>
    </motion.div>
    
  )
}
