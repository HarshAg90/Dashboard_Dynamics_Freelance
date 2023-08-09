import React from 'react'
import Landing from '../components/Landing'

export default function Market() {
  return (
    <div id='Market'>
      <Landing>
        <h1>REVOLUTIONIZE INFRUSTRUCTURE FOR SEAMLESS ELECTRIC MOBILITY</h1>
        <img src="../assets/market/market_home_2.png" alt="" />
      </Landing>
      <div className="body">
        <div className="div1">
            <img src="../assets/market/market_2.png" alt="" />
            <p className="p1">Hybrid Electric Vehicles Plug-In Hybrid Electric Vehicles Battery Electric Vehicles</p>
            <div className="p2">
                <h1>What are Electric Vehicles</h1>
                <p>EVs are vehicles that run on electricity and an electric motor instead of a standard internal combustion engine that burns gasoline. These electric motors are driven by electricity, stored in batteries.</p>
            </div>
        </div>
        <p className="div2">
        Batteries can only be charged with direct current (DC) electric power, while most electricity is delivered from the power grid as alternating current (AC). Therefore, for charging electric vehicles, a charging station or electric vehicle supply equipment (EVSE) is required. We provide EVSE as a wireless technology in three applications.
        </p>
        <div className="div3 tile">
            <div className="p">
                <img src="../assets/market/market_3.png" alt="" />
            </div>
            <div className="pm">
                <h1>Static Charging</h1>
                <p>When the vehicle is stationary, it can be charged conveniently by parking it in a designated space or a garage equipped with a Dash Vehicle Pad. This system features a wireless charger on the ground and a corresponding receiver, known as the dash car pad, installed underneath the vehicle.</p>
            </div>
            <div className="p">
                <p>To commence charging, aligning the receiver and transmitter is necessary before leaving the vehicle. Factors such as the distance between the transmitter and receiver, the pad sizes, and the power level of the AC supply impact the charging duration.</p>
            </div>
        </div>
        <div className="div4 tile">
            <div className="p">
                <p>Semi-dynamic charging refers to a scenario where vehicles operate in a cyclic pattern, with regular intervals of starting and stopping along a predetermined route.</p>
            </div>
            <div className="pm">
                <h1>Semi-dynamic Charging</h1>
                <p>During this process, electric vehicles (EVs) can rapidly acquire their initial charge, while power snacking becomes a viable solution to alleviate range concerns for both commercial and residential users.</p>
            </div>
            <div className="p">
                <img src="../assets/market/market_4.png" alt="" />
            </div>
        </div>
        <div className="div5 tile">
            <div className="p">
                <img src="../assets/market/market_5.png" alt="" />
            </div>
            <div className="pm">
                <h1>Dynamic Charging</h1>
                <p>During this process, electric vehicles (EVs) can rapidly acquire their initial charge, while power snacking becomes a viable solution to alleviate range concerns for both commercial and residential users.</p>
            </div>
            <div className="p">
                <p>As a result, the vehicle's battery can be consistently replenished while it is in motion, traversing roads and highways.
We are developing a dynamic wireless EV charging system that has the potential to recharge moving cars, which could help eliminate range anxiety.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
