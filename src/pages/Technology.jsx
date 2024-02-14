import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TechnologyLanding from "../components/Technology_Landing";
import CarCanvas from "../components/CarCanvas";
import { isMobile } from "react-device-detect";

export default function Technology() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  let [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  const fstOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const fstY = useTransform(scrollYProgress, [0, 0.2], ["40%", "0%"]);
  const fstScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

  const scndOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const scndY = useTransform(scrollYProgress, [0.2, 0.4], ["40%", "0%"]);
  const scndScale = useTransform(scrollYProgress, [0.2, 0.4], [1.1, 1]);

  const thdOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const thdY = useTransform(scrollYProgress, [0.4, 0.6], ["40%", "0%"]);
  const thdScale = useTransform(scrollYProgress, [0.4, 0.6], [1.1, 1]);

  const frthOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const frthY = useTransform(scrollYProgress, [0.5, 0.69], ["40%", "0%"]);
  const frthScale = useTransform(scrollYProgress, [0.5, 0.69], [1.01, 1]);

  //SVG ANIMATION
  const fstPathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div id="Technology">
      <TechnologyLanding />

      {/* PRODUCT PAGE */}
      <div className="product">
        <div className="productHead">
          <svg
            width="35"
            height="6"
            viewBox="0 0 35 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.3333 3C29.3333 4.47276 30.5272 5.66667 32 5.66667C33.4728 5.66667 34.6667 4.47276 34.6667 3C34.6667 1.52724 33.4728 0.333336 32 0.333336C30.5272 0.333336 29.3333 1.52724 29.3333 3ZM-4.37114e-08 3.5L32 3.5L32 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z"
              fill="#CD222A"
            />
          </svg>

          <h1 className="heading">Product</h1>
        </div>
      </div>

      <div className="carCanvas">
        <div className="imageCar">
          <motion.img
            className="left"
            src="../assets/Technology/productLeft.png"
            initial={{ x: "-15%", opacity: 0.5 }}
            whileInView={{ x: "0%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 25,
            }}
          />
          <img className="car" src="../assets/Technology/2dCar.png" alt="" />
          <motion.img
            className="right"
            src="../assets/Technology/productRight.png"
            initial={{ x: "15%", opacity: 0.5 }}
            whileInView={{ x: "0%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 25,
              delay: 0.5,
            }}
          />
        </div>
        {/* <CarCanvas/> */}
      </div>

      {/* WORKING */}
      <div className="working">
        {/* <h1 className='headingTop'></h1> */}
        <div className="workingHead">
          <h1 className="heading">
            HOW DOES IT <span>WORK</span>
          </h1>
          <svg
            width="152"
            height="6"
            viewBox="0 0 152 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.66666 3C5.66666 1.52724 4.47275 0.333333 3 0.333333C1.52724 0.333333 0.333328 1.52724 0.333328 3C0.333328 4.47276 1.52724 5.66667 3 5.66667C4.47275 5.66667 5.66666 4.47276 5.66666 3ZM155 2.5L3 2.5V3.5L155 3.5V2.5Z"
              fill="#CD222A"
            />
          </svg>
        </div>
        {!mobile && (
          <div ref={targetRef} className="explanation">
            <div className="fstCol">
              <motion.img
                src="../assets/Technology/Working_1.png"
                className="illustration"
                alt="W1"
                style={{ y: fstY, opacity: fstOpacity, scale: fstScale }}
              ></motion.img>

              <div className="txt scnd">
                <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                  Step 2: Magnetic Magic
                </h1>
                <br />
                <h1 style={{ fontSize: 17 }}>
                  Our revolutionary double D coil configuration, integrated into
                  the Ground Assembly (GA), creates a robust and impactful
                  magnetic field. This innovative design guarantees the smooth
                  and efficient flow of power, optimizing the charging process
                  and ensuring maximum effectiveness for your EV's battery.
                </h1>
              </div>

              <motion.img
                src="../assets/Technology/Working_3.png"
                className="illustration thd"
                alt="W1"
                style={{ y: thdY, opacity: thdOpacity, scale: thdScale }}
              ></motion.img>

              <div className="txt frth">
                <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                  Step 4: Charging Made Easy
                </h1>
                <br />
                <h1 style={{ fontSize: 17 }}>
                  When the magnetic field resonates, it generates electricity in
                  the receiver coil. Our wireless system is designed to adapt,
                  accommodating up to 25% misalignment. This means you can enjoy
                  convenient charging, even when parking isn't perfectly aligned
                  with the charging pad.
                </h1>
              </div>
            </div>

            <div className="scndCol">
              <div className="svgs">
                <svg
                  width="8"
                  height="2500"
                  viewBox="0 0 8 2500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    style={{ pathLength: fstPathLength }}
                    d="M3.99993 3.99997L6.00014 1600"
                    stroke="url(#paint0_linear_1983_480)"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1983_480"
                      x1="4.43853"
                      y1="2500"
                      x2="4.43847"
                      y2="-19.7916"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.466667" stop-color="#9C1313" />
                      <stop offset="1" stop-color="#D9D8D8" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <svg
                className="bg"
                width="8"
                height="1416"
                viewBox="0 0 8 1416"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4L3.99994 1412"
                  stroke="#D9D8D8"
                  stroke-width="8"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <div className="thdCol">
              <motion.div className="txt fst">
                <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                  Step 1: Park and Power
                </h1>
                <br />
                <h1 style={{ fontSize: 17 }}>
                  Effortlessly park your EV directly over our discreet wireless
                  charging pad, seamlessly integrated beneath the parking spot.
                  No need for manual connection—simply position your vehicle,
                  and charging begins automatically.
                </h1>
              </motion.div>

              <motion.img
                src="../assets/Technology/Working_2.png"
                className="illustration scnd"
                alt="W1"
                style={{ y: scndY, opacity: scndOpacity, scale: scndScale }}
              ></motion.img>

              <div className="txt thd">
                <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                  Step 3: Resonant Connection
                </h1>
                <br />
                <h1 style={{ fontSize: 17 }}>
                  Inside the Vehicle Assembly (VA), the receiver coil syncs with
                  the magnetic field, creating a strong bond called magnetic
                  resonant coupling. This bond allows power to flow smoothly
                  without any physical contact, that charges your EV
                  effortlessly and reliably.
                </h1>
              </div>

              <motion.img
                src="../assets/Technology/Working_4.png"
                className="illustration frth"
                style={{ y: frthY, opacity: frthOpacity, scale: frthScale }}
              ></motion.img>
            </div>
          </div>
        )}
        {mobile && (
          <div ref={targetRef} className="explanation">
            <div className="fstCol">
              <motion.img
                src="../assets/Technology/Working_1.png"
                className="illustration"
                alt="W1"
                style={{ y: fstY, opacity: fstOpacity, scale: fstScale }}
              ></motion.img>
              <motion.div className="txt fst">
                <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                  Step 1: Park and Power
                </h1>
                <br />
                <h1 style={{ fontSize: 17 }}>
                  Effortlessly park your EV directly over our discreet wireless
                  charging pad, seamlessly integrated beneath the parking spot.
                  No need for manual connection—simply position your vehicle,
                  and charging begins automatically.
                </h1>
              </motion.div>

              <motion.img
                src="../assets/Technology/Working_2.png"
                className="illustration scnd"
                alt="W1"
                style={{ y: scndY, opacity: scndOpacity, scale: scndScale }}
              ></motion.img>

              <div className="txt scnd">
                <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                  Step 2: Magnetic Magic
                </h1>
                <br />
                <h1 style={{ fontSize: 17 }}>
                  Our revolutionary double D coil configuration, integrated into
                  the Ground Assembly (GA), creates a robust and impactful
                  magnetic field. This innovative design guarantees the smooth
                  and efficient flow of power, optimizing the charging process
                  and ensuring maximum effectiveness for your EV's battery.
                </h1>
              </div>

              <motion.img
                src="../assets/Technology/Working_3.png"
                className="illustration thd"
                alt="W1"
                style={{ y: thdY, opacity: thdOpacity, scale: thdScale }}
              ></motion.img>
              <div className="txt thd">
                <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                  Step 3: Resonant Connection
                </h1>
                <br />
                <h1 style={{ fontSize: 17 }}>
                  Inside the Vehicle Assembly (VA), the receiver coil syncs with
                  the magnetic field, creating a strong bond called magnetic
                  resonant coupling. This bond allows power to flow smoothly
                  without any physical contact, that charges your EV
                  effortlessly and reliably.
                </h1>
              </div>

              <motion.img
                src="../assets/Technology/Working_4.png"
                className="illustration frth"
                style={{ y: frthY, opacity: frthOpacity, scale: frthScale }}
              ></motion.img>
              <div className="txt frth">
                <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                  Step 4: Charging Made Easy
                </h1>
                <br />
                <h1 style={{ fontSize: 17 }}>
                  When the magnetic field resonates, it generates electricity in
                  the receiver coil. Our wireless system is designed to adapt,
                  accommodating up to 25% misalignment. This means you can enjoy
                  convenient charging, even when parking isn't perfectly aligned
                  with the charging pad.
                </h1>
              </div>
            </div>

            {/* <div className="scndCol">
            <div className="svgs">
              <svg
                width="8"
                height="2500"
                viewBox="0 0 8 2500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  style={{ pathLength: fstPathLength }}
                  d="M3.99993 3.99997L6.00014 1600"
                  stroke="url(#paint0_linear_1983_480)"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1983_480"
                    x1="4.43853"
                    y1="2500"
                    x2="4.43847"
                    y2="-19.7916"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.466667" stop-color="#9C1313" />
                    <stop offset="1" stop-color="#D9D8D8" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <svg
              className="bg"
              width="8"
              height="1416"
              viewBox="0 0 8 1416"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4L3.99994 1412"
                stroke="#D9D8D8"
                stroke-width="8"
                stroke-linecap="round"
              />
            </svg>
          </div> */}

            {/* <div className="thdCol">
            <motion.div className="txt fst">
              <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                Step 1: Park and Power
              </h1>
              <br />
              <h1 style={{ fontSize: 17 }}>
                Effortlessly park your EV directly over our discreet wireless
                charging pad, seamlessly integrated beneath the parking spot. No
                need for manual connection—simply position your vehicle, and
                charging begins automatically.
              </h1>
            </motion.div>

            <motion.img
              src="../assets/Technology/Working_2.png"
              className="illustration scnd"
              alt="W1"
              style={{ y: scndY, opacity: scndOpacity, scale: scndScale }}
            ></motion.img>

            <div className="txt thd">
              <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
                Step 3: Resonant Connection
              </h1>
              <br />
              <h1 style={{ fontSize: 17 }}>
                Inside the Vehicle Assembly (VA), the receiver coil syncs with
                the magnetic field, creating a strong bond called magnetic
                resonant coupling. This bond allows power to flow smoothly
                without any physical contact, that charges your EV effortlessly
                and reliably.
              </h1>
            </div>

            <motion.img
              src="../assets/Technology/Working_4.png"
              className="illustration frth"
              style={{ y: frthY, opacity: frthOpacity, scale: frthScale }}
            ></motion.img>
          </div> */}
          </div>
        )}
        <div className="btn">
          <button>
            <span> Learn more about the existing technology</span>
          </button>
        </div>
      </div>

      <div className="part_2">
        <div className="container">
          <h1>Smart and safe</h1>
          <p>
            A system that is protected by sophisticated safety rules has been
            created by adopting the most stringent testing and design standards.
            According to SAE specification, the Dash Dynamic system includes
            Foreign Object Detection (F.O.D.).
          </p>
        </div>
        <img src="../assets/Technology/tech_part.png" alt="" />
      </div>

      <div className="why">
        <div className="whyText">
          <h1>W</h1>
          <h1>H</h1>
          <h1>Y</h1>
          <br />
          <h1>D</h1>
          <h1>A</h1>
          <h1>S</h1>
          <h1>H</h1>
        </div>
        <div className="picGrid">
          <motion.img
            src="../assets/Technology/Grids/Grid1.png"
            className="g1"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          />
          <motion.img
            src="../assets/Technology/Grids/Grid2.png"
            className="g2"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          />
          <motion.img
            src="../assets/Technology/Grids/Grid3.png"
            className="g3"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          />
          <motion.img
            src="../assets/Technology/Grids/Grid4.png"
            className="g4"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          />
          <motion.img
            src="../assets/Technology/Grids/Grid5.png"
            className="g5"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          />
          <motion.img
            src="../assets/Technology/Grids/Grid6.png"
            className="g6"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          />
          <motion.img
            src="../assets/Technology/Grids/Grid7.png"
            className="g6"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          />
        </div>
      </div>
    </div>
  );
}
