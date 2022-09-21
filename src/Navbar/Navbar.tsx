import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo1 from "../assets/Logo3.png";
import Logo2 from "../assets/Logo2.svg";

export const Navbar = () => {
  const [isactive, setisactive] = useState<boolean>(false);
  const router = useNavigate();
  const loc = useLocation();

  const onclick = (path: string) => {
    setisactive(false);
    router(path);
  };
  const style = (path: string) => {
    return { textDecoration: loc.pathname === path ? "line-through" : "none" };
  };
  const anchorStyle = {
    color: loc.pathname !== "/" ? "black" : "white",
  };
  return (
    <>
      <div className="navbar">
        {/* <div> */}
        <div>
          <input
            className="navbar__input"
            type="checkbox"
            id="navcheck"
            role="button"
            title="menu"
            checked={isactive}
            onChange={(e) => setisactive(e.target.checked)}
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
              style={style("/cinematography")}
              className="navbar__links"
              onClick={() => onclick("/films")}
            >
              Films
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
          <a
            style={anchorStyle}
            className="navbar__content-links"
            href="/about"
          >
            About
          </a>
          <a
            style={anchorStyle}
            className="navbar__content-links"
            href="memories"
          >
            Memories
          </a>
          <img
            alt="Madhuraj Photography"
            onClick={() => router("/")}
            className="navbar__logo"
            src={Logo1}
          />
          <a style={anchorStyle} className="navbar__content-links" href="films">
            Films
          </a>
          <a
            style={anchorStyle}
            className="navbar__content-links"
            href="contact"
          >
            Contact
          </a>
        </div>
        <div></div>
      </div>
      {/* </div> */}
    </>
  );
};
