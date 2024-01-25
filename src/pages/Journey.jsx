import React, { useRef } from 'react';
import JourneyLanding from '../components/JourneyLanding';
import {motion, useScroll, useTransform} from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const delayP = "0.1";

const aniVariant = {
  hiddenY: {
    opacity: 0.75, y: "15%"
  },
  visibleY: {
    opacity: 1, y: "0%",
  },
  hiddenL: {
    opacity: 0.75, x: "-10%"
  },
  visibleL: {
    opacity: 1, x: "0%",
  },
  hiddenR: {
    opacity: 0.75, x: "10%"
  },
  visibleR: {
    opacity: 1, x: "0%",
  }
}

export default function Journey(){
    const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"], 
  });

  const caroffSet = useTransform(scrollYProgress, [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.87, 0.98], ["0%", "12.3%", "25%", "38%", "50%", "62%", "75%", "87%", "100%"]);
  const stMicro_Opacity = useTransform(scrollYProgress, [0, 0.1, 0.125], ["0%", "25%", "100%"]);
  const fitt_Opacity = useTransform(scrollYProgress, [0.125, 0.2, 0.25], ["0%", "25%", "100%"]);
  const mg_Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.375], ["0%", "25%", "100%"]);
  const iim_Opacity = useTransform(scrollYProgress, [0.375, 0.45, 0.5], ["0%", "25%", "100%"]);
  const birla_Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.625], ["0%", "25%", "100%"]);
  const patent_Opacity = useTransform(scrollYProgress, [0.625, 0.7, 0.75], ["0%", "25%", "100%"]);
  const nex_Opacity = useTransform(scrollYProgress, [0.75, 0.85, 0.87], ["0%", "25%", "100%"]);




  return (
    
    <div id='Journey'>
    <JourneyLanding/>
    <div className="head">
          <h1 className='subHeading'>MILESTONES</h1>
          </div>
    <div ref={journeyRef} className="container">
    
  <svg xmlns="http://www.w3.org/2000/svg" width="1236" height="4004">
    <path
      d="M0 5H947C1041.17 15.3333 1229.5 86.3 1229.5 287.5C1229.5 550.5 1041.17 566 947 579.5L434.5 592C335.667 589.5 111 643 111 851C111 1094.2 252 1154 434.5 1154L947 1168C1041.17 1162.33 1219.77 1241.75 1229.5 1429C1241.5 1660 1041.17 1712.33 947 1718L434.5 1736.5C335.667 1738.67 80.9653 1764.9 103 2034.5C120 2242.5 296.167 2290 395 2286.5L947 2307.5C1041.17 2310.33 1229.5 2366.73 1229.5 2602.5C1229.5 2795.5 1041.17 2865.17 947 2859.5L395 2878.5C291 2878.5 87.5 2948 103 3164.5C118.5 3381 308.333 3429.67 395 3428.5L947 3447C1041.17 3453.33 1248.5 3498 1229.5 3765.5C1214.56 3975.77 1061 3982.5 947 3999H103"
      fill="transparent"
      strokeWidth="12"
      stroke="rgba(168, 168, 168, 1)"
      strokeLinecap="round"
    />
  </svg>
  <motion.img src="../assets/Journey/car.png" className='box'
  style={{offsetDistance: caroffSet}} />
  
  <div className="milestonesRow">
    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/stBg.png" style={{opacity: stMicro_Opacity}} />
      
      
    <motion.img className='fg' src="../assets/Journey/Partners/STMicro.png" alt=""
    variants={aniVariant}
    initial="hiddenL"
    whileInView="visibleL"
    viewport={{ once: true }}
    transition= {{
      delay: delayP,
        type: "spring",
        stiffness: 50,
      }}/>
    <motion.h1 className='fg'
     variants={aniVariant}
     initial="hiddenY"
     whileInView="visibleY"
     viewport={{ once: true }}
     transition= {{
      delay: delayP,
         type: "spring",
         stiffness: 50,
       }}>Incubated in <br/>
STMicroelectronics <br/>
Private Limited</motion.h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/fittBg.png" style={{opacity: fitt_Opacity}} />
    <motion.img className='fg' src="../assets/Journey/Partners/Fitt.png" alt=""
     variants={aniVariant}
     initial="hiddenY"
     whileInView="visibleY"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}/>
    <motion.h1 className='fg'
     variants={aniVariant}
     initial="hiddenR"
     whileInView="visibleR"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}>Incubated with <br/>
FITT IIT-Delhi, <br/>
Faculty Mentor <br/>
Prof B.K. Panigrahi</motion.h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/mgBg.png" style={{opacity: mg_Opacity}} />
    <motion.img className='fg' src="../assets/Journey/Partners/mg.png" alt="" 
     variants={aniVariant}
     initial="hiddenL"
     whileInView="visibleL"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}/>
    <motion.h1 className='fg'
     variants={aniVariant}
     initial="hiddenR"
     whileInView="visibleR"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}>Pilot with <br/>
MG Motors,<br/>
MGZS EV</motion.h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/iimBg.png" style={{opacity: iim_Opacity}} />
    <motion.img className='fg' src="../assets/Journey/Partners/iim.png" alt=""
     variants={aniVariant}
     initial="hiddenY"
     whileInView="visibleY"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}/>
    <motion.h1 className='fg'
     variants={aniVariant}
     initial="hiddenR"
     whileInView="visibleR"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}>Accelerating <br/>
with IIML-EIC, <br/>
IIM LUCKNOW </motion.h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/birlaBg.png" style={{opacity: birla_Opacity}} />
    <motion.img className='fg' src="../assets/Journey/Partners/birla.png" alt=""
     variants={aniVariant}
     initial="hiddenL"
     whileInView="visibleL"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }} />
    <motion.h1 className='fg'
     variants={aniVariant}
     initial="hiddenY"
     whileInView="visibleY"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}>MOU With Aditya<br/>
Birla Innovation<br/>
Group For dynamic<br/>
charging</motion.h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/patentBg.png" style={{opacity: patent_Opacity}} />
    <motion.img className='fg' src="../assets/Journey/Partners/patent.png" alt=""
     variants={aniVariant}
     initial="hiddenY"
     whileInView="visibleY"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}/>
    <motion.h1 className='fg'
     variants={aniVariant}
     initial="hiddenR"
     whileInView="visibleR"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}>Technology<br/>
patent filed,<br/>
Filing dtd.</motion.h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/nexusBg.png" style={{opacity: nex_Opacity}} />
    <motion.img className='fg' src="../assets/Journey/Partners/nexus.png" alt=""
     variants={aniVariant}
     initial="hiddenL"
     whileInView="visibleL"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}/>
    <motion.h1 className='fg'
     variants={aniVariant}
     initial="hiddenY"
     whileInView="visibleY"
     viewport={{ once: true }}
     transition= {{
         type: "spring",
         stiffness: 50,
       }}>Startup Nexus US <br/>
    Embassy<br/>
Incubated, Batch <br/> of Cohort 14</motion.h1>
    </div>
    
    
  </div>


</div>
</div>
  )
}
