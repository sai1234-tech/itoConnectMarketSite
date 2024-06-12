import React from 'react'
import './Footer.css'
import ItoCLogo from "../../Assests/iToC_Logo.png";
import Facebook from "../../Assests/Facebook.png";
import LinkedIn from '../../Assests/Linkedin.png';
import Twitter from '../../Assests/Twitter.png';

function Footer() {
  return (
    <>
    <div className='itoconnect_market_footer_main_div'>
        <div>
        <div className='itoconnect_marketsite_footer'>
             <div className='footer_logo_section_left'>
              <div className='itoconnect_log_text'>
              <img src={ItoCLogo}  alt="" className='itoconnect_logo'/>
                   <span className='itoconnect_name'> iToConnect</span>
                   {/* <p className='itoconnect_name'> iToConnect</p> */}

              </div>
                    

                   <div className='itoconnect_name_footer_'>
                      <span className='itoconnect_name_footer_abbrevation'>We built an elegant solution. Our team believe that the success of our company is a result of our clients growth.</span>
                   </div>
                   <div className="social_icons">
                   <a href="/" class="fa ">
                            <img src={Twitter} alt=""/>
                        </a>
                        <a href="/" class="facebook">
                            <img src={Facebook} alt=""/>
                        </a>
                        <a href="/" class="linkedin">
                            <img src={LinkedIn} alt=""/>
                        </a>
                    </div>
             </div>
             <div className='footer_logo_section_right'>
                      <div className='ul_li'>
                          <ul>
                            <li><b>iToConnect</b></li>
                            <li>Get a Live Demo</li>
                            <li>About Us</li>
                            <li>Conatct Us</li>
                            <li>Partner with Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                          </ul>
                      </div>
                      <div>
                          <ul>
                            <li><b>Quick Help Links</b></li>
                            <li>Blogs</li>
                            <li>FAQs</li>
                            <li>Case Studies</li>
                            <li>Resource Center</li>
                            <li>iToConnect Academy</li>
                          </ul>
                      </div>
             </div>
       </div>
       <div className='itoconnect_footer_bottom_line'>
             <span>© 2022. All rights reserved.</span>
       </div>
        </div>
        
    
       
    </div>
    

    </>
  )
}

export default Footer
