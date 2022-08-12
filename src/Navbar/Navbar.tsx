import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/brown.png";
import bulletedlist from "../assets/hamburger-menu.svg";
import About from "../assets/About.svg";
import memory from "../assets/memories.svg";
import Home from "../assets/home.svg";
import contact from "../assets/About.svg";
export const Navbar = () => {
  const [isactive, setisActive] = useState<boolean>(false);
  const router = useNavigate();
  const loc = useLocation();
  console.log(loc);

  const onclick = (path: string) => {
    setisActive(false);
    router(path);
  };
  const style = (path: string) => {
    return { textDecoration: loc.pathname === path ? "line-through" : "none" };
  };
  return (
    <>
      <div className="navbar">
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
            <a
              className="navbar__links"
              style={style("/")}
              onClick={() => onclick("/")}
            >
              Home
            </a>
            <a
              style={style("/memories")}
              className="navbar__links"
              onClick={() => onclick("/memories")}
            >
              Memories
            </a>
            <a
              style={style("cinematography")}
              className="navbar__links"
              onClick={() => onclick("/cinematography")}
            >
              Cinematography
            </a>
            <a
              style={style("/about")}
              className="navbar__links"
              onClick={() => onclick("/about")}
            >
              About
            </a>

            <a
              style={style("/contact")}
              className="navbar__links"
              onClick={() => onclick("/contact")}
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="navbar__content active">
          <img className="navbar__logo" src={Logo} />
          <div className="navbar__tag">Madhuraj Photography</div>
        </div>
        <div></div>
      </div>
    </>
  );
};
