import React from 'react'
// import logo from '../../public/assets/logo.png';


export default function Nav() {
  return (
    <div id='nav'>
        <ul>
            <a href=""><li className="nav_elements logo"><img src="../assets/logo.png" alt="" /></li></a>
            <a href=""><li className="nav_elements">Home</li></a>
            <a href=""><li className="nav_elements">Technology</li></a>
            <a href=""><li className="nav_elements">Our Produts</li></a>
            <a href=""><li className="nav_elements">Use Case</li></a>
            <a href=""><li className="nav_elements">Contact</li></a>
            <a href=""><li className="nav_elements">News Room</li></a>
            <a href=""><li className="nav_elements">Contact</li></a>
            <a href=""><li className="nav_elements">Career</li></a>
        </ul>
    </div>
  )
}
