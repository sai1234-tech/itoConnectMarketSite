import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ItoCLogo from "../../Assests/iToC_Logo.png";
import open from "../../Assests/open.png"
function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpenClick = () => {
    setIsOpened(!isOpened);

    if (isOpened === true) {
    }
    if (isOpened === false) {
    }
};
  return (
    <>
      <div>
        <div class="header-background">
          <header class="header ">
            <div class="logo-wrapper">
              <a class="logo" href="#">
                <img src={ItoCLogo} />
              </a>
            </div>
            <div class="right_nav">
              <nav class="nav">
                <a href="/home">Home</a>
                <a href="#">Solutions</a>
                <a href="/integration">Integrations</a>
                <a href="/pricing">Pricing</a>
                <span>
                  <a href="#">
                    <button type="button" className="log_in">
                      {" "}
                      Log In
                    </button>
                  </a>
                </span>

                <span>
                  <a href="#">
                    <button type="button" className="reach">
                      {" "}
                      Start Free Trail
                    </button>
                  </a>
                </span>
              </nav>
            </div>
          </header>
        </div>

        {/* <!-- mob version --> */}
        <div className="mob_menu_navbar">
          <div>
            <div class="logo-wrapper">
              <a class="logo_mobile" href="#">
                <img src={ItoCLogo} />
              </a>
            </div>
          </div>
          <div class="mob-menu">
            <img class="mob-open " 
                    src={open} alt="open"
                     onClick={handleOpenClick} 
                     />
            <div className="mob-wrapper">
              {isOpened && (
                <div class="mob-list">
                  <a href="#" class="mob-list__item">
                    Home
                  </a>
                  <a href="#" class="mob-list__item">
                    Solutions
                  </a>
                  <a href="#" class="mob-list__item">
                    Integrations
                  </a>
                  <a href="#" class="mob-list__item">
                    Pricing
                  </a>
                  <span>
                    <a href="#">
                      <button type="button" className="log_in_mobile">
                        {" "}
                        Log In
                      </button>
                    </a>
                  </span>

                  <span>
                    <a href="#">
                      <button type="button" className="reach_mobile">
                        {" "}
                        Start Free Trail
                      </button>
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <!-- mob version --> */}
      </div>
    </>
  );
}

export default Navbar;
