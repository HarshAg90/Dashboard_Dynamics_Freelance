import React, { useRef, useEffect, useState } from "react";
import JourneyLanding from "../components/JourneyLanding";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isMobile } from "react-device-detect";
import detectScroll from "@egstad/detect-scroll";

const delayP = "0.1";

const aniVariant = {
  hiddenY: {
    opacity: 0.75,
    y: "15%",
  },
  visibleY: {
    opacity: 1,
    y: "0%",
  },
  hiddenL: {
    opacity: 0.75,
    x: "-10%",
  },
  visibleL: {
    opacity: 1,
    x: "0%",
  },
  hiddenR: {
    opacity: 0.75,
    x: "10%",
  },
  visibleR: {
    opacity: 1,
    x: "0%",
  },
};

export default function Journey() {
  const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"],
  });

  const controls = useAnimation();

  function upfun() {
    controls.start({ rotate: -180 });
    controls.start({ scale: isMobile ? 0.35 : 1 });
  }

  function downfun() {
    controls.start({ rotate: 0 });
    controls.start({ scale: isMobile ? 0.35 : 1 });
  }

  useEffect(() => {
    controls.start({ scale: isMobile ? 0.35 : 1 });
    // Initialize instance and attach event listeners inside useEffect
    const instance = new detectScroll(window, {
      events: {
        scrollUp: upfun,
        scrollDown: downfun,
      },
    });
  });

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

  const caroffSetMob = useTransform(
    scrollYProgress,
    [0.125, 0.15, 0.3, 0.45, 0.6, 0.75, 0.95],
    ["0%", "0%", "20%", "40%", "60%", "80%", "100%"]
  );

  const caroffSet = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.87, 0.98],
    ["0%", "12.3%", "25%", "38%", "50%", "62%", "75%", "87%", "100%"]
  );
  const stMicro_Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.125],
    ["0%", "25%", "100%"]
  );
  const fitt_Opacity = useTransform(
    scrollYProgress,
    [0.125, 0.2, 0.25],
    ["0%", "25%", "100%"]
  );
  const mg_Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.375],
    ["0%", "25%", "100%"]
  );
  const iim_Opacity = useTransform(
    scrollYProgress,
    [0.375, 0.45, 0.5],
    ["0%", "25%", "100%"]
  );
  const birla_Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.625],
    ["0%", "25%", "100%"]
  );
  const patent_Opacity = useTransform(
    scrollYProgress,
    [0.625, 0.7, 0.75],
    ["0%", "25%", "100%"]
  );
  const nex_Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.87],
    ["0%", "25%", "100%"]
  );

  if (!isMobile) {
    return (
      <div id="Journey">
        <JourneyLanding />
        <div className="head">
          <h1 className="subHeading">MILESTONES</h1>
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
          <motion.img
            src="../assets/Journey/car.png"
            className="box"
            style={{ offsetDistance: caroffSet }}
            animate={controls}
          />

          <div className="milestonesRow">
            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/stBg.png"
                style={{ opacity: stMicro_Opacity }}
              />

              <motion.img
                className="fg"
                src="../assets/Journey/Partners/STMicro.png"
                alt=""
                variants={aniVariant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition={{
                  delay: delayP,
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  delay: delayP,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Incubated in <br />
                STMicroelectronics <br />
                Private Limited
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/fittBg.png"
                style={{ opacity: fitt_Opacity }}
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/Fitt.png"
                alt=""
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenR"
                whileInView="visibleR"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Incubated with <br />
                FITT IIT-Delhi, <br />
                Faculty Mentor <br />
                Prof B.K. Panigrahi
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/mgBg.png"
                style={{ opacity: mg_Opacity }}
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/mg.png"
                alt=""
                variants={aniVariant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenR"
                whileInView="visibleR"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Pilot with <br />
                MG Motors,
                <br />
                MGZS EV
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/iimBg.png"
                style={{ opacity: iim_Opacity }}
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/iim.png"
                alt=""
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenR"
                whileInView="visibleR"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Accelerating <br />
                with IIML-EIC, <br />
                IIM LUCKNOW{" "}
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/birlaBg.png"
                style={{ opacity: birla_Opacity }}
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/birla.png"
                alt=""
                variants={aniVariant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                MOU With Aditya
                <br />
                Birla Innovation
                <br />
                Group For dynamic
                <br />
                charging
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/patentBg.png"
                style={{ opacity: patent_Opacity }}
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/patent.png"
                alt=""
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenR"
                whileInView="visibleR"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Technology
                <br />
                patent filed,
                <br />
                Filing dtd.
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/nexusBg.png"
                style={{ opacity: nex_Opacity }}
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/nexus.png"
                alt=""
                variants={aniVariant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Startup Nexus US <br />
                Embassy
                <br />
                Incubated, Batch <br /> of Cohort 14
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="Journey_mob">
        <JourneyLanding />
        <div className="head">
          <h1 className="subHeading">MILESTONES</h1>
        </div>
        <div ref={journeyRef} className="container">
          {/* <svg width="334" height="1199" viewBox="0 0 334 1199" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.35519 1H249.472C295.104 1.0001 332.64 25.3656 332.64 85.6651C332.64 164.486 285.095 173.177 249.472 173.177L98.5932 176.924C69.4968 176.174 3.35519 186.304 3.35519 259.191C3.35519 332.078 44.8654 345.355 98.5932 345.355L249.472 349.551C277.195 347.852 329.776 371.654 332.64 427.772C336.173 497.003 277.195 512.687 249.472 514.385L98.5932 519.93C69.4968 520.579 1 524.575 1 605.644C1 671.278 57.868 685.813 86.9644 684.764L249.472 691.058C288.186 691.058 332.64 705.663 332.64 776.323C332.64 837.312 280.973 856.492 249.472 856.492L86.9644 862.187C32.0591 862.187 1 881.967 1 947.901C1 1013.83 61.4499 1027.37 86.9644 1027.02L249.472 1032.57C277.195 1034.46 338.234 1047.85 332.64 1128.02C328.243 1191.04 283.034 1193.05 249.472 1198H1" stroke="#A4A4A4" stroke-width="2"/>
</svg> */}
          <svg
            width="333"
            height="1210"
            viewBox="0 0 333 1210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_43_3)">
              <path
                d="M11 5L1 0.226497V11.7735L11 7V5ZM11 1203L1 1198.23V1209.77L11 1205V1203ZM331 87.5864C331 108.738 325.871 124.501 316.979 136.282C308.083 148.069 295.345 155.968 279.956 161.254C249.117 171.847 207.933 171.859 166.5 171.859C125.183 171.859 83.6174 171.847 52.3939 182.572C36.7517 187.945 23.6294 196.035 14.4245 208.231C5.21501 220.433 0 236.647 0 258.132H2C2 236.98 7.12874 221.217 16.0208 209.436C24.9174 197.649 37.6546 189.75 53.0436 184.464C83.8826 173.871 125.067 173.859 166.5 173.859C207.817 173.859 249.383 173.871 280.606 163.146C296.248 157.773 309.371 149.683 318.576 137.487C327.785 125.285 333 109.071 333 87.5864H331ZM0 258.132C0 279.616 5.21501 295.831 14.4245 308.033C23.6294 320.228 36.7517 328.318 52.3939 333.691C83.6174 344.416 125.183 344.405 166.5 344.405C207.933 344.405 249.117 344.416 279.956 355.01C295.345 360.296 308.083 368.194 316.979 379.982C325.871 391.763 331 407.526 331 428.677H333C333 407.193 327.785 390.978 318.576 378.777C309.371 366.581 296.248 358.491 280.606 353.118C249.383 342.393 207.817 342.405 166.5 342.405C125.067 342.405 83.8826 342.393 53.0436 331.8C37.6546 326.514 24.9174 318.615 16.0208 306.828C7.12874 295.047 2 279.284 2 258.132H0ZM331 428.677C331 449.829 325.871 465.592 316.979 477.373C308.083 489.161 295.345 497.059 279.956 502.345C249.117 512.938 207.933 512.95 166.5 512.95C125.183 512.95 83.6174 512.938 52.3939 523.664C36.7517 529.037 23.6294 537.127 14.4245 549.322C5.21501 561.524 0 577.738 0 599.223H2C2 578.071 7.12874 562.308 16.0208 550.527C24.9174 538.74 37.6546 530.841 53.0436 525.555C83.8826 514.962 125.067 514.95 166.5 514.95C207.817 514.95 249.383 514.962 280.606 504.237C296.248 498.864 309.371 490.774 318.576 478.578C327.785 466.376 333 450.162 333 428.677H331ZM0 599.223C0 620.708 5.21501 636.922 14.4245 649.124C23.6294 661.32 36.7517 669.409 52.3939 674.782C83.6174 685.508 125.183 685.496 166.5 685.496C207.933 685.496 249.117 685.508 279.956 696.101C295.345 701.387 308.083 709.285 316.979 721.073C325.871 732.854 331 748.617 331 769.768H333C333 748.284 327.785 732.069 318.576 719.868C309.371 707.672 296.248 699.582 280.606 694.209C249.383 683.484 207.817 683.496 166.5 683.496C125.067 683.496 83.8826 683.484 53.0436 672.891C37.6546 667.605 24.9174 659.706 16.0208 647.919C7.12874 636.138 2 620.375 2 599.223H0ZM331 769.768C331 790.92 325.871 806.683 316.979 818.464C308.083 830.252 295.345 838.15 279.956 843.436C249.117 854.029 207.933 854.041 166.5 854.041C125.183 854.041 83.6174 854.029 52.3939 864.755C36.7517 870.128 23.6294 878.217 14.4245 890.413C5.21501 902.615 0 918.829 0 940.314H2C2 919.162 7.12874 903.399 16.0208 891.618C24.9174 879.831 37.6546 871.932 53.0436 866.646C83.8826 856.053 125.067 856.041 166.5 856.041C207.817 856.041 249.383 856.053 280.606 845.328C296.248 839.955 309.371 831.865 318.576 819.669C327.785 807.467 333 791.253 333 769.768H331ZM0 940.314C0 961.799 5.21501 978.013 14.4245 990.215C23.6294 1002.41 36.7517 1010.5 52.3939 1015.87C83.6174 1026.6 125.183 1026.59 166.5 1026.59C207.933 1026.59 249.117 1026.6 279.956 1037.19C295.345 1042.48 308.083 1050.38 316.979 1062.16C325.871 1073.94 331 1089.71 331 1110.86H333C333 1089.37 327.785 1073.16 318.576 1060.96C309.371 1048.76 296.248 1040.67 280.606 1035.3C249.383 1024.57 207.817 1024.59 166.5 1024.59C125.067 1024.59 83.8826 1024.57 53.0436 1013.98C37.6546 1008.7 24.9174 1000.8 16.0208 989.01C7.12874 977.229 2 961.466 2 940.314H0ZM250.414 5H10V7H250.414V5ZM238.86 1203H10V1205H238.86V1203ZM331 1110.86C331 1161.75 289.747 1203 238.86 1203V1205C290.852 1205 333 1162.85 333 1110.86H331ZM333 87.5864C333 41.9752 296.025 5 250.414 5V7C294.92 7 331 43.0797 331 87.5864H333Z"
                fill="#A8A8A8"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_43_3"
                x="0"
                y="0.22644"
                width="333"
                height="1213.55"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_43_3"
                />
              </filter>
            </defs>
          </svg>

          {/* <svg width="348" height="1210" viewBox="0 0 348 1210" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg> */}

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

          <motion.img
            src="../assets/Journey/car.png"
            className="boxMob"
            // initial={{offsetDistance: "0%"}}
            // whileInView={{offsetDistance: "100%"}}
            // transition={{delay: 5,
            // duration: 5}}
            style={{ offsetDistance: caroffSetMob }}
            animate={controls}
          />

          <div className="milestonesRow">
            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/stBg.png"
              />

              <motion.img
                className="fg"
                src="../assets/Journey/Partners/STMicro.png"
                alt=""
                variants={aniVariant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition={{
                  delay: delayP,
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  delay: delayP,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Incubated in <br />
                STMicroelectronics <br />
                Private Limited
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/fittBg.png"
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/Fitt.png"
                alt=""
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenR"
                whileInView="visibleR"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Incubated with <br />
                FITT IIT-Delhi, <br />
                Faculty Mentor <br />
                Prof B.K. Panigrahi
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/mgBg.png"
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/mg.png"
                alt=""
                variants={aniVariant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenR"
                whileInView="visibleR"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Pilot with <br />
                MG Motors,
                <br />
                MGZS EV
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/iimBg.png"
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/iim.png"
                alt=""
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenR"
                whileInView="visibleR"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Accelerating <br />
                with IIML-EIC, <br />
                IIM LUCKNOW{" "}
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/birlaBg.png"
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/birla.png"
                alt=""
                variants={aniVariant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                MOU With Aditya
                <br />
                Birla Innovation
                <br />
                Group For dynamic
                <br />
                charging
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/patentBg.png"
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/patent.png"
                alt=""
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenR"
                whileInView="visibleR"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Technology
                <br />
                patent filed,
                <br />
                Filing dtd.
              </motion.h1>
            </div>

            <div className="partnerSet">
              <motion.img
                className="bg"
                src="../assets/Journey/Partners/nexusBg.png"
              />
              <motion.img
                className="fg"
                src="../assets/Journey/Partners/nexus.png"
                alt=""
                variants={aniVariant}
                initial="hiddenL"
                whileInView="visibleL"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
              <motion.h1
                className="fg"
                variants={aniVariant}
                initial="hiddenY"
                whileInView="visibleY"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              >
                Startup Nexus US <br />
                Embassy
                <br />
                Incubated, Batch <br /> of Cohort 14
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="last"></div>
      </div>
    );
  }
}
