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


    {/* <svg width="334" height="1199" viewBox="0 0 334 1199" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.35519 1H249.472C295.104 1.0001 332.64 25.3656 332.64 85.6651C332.64 164.486 285.095 173.177 249.472 173.177L98.5932 176.924C69.4968 176.174 3.35519 186.304 3.35519 259.191C3.35519 332.078 44.8654 345.355 98.5932 345.355L249.472 349.551C277.195 347.852 329.776 371.654 332.64 427.772C336.173 497.003 277.195 512.687 249.472 514.385L98.5932 519.93C69.4968 520.579 1 524.575 1 605.644C1 671.278 57.868 685.813 86.9644 684.764L249.472 691.058C288.186 691.058 332.64 705.663 332.64 776.323C332.64 837.312 280.973 856.492 249.472 856.492L86.9644 862.187C32.0591 862.187 1 881.967 1 947.901C1 1013.83 61.4499 1027.37 86.9644 1027.02L249.472 1032.57C277.195 1034.46 338.234 1047.85 332.64 1128.02C328.243 1191.04 283.034 1193.05 249.472 1198H1" stroke="#A4A4A4" stroke-width="2"/>
</svg> */}
{/* <svg width="336" height="1210" viewBox="0 0 336 1210" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_43_3)">
<path d="M11 5L1 0.226497V11.7735L11 7V5ZM11 1203L1 1198.23V1209.77L11 1205V1203ZM334 87.5864C334 108.736 328.825 124.498 319.853 136.279C310.875 148.067 298.021 155.966 282.49 161.253C251.369 171.848 209.808 171.859 168 171.859C126.308 171.859 84.3686 171.847 52.8652 182.572C37.0837 187.944 23.844 196.032 14.556 208.228C5.26289 220.43 0 236.645 0 258.132H2C2 236.982 7.17461 221.22 16.1471 209.439C25.1248 197.652 37.9788 189.752 53.5098 184.465C84.6314 173.871 126.192 173.859 168 173.859C209.692 173.859 251.631 173.871 283.135 163.147C298.916 157.774 312.156 149.686 321.444 137.491C330.737 125.289 336 109.073 336 87.5864H334ZM0 258.132C0 279.618 5.26289 295.834 14.556 308.036C23.844 320.231 37.0837 328.32 52.8652 333.692C84.3686 344.416 126.308 344.405 168 344.405C209.808 344.405 251.369 344.416 282.49 355.01C298.021 360.297 310.875 368.197 319.853 379.985C328.825 391.766 334 407.528 334 428.677H336C336 407.191 330.737 390.975 321.444 378.773C312.156 366.578 298.916 358.489 283.135 353.117C251.631 342.393 209.692 342.405 168 342.405C126.192 342.405 84.6314 342.393 53.5098 331.799C37.9788 326.512 25.1248 318.612 16.1471 306.824C7.17461 295.043 2 279.282 2 258.132H0ZM334 428.677C334 449.827 328.825 465.589 319.853 477.37C310.875 489.158 298.021 497.058 282.49 502.344C251.369 512.939 209.808 512.95 168 512.95C126.308 512.95 84.3686 512.939 52.8652 523.663C37.0837 529.035 23.844 537.124 14.556 549.319C5.26289 561.521 0 577.736 0 599.223H2C2 578.073 7.17461 562.312 16.1471 550.531C25.1248 538.743 37.9788 530.843 53.5098 525.556C84.6314 514.962 126.192 514.95 168 514.95C209.692 514.95 251.631 514.962 283.135 504.238C298.916 498.866 312.156 490.777 321.444 478.582C330.737 466.38 336 450.164 336 428.677H334ZM0 599.223C0 620.71 5.26289 636.925 14.556 649.127C23.844 661.322 37.0837 669.411 52.8652 674.783C84.3686 685.507 126.308 685.496 168 685.496C209.808 685.496 251.369 685.507 282.49 696.101C298.021 701.388 310.875 709.288 319.853 721.076C328.825 732.857 334 748.619 334 769.768H336C336 748.282 330.737 732.066 321.444 719.864C312.156 707.669 298.916 699.58 283.135 694.208C251.631 683.484 209.692 683.496 168 683.496C126.192 683.496 84.6314 683.484 53.5098 672.89C37.9788 667.603 25.1248 659.703 16.1471 647.915C7.17461 636.134 2 620.373 2 599.223H0ZM334 769.768C334 790.918 328.825 806.68 319.853 818.461C310.875 830.249 298.021 838.149 282.49 843.435C251.369 854.03 209.808 854.041 168 854.041C126.308 854.041 84.3686 854.03 52.8652 864.754C37.0837 870.126 23.844 878.215 14.556 890.41C5.26289 902.612 0 918.827 0 940.314H2C2 919.164 7.17461 903.403 16.1471 891.622C25.1248 879.834 37.9788 871.934 53.5098 866.647C84.6314 856.053 126.192 856.041 168 856.041C209.692 856.041 251.631 856.053 283.135 845.329C298.916 839.957 312.156 831.868 321.444 819.673C330.737 807.471 336 791.255 336 769.768H334ZM0 940.314C0 961.8 5.26289 978.016 14.556 990.218C23.844 1002.41 37.0837 1010.5 52.8652 1015.87C84.3686 1026.6 126.308 1026.59 168 1026.59C209.808 1026.59 251.369 1026.6 282.49 1037.19C298.021 1042.48 310.875 1050.38 319.853 1062.17C328.825 1073.95 334 1089.71 334 1110.86H336C336 1089.37 330.737 1073.16 321.444 1060.96C312.156 1048.76 298.916 1040.67 283.135 1035.3C251.631 1024.58 209.692 1024.59 168 1024.59C126.192 1024.59 84.6314 1024.58 53.5098 1013.98C37.9788 1008.69 25.1248 1000.79 16.1471 989.006C7.17461 977.225 2 961.464 2 940.314H0ZM253.414 5H10V7H253.414V5ZM241.86 1203H10V1205H241.86V1203ZM334 1110.86C334 1161.75 292.747 1203 241.86 1203V1205C293.852 1205 336 1162.85 336 1110.86H334ZM336 87.5864C336 41.9752 299.025 5 253.414 5V7C297.92 7 334 43.0797 334 87.5864H336Z" fill="#A8A8A8"/>
</g>
<defs>
<filter id="filter0_i_43_3" x="0" y="0.22644" width="336" height="1213.55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_43_3"/>
</filter>
</defs>
</svg> */}


