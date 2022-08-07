import React, { useState } from "react";
import Logo from "../assets/brown.png";
import bulletedlist from "../assets/bulletedlist.svg";
export const Navbar = () => {
  const [isactive, setisActive] = useState<boolean>(false);
  return (
    <>
      <div className="navbar">
        <div className={`navbar__menu ${isactive && "active"}`}>
          <ul>
            <li className="navbar__menuoptions">
              <span>
                <img
                  className="navbar__menuoptions-icon"
                  src="./home.svg"
                ></img>
              </span>
              Home
            </li>
            <li className="navbar__menuoptions">
              <span>
                <img
                  className="navbar__menuoptions-icon"
                  src="./memories.svg"
                ></img>
              </span>
              Memories
            </li>
            <li className="navbar__menuoptions">
              <span>
                <img
                  className="navbar__menuoptions-icon"
                  src="./About.svg"
                ></img>
              </span>
              About
            </li>
          </ul>
        </div>
        <div className="navbar__content active">
          <img className="navbar__logo" src={Logo} />
          <div className="navbar__tag">Madhuraj Photography</div>
        </div>
        <img
          src={bulletedlist}
          onClick={() => {
            setisActive(!isactive);
          }}
          className="navbar__icon"
        />
        {/* <div className="nav-right visible-xs">
          <div className="button active" id="btn">
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
          </div>
        </div>
        <main>
          <nav>
            <div className="nav-right hidden-xs">
              <div className="button active" id="btn">
                <div className="bar top"></div>
                <div className="bar middle"></div>
                <div className="bar bottom"></div>
              </div>
            </div>
          </nav>
        </main> */}
      </div>
    </>
  );
};
