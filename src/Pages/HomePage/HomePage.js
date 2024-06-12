import React from "react";
import "./HomePage.css";
import PersonAllservices from "../../../src/Assests/itoconnect_person_image_withallservices.png";
import TruestedPartners from "../../../src/Assests/Trusted_Partners.png";
import CustomerSupport from "../../../src/Assests/customer_support_image.png";
import NewCustomers from "../../../src/Assests/New_Customers.png";
import CustomerSupportSms from "../../../src/Assests/Customer_support_sms.png";
import IncreaseSales from "../../../src/Assests/Increase_sales.png";
import WhatappCampaigns from "../../../src/Assests/Whatsapp_campaigns.png";
import ItoConnect_Apart from "../../../src/Assests/itoConnect_Apart.png";
import SeamLeassIntegration from "../../../src/Assests/seamless_integration.png";
import MetaApi from "../../../src/Assests/api_access.png";
import Scalable from "../../../src/Assests/scalable.png";
import SeamLess_Choose from "../../../src/Assests/seamless_choose.png";
import Smooth from "../../../src/Assests/smooth_choose.png";
import HighPricing from "../../../src/Assests/hight_pricing.png";
import Industry_Support from "../../../src/Assests/industry_support.png";
import truest_partners_mobile from "../../Assests/truested_patrner_mobile.png";
import Apart_img_mobile from "../../Assests/apart_img_mobile.png";
import Seamless_mobile from "../../Assests/seamless_mobile_img.png";
import Education from "../../Assests/Education.png";
import TravelandTourism from "../../Assests/TravelandTourism.png";
import Ecommerce from "../../Assests/Ecommerce.png";
import TodayMobile from "../../Assests/today_mobile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="arrow_"
      style={{ ...style, display: "block",
      //  background: "black" 
      }}
      onClick={onClick}
    />
  );
}