<svg width="348" height="1210" viewBox="0 0 348 1210" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_43_3)">
<path d="M11 5L1 0.226497V11.7735L11 7V5ZM11 1203L1 1198.23V1209.77L11 1205V1203ZM346 87.5864C346 108.728 340.642 124.485 331.348 136.265C322.046 148.056 308.724 155.96 292.625 161.25C260.373 171.848 217.306 171.859 174 171.859C130.806 171.859 87.3731 171.848 54.7503 182.568C38.4112 187.937 24.7018 196.021 15.0821 208.214C5.45457 220.417 0 236.638 0 258.132H2C2 236.99 7.35793 221.233 16.6523 209.453C25.9544 197.663 39.2763 189.758 55.3747 184.468C87.6269 173.87 130.694 173.859 174 173.859C217.194 173.859 260.627 173.87 293.25 163.15C309.589 157.781 323.298 149.697 332.918 137.504C342.545 125.301 348 109.081 348 87.5864H346ZM0 258.132C0 279.626 5.45457 295.847 15.0821 308.05C24.7018 320.242 38.4112 328.326 54.7503 333.696C87.3731 344.416 130.806 344.405 174 344.405C217.306 344.405 260.373 344.416 292.625 355.014C308.724 360.304 322.046 368.208 331.348 379.999C340.642 391.779 346 407.535 346 428.677H348C348 407.183 342.545 390.962 332.918 378.76C323.298 366.567 309.589 358.483 293.25 353.114C260.627 342.394 217.194 342.405 174 342.405C130.694 342.405 87.6269 342.394 55.3747 331.796C39.2763 326.506 25.9544 318.601 16.6523 306.811C7.35793 295.03 2 279.274 2 258.132H0ZM346 428.677C346 449.819 340.642 465.576 331.348 477.356C322.046 489.147 308.724 497.051 292.625 502.341C260.373 512.939 217.306 512.95 174 512.95C130.806 512.95 87.3731 512.939 54.7503 523.659C38.4112 529.028 24.7018 537.113 15.0821 549.305C5.45457 561.508 0 577.729 0 599.223H2C2 578.081 7.35793 562.324 16.6523 550.544C25.9544 538.754 39.2763 530.849 55.3747 525.559C87.6269 514.961 130.694 514.95 174 514.95C217.194 514.95 260.627 514.961 293.25 504.241C309.589 498.872 323.298 490.788 332.918 478.595C342.545 466.392 348 450.172 348 428.677H346ZM0 599.223C0 620.717 5.45457 636.938 15.0821 649.141C24.7018 661.333 38.4112 669.418 54.7503 674.787C87.3731 685.507 130.806 685.496 174 685.496C217.306 685.496 260.373 685.507 292.625 696.105C308.724 701.395 322.046 709.299 331.348 721.09C340.642 732.87 346 748.626 346 769.768H348C348 748.274 342.545 732.053 332.918 719.851C323.298 707.658 309.589 699.574 293.25 694.205C260.627 683.485 217.194 683.496 174 683.496C130.694 683.496 87.6269 683.485 55.3747 672.887C39.2763 667.597 25.9544 659.692 16.6523 647.902C7.35793 636.122 2 620.365 2 599.223H0ZM346 769.768C346 790.911 340.642 806.667 331.348 818.447C322.046 830.238 308.724 838.142 292.625 843.432C260.373 854.03 217.306 854.041 174 854.041C130.806 854.041 87.3731 854.03 54.7503 864.75C38.4112 870.119 24.7018 878.204 15.0821 890.396C5.45457 902.599 0 918.82 0 940.314H2C2 919.172 7.35793 903.415 16.6523 891.635C25.9544 879.845 39.2763 871.94 55.3747 866.65C87.6269 856.052 130.694 856.041 174 856.041C217.194 856.041 260.627 856.052 293.25 845.332C309.589 839.963 323.298 831.879 332.918 819.686C342.545 807.484 348 791.263 348 769.768H346ZM0 940.314C0 961.808 5.45457 978.029 15.0821 990.232C24.7018 1002.42 38.4112 1010.51 54.7503 1015.88C87.3731 1026.6 130.806 1026.59 174 1026.59C217.306 1026.59 260.373 1026.6 292.625 1037.2C308.724 1042.49 322.046 1050.39 331.348 1062.18C340.642 1073.96 346 1089.72 346 1110.86H348C348 1089.37 342.545 1073.14 332.918 1060.94C323.298 1048.75 309.589 1040.66 293.25 1035.3C260.627 1024.58 217.194 1024.59 174 1024.59C130.694 1024.59 87.6269 1024.58 55.3747 1013.98C39.2763 1008.69 25.9544 1000.78 16.6523 988.993C7.35793 977.213 2 961.456 2 940.314H0ZM265.414 5H10V7H265.414V5ZM253.86 1203H10V1205H253.86V1203ZM346 1110.86C346 1161.75 304.747 1203 253.86 1203V1205C305.852 1205 348 1162.85 348 1110.86H346ZM348 87.5864C348 41.9752 311.025 5 265.414 5V7C309.92 7 346 43.0797 346 87.5864H348Z" fill="#A8A8A8"/>
</g>
<defs>
<filter id="filter0_i_43_3" x="0" y="0.22644" width="348" height="1213.55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_43_3"/>
</filter>
</defs>
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
