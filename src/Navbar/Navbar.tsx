import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo1 from "../assets/Logo-new.png";
import gsap from "gsap";
import {
  AiFillCloseCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineMenuFold,
} from "react-icons/ai";

export const Navbar = () => {
  const router = useNavigate();
  const loc = useLocation();

  const onclick = (path: string) => {
    router(path);
  };
  const style = (path: string) => {
    return { textDecoration: loc.pathname === path ? "line-through" : "none" };
  };
  const anchorStyle = {
    color: loc.pathname !== "/" ? "black" : "black",
  };

  const navRef = useRef(null);

  const openNav = () => {
    gsap.to(navRef.current, {
      duration: 0.4,
      left: "0vw",
      ease: "sine.inOut",
    });
    const arrays = gsap.utils.toArray(".nav__links--mobile");
    arrays.forEach((section, index) => {
      gsap.to(section as any, {
        duration: 1,
        opacity: 1,
        delay: 0.4 + index - 0.9 * index,
        ease: "sine.inOut",
      });
    });
  };

  const closeNav = () => {
    const arrays = gsap.utils.toArray(".nav__links--mobile");
    arrays.forEach((section, index) => {
      gsap.to(section as any, {
        duration: 1,
        opacity: 0,
        delay: index - 0.9 * index,
        ease: "sine.inOut",
      });
    });
    gsap.to(navRef.current, {
      duration: 1,
      delay: 2,
      left: "-100vw",
      ease: "sine.inOut",
    });
  };
  return (
    <>
      <div className="nav">
        <img
          alt="Madhuraj Photography"
          onClick={() => router("/")}
          className="nav__logo"
          src={Logo1}
        />
        <a onClick={() => onclick("about")} className="nav__links" href="about">
          About Us
        </a>
        <a
          onClick={() => onclick("about")}
          className="nav__links"
          href="memories"
        >
          Memories
        </a>
        <a onClick={() => onclick("about")} className="nav__links" href="films">
          Films
        </a>
        <a
          onClick={() => onclick("about")}
          className="nav__links"
          href="contact"
        >
          Contact
        </a>
        <div className="mobile__nav">
          <button onClick={openNav}>
            <AiOutlineMenuFold />
          </button>
          <nav ref={navRef} className="mobile__nav--main">
            <button onClick={closeNav} className="mobile__nav--close">
              <AiOutlineClose />
            </button>
            <a
              onClick={() => onclick("/")}
              style={style("/")}
              className="nav__links--mobile"
              href="/"
            >
              Home
            </a>
            <a
              onClick={() => onclick("about")}
              style={style("about")}
              className="nav__links--mobile"
              href="about"
            >
              About Us
            </a>
            <a
              onClick={() => onclick("about")}
              style={style("memories")}
              className="nav__links--mobile"
              href="memories"
            >
              Memories
            </a>
            <a
              onClick={() => onclick("about")}
              style={style("films")}
              className="nav__links--mobile"
              href="films"
            >
              Films
            </a>
            <a
              onClick={() => onclick("about")}
              style={style("contact")}
              className="nav__links--mobile"
              href="contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};
