import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EV_manuLanding from "../components/EV_manu_Landing";

import { isMobile } from "react-device-detect";

export default function EV_Manufacturer() {
  let [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const pathLen1 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const pathLen2 = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

  return (
    <div id="EV_Manufacturer">
      <EV_manuLanding />

      <div ref={heroRef} className="hero">
      <svg className="web" width="874" height="632" viewBox="0 0 874 632" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path style={{ pathLength: pathLen1 }} d="M1 0V504.5H336.5" stroke="url(#paint0_linear_0_1)" stroke-dasharray="10 5"/>
<motion.path style={{ pathLength: pathLen2 }} d="M485 506H873V631H194" stroke="url(#paint1_linear_0_1)" stroke-dasharray="10 5"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="75.5" y1="505" x2="75.5" y2="-108.5" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-color="white" stop-opacity="0.39"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="911.016" y1="631.371" x2="194" y2="631.371" gradientUnits="userSpaceOnUse">
<stop offset="0.0637246"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

        {/* <svg
          className="web"
          width="874"
          height="632"
          viewBox="0 0 874 632"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            style={{ pathLength: pathLen1 }}
            d="M1 0V504.5H336.5"
            stroke="url(#paint0_linear_0_1)"
            stroke-dasharray="10 5"
          />
          <motion.path
            style={{ pathLength: pathLen2 }}
            d="M485 506H873V631H194"
            stroke="url(#paint1_linear_0_1)"
            stroke-dasharray="10 5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="75.5"
              y1="505"
              x2="75.5"
              y2="-108.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stop-color="white" stop-opacity="0.39" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="911.016"
              y1="631.371"
              x2="194"
              y2="631.371"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0637246" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg> */}
        <div className="col web">
          <h2>
            At the forefront of EV innovation, addressing the challenge of
            integrating wireless charging technology into EV systems, we offer a
            definitive solution, while optimizing infrastructure and extending
            battery life. We empower manufacturers to drive the EV revolution.
          </h2>
          <img src="../assets/EV_manufacturer/car.png" alt="CAR" />
          <h2 className="downHead">
            A Retrofitted Accessary for your electric.
          </h2>
        </div>

        <img
          className="mob"
          src="../assets/EV_manufacturer/mobManu.png"
          alt="edehjfeuj"
        />
      </div>

      <div className="scndPg">
        <div className="container">
          {!mobile && (
            <img src="../assets/EV_manufacturer/scndCar.png" alt="Car" />
          )}
          <div className="content">
            <div className="para1">
              <h1 className="head">
                Optimized Charging Infrastructure Strategy
              </h1>
              <br />
              <motion.h1
                className="downHead"
                initial={{ x: "20%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 20,
                }}
              >
                Our technology enables efficient revenue generation, maximizes
                the utilization of the charging infrastructure, and offers the
                flexibility to incorporate wireless charging as an add-on
                feature, meeting the diverse needs of electric vehicle owners.
                By upgrading existing EV models and introducing new ones with
                wireless charging technology, manufacturers can enhance the
                market appeal, gain a competitive edge, and attract a broader
                customer
              </motion.h1>
            </div>
            {mobile && (
              <img
                src="../assets/EV_manufacturer/ev_manif_mob_car.png"
                alt="Car"
              />
            )}
            <div className="para3">
              <h1 className="head">Battery Excellence Solutions</h1>
              <br />
              <motion.h1
                className="downHead"
                initial={{ x: "20%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 20,
                }}
              >
                We offer advanced battery management, intelligent predictive
                analytics, customized solutions, and comprehensive support to
                optimize EV battery performance. We minimize degradation, extend
                battery lifespan, and reduce maintenance costs. With our
                cutting-edge technology, industry collaborations, and cost
                optimization strategies, maximize your ROI and achieve superior
                EV performance.
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
