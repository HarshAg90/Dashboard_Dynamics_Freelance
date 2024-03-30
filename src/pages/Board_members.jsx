import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BoardLanding from "../components/BoardLanding";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const transition = { duration: 35, yoyo: Infinity, ease: "easeInOut" };

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 10,
    },
  },
};

export default function BoardMembers() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"],
  });

  const pathLen = useTransform(scrollYProgress, [0.2, 0.6, 0.65], [0, 0.7, 1]);

  const achieveOpacity1 = useTransform(
    scrollYProgress,
    [0, 0.315, 0.325],
    [0, 0, 1]
  );
  const xLen1 = useTransform(
    scrollYProgress,
    [0, 0.315, 0.325],
    ["-20%", "-20%", "0%"]
  );
  const achieveOpacity2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.41],
    [0, 0, 1]
  );
  const xLen2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.41],
    ["20%", "20%", "0%"]
  );
  const achieveOpacity3 = useTransform(
    scrollYProgress,
    [0, 0.45, 0.46],
    [0, 0, 1]
  );
  const xLen3 = useTransform(
    scrollYProgress,
    [0, 0.45, 0.46],
    ["20%", "20%", "0%"]
  );
  const achieveOpacity4 = useTransform(
    scrollYProgress,
    [0, 0.55, 0.56],
    [0, 0, 1]
  );
  const xLen4 = useTransform(
    scrollYProgress,
    [0, 0.55, 0.56],
    ["-20%", "-20%", "0%"]
  );
  const achieveOpacity5 = useTransform(
    scrollYProgress,
    [0, 0.6, 0.61],
    [0, 0, 1]
  );
  const yLen5 = useTransform(
    scrollYProgress,
    [0, 0.6, 0.61],
    ["20%", "20%", "0%"]
  );
  const achieveOpacity6 = useTransform(
    scrollYProgress,
    [0, 0.63, 0.64],
    [0, 0, 1]
  );
  const yLen6 = useTransform(
    scrollYProgress,
    [0, 0.63, 0.64],
    ["-20%", "-20%", "0%"]
  );

  return (
    <div id="BoardMember">
      <BoardLanding />

      <div className="members">
        <div className="head">
          <h1 className="subHeading">Board of Directors</h1>
        </div>

        <div className="directorGrid">
          <div className="grid fst">
            <div className="member2 member">
              <motion.img
                src="../assets/Board_members/Robin.png"
                alt="Robin Singh"
                initial={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              <a
                href="https://www.linkedin.com/in/robin-singh-b9952028/"
                className="linkedin"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  style={{ fill: "#000000" }}
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              {/* <h1>A highly successful electrical engineer with 7 years of entrepreneurial experience, founder of Tron Fire Protection Pvt Ltd, known for innovative solutions in transformer fire safety, and COVID initiatives.
</h1> */}
            </div>
            <div className="member1 member">
              <motion.img
                src="../assets/Board_members/Shashank.png"
                alt="Shashank Sawai"
                initial={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              <a
                href="https://www.linkedin.com/in/shashank-sawai-8a0511125/"
                className="linkedin"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  style={{ fill: "#000000" }}
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>

              {/* <h1>An M.Tech professional with 7 years of experience, excelling in electrical & telecommunications project management.</h1> */}
            </div>
          </div>
        </div>
        <div className="head">
          <h1 className="subHeading">Board of Advisors</h1>
        </div>
        <div className="advisorGrid">
          <div className="grid fst">
            <div className="member2 member m1">
              <motion.img
                src="../assets/Board_members/Pani.png"
                alt="Robin Singh"
                initial={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              {/* <a href="https://www.linkedin.com/in/robin-singh-b9952028/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a> */}
              {/* <h1>A highly successful electrical engineer with 7 years of entrepreneurial experience, founder of Tron Fire Protection Pvt Ltd, known for innovative solutions in transformer fire safety, and COVID initiatives.
</h1> */}
            </div>
            <div className="member1 member m2">
              <motion.img
                src="../assets/Board_members/Sanjeev.png"
                alt="Shashank Sawai"
                initial={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              {/* <a href="https://www.linkedin.com/in/shashank-sawai-8a0511125/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a> */}

              {/* <h1>An M.Tech professional with 7 years of experience, excelling in electrical & telecommunications project management.</h1> */}
            </div>
            <div className="member2 member m3">
              <motion.img
                src="../assets/Board_members/Erik.png"
                alt="Shashank Sawai"
                initial={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
              />
              {/* <a href="https://www.linkedin.com/in/shashank-sawai-8a0511125/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a> */}

              {/* <h1>An M.Tech professional with 7 years of experience, excelling in electrical & telecommunications project management.</h1> */}
            </div>
          </div>
        </div>
      </div>

      <div className="partners">
        <div className="head">
          <h1 className="subHeading">Strategic Partner and Investor</h1>
        </div>
        <img
          className="mob"
          src="../assets/Board_members/partAndInves.png"
          alt=""
        />
        <div className="web">
          <img src="../assets/Board_members/webInvest.png" alt="" />
        </div>
      </div>
    </div>
  );
}
