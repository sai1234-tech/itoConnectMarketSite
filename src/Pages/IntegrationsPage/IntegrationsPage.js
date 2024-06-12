import React from "react";
import "./IntegrationsPage.css";
import TallPrime from "../../Assests/tally_prime.png";
import Ecommerce from "../../Assests/e-commerce-integrations.png";
import Razorpay from "../../Assests/razorpay.png";
import Share from "../../Assests/share.png";
import Ring from "../../Assests/bell.png";
import Speaker from "../../Assests/speaker.png";
import Email from "../../Assests/Email.png"
import Analysis from "../../Assests/Analysis.png"
import Verification from "../../Assests/Verification.png";
import Getstarted from '../../Components/GetStartedToday/Getstarted';

function IntegrationsPage() {
  return (
    <>
      <div className="integration_page_seamless_integration_div">
        <div className="integration_page_seamless_integration_abbrevation">
          <div className="integration_page_seamless_integration_abbrevation_Span">
            <span>
              Seamlessly Integrate WhatsApp Business with your business tech
              stack.
            </span>
          </div>
          <p>
            Enjoy brilliant WhatsApp Business integrations with your preferred
            e-commerce platforms, CRMs, e-stores, and more with ItoConnect.
          </p>
        </div>
        <div className="integration_page_seamless_integration_signupfor_free">
          <button>Sign Up for Free</button>
        </div>
      </div>

      <div className="integrationsPage_integrations_section_detailed_view">
        <div className="integrationsPage_integrations_section_detailed_view_abbrevation">
          <span>Integrations</span>
        </div>
        <div className="list_integrations_">
          <div className="list_integrations_one">
            <div className="tallyPrime_img_div">
              <img
                src={TallPrime}
                alt="tally_prime"
                className="tally_prime_img_"
              />
              <p>Business Management Software</p>
            </div>
            <div className="list_integrations_sub_div">
              <span>Tally Prime</span>
              <p>
                Send documents from TallyPrime on WhatsApp, and send & tag
                messages, schedule reminders, and more from the Shared Team
                Inbox with TallyPrime X iToConnect.
              </p>
            </div>
          </div>

          <div className="list_integrations_two">

            <div className="tallyPrime_img_div" id="tallyPrime_img_div_">
              <img
                src={Ecommerce}
                alt="tally_prime"
                className="ecommerce_img_"
              />
              <p id="e-commerce_text">E-Commerce</p>
            </div>
            {/* <div className="tallyPrime_img_div">
              <img
                src={TallPrime}
                alt="tally_prime"
                className="tally_prime_img_"
              />
              <p>Business Management Software</p>
            </div> */}
            <div className="list_integrations_sub_div">
              <span>InstaMojo</span>

              <p>
                Create and build your own e-commerce store on WhatsApp with
                InstaMojo – Integrate with iToConnect & grow your sales multi
                folds.
              </p>
            </div>
          </div>

          <div className="list_integrations_three">
            <div className="tallyPrime_img_div" id="tallyPrime_img_div_">
              <img src={Razorpay} alt="tally_prime" className="razor_img_" />
              <p id="e-commerce_text">Payment</p>
            </div>
            <div className="list_integrations_sub_div">
              <span>Razorpay</span>
              <p>
                Connect your Razorpay account with iToConnect and accept
                payments directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="list_integrations_">
          <div className="list_integrations_one">
            <div className="tallyPrime_img_div">
              <img
                src={TallPrime}
                alt="tally_prime"
                className="tally_prime_img_"
              />
              <p>Business Management Software</p>
            </div>
            <div className="list_integrations_sub_div">
              <span>Tally Prime</span>
              <p>
                Send documents from TallyPrime on WhatsApp, and send & tag
                messages, schedule reminders, and more from the Shared Team
                Inbox with TallyPrime X iToConnect.
              </p>
            </div>
          </div>

          <div className="list_integrations_two">
            <div className="tallyPrime_img_div" id="tallyPrime_img_div_">
              <img
                src={Ecommerce}
                alt="tally_prime"
                className="ecommerce_img_"
              />
              <p id="e-commerce_text">E-Commerce</p>
            </div>
            <div className="list_integrations_sub_div">
              <span>InstaMojo</span>

              <p>
                Create and build your own e-commerce store on WhatsApp with
                InstaMojo – Integrate with iToConnect & grow your sales multi
                folds.
              </p>
            </div>
          </div>

          <div className="list_integrations_three">
            <div className="tallyPrime_img_div" id="tallyPrime_img_div_">
              <img src={Razorpay} alt="tally_prime" className="razor_img_" />
              <p id="e-commerce_text">Payment</p>
            </div>
            <div className="list_integrations_sub_div">
              <span>Razorpay</span>
              <p>
                Connect your Razorpay account with iToConnect and accept
                payments directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="list_integrations_">
          <div className="list_integrations_one">
            <div className="tallyPrime_img_div">
              <img
                src={TallPrime}
                alt="tally_prime"
                className="tally_prime_img_"
              />
              <p>Business Management Software</p>
            </div>
            <div className="list_integrations_sub_div">
              <span>Tally Prime</span>
              <p>
                Send documents from TallyPrime on WhatsApp, and send & tag
                messages, schedule reminders, and more from the Shared Team
                Inbox with TallyPrime X iToConnect.
              </p>
            </div>
          </div>

          <div className="list_integrations_two">
            <div className="tallyPrime_img_div" id="tallyPrime_img_div_">
              <img
                src={Ecommerce}
                alt="tally_prime"
                className="ecommerce_img_"
              />
              <p id="e-commerce_text">E-Commerce</p>
            </div>
            <div className="list_integrations_sub_div">
              <span>InstaMojo</span>

              <p>
                Create and build your own e-commerce store on WhatsApp with
                InstaMojo – Integrate with iToConnect & grow your sales multi
                folds.
              </p>
            </div>
          </div>

          <div className="list_integrations_three">
            <div className="tallyPrime_img_div" id="tallyPrime_img_div_">
              <img src={Razorpay} alt="tally_prime" className="razor_img_" />
              <p id="e-commerce_text">Payment</p>
            </div>
            <div className="list_integrations_sub_div">
              <span>Razorpay</span>
              <p>
                Connect your Razorpay account with iToConnect and accept
                payments directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="integrations_cant_find_what">
          <span>Can’t find what you’re looking for?</span>
          <a href="">Request</a>
        </div>
      </div>

      <div className="integrations_powered_features">
        <div className="powered_features_abbrevation">
          <span>Our power packed features</span>
        </div>

        <div className="integrations_powered_features_detailed_description">
          <div className="integrations_powered_features_one">
            <div className="integrations_powered_features_one_img_div">
              <img src={Share} className="feautes_img_" />
              <h3>Share Product Catalogs at Scale</h3>
              <p>
                Send product catalogs at scale to customers on WhatsApp as part
                of campaigns & auto-replies
              </p>
            </div>
          </div>

          <div className="integrations_powered_features_two">
            <div className="integrations_powered_features_one_img_div">
              <img src={Ring} className="feautes_img_" />
              <h3>Automate Business Communication</h3>
              <p>
              Set automated replies for FAQs & alerts for COD confirmations, abandoned carts, & offers.
              </p>
            </div>
          </div>
          <div className="integrations_powered_features_three">
            <div className="integrations_powered_features_one_img_div">
              <img src={Speaker} className="feautes_img_" />
              <h3>Send Bulk Campaigns & Broadcast</h3>
              <p>
              Set up one-time or recurring campaigns to engage your customers and sell more.
              </p>
            </div>
          </div>

        </div>
         
        <div className="integrations_powered_features_detailed_description_two">
          <div className="integrations_powered_features_one">
            <div className="integrations_powered_features_one_img_div">
              <img src={Email} className="feautes_img_" />
              <h3>Collaborate using Team Inbox & Chat Widgets</h3>
              <p>
              Add WhatsApp widgets to your e-store & collaborate with unlimited team members to offer customer support at scale on WhatsApp
              </p>
            </div>
          </div>

          <div className="integrations_powered_features_two">
            <div className="integrations_powered_features_one_img_div">
              <img src={Analysis} className="feautes_img_" />
              <h3>Automate Business Communication</h3>
              <p>
              Monitor campaign performance,response & resolution times of your agents to improve your customer experience              </p>
            </div>
          </div>
          <div className="integrations_powered_features_three">
            <div className="integrations_powered_features_one_img_div">
              <img src={Verification} className="feautes_img_" />
              <h3>Green Tick Verification</h3>
              <p>
              iToConnect helps you apply for the Green tick on WhatsApp alongside your brand name to help you build credibility              </p>
            </div>
          </div>

        </div>

      </div>
      <Getstarted/>
    </>
  );
}

export default IntegrationsPage;
