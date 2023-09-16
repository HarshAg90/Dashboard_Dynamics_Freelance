import React, { useRef, useState, useEffect } from 'react';
import {motion, useInView, useAnimation, useScroll, useTransform} from "framer-motion"
import HomeLanding from "../components/HomeLanding";
import Speedometer1 from "../components/speedometer_One";
import Speedometer2 from "../components/speedometer_Two";
import Speedometer3 from "../components/speedometer_Three";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSpring, animated } from 'react-spring';
import { useInView as useInViewObserve } from 'react-intersection-observer';
import ReactPlayer from 'react-player'

  function Number({ n }) {
    const [ref, inView] = useInViewObserve({
        triggerOnce: true,
    });

    const { number } = useSpring({
        from: { number: 0 },
        number: inView ? n : 0, 
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });


    

    return (
        <animated.div ref={ref}>
            {number.to((n) => n.toFixed(0))}
        </animated.div>
    );
}






const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  }
};


const wirelessVariants = {
  hidden: {
    opacity: 0,
    x: "-100%"
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 40,
      delay: 0.25 }
  },
  hiddenEnd: {
    opacity: 0,
    x: "100%"
  },
  visibleEnd: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 40,
      delay: 0.15 }
  },

}

const lftRightVariant = {
  hidden: {
    x: "-50%"
  },
  visible: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 40,
      delay: 0.1 }
  }
}