function HomePage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 2,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      // {
      //   breakpoint:480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  };
  return (
    <>
      <div className="itoconnect_marketsite_busineess">
        <div className="itoconnect_marketsite_platform_business">
          <div className="itoconnect_marketsite_platform_business_abbrevation">
            <span>All in one platform, for your business</span>
            <p>
              Designer to streamline and enchance the effectiveness of your
              business{" "}
            </p>
            {/* <p>business</p> */}

            <button className="itoconnect_marketsite_start_free_trail_btn">
              Start Free Trial
            </button>
          </div>
          <div className="itoconnect_marketsite_platform_business_image_section">
            <img className="person_image_" src={PersonAllservices} />
          </div>
        </div>

        <div className="itoconnect_marketsite_across_theworld">
          <span className="business_across_the_world">
            25,000+ Businesses Across the Globe Trust ItoConnect
          </span>
          <div className="images_div_sections_partners">
            <img
              src={TruestedPartners}
              alt="trusted_partners"
              className="truested_partners_image"
            />
            <img
              src={truest_partners_mobile}
              className="truested_partners_mobile_image_"
            />
          </div>
        </div>
      </div>
      <div className="itoconnect_marketingsite_automate_customer_support">
        <div className="itoconnect_marketingsite_customer_left_section">
          <span>
            Automate Customer Support on Voice Call With GPT Chatbot & Workflows
          </span>
          <div className="customer_support_description_text">
            <p>
              Get your own WhatsApp chatbot with Chat GPT up and running in
              minutes to automate replies to customer queries
            </p>
            <p>
              Build your own workflows with WhatsApp automation for tasks like
              lead qualification, feedback collection, book an appointment
            </p>
            <p> IVR type FAQ menu to speed up customer interaction </p>
            <p>
              Auto chat routing to multiple agents on WhatsApp for unanswered
              queries
            </p>
          </div>
        </div>
        <div className="itoconnect_marketingsite_customer_right_section">
          <img src={CustomerSupport} className="customer_support_image" />
        </div>
      </div>

      <div className="itoconnect_marketingsite_new_customers_">
        <div className="itoconnect_marketingsite_new_customers_left_section">
          <img src={NewCustomers} className="new_customer_support_image" />
        </div>
        <div className="itoconnect_marketingsite_new_customers_right_section">
          <span>
            Acquire New Customers in Minutes with AI powered WhatsApp Chat Ads
          </span>
          <div className="new_customer_support_description_text">
            <p>Run Click to WhatsApp Ads (CTWA) without leaving the platform</p>
            <p>
              Get AI generated ads on WhatsApp personalised to your business and
              auto targeted for best results
            </p>
            <p>
              Advanced WhatsApp analytics to track CTWA conversions and ROAS
            </p>
          </div>
        </div>
      </div>

      <div className="itoconnect_marketingsite_automate_customer_support_sms">
        <div className="itoconnect_marketingsite_customer_support_sms_left_section">
          <span>Provide Better</span>
          <br />
          <span> Customer Support on</span>
          <br />
          <span>SMS </span>
          <div className="customer_support_sms_description_text">
            <p>
              Provide support to your customer across their favourite channels -
              WhatsApp and Instagram
            </p>
            <p>CRM to manage your customers</p>
            <p>
              Auto routing of multiple agents on WhatsApp and rule based routing
              for better handling customer queries
            </p>
            <p>Shared Team inbox with Agent performance analytics</p>
          </div>
        </div>
        <div className="itoconnect_marketingsite_customer_support_sms_right_section">
          <img
            src={CustomerSupportSms}
            className="customer_support_sms_image"
          />
        </div>
      </div>

      <div className="itoconnect_marketingsite_new_customers_sales">
        <div className="itoconnect_marketingsite_new_customers_sales_left_section">
          <img src={IncreaseSales} className="new_customers_sales_image" />
        </div>
        <div className="itoconnect_marketingsite_new_customers_sales_right_section">
          <span>
            Increase Sales with WhatsApp Catalogs & Native Payments (Call
            Conference){" "}
          </span>
          <div className="new_customers_sales_description_text">
            <p>
              Integrate your catalog on WhatsApp via Shopify, WooCommerce and
              Excel sheets
            </p>
            <p>Automate buying journey with our Checkout bot flow</p>
            <p>
              Send Payment reminders on WhatsApp and Accept Native WhatsApp
              payments
            </p>
            <p>Manage incoming orders with WhatsApp</p>
          </div>
        </div>
      </div>

      <div className="itoconnect_marketingsite_whatsapp_campaings_sms">
        <div className="itoconnect_marketingsite_whatsapp_campaings_sms_left_section">
          <span>
            Maximise Returns on WhatsApp Campaigns (Missed Call Services)
          </span>
          <div className="whatsapp_campaings_sms_description_text">
            <p>Send one time or recurring WhatsApp campaigns</p>

            <p>
              Measure effectiveness of campaigns with analytics and WhatsApp
              goal tracking
            </p>
            <p>
              Allow our AI powered Concierge to suggest you the best WhatsApp
              campaigns and cohorts to send to for maximum returns
            </p>
          </div>
        </div>
        <div className="itoconnect_marketingsite_whatsapp_campaings_sms_right_section">
          <img
            src={WhatappCampaigns}
            className="whatsapp_campaings_sms_image"
          />
        </div>
      </div>

      <div className="cleanand_easy_experience">
        <div className="clean_and_easy_text_left_section">
          <span>A Clean & Easy To Use Experience In One </span>
        </div>
        <div className="clean_and_easy_text_right_section">
          <button className="get_live_demo">Get a Live Demo</button>
          <button className="start_free_trail">Start Free Trial</button>
        </div>
      </div>

      <div className="what_set_itoconnect_apart">
        <div className="what_Set_connect_abbrevation">
          <span>What Set iToConnect Apart</span>
        </div>
        <div className="itoconnect_apart_">
          <img src={ItoConnect_Apart} className="apart_img" />
          <img src={Apart_img_mobile} className="apart_img_mobile" />
        </div>
      </div>

      <div className="itoconnect_market_Site_home_page_slider">
        <span>We are built for any Industry</span>
        <p>Lorem Ipsum Dolor sit amet</p>
        <div className="itoconnect_market_Site_home_page_slider_multiples_items">
          <Slider {...settings} className="id">
            <div className="card">
              <img src={Education} alt="imgs" className="education_img" />
              <div className="card-body">
                <h3>Education</h3>
                  <a href="">Learn More</a>
              </div>
            </div>

            <div className="card">
              <img
                src={TravelandTourism}
                alt="imgs"
                className="education_img"
              />
              <div className="card-body">
                <h3>Travel & Tourism</h3>
                <a href="">Learn More</a>

              </div>

            </div>

            <div className="card">
              <img src={Ecommerce} className="education_img" />
              <div className="card-body">
                <h3>E-Commerce</h3>
                <a href="">Learn More</a>
              </div>
            </div>
            <div className="card">
              <img src={Education} className="education_img" />
              <div className="card-body">
                <h3>Educaiton</h3>
                <a href="">Learn More</a>
              </div>
            </div>
            <div className="card">
              <img src={TravelandTourism} className="education_img" />
              <div className="card-body">
                <h3>Lion Image</h3>
                <a href="">Learn More</a>
              </div>
            </div>
            <div className="card">
              <img src={Ecommerce} className="education_img" />
              <div className="card-body">
                <h3>Lion Image</h3>
                <a href="">Learn More</a>
              </div>
            </div>

          </Slider>
        </div>
      </div>

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

      <div className="Reasons_toChoose_itoconnect_">
        <div className="more_reasons_abbreavtion">
          <span>More reasons to choose iToConnect</span>
        </div>
        <div className="detailed_reasons_toChooose_itoconnect">
          <div className="meta_apis_div">
            <img src={MetaApi} className="meta_api_img" />
            <div className="access_abbrevation_">
              <span>Access to Meta’s APIs</span>
              <p>
                Leverage direct Meta APIs and get access to the latest WhatsApp
                Business API features
              </p>
            </div>
          </div>

          <div className="scalable_infrastrucutre_div">
            <img src={Scalable} className="scalable_infrastrucutre_img" />
            <div className="access_abbrevation_">
              <span>Scalable Infrastructure</span>
              <p>
                1000s of brands have partnered with us to scale up their
                customer support & engagement!
              </p>
            </div>
          </div>

          <div className="seamless_integrations_div">
            <img src={SeamLess_Choose} className="seamless_integrations_img" />
            <div className="access_abbrevation_">
              <span>Seamless Integrations</span>
              <p>
                OOTB integrations with your favorite CRMs, payment gateways,
                e-stores & marketing automation platforms
              </p>
            </div>
          </div>
        </div>

        <div
          className="detailed_reasons_toChooose_itoconnect"
          id="detailed_reasons_toChooose_itoconnect_"
        >
          <div className="meta_apis_div">
            <img src={Smooth} className="meta_api_img" />
            <div
              className="access_abbrevation_ access_abbrevation_ootb"
              id="access_abbrevation_ootb"
            >
              <span>Smooth onboarding & easy setup</span>
              <p>
                Minimize operational disruption, and deploy a powerful WhatsApp
                solution for your business in a few simple steps!
              </p>
            </div>
          </div>

          <div className="scalable_infrastrucutre_div scalable_infrastrucutre_div_">
            <img src={HighPricing} className="scalable_infrastrucutre_img" />
            <div
              className="access_abbrevation_ access_abbrevation_tag"
              id="access_abbrevation_ootb"
            >
              <span>Highly competitive pricing</span>
              <p>
                No hidden costs – transparent pricing structure with no
                lock-ins. We show you campaign costs upfront so that there are
                no surprises later.
              </p>
            </div>
          </div>

          <div className="seamless_integrations_div">
            <img src={Industry_Support} className="seamless_integrations_img" />
            <div className="access_abbrevation_" id="access_abbrevation_ootb">
              <span>Industry Leading Support</span>
              <p>
                Access our premium customer support and get a resolution within
                minutes!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="itoConnect_today">
        <div className="itoconnect_today_abbrevation">
          <span>Get Started with iToConnect Today</span>
          <ul>
            <li>Engage & Re-engage Prospects</li>
            <li>Drive Sales</li>
            <li>Deliver higher CSAT</li>
            <li>Support at Scale</li>
          </ul>
        </div>
        <div className="try_for_free_div_">
          <button className="try_for_free_button">Try for Free</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
