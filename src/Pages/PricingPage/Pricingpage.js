import React from "react";
import "./PricingPage.css";
import Growth from "../../Assests/growth.png";
import Advanced from "../../Assests/Advanced.png";
import Enterprise from "../../Assests/Enterprise.png";
import Tick from "../../Assests/Vector_tick.png";
import Seamless from '../../Components/Seamless/Seamless'
import Getstarted from '../../Components/GetStartedToday/Getstarted'

function Pricingpage() {
  return (
    <>
      <div className="pricing_page_get_whatapp_business_api">
        <div className="pricing_page_get_whatapp_business_api_abbrevation">
          <span>
            Get Best WhatsApp Business API Pricing with super affordable plans &
            services
          </span>
        </div>
      </div>

      <div className="pricing_page_subscriptions_page_main_div">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item " role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Monthly
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Quaterly
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Yearly
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="monthly_tab_menu">
              <div className="monthly_tab_menu1">
                <img src={Growth} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>₹2,499</h4>
                  <p>per mo (+taxes)</p>
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>1000 free service conversations</p>
                  <p>Rs.0.81/Marketing Conversation*</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>

              <div className="monthly_tab_menu2">
                <img src={Advanced} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>₹3,499</h4>
                  <p>per mo (+taxes)</p>
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>1000 free service conversations</p>
                  <p>Rs.0.81/Marketing Conversation*</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>

              <div className="monthly_tab_menu3">
                <img src={Enterprise} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>On Request</h4>
                  {/* <p>per mo (+taxes)</p> */}
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>Unlimited conversations</p>
                  <p>No Markup Charges</p>
                  <p>Dedicated Account Manager</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
 <div className="monthly_tab_menu">
              <div className="monthly_tab_menu1">
                <img src={Growth} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>₹2,499</h4>
                  <p>per mo (+taxes)</p>
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>1000 free service conversations</p>
                  <p>Rs.0.81/Marketing Conversation*</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>

              <div className="monthly_tab_menu2">
                <img src={Advanced} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>₹3,499</h4>
                  <p>per mo (+taxes)</p>
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>1000 free service conversations</p>
                  <p>Rs.0.81/Marketing Conversation*</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>

              <div className="monthly_tab_menu3">
                <img src={Enterprise} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>On Request</h4>
                  {/* <p>per mo (+taxes)</p> */}
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>Unlimited conversations</p>
                  <p>No Markup Charges</p>
                  <p>Dedicated Account Manager</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>
            </div>          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
 <div className="monthly_tab_menu">
              <div className="monthly_tab_menu1">
                <img src={Growth} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>₹2,499</h4>
                  <p>per mo (+taxes)</p>
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>1000 free service conversations</p>
                  <p>Rs.0.81/Marketing Conversation*</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>

              <div className="monthly_tab_menu2">
                <img src={Advanced} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>₹3,499</h4>
                  <p>per mo (+taxes)</p>
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>1000 free service conversations</p>
                  <p>Rs.0.81/Marketing Conversation*</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>

              <div className="monthly_tab_menu3">
                <img src={Enterprise} alt="" className="growth_img_" />
                <div className="growth_price_tag">
                  <h4>On Request</h4>
                  {/* <p>per mo (+taxes)</p> */}
                </div>
                <div className="line_"></div>
                <div className="growth_description">
                  <p>Unlimited agents</p>
                  <p>Unlimited conversations</p>
                  <p>No Markup Charges</p>
                  <p>Dedicated Account Manager</p>
                </div>
                <div className="line_"></div>
                <div className="verified_div_">
                  <h4>Verified</h4>
                  <button className="start_free_trail_growth">
                    Start Free Trail
                  </button>
                </div>
              </div>
            </div>          </div>
        </div>
      </div>

      <div className="pricing_page_plan_benifits_main_div">
        <div className="plan_benifits_abbrevations">
          <span>Plan Benefits</span>
        </div>
        <div className="dd">
          <div className="growth_div_">
            <span>Growth</span>
          </div>
          <div className="advanced_mian_div_">
            <span>Advanced</span>
          </div>
          <div className="enterprise_maind_div">
            <span>Enterprise</span>
          </div>
        </div>
        <div className="pricing_page_plan_benifits_main_sub_div">
          <div className="plain_benifits_lists">
            <ul>
              <li>Shared Team Inbox</li>
              <li>Unlimited Team Members</li>
              <li>Instagram Inbox</li>
              <li>Chat Automation</li>
              <li>Automated Workflows</li>
              <li>AnswerBot</li>
              <li>Roles & Permissions</li>
              <li>Auto Chat Routing</li>
            </ul>
          </div>
          <div className="plain_benifits_lists_2">
            <ul>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>Welcome, OOO, Delayed, Custom Replies</li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>4 webpages, 4 runs (valid till September 2024)</li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
            </ul>
          </div>
          <div className="plain_benifits_lists_3">
            <ul>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>Welcome, OOO, Delayed, Custom Replies</li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>4 webpages, 4 runs (valid till September 2024)</li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
            </ul>
          </div>
          <div className="plain_benifits_lists_4">
            <ul>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>Welcome, OOO, Delayed, Custom Replies</li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>&nbsp;</li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
              <li>
                <img src={Tick} className="tick_" />
              </li>
            </ul>
          </div>

          <div></div>
        </div>
        <div className="pricing_page_for_moreinformations_click_context">
            <div className="more_information_sub_div">
            <span>
            For more information on how the pricing structure works,
            <a className="click_here">click here</a>
          </span>
          <p>
            For country-wise conversational charges,
            <a className="click_here">click here</a>
          </p>
            </div>

            <div className="more_information_sub_div_2">
            <span>
            *Total monthly billing = Subscription Charges based on your plan + 
            Conversational charges above free limit           
             {/* <a className="click_here">click here</a> */}
          </span>

            </div>
         
        </div>
      </div>

      <Seamless/>
      <Getstarted/>
    </>
  );
}

export default Pricingpage;
