import React, { useRef, useEffect } from 'react';
import {motion, useInView, useAnimation} from "framer-motion";
import EV_users_Landing from '../components/EV_users_Landing';

const tiles3Variant = {
    hidden: {
      opacity: 0.75, y: "10%"
    },
    visible: {
      opacity: 1, y: "0%",
    }
}


export default function EV_users() {

  //PART1
  const tileRef = useRef(null);
  const isTileInView = useInView(tileRef, {once: true});
  const tileAnimationControls = useAnimation();

  useEffect(() => {
    if(isTileInView){
        // alert("VISIBLE")
      tileAnimationControls.start("visible");
    }
  }, [isTileInView]);

  //PART3
  const tile3Ref = useRef(null);
  const isTile3InView = useInView(tile3Ref, {once: true});
  const tile3AnimationControls = useAnimation();

  useEffect(() => {
    if(isTile3InView){
        // alert("VISIBLE")
      tile3AnimationControls.start("visible");
    }
  }, [isTile3InView]);


  return (
    <div id='Ev_users'>
        <EV_users_Landing/>        
        <div className="content">
            <div className="part1">
                <p>From eliminating range anxiety to providing a seamless wireless charging experience and offering cost-efficient solutions, we have <br /> designed our services to make EV ownership as convenient and worry-free as possible.</p>
                <div ref={tileRef} className="tiles">
                    <motion.div className="tile"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}
                    >
                        <div>

<svg width="212" height="233" viewBox="0 0 212 233" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M178 96.5V60H3V230H178V193" stroke="url(#logo-gradient)" stroke-width="5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M180.6 31.1429C180.6 29.9594 181.466 29 182.533 29H194.133V33.2857H182.533C181.466 33.2857 180.6 32.3263 180.6 31.1429Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M176.733 39.7143C176.733 38.5308 177.599 37.5714 178.667 37.5714H190.267V41.8571H178.667C177.599 41.8571 176.733 40.8978 176.733 39.7143Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M172.867 48.2857C172.867 47.1022 173.732 46.1429 174.8 46.1429H186.4V50.4286H174.8C173.732 50.4286 172.867 49.4692 172.867 48.2857Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M169 56.8571C169 55.6737 169.866 54.7143 170.933 54.7143H182.533V59H170.933C169.866 59 169 58.0406 169 56.8571Z" fill="black"/>
<path d="M198 29L194.133 33.2857V29H198Z" fill="black"/>
<path d="M194.133 37.5714L190.267 41.8571V37.5714H194.133Z" fill="black"/>
<path d="M190.267 46.1429L186.4 50.4286V46.1429H190.267Z" fill="black"/>
<path d="M186.4 54.7143L182.533 59V54.7143H186.4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M128.866 0.0546875C130.478 0.0546875 131.785 1.34528 131.785 2.9373V7.74166H143.737V2.9373C143.737 1.34528 145.044 0.0546875 146.656 0.0546875C148.268 0.0546875 149.574 1.34528 149.574 2.9373V7.85044C150.544 8.03738 151.474 8.46488 152.244 9.13032C153.325 10.0645 154.022 11.4206 154.022 12.9304V18.3112C154.022 21.2481 152.669 23.9729 150.42 25.9161C148.184 27.8487 145.225 28.8808 142.208 28.8808H140.68V64.4331C140.68 65.5736 141.201 66.7593 142.288 67.6992C143.388 68.6498 144.954 69.2374 146.656 69.2374H186.683C188.384 69.2374 189.95 68.6498 191.05 67.6992C192.138 66.7593 192.659 65.5736 192.659 64.4331V45.2156C192.659 43.6236 193.966 42.333 195.578 42.333C197.19 42.333 198.496 43.6236 198.496 45.2156V64.4331C198.496 67.37 197.143 70.0947 194.894 72.038C192.658 73.9705 189.699 75.0027 186.683 75.0027H146.656C143.639 75.0027 140.68 73.9705 138.444 72.038C136.196 70.0947 134.842 67.37 134.842 64.4331V28.8808H133.314C130.297 28.8808 127.338 27.8487 125.102 25.9161C122.853 23.9729 121.5 21.2481 121.5 18.3112V12.9304C121.5 11.4206 122.197 10.0645 123.278 9.13032C124.048 8.46489 124.977 8.03738 125.947 7.85044V2.9373C125.947 1.34528 127.254 0.0546875 128.866 0.0546875ZM127.337 13.5069V18.3112C127.337 19.4518 127.858 20.6375 128.946 21.5774C130.046 22.528 131.612 23.1156 133.314 23.1156H142.208C143.91 23.1156 145.476 22.528 146.576 21.5774C147.664 20.6375 148.185 19.4518 148.185 18.3112V13.5069H127.337Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M200.001 4.50008C201.348 5.37342 201.489 6.73908 200.604 8.07018L195.5 16.2279L201.5 16.3278L208 16.3278C209.065 16.3435 210.307 16.5952 210.806 17.5242C211.304 18.4533 211.084 19.1221 210.5 20.0014L203.219 31.172C202.335 32.5031 200.525 32.8742 199.178 32.0009C197.83 31.1275 198.616 29.3325 199.5 28.0014L201.82 24.339L204.14 20.6766L196.739 20.593L190.5 20.5014C189.436 20.4857 188.501 20.5 188.001 19.5C187.5 18.5 188.416 16.8792 189 15.9999L193.001 10.5006L196.739 5.50176C197.623 4.17066 198.501 4.00064 200.001 4.50008Z" fill="black"/>
<defs>
        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stop-color="#C9C8C8">
                <animate attributeName="stop-color" values="#C9C8C8; #FFFFFF; #C9C8C8" dur="4s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stop-color="#FFFFFF">
                <animate attributeName="stop-color" values="#FFFFFF; #C9C8C8; #FFFFFF" dur="4s" repeatCount="indefinite"/>
            </stop>
        </linearGradient>
    </defs>
</svg>

                        </div>

                      <p>Cable and Cord Issues</p>
                    </motion.div>
                    <motion.div className="tile"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}
                    >
                        <div>
                        <svg width="218" height="233" viewBox="0 0 218 233" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M177.5 96.5V60H2.5V230H177.5V193" stroke="url(#logo-gradient)" stroke-width="5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M168.059 0.0546875H172.034C176.93 0.0546875 180.88 0.0546875 183.985 0.437779C187.209 0.830693 189.923 1.68201 192.079 3.64985C194.235 5.62097 195.159 8.10288 195.596 11.0497C196.012 13.8885 196.012 17.5001 196.012 21.976V49.169H198.952C203.264 49.169 206.756 52.3614 206.756 56.3036V56.5361C206.756 57.1874 207.039 57.812 207.543 58.2726C208.046 58.7331 208.729 58.9918 209.442 58.9918C210.154 58.9918 210.837 58.7331 211.341 58.2726C211.845 57.812 212.128 57.1874 212.128 56.5361V43.57L206.892 41.9754C205.288 41.4862 203.893 40.5483 202.905 39.2943C201.916 38.0403 201.384 36.5338 201.384 34.988V27.0675C201.384 25.1137 202.233 23.2398 203.744 21.8582C205.255 20.4766 207.305 19.7004 209.442 19.7004H212.099C211.924 17.8325 210.976 16.096 209.449 14.8446C209.172 14.6253 208.889 14.4125 208.6 14.2062L204.184 10.9777C203.904 10.778 203.67 10.5293 203.495 10.2462C203.321 9.96313 203.21 9.65118 203.168 9.32847C203.126 9.00575 203.155 8.67869 203.253 8.36623C203.35 8.05378 203.515 7.76214 203.737 7.50822C203.958 7.25431 204.233 7.04316 204.545 6.88703C204.857 6.73089 205.199 6.63287 205.553 6.59864C205.906 6.56442 206.263 6.59466 206.604 6.68763C206.944 6.7806 207.261 6.93444 207.537 7.14024L212.013 10.4145C212.45 10.7354 212.751 10.9548 213.034 11.1873C215.681 13.3565 217.279 16.3967 217.479 19.6415C217.5 19.9853 217.5 20.3389 217.5 20.853V56.5361C217.5 58.49 216.651 60.3639 215.14 61.7455C213.629 63.1271 211.579 63.9033 209.442 63.9033C207.305 63.9033 205.255 63.1271 203.744 61.7455C202.233 60.3639 201.384 58.49 201.384 56.5361V56.3036C201.384 55.714 201.128 55.1485 200.671 54.7316C200.215 54.3146 199.597 54.0804 198.952 54.0804H196.012V65.5404H196.907C197.619 65.5404 198.303 65.7991 198.806 66.2597C199.31 66.7202 199.593 67.3448 199.593 67.9961C199.593 68.6474 199.31 69.272 198.806 69.7326C198.303 70.1931 197.619 70.4518 196.907 70.4518H143.186C142.474 70.4518 141.79 70.1931 141.287 69.7326C140.783 69.272 140.5 68.6474 140.5 67.9961C140.5 67.3448 140.783 66.7202 141.287 66.2597C141.79 65.7991 142.474 65.5404 143.186 65.5404H144.081V21.976C144.081 17.5001 144.081 13.8885 144.5 11.0497C144.93 8.10288 145.861 5.62097 148.014 3.64985C150.17 1.67873 152.884 0.833968 156.108 0.437779C159.213 0.0546875 163.163 0.0546875 168.059 0.0546875ZM149.453 65.5404H190.64V22.1561C190.64 17.4575 190.632 14.1767 190.271 11.7046C189.916 9.30127 189.268 8.03085 188.279 7.12387C187.287 6.21689 185.898 5.62752 183.265 5.30337C180.561 4.97266 176.977 4.96612 171.837 4.96612H168.256C163.117 4.96612 159.528 4.97266 156.824 5.30337C154.195 5.62752 152.806 6.22017 151.814 7.12387C150.822 8.03085 150.177 9.30127 149.822 11.7079C149.461 14.1734 149.453 17.4542 149.453 22.1561V65.5404ZM212.128 38.3966V24.6118H209.442C208.729 24.6118 208.046 24.8706 207.543 25.3311C207.039 25.7916 206.756 26.4163 206.756 27.0675V34.988C206.756 36.0456 207.497 36.9854 208.593 37.3161L212.128 38.3966ZM164.513 13.1518H175.58C177.131 13.1518 178.552 13.1518 179.706 13.2926C180.981 13.4498 182.324 13.8165 183.43 14.8315C184.54 15.8433 184.942 17.0712 185.113 18.2368C185.267 19.2944 185.267 20.5943 185.267 22.0088V22.3035C185.267 23.7212 185.267 25.0211 185.113 26.0754C184.942 27.2411 184.54 28.4689 183.43 29.4807C182.324 30.4957 180.981 30.8624 179.706 31.0196C178.549 31.1604 177.127 31.1604 175.58 31.1604H164.513C162.963 31.1604 161.541 31.1604 160.387 31.0196C159.113 30.8624 157.769 30.4957 156.663 29.4807C155.553 28.4689 155.151 27.2411 154.98 26.0754C154.826 25.0178 154.826 23.718 154.826 22.3035V22.0088C154.826 20.591 154.826 19.2911 154.98 18.2368C155.151 17.0712 155.553 15.8433 156.663 14.8315C157.769 13.8165 159.113 13.4498 160.387 13.2926C161.544 13.1518 162.966 13.1518 164.513 13.1518ZM160.47 18.299L160.459 18.3023L160.456 18.3121C160.378 18.4986 160.328 18.6933 160.305 18.8917C160.205 19.5793 160.198 20.5419 160.198 22.1561C160.198 23.7703 160.205 24.733 160.305 25.4206C160.328 25.6189 160.378 25.8137 160.456 26.0001L160.459 26.01L160.47 26.0132C160.674 26.0839 160.887 26.1301 161.104 26.1507C161.856 26.2424 162.909 26.249 164.674 26.249H175.419C177.184 26.249 178.237 26.2424 178.989 26.1507C179.206 26.1302 179.419 26.0839 179.623 26.0132L179.634 26.01L179.637 26.0001C179.715 25.8137 179.765 25.6189 179.788 25.4206C179.888 24.733 179.895 23.7703 179.895 22.1561C179.895 20.5419 179.888 19.5793 179.788 18.8917C179.765 18.6933 179.715 18.4985 179.637 18.3121L179.634 18.3023L179.623 18.299C179.419 18.2283 179.206 18.1821 178.989 18.1615C178.237 18.0698 177.184 18.0633 175.419 18.0633H164.674C162.909 18.0633 161.856 18.0698 161.104 18.1615C160.887 18.1821 160.674 18.2284 160.47 18.299ZM158.407 51.6247C158.407 50.9734 158.69 50.3488 159.194 49.8882C159.697 49.4277 160.381 49.169 161.093 49.169H179C179.712 49.169 180.396 49.4277 180.899 49.8882C181.403 50.3488 181.686 50.9734 181.686 51.6247C181.686 52.276 181.403 52.9006 180.899 53.3611C180.396 53.8217 179.712 54.0804 179 54.0804H161.093C160.381 54.0804 159.697 53.8217 159.194 53.3611C158.69 52.9006 158.407 52.276 158.407 51.6247Z" fill="black"/>
<defs>
        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stop-color="#C9C8C8">
                <animate attributeName="stop-color" values="#C9C8C8; #FFFFFF; #C9C8C8" dur="4s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stop-color="#FFFFFF">
                <animate attributeName="stop-color" values="#FFFFFF; #C9C8C8; #FFFFFF" dur="4s" repeatCount="indefinite"/>
            </stop>
        </linearGradient>
    </defs>
</svg>

                        </div>
                    <p>Range Anxiety</p>
                    </motion.div>
                    <motion.div className="tile"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}
                    >
                    <svg width="216" height="235" viewBox="0 0 216 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M177.5 98.5V62H2.5V232H177.5V195" stroke="url(#logo-gradient)" stroke-width="5"/>
                        <path d="M158.5 42.271H166.1V27.0815H158.5V42.271ZM173.7 57.4604H181.3V53.6631C181.3 52.5239 180.952 51.6062 180.255 50.91C179.558 50.2138 178.64 49.8657 177.5 49.8657C176.36 49.8657 175.442 50.2138 174.745 50.91C174.048 51.6062 173.7 52.5239 173.7 53.6631V57.4604ZM188.9 42.271H196.5V27.0815H188.9V42.271ZM177.5 76.4473C172.243 76.4473 167.303 75.4498 162.68 73.4549C158.057 71.4601 154.035 68.7551 150.615 65.34C147.195 61.9223 144.488 57.9035 142.494 53.2833C140.501 48.6632 139.503 43.7266 139.5 38.4736C139.5 33.2206 140.498 28.284 142.494 23.6639C144.491 19.0438 147.198 15.0249 150.615 11.6073C154.035 8.18966 158.057 5.48467 162.68 3.49232C167.303 1.49997 172.243 0.502532 177.5 0.5C182.757 0.5 187.697 1.49744 192.32 3.49232C196.943 5.4872 200.965 8.19219 204.385 11.6073C207.805 15.0249 210.513 19.0438 212.509 23.6639C214.506 28.284 215.503 33.2206 215.5 38.4736C215.5 43.7266 214.502 48.6632 212.506 53.2833C210.509 57.9035 207.802 61.9223 204.385 65.34C200.965 68.7576 196.943 71.4639 192.32 73.4587C187.697 75.4536 182.757 76.4498 177.5 76.4473ZM177.5 68.8525C185.987 68.8525 193.175 65.9096 199.065 60.0237C204.955 54.1377 207.9 46.9544 207.9 38.4736C207.9 29.9929 204.955 22.8095 199.065 16.9236C193.175 11.0377 185.987 8.09473 177.5 8.09473C169.013 8.09473 161.825 11.0377 155.935 16.9236C150.045 22.8095 147.1 29.9929 147.1 38.4736C147.1 46.9544 150.045 54.1377 155.935 60.0237C161.825 65.9096 169.013 68.8525 177.5 68.8525Z" fill="black"/>
                        <defs>
        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stop-color="#C9C8C8">
                <animate attributeName="stop-color" values="#C9C8C8; #FFFFFF; #C9C8C8" dur="4s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stop-color="#FFFFFF">
                <animate attributeName="stop-color" values="#FFFFFF; #C9C8C8; #FFFFFF" dur="4s" repeatCount="indefinite"/>
            </stop>
        </linearGradient>
    </defs>
                        </svg>

                        <p>Cost Management Challenges</p>
                    </motion.div>
                </div>
            </div>


            <div className="part_2">
                <img src="../assets/EV_users/ev_user_1.png" alt="" />
                <div className="points">
                    <div className="text">
                    <h1>Simplifying Charging with Cable Management</h1>
                    </div>
                    <div className="text odd">
                    <h1>Eliminating Range Anxiety</h1>
                    </div>
                    <div className="text">
                    <h1>Streamlined Cost Management</h1>
                    </div>
                </div>
            </div>


            <div className="part_3">
                <h1>With our wireless charging platform solutions, EV users can:</h1>
                <div ref={tile3Ref} className="tiles">
                    <motion.div className="tile"
                        variants={tiles3Variant}
                        initial="hidden"
                        animate={tile3AnimationControls}
                        transition= {{
                            type: "spring",
                            stiffness: 50,
                          }}
                    >
                        <img src="../assets/bullet_pic.png" alt="" />
                        <p>Wireless charging begins automatically when the vehicle is parked over the charging pad and stops when fully charged, ensuring worry-free and convenient charging every time. <br/><br/> Remote-enabled Charging: We enable EV users to control and monitor their charging sessions remotely, using our mobile app, ensuring a reliable and accessible charging routine.</p>
                        <a href="">...more</a>
                    </motion.div>
                    <motion.div className="tile"
                        variants={tiles3Variant}
                        initial="hidden"
                        animate={tile3AnimationControls}
                        transition= {{
                            type: "spring",
                            stiffness: 40,
                            delay: 0.1
                          }}
                    >
                        <img src="../assets/bullet_pic.png" alt="" />
                        <p>We provide a user-friendly mobile app that offers real-time information on charging station locations and availability. It provides accurate range estimations, real-time charging station status updates, and recommends fast-charging stations, alleviating range anxiety for EV users.</p>
                        <a href="">...more</a>
                    </motion.div>
                    <motion.div className="tile"
                        variants={tiles3Variant}
                        initial="hidden"
                        animate={tile3AnimationControls}
                        transition= {{
                            type: "spring",
                            stiffness: 30,
                            delay: 0.2
                          }}
                    >
                        <img src="../assets/bullet_pic.png" alt="" />
                        <p>We benefit our customers with cost-efficient solutions. By dividing costs between the customer and provider, users only need to purchase the vehicle pad. Our high-efficiency technology minimizes electricity costs, offering affordable and efficient charging for electric vehicle owners.</p>
                        <a href="">...more</a>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}
