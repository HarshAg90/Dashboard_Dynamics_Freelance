import React from 'react'
import Home_landing from '../components/Home_landing'
import Charge_page from '../components/Charge_page'
import Home_about from '../components/Home_about'
import Footer from '../components/Footer'


export default function Home() {

  return (
    <div id='Home'>
        <Home_landing/>
        <Charge_page />
        <Home_about/>
    </div>
  )
}
