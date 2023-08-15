import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from "react-router-dom";
import { motion,  useScroll } from "framer-motion";


const itemsUseCase = [
  {
    key: '1',
    label: (
      <a rel="noopener noreferrer" href="/Ev_users">
        Ev Users
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="/ev_manufacturer">
        EV Manufacturers
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a rel="noopener noreferrer" href="/fleets">
        Fleets
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a rel="noopener noreferrer" href="/charge">
        Charge Point Operators
      </a>
    ),
  }
];

const itemsTech = [
  {
    key: '1',
    label: (
      <a rel="noopener noreferrer" href="/Technology">
        Our Tech
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="/market">
        Market
      </a>
    ),
  }
];

const itemsAbout = [
  {
    key: '1',
    label: (
      <a rel="noopener noreferrer" href="/about">
        About Us
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="/team">
        Team
      </a>
    ),
  }
];

const itemsNews = [
  {
    key: '1',
    label: (
      <a rel="noopener noreferrer" href="/News_room">
        News
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="/Blogs">
        Blog
      </a>
    ),
  }
];


export default function Nav() {

  /** this hook gets the scroll y-axis **/
  const { scrollY } = useScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = React.useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    // if(scrollY?.current <= 200) {
    //   backgroundColor = "blue";
    //   setHidden(false)
    // }
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
      // backgroundColor = "white";
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 10 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 }
  };

  // Calculate the background color based on scrollY?.current value
const backgroundColor = scrollY?.current >= 500 && "white";

// Use the calculated backgroundColor in the variants
variants.visible = { ...variants.visible, background: backgroundColor };


  return (
    <motion.div id='nav' variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <ul>
            <Link to="/" className='logo'><li className="nav_elements logo"><img src="../assets/logo.png" alt="" /></li></ Link>
            <Link to="/"><li className="nav_elements">Home</li></ Link>
            <Dropdown
              menu={{
                items: itemsAbout,
                forceSubMenuRender: true
              }}
              placement="top"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                <Link><li className="nav_elements">About</li></ Link>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items: itemsTech,
                forceSubMenuRender: true
              }}
              placement="top"
              
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                <Link><li className="nav_elements">Technology</li></ Link>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link to="/Products"><li className="nav_elements">Our Products</li></ Link>
            <Dropdown
              menu={{
                items: itemsUseCase,
                forceSubMenuRender: true
              }}
              placement="top"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Link to="/Use_case"><li className="nav_elements">Use cases</li></ Link>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link to="/Contacts"><li className="nav_elements">Contact</li></ Link>
            <Dropdown
              menu={{
                items: itemsNews,
                forceSubMenuRender: true
              }}
              placement="top"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                <Link><li className="nav_elements">News Room</li></ Link>
                
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link to="/Careers"><li className="nav_elements">Career</li></ Link>
        </ul>
    </motion.div>
  )
}
