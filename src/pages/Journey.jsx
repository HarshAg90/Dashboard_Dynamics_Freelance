import React, { useRef, useEffect, useState } from 'react';
import JourneyLanding from '../components/JourneyLanding';
import {motion, useScroll, useTransform, useAnimation} from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isMobile } from "react-device-detect";
import detectScroll from '@egstad/detect-scroll'

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




  const controls = useAnimation();
  // controls.start({ scale: isMobile? 0.35: 1 });


  function upfun() {
    controls.start({ rotate: -180});
    controls.start({ scale: isMobile? 0.35: 1 });
  }

  function downfun() {
    controls.start({ rotate: 0});
    controls.start({ scale: isMobile? 0.35: 1 });
  }

  useEffect(() => {
    controls.start({ scale: isMobile? 0.35: 1 });
    // Initialize instance and attach event listeners inside useEffect
    const instance = new detectScroll(window, {
      events: {
        scrollUp: upfun,
        scrollDown: downfun,
      },
    });
  })

 



  // const [scrollY, setScrollY] = useState(0);
  // const [prevScrollY, setPrevScrollY] = useState(0);
  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Detect the direction of scrolling
  //   if (scrollY > prevScrollY) {
  //     // Downward scroll
  //     controls.start({ rotate: 180 }); // For example, animate something when scrolling down
  //   } else {
  //     // Upward scroll
  //     controls.start({ rotate: 180 }); // For example, animate something when scrolling up
  //   }

  //   setPrevScrollY(scrollY);
  // }, [scrollY, prevScrollY, controls]);

  // const journeyRefMob = useRef(null);
  // const { scrollYProgressMob } = useScroll({
  //   target: journeyRefMob,
  //   offset: ["start end", "end start"], 
  // });

  const caroffSetMob = useTransform(scrollYProgress, [0.125, 0.15, 0.30, 0.45, 0.6, 0.75, 0.95], ["0%", "0%", "20%", "40%", "60%", "80%", "100%"]);
  


  const caroffSet = useTransform(scrollYProgress, [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.87, 0.98], ["0%", "12.3%", "25%", "38%", "50%", "62%", "75%", "87%", "100%"]);
  const stMicro_Opacity = useTransform(scrollYProgress, [0, 0.1, 0.125], ["0%", "25%", "100%"]);
  const fitt_Opacity = useTransform(scrollYProgress, [0.125, 0.2, 0.25], ["0%", "25%", "100%"]);
  const mg_Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.375], ["0%", "25%", "100%"]);
  const iim_Opacity = useTransform(scrollYProgress, [0.375, 0.45, 0.5], ["0%", "25%", "100%"]);
  const birla_Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.625], ["0%", "25%", "100%"]);
  const patent_Opacity = useTransform(scrollYProgress, [0.625, 0.7, 0.75], ["0%", "25%", "100%"]);
  const nex_Opacity = useTransform(scrollYProgress, [0.75, 0.85, 0.87], ["0%", "25%", "100%"]);



  if (!isMobile) {
    return (
      <div id='Journey'>
    <JourneyLanding/>
    <div className="head">
          <h1 className='subHeading'>MILESTONES</h1>
          </div>
    <div ref={journeyRef} className="container">
    
  <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="4004">
    <path
      d="M0 5H947C1041.17 15.3333 1229.5 86.3 1229.5 287.5C1229.5 550.5 1041.17 566 947 579.5L434.5 592C335.667 589.5 111 643 111 851C111 1094.2 252 1154 434.5 1154L947 1168C1041.17 1162.33 1219.77 1241.75 1229.5 1429C1241.5 1660 1041.17 1712.33 947 1718L434.5 1736.5C335.667 1738.67 80.9653 1764.9 103 2034.5C120 2242.5 296.167 2290 395 2286.5L947 2307.5C1041.17 2310.33 1229.5 2366.73 1229.5 2602.5C1229.5 2795.5 1041.17 2865.17 947 2859.5L395 2878.5C291 2878.5 87.5 2948 103 3164.5C118.5 3381 308.333 3429.67 395 3428.5L947 3447C1041.17 3453.33 1248.5 3498 1229.5 3765.5C1214.56 3975.77 1061 3982.5 947 3999H103"
      fill="transparent"
      strokeWidth="12"
      stroke="rgba(168, 168, 168, 1)"
      strokeLinecap="round"
      class="grow"
    />
  </svg>
  <motion.img src="../assets/Journey/car.png" className='box'
  style={{offsetDistance: caroffSet}}
  animate={controls} />
  
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
    );
  } else {
    return (
      <div id='Journey_mob'>
    <JourneyLanding/>
    <div className="head">
          <h1 className='subHeading'>MILESTONES</h1>
          </div>
    <div ref={journeyRef} className="container">


    <svg width="334" height="1199" viewBox="0 0 334 1199" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.35519 1H249.472C295.104 1.0001 332.64 25.3656 332.64 85.6651C332.64 164.486 285.095 173.177 249.472 173.177L98.5932 176.924C69.4968 176.174 3.35519 186.304 3.35519 259.191C3.35519 332.078 44.8654 345.355 98.5932 345.355L249.472 349.551C277.195 347.852 329.776 371.654 332.64 427.772C336.173 497.003 277.195 512.687 249.472 514.385L98.5932 519.93C69.4968 520.579 1 524.575 1 605.644C1 671.278 57.868 685.813 86.9644 684.764L249.472 691.058C288.186 691.058 332.64 705.663 332.64 776.323C332.64 837.312 280.973 856.492 249.472 856.492L86.9644 862.187C32.0591 862.187 1 881.967 1 947.901C1 1013.83 61.4499 1027.37 86.9644 1027.02L249.472 1032.57C277.195 1034.46 338.234 1047.85 332.64 1128.02C328.243 1191.04 283.034 1193.05 249.472 1198H1" stroke="#A4A4A4" stroke-width="2"/>
</svg>



  {/* <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="4004">
    <path
      d="M0 5H947C1041.17 15.3333 1229.5 86.3 1229.5 287.5C1229.5 550.5 1041.17 566 947 579.5L434.5 592C335.667 589.5 111 643 111 851C111 1094.2 252 1154 434.5 1154L947 1168C1041.17 1162.33 1219.77 1241.75 1229.5 1429C1241.5 1660 1041.17 1712.33 947 1718L434.5 1736.5C335.667 1738.67 80.9653 1764.9 103 2034.5C120 2242.5 296.167 2290 395 2286.5L947 2307.5C1041.17 2310.33 1229.5 2366.73 1229.5 2602.5C1229.5 2795.5 1041.17 2865.17 947 2859.5L395 2878.5C291 2878.5 87.5 2948 103 3164.5C118.5 3381 308.333 3429.67 395 3428.5L947 3447C1041.17 3453.33 1248.5 3498 1229.5 3765.5C1214.56 3975.77 1061 3982.5 947 3999H103"
      fill="transparent"
      strokeWidth="12"
      stroke="rgba(168, 168, 168, 1)"
      strokeLinecap="round"
      class="grow"
    />
  </svg> */}

  <motion.img src="../assets/Journey/car.png" className='boxMob'
    // initial={{offsetDistance: "0%"}}
    // whileInView={{offsetDistance: "100%"}}
    // transition={{delay: 5,
    // duration: 5}}
    style={{offsetDistance: caroffSetMob}}
    animate={controls}
    />

<div className="milestonesRow">
    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/stBg.png"  />
      
      
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
      <motion.img className='bg' src="../assets/Journey/Partners/fittBg.png"  />
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
      <motion.img className='bg' src="../assets/Journey/Partners/mgBg.png"  />
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
      <motion.img className='bg' src="../assets/Journey/Partners/iimBg.png"  />
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
      <motion.img className='bg' src="../assets/Journey/Partners/birlaBg.png" />
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
      <motion.img className='bg' src="../assets/Journey/Partners/patentBg.png"  />
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
      <motion.img className='bg' src="../assets/Journey/Partners/nexusBg.png"  />
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
<div className="last"></div>
</div>
    );
  }
}
