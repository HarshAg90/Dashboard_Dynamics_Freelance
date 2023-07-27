import React from 'react'
import { Link } from "react-router-dom";
// import logo from '../../public/assets/logo.png';


export default function Nav() {
  return (
    <div id='nav'>
        <ul>
            <Link to="/"><li className="nav_elements logo"><img src="../assets/logo.png" alt="" /></li></ Link>
            <Link to="/"><li className="nav_elements">Home</li></ Link>
            <Link to="/Technology"><li className="nav_elements">Technology</li></ Link>
            <Link to="/Products"><li className="nav_elements">Our Produts</li></ Link>
            <Link to="/Use_cases"><li className="nav_elements">Use Case</li></ Link>
            <Link to="/Contacts"><li className="nav_elements">Contact</li></ Link>
            <Link to="/News_rooms"><li className="nav_elements">News Room</li></ Link>
            <Link to="/Careers"><li className="nav_elements">Career</li></ Link>
        </ul>
    </div>
  )
}
