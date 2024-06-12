import React from 'react'
import Seamless_mobile from "../../Assests/seamless_mobile_img.png";
import SeamLeassIntegration from "../../../src/Assests/seamless_integration.png";
import './Seamless.css'
function Seamless() {
  return (
    <div>
       <div className="seamless_integration">
        <div className="seamless_integration_abbrevation">
          <span>
            Seamless integrations with your favorite e-stores, CRMs, and more.
          </span>
        </div>
        <div className="seamless_integration_main">
          <img src={SeamLeassIntegration} className="seamless_img" />
          <img src={Seamless_mobile} className="seamless_mobile_img" />
        </div>
      </div>
    </div>
  )
}

export default Seamless
