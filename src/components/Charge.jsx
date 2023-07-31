import React  from "react";
import Landing from "./Landing";
import Charge_page from "./Charge_page";
import Home_about from "./Charge_about";

export default function Charge() {
  // const history = useNavigate();
  return (
    <div id="Charge">
      <Landing Id="Charge_landing">
        <h1>ELEVATING EV CHARGING <br /> NETWORKS WITH <br /> OPERATOR-CENTRIC <br /> SOLUTIONS</h1>
      </Landing>
      <Charge_page />
      <Home_about />
    </div>
  );
}
