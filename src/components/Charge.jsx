import React  from "react";
import Charge_landing from "./Charge_Landing";
import Charge_page from "./Charge_page";
import Home_about from "./Charge_about";

export default function Charge() {
  // const history = useNavigate();
  return (
    <div id="Charge">
      <Charge_landing />
      <Charge_page />
      <Home_about />
    </div>
  );
}
