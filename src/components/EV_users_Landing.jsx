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
    <div className="line">
        <svg width="1114" height="1" viewBox="0 0 1114 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1114" y1="0.5" y2="0.5" stroke="url(#paint0_linear_1_156)"/>
        <defs>
        <linearGradient id="paint0_linear_1_156" x1="16.4491" y1="-0.0055768" x2="1114" y2="0.00160008" gradientUnits="userSpaceOnUse">
        <stop stop-color="#837F7F" stop-opacity="0.22"/>
        <stop offset="0.534375"/>
        <stop offset="1" stop-color="#837F7F" stop-opacity="0.22"/>
        </linearGradient>
        </defs>
        </svg>
      </div>
    </motion.div>
    
  )
}
