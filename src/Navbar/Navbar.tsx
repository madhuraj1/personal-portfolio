import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/brown.png";
import bulletedlist from "../assets/bulletedlist.svg";
import About from "../assets/About.svg";
import memory from "../assets/memories.svg";
import Home from "../assets/home.svg";
import contact from "../assets/About.svg";
export const Navbar = () => {
  const [isactive, setisActive] = useState<boolean>(false);
  const router = useNavigate();
  const onclick = (path: string) => {
    setisActive(false);
    router(path);
  };
  return (
    <>
      <div className="navbar">
        <div className={`navbar__menu ${isactive && "active"}`}>
          <ul>
            <li className="navbar__menuoptions" onClick={() => onclick("/")}>
              <span>
                <img className="navbar__menuoptions-icon" src={Home}></img>
              </span>
              Home
            </li>
            <li
              className="navbar__menuoptions"
              onClick={() => onclick("/memories")}
            >
              <span>
                <img className="navbar__menuoptions-icon" src={memory}></img>
              </span>
              Memories
            </li>
            <li
              className="navbar__menuoptions"
              onClick={() => onclick("/about")}
            >
              <span>
                <img className="navbar__menuoptions-icon" src={About}></img>
              </span>
              About
            </li>
            <li
              className="navbar__menuoptions"
              onClick={() => onclick("/about")}
            >
              <span>
                <img className="navbar__menuoptions-icon" src={contact}></img>
              </span>
              Contact
            </li>
          </ul>
        </div>
        <div></div>
        <div className="navbar__content active">
          <img className="navbar__logo" src={Logo} />
          <div className="navbar__tag">Madhuraj Photography</div>
        </div>
        <img
          src={bulletedlist}
          onClick={() => {
            setisActive(!isactive);
          }}
          style={{
            opacity: 0.6,
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
