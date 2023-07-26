import React from 'react'

export default function Charge_page() {
  return ( 
    <div id='Charge_page' >
      <div className="heading">
        <h1>CHARGE POINT OPERATORS</h1>
      </div>
      <div className="subHeading">
        <h5>
        Unlock the full potential of your charging infrastructure with Dash Dynamic. Our comprehensive wireless charging<br/>solution enhances operational efficiency and user experience, empowering Charge Point Operators (CPOs) to stay ahead<br/>in the evolving EV market.
        </h5>
      </div>

      <div class="carSection">
  <img src="../assets/charge/charger.png" alt="" class="charger" />
  <img src="../assets/charge/car.png" alt="" class="car" />

  <div class="line line1">
    <img src="../assets/charge/vector-1.svg" alt="" />
    <h3>High maintenance cost</h3>
  </div>
  <div class="line line2">
    <img src="../assets/charge/vector-2.svg" alt="" />
    <h3>Complex hardware and software challenges</h3>
  </div>
  <div class="line line3">
    <img src="../assets/charge/vector-3.svg" alt="" />
    <h3>Safety hazards</h3>
  </div>
</div>


    </div>
  )
}
