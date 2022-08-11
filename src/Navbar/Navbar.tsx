import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/brown.png";
import bulletedlist from "../assets/hamburger-menu.svg";
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
        {/* <div classNameName={`navbar__menu ${isactive && "active"}`}>
          <ul>
            <li classNameName="navbar__menuoptions" onClick={() => onclick("/")}>
              <span>
                <img classNameName="navbar__menuoptions-icon" src={Home}></img>
              </span>
              Home
            </li>
            <li
              classNameName="navbar__menuoptions"
              onClick={() => onclick("/memories")}
            >
              <span>
                <img classNameName="navbar__menuoptions-icon" src={memory}></img>
              </span>
              Memories
            </li>
            <li
              classNameName="navbar__menuoptions"
              onClick={() => onclick("/about")}
            >
              <span>
                <img classNameName="navbar__menuoptions-icon" src={About}></img>
              </span>
              About
            </li>
            <li
              classNameName="navbar__menuoptions"
              onClick={() => onclick("/about")}
            >
              <span>
                <img classNameName="navbar__menuoptions-icon" src={contact}></img>
              </span>
              Contact
            </li>
          </ul>
        </div> */}
        <div>
          <input
            className="navbar__input"
            type="checkbox"
            id="navcheck"
            role="button"
            title="menu"
            checked={isactive}
            onChange={(e) => setisActive(e.target.checked)}
          />
          <label
            className="navbar__label"
            htmlFor="navcheck"
            aria-hidden="true"
            title="menu"
          >
            <span className="burger">
              <span className="bar">
                <span className="visuallyhidden">Menu</span>
              </span>
            </span>
          </label>
          <nav className="navbar__nav" id="menu">
            <a className="navbar__links" onClick={() => onclick("/")}>
              Home
            </a>
            <a className="navbar__links" onClick={() => onclick("/memories")}>
              Memories
            </a>
            <a className="navbar__links" onClick={() => onclick("/about")}>
              About
            </a>
            <a className="navbar__links" href="#">
              Cinematography
            </a>
            <a className="navbar__links" href="#">
              About
            </a>
            <a className="navbar__links" href="#">
              Contact
            </a>
          </nav>
        </div>
        {/* <img
          src={bulletedlist}
          onClick={() => {
            setisActive(!isactive);
          }}
          style={{
            opacity: 0.6,
          }}
          className="navbar__icon"
        /> */}
        <div className="navbar__content active">
          <img className="navbar__logo" src={Logo} />
          <div className="navbar__tag">Madhuraj Photography</div>
        </div>
        <div></div>
        {/* <div classNameName="nav-right visible-xs">
          <div classNameName="button active" id="btn">
            <div classNameName="bar top"></div>
            <div classNameName="bar middle"></div>
            <div classNameName="bar bottom"></div>
          </div>
        </div>
        <main>
          <nav>
            <div classNameName="nav-right hidden-xs">
              <div classNameName="button active" id="btn">
                <div classNameName="bar top"></div>
                <div classNameName="bar middle"></div>
                <div classNameName="bar bottom"></div>
              </div>
            </div>
          </nav>
        </main> */}
      </div>
    </>
  );
};