export default function Home() {

  
  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  const myRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log('entry', entry);
      console.log('entry.isIntersecting', entry.isIntersecting);
      updateMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);




  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };



  //onScroll Parallax for TECH
  const techRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: techRef,
    offset: ["start end", "end start"],
  });

  const fstOpacity = useTransform(scrollYProgress, [.1, 0.30], [0, 1]);
  const fstY = useTransform(scrollYProgress, [0.1, 0.30], ["80%", "0%"]);
  const fstScale = useTransform(scrollYProgress, [0.1, 0.30], [1.2, 1]);

  const scndOpacity = useTransform(scrollYProgress, [0.3, 0.40], [0, 1]);
  const scndY = useTransform(scrollYProgress, [0.3, 0.40], ["80%", "0%"]);
  const scndScale = useTransform(scrollYProgress, [0.3, 0.40], [1.2, 1]);


  const thdOpacity = useTransform(scrollYProgress, [0.4, 0.50], [0, 1]);
  const thdY = useTransform(scrollYProgress, [0.4, 0.50], ["40%", "0%"]);
  const thdScale = useTransform(scrollYProgress, [0.4, 0.50], [1.2, 1]);


  const frthOpacity = useTransform(scrollYProgress, [0.1, 0.50], [0, 1]);
  const frthY = useTransform(scrollYProgress, [0.1, 0.50], ["70%", "0%"]);
  const frthScale = useTransform(scrollYProgress, [0.1, 0.50], [1.1, 1]);




  


  const wirelessRef = useRef(null);
  const isWirelessInView = useInView(wirelessRef, {once: true});
  const wirelessAnimationControls = useAnimation();


  useEffect(() => {
    if(isWirelessInView){
      wirelessAnimationControls.start("visible");
    }
  }, [isWirelessInView]);






  return (
    <div id="Home">
    <HomeLanding />
    
      <div ref={techRef} className="tech">
        <div className="left">
          <div className="title">
            <h1>TECHNOLOGY CURATOR </h1>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="13" height="13" fill="black" />
            </svg>
            <hr/>
          </div>
          <motion.div className="content" style={{y: frthY, opacity: frthOpacity, scale: frthScale}}>
            <h1>Simply Park and Charge</h1>
            <p>
              Dash Dynamic, a visionary in deep-tech, is developing its
              innovative wireless charging technology to revolutionize the
              electric vehicle (EV) industry Dash Dynamic's wireless charging
              technology is a game-changer for the electric vehicle industry,
              enabling users to conveniently and efficiently charge their
              vehicles without the need for any physical connections.
            </p>
          </motion.div>
          <div className="btn">
            <button>
              <span> Our Specifications</span>
              <span>{">"}</span>
            </button>
          </div>
        </div>
        <div className="right">
          <motion.div className="tile" style={{y: fstY, opacity: fstOpacity, scale: fstScale}}>
            <motion.svg
              width="45"
              height="53"
              viewBox="0 0 45 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.32 3.6966C19.8875 3.66882 17.4738 4.10768 15.2209 4.98735C12.9679 5.86702 10.9211 7.16974 9.20101 8.81889C7.48088 10.468 6.12208 12.4303 5.20455 14.5903C4.28702 16.7503 3.82928 19.0644 3.85825 21.3965C3.9431 31.2769 12.3743 39.3602 22.68 39.4416C32.9651 39.5205 41.224 31.6023 41.1417 21.7416C41.0569 11.8612 32.6257 3.77795 22.32 3.6966ZM0.00133665 21.4236C-0.0310353 18.6016 0.524897 15.8018 1.63651 13.1885C2.74811 10.5753 4.393 8.20122 6.47462 6.20572C8.55624 4.21023 11.0327 2.63349 13.7585 1.56805C16.4844 0.502617 19.4048 -0.0300524 22.3483 0.00130845C34.7624 0.0949849 44.8983 9.81269 44.9986 21.7145C45.054 26.4755 43.4351 31.1156 40.4028 34.8863C37.3706 38.657 33.1019 41.3386 28.2853 42.4984V45.0424C28.2853 45.57 28.2853 46.0532 28.2571 46.4624C28.2262 46.9012 28.1542 47.3819 27.9434 47.8724C27.4867 48.9294 26.6108 49.7691 25.5084 50.207C25.1381 50.3549 24.7756 50.4288 24.4284 50.4707V51.1511C24.4284 51.6415 24.2253 52.1117 23.8636 52.4585C23.5019 52.8052 23.0114 53 22.5 53C21.9885 53 21.498 52.8052 21.1364 52.4585C20.7747 52.1117 20.5715 51.6415 20.5715 51.1511V50.4707C20.2008 50.4296 19.8376 50.3409 19.4916 50.207C18.3892 49.7691 17.5133 48.9294 17.0566 47.8724C16.8717 47.4222 16.7657 46.9458 16.7429 46.4624C16.7146 46.0556 16.7146 45.57 16.7146 45.0424V42.3357C7.15976 39.7694 0.0861887 31.3583 0.00133665 21.4261V21.4236ZM20.5715 43.0309V44.9882C20.5715 45.5872 20.5715 45.9447 20.5921 46.2109C20.6024 46.3761 20.6178 46.4451 20.623 46.4648C20.6885 46.6089 20.809 46.7236 20.9598 46.7853C21.047 46.8029 21.1356 46.8137 21.2246 46.8174C21.5023 46.8371 21.8752 46.8371 22.5 46.8371C23.1248 46.8371 23.4976 46.8371 23.7753 46.8174C23.8643 46.8145 23.9529 46.8046 24.0402 46.7878C24.1905 46.7249 24.3101 46.6094 24.3744 46.4648C24.3928 46.3812 24.404 46.2963 24.4079 46.2109C24.4284 45.9447 24.4284 45.5872 24.4284 44.9882V43.0851C23.1435 43.1717 21.8532 43.1536 20.5715 43.0309ZM26.0329 12.8325C26.2166 13 26.364 13.2005 26.4668 13.4226C26.5695 13.6447 26.6256 13.8841 26.6318 14.127C26.6381 14.3699 26.5943 14.6116 26.503 14.8383C26.4117 15.065 26.2746 15.2722 26.0998 15.4481L21.8572 19.7202H27.6425C28.0198 19.7204 28.3887 19.8266 28.7036 20.0258C29.0185 20.225 29.2656 20.5083 29.4142 20.8408C29.5628 21.1732 29.6064 21.5402 29.5397 21.8962C29.473 22.2521 29.2988 22.5815 29.0387 22.8436L21.6926 30.2391C21.5199 30.422 21.3108 30.57 21.0775 30.6743C20.8443 30.7785 20.5916 30.837 20.3344 30.8462C20.0772 30.8553 19.8207 30.8151 19.58 30.7277C19.3393 30.6404 19.1193 30.5077 18.9329 30.3376C18.7465 30.1674 18.5975 29.9632 18.4947 29.737C18.3919 29.5108 18.3374 29.2672 18.3343 29.0204C18.3313 28.7737 18.3798 28.5289 18.477 28.3004C18.5742 28.0719 18.7181 27.8644 18.9002 27.6901L23.1428 23.418H17.3574C16.9802 23.4178 16.6112 23.3116 16.2963 23.1124C15.9814 22.9132 15.7344 22.6298 15.5858 22.2974C15.4371 21.9649 15.3935 21.598 15.4602 21.242C15.527 20.886 15.7012 20.5566 15.9612 20.2946L23.3074 12.8991C23.66 12.5442 24.1452 12.3381 24.6563 12.3261C25.1674 12.3141 25.6625 12.4946 26.0329 12.8325Z"
                fill="#A14545"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
            <div className="content">
              <h1>25% MISALIGNMENT COMPENSATION</h1>
              <p>
                Our electric vehicle wireless charging system can compensate for
                up to a 25% misalignment while maintaining the same power
                transfer efficiency.
              </p>
            </div>
          </motion.div>
          <motion.div className="tile odd" style={{y: scndY, opacity: scndOpacity, scale: scndScale}}>
            <svg
              width="67"
              height="48"
              viewBox="0 0 67 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.6364 0C49.098 0 55.295 2.52856 59.8641 7.02944C64.4331 11.5303 67 17.6348 67 24C67 30.3652 64.4331 36.4697 59.8641 40.9706C55.295 45.4714 49.098 48 42.6364 48C36.1747 48 29.9777 45.4714 25.4087 40.9706C20.8396 36.4697 18.2727 30.3652 18.2727 24C18.2727 17.6348 20.8396 11.5303 25.4087 7.02944C29.9777 2.52856 36.1747 0 42.6364 0ZM42.6364 6C37.7901 6 33.1424 7.89642 29.7156 11.2721C26.2888 14.6477 24.3636 19.2261 24.3636 24C24.3636 28.7739 26.2888 33.3523 29.7156 36.7279C33.1424 40.1036 37.7901 42 42.6364 42C47.4826 42 52.1303 40.1036 55.5571 36.7279C58.9839 33.3523 60.9091 28.7739 60.9091 24C60.9091 19.2261 58.9839 14.6477 55.5571 11.2721C52.1303 7.89642 47.4826 6 42.6364 6ZM39.5909 12H44.1591V23.34L51.255 30.33L48.0268 33.51L39.5909 25.2V12ZM3.04545 42C2.23775 42 1.46313 41.6839 0.891993 41.1213C0.320859 40.5587 0 39.7957 0 39C0 38.2043 0.320859 37.4413 0.891993 36.8787C1.46313 36.3161 2.23775 36 3.04545 36H14.7095C15.6536 38.13 16.8718 40.14 18.2727 42H3.04545ZM6.09091 27C5.2832 27 4.50858 26.6839 3.93745 26.1213C3.36631 25.5587 3.04545 24.7956 3.04545 24C3.04545 23.2044 3.36631 22.4413 3.93745 21.8787C4.50858 21.3161 5.2832 21 6.09091 21H12.3341L12.1818 24L12.3341 27H6.09091ZM9.13636 12C8.32866 12 7.55404 11.6839 6.9829 11.1213C6.41177 10.5587 6.09091 9.79565 6.09091 9C6.09091 8.20435 6.41177 7.44129 6.9829 6.87868C7.55404 6.31607 8.32866 6 9.13636 6H18.2727C16.8718 7.86 15.6536 9.87 14.7095 12H9.13636Z"
                fill="#A14545"
              />
            </svg>
            <div className="content">
              <h1>30% FASTER</h1>
              <p>
                Experience rapid charging with our autonomous charger that gives
                30% speed boost and universal compatibility.
              </p>
            </div>
          </motion.div>
          <motion.div className="tile" style={{y: thdY, opacity: thdOpacity, scale: thdScale}}>
            <svg
              width="51"
              height="54"
              viewBox="0 0 51 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0064 18.0454C12.0064 17.0069 12.7759 16.165 13.7251 16.165H32.058C33.0072 16.165 33.7767 17.0069 33.7767 18.0454C33.7767 19.0839 33.0072 19.9258 32.058 19.9258H13.7251C12.7759 19.9258 12.0064 19.0839 12.0064 18.0454ZM9.71484 28.0742C9.71484 27.0357 10.4843 26.1938 11.4335 26.1938H13.7251C14.6744 26.1938 15.4438 27.0357 15.4438 28.0742C15.4438 29.1127 14.6744 29.9546 13.7251 29.9546H11.4335C10.4843 29.9546 9.71484 29.1127 9.71484 28.0742ZM30.3393 28.0742C30.3393 27.0357 31.1087 26.1938 32.058 26.1938H34.3496C35.2988 26.1938 36.0683 27.0357 36.0683 28.0742C36.0683 29.1127 35.2988 29.9546 34.3496 29.9546H32.058C31.1087 29.9546 30.3393 29.1127 30.3393 28.0742Z"
                fill="#A14545"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.7878 4.85717C34.3184 4.50588 33.7685 4.31876 33.2063 4.31901H11.6973C11.6971 4.31901 11.6974 4.31901 11.6973 4.31901C11.1353 4.31934 10.5853 4.50684 10.1163 4.8583C9.64718 5.20987 9.27921 5.71005 9.05802 6.29683L3.72982 20.4115C3.57671 20.8168 3.49738 21.2536 3.497 21.6946V36.9294H27.0461C27.9978 36.9294 28.7692 37.8054 28.7692 38.886C28.7692 39.9666 27.9978 40.8426 27.0461 40.8426H12.6869V45.1472C12.6869 46.0813 12.3601 46.9771 11.7785 47.6376C11.1968 48.2981 10.4079 48.6691 9.58531 48.6691H3.15237C2.32978 48.6691 1.54088 48.2981 0.959217 47.6376C0.377554 46.9771 0.0507812 46.0813 0.0507812 45.1472V21.6938C0.0514293 20.7232 0.22553 19.7613 0.562544 18.8693L5.88983 4.75697C6.37648 3.46645 7.18623 2.36547 8.21809 1.5922C9.2502 0.818742 10.4595 0.406218 11.6961 0.405762L33.205 0.405762C33.2048 0.405762 33.2052 0.405762 33.205 0.405762C34.4416 0.405364 35.6517 0.817019 36.6842 1.58972C37.7169 2.36255 38.5272 3.46257 39.0145 4.75338L44.3398 18.8666C44.3397 18.8664 44.3399 18.8669 44.3398 18.8666C44.6774 19.7605 44.8517 20.7238 44.8516 21.6964C44.8516 21.6963 44.8516 21.6966 44.8516 21.6964V24.5374C44.8516 25.6181 44.0801 26.4941 43.1285 26.4941C42.1768 26.4941 41.4054 25.6181 41.4054 24.5374V21.6964C41.4055 21.2541 41.3263 20.816 41.1727 20.4095L35.847 6.2952C35.847 6.29509 35.847 6.2953 35.847 6.2952C35.6255 5.7086 35.2571 5.2084 34.7878 4.85717ZM9.24069 40.8426H3.497V44.7559H9.24069V40.8426Z"
                fill="#A14545"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.4393 37.4922C45.0329 38.2868 44.9771 39.5083 44.3148 40.2204C42.2833 42.4045 40.7833 45.3703 39.7798 47.8762C39.2836 49.1154 38.9211 50.2107 38.6839 50.9921C38.5655 51.3821 38.4788 51.6921 38.4227 51.9006C38.3947 52.0047 38.3743 52.0834 38.3615 52.1338L38.3479 52.1878L38.3456 52.1974C38.0987 53.2221 37.206 53.8137 36.3517 53.5178C35.4972 53.2219 35.0044 52.151 35.2511 51.1258L36.7983 51.6616C35.2511 51.1258 35.251 51.1263 35.2511 51.1258L35.2522 51.121L35.2541 51.1132L35.2601 51.089L35.2808 51.0067C35.2985 50.937 35.324 50.8384 35.3576 50.7135C35.4249 50.4637 35.5244 50.1083 35.6576 49.6696C35.9236 48.7935 36.3261 47.5779 36.8766 46.203C37.9667 43.481 39.6875 40.0068 42.1652 37.3429C42.8275 36.6307 43.8457 36.6976 44.4393 37.4922Z"
                fill="#A14545"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47.1625 32.9807L41.4131 33.615C40.7399 33.6889 40.0847 33.9187 39.4872 34.2912C38.8897 34.6636 38.3607 35.1714 37.9306 35.7854C37.5006 36.3993 37.1779 37.1072 36.9813 37.8684C36.7847 38.6296 36.718 39.429 36.785 40.2207M47.1625 32.9807L47.6417 38.6851C47.7127 39.5229 47.6422 40.3705 47.4341 41.176C47.226 41.9816 46.8845 42.7307 46.4293 43.3804C45.9741 44.03 45.4142 44.5673 44.7817 44.9613C44.1493 45.3553 43.4569 45.5982 42.7444 45.676L42.4462 45.71C42.4453 45.7101 42.4443 45.7102 42.4434 45.7103C41.0758 45.8594 39.7136 45.3664 38.6536 44.3387C37.593 43.3103 36.9212 41.8298 36.785 40.2207M47.7313 28.9828C48.3739 28.9119 49.0143 29.1432 49.5125 29.6262C50.0106 30.1092 50.3259 30.8047 50.3895 31.5605L50.9555 38.2982C50.9555 38.2981 50.9555 38.2983 50.9555 38.2982C51.07 39.6501 50.956 41.0155 50.6202 42.3154C50.2844 43.6154 49.7333 44.8243 48.9987 45.8727C48.2642 46.9211 47.3606 47.7881 46.34 48.4239C45.3205 49.059 44.2045 49.4508 43.0559 49.5768C43.0547 49.577 43.0535 49.5771 43.0522 49.5772L42.7554 49.6111C40.5111 49.8573 38.2752 49.0489 36.5358 47.3623C34.7964 45.6757 33.6947 43.2479 33.4713 40.609C33.3608 39.3033 33.4709 37.9847 33.7951 36.7292C34.1194 35.4737 34.6515 34.3061 35.3609 33.2935C36.0702 32.2809 36.9427 31.4433 37.9282 30.829C38.9134 30.2149 39.9921 29.836 41.1022 29.7141L47.7313 28.9828C47.7313 28.9828 47.7312 28.9828 47.7313 28.9828Z"
                fill="#A14545"
              />
            </svg>

            <div className="content">
              <h1>FOREIGN OBJECT DETECTION (F.O.D.)</h1>
              <p>
                Through the proximity sensors and thermal sensors incorporated
                in the device to detect objects, the charging could be halted
                until it is removed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="go_wireless">
        <br />
        <br />
        <br />
        <div ref={wirelessRef} className="title">
          <motion.div className="title_h"
          variants={wirelessVariants}
            initial="hidden"
            animate={wirelessAnimationControls}
          >
            <div className="svg">
              <svg
                width="101"
                height="2"
                viewBox="0 0 101 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-41 1L101 0.999988" stroke="black" />
              </svg>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="13" height="13" fill="black" />
              </svg>
            </div>
            <h1>
              <span>GO WIRELESS</span>WITH OUR TECH
            </h1>
          </motion.div>
          <button>Dive In</button>
        </div>
        <div  ref={myRef} className="videoWrapper">
        <ReactPlayer
        url='https://www.youtube.com/watch?v=Lmt_CGlEQ-4&start=14&end=62'
        width="80%"
        height='80%'
        playing={myElementIsVisible}
        muted={true}
        playbackRate= {1.25}
        controls={false}
        loop={true}
      />

      
        </div>
        
        <br />
        <br />
        <motion.div className="end_line"
          variants={wirelessVariants}
          initial="hiddenEnd"
          whileInView="visibleEnd"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="13"
              height="13"
              transform="matrix(1 0 0 -1 0 13)"
              fill="black"
            />
          </svg>

          <svg
            width="870"
            height="2"
            viewBox="0 0 870 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L911 0.99992" stroke="black" />
          </svg>
        </motion.div>
        <br />
        <br />
        <br />
      </div>

      <div className="features">
        <div className="title">
          <motion.div className="title_h"
          variants={lftRightVariant}
          initial="hidden"
          whileInView="visible">
            <div className="svg">
              <svg
                width="101"
                height="2"
                viewBox="0 0 101 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-41 1L101 0.999988" stroke="black" />
              </svg>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="13" height="13" fill="black" />
              </svg>
            </div>
            <h1>
              <span>FEATURES</span>
            </h1>
          </motion.div>
          <button>Explore</button>
        </div> 
        <div className="content">
          <motion.div className="tiles"
            whileHover={{
              scale: 1.15
            }}
            whileTap={{
              scale: 0.95
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          >
            <img src="../assets/Home/home_3_1.png" alt="" />
            <p>Mobile-operated</p>
          </motion.div>
          <motion.div className="tiles"
          whileHover={{
            scale: 1.15
          }}
          whileTap={{
            scale: 0.95
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}>
            <img src="../assets/Home/home_3_3.png" alt="" />
            <p>Range anxiety killer</p>
          </motion.div>
          <motion.div className="tiles"
          whileHover={{
            scale: 1.15
          }}
          whileTap={{
            scale: 0.95
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}>
            <img src="../assets/Home/home_3_2.png" alt="" />
            <p>AI powered</p>
          </motion.div>
          <motion.div className="tiles"
          whileHover={{
            scale: 1.15
          }}
          whileTap={{
            scale: 0.95
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}>
            <img src="../assets/Home/home_3_4.png" alt="" />
            <p>Agnostic charging</p>
          </motion.div>
          <motion.div className="tiles"
          whileHover={{
            scale: 1.15
          }}
          whileTap={{
            scale: 0.95
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}
          >
            <img src="../assets/Home/home_3_5.png" alt="" />
            <p>Techno- economical</p>
          </motion.div>
        </div>
      </div>
      <div className="use_case">
        <div className="title">
          <motion.div className="title_h"
          variants={lftRightVariant}
          initial="hidden"
          whileInView="visible">
            <div className="box" />
            <hr />
            <div className="svg">
              <svg
                width="101"
                height="2"
                viewBox="0 0 101 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-41 1L101 0.999988" stroke="black"
                />
              </svg>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="13" height="13" fill="black" />
              </svg>
            </div>
            <h1>
              WHAT ARE THE<span>USE CASES</span>
            </h1>
          </motion.div>
          <button>Learn More</button>
        </div>
        <div className="grid">
          <div className="grid1">
            <div className="ti">
              <img src="../assets/Home/home_usecase_1.png" alt=""/>
            </div>
            <div className="ti text t1">
              <p>
                Enables remote control of wireless charging through the app,
                providing real-time monitoring, and scheduling for enhanced
                convenience and efficiency
              </p>
              <h1>Connectivity</h1>
            </div>
            <div className="ti">
              <img src="../assets/Home/home_usecase_2.png" alt="" />
            </div>
            <div className="ti  text t2">
              <h1>Retrofitted Accessary</h1>
              <div className="l l2"></div>
            </div>
            <div className="ti">
              <img src="../assets/Home/home_usecase_3.png" alt="" />
            </div>
            <div className="ti  text t3">
              <h1>Convenience</h1>
              <p>
                Eliminating the need for physical connections or plugs, and
                providing a more user-friendly and efficient charging process
                for everyday use
              </p>
              <div className="l l3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="numbers">
        <div className="title_last">
          <div className="title_h">
            <h1>
              HOW ABOUT SOME<span>NUMBERS</span>
            </h1>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="13" height="13" fill="black" />
            </svg>
            <hr />
          </div>
        </div>

        <div className="speedometerS">
          <div className="subDiv">
          <Speedometer1 Rate={247} />
          <h1 className="num1"> <Number n={247}/> </h1>
          <h1 className="subHead">EV stations in India</h1>
          </div>

          <div className="subDiv">
          <Speedometer2 Rate={52} />
          <h1 className="num2"> <Number n={52}/> </h1>
          <h1 className="subHead">Mishappenings around EV hardware</h1>
          </div>

          <div className="subDiv">
          <Speedometer3 Rate={363} />
          <h1 className="num3"><Number n={363}/> </h1>
          <h1 className="subHead">EV on roads in India</h1>
          </div>

          
        </div>

      </div>

      <div className="partners">
        <div className="title t">
          <div className="title_h">
            <h1>
              OUR<span>STRATEGIC PARTENERS</span>
            </h1>
          </div>
          <button>Learn More</button>
        </div>
        <div className="top_devide">
          <hr />
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="13" height="13" fill="black" />
          </svg>
        </div>
        <div className="container">
        <div className="lft"/>
        <div className="parteners_li"> 
        <Slider {...settings} className='carouselKaItem'>
          <motion.img src="../assets/Home/partner_1.png" alt="" 
            whileHover={{scale: 1.15}}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          />
          <motion.img src="../assets/Home/partner_2.png" alt=""
          whileHover={{scale: 1.15}}
          transition={{
            type: "spring",
            stiffness: 60,
          }}/>
          <motion.img src="../assets/Home/partner_3.png" alt=""
          whileHover={{scale: 1.15}}
          transition={{
            type: "spring",
            stiffness: 60,
          }}/>
          <motion.img src="../assets/Home/partner_4.png" alt=""
          whileHover={{scale: 1.15}}
          transition={{
            type: "spring",
            stiffness: 60,
          }}/>
          <motion.img src="../assets/Home/partner_5.png" alt=""
          whileHover={{scale: 1.15}}
          transition={{
            type: "spring",
            stiffness: 60,
          }}/>
        </Slider>          
        </div>
        <div className="rght"/>
        </div>
        
        <div className="bottom_devide">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="13" height="13" fill="black" />
          </svg>
          <hr />
        </div>
      </div>
      
    </div>
  );
}
