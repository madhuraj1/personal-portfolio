import { useQuery } from "@apollo/client";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { contactQuery } from "../schema/Query";
import { IContact } from "../types/pages/Contact.types";
import { FiInstagram, FiYoutube } from "react-icons/fi";
export const Footer = () => {
  const date = new Date();
  const { data } = useQuery<IContact>(contactQuery);
  const onClick = (link: string) => {
    window.open(link);
  };
  return (
    <div className="footer">
      <p className="footer__link__name">CONNECT</p>
      <div className="footer__icons">
        <FiYoutube />
        <FiInstagram />
        <SiWhatsapp />
        <SiGmail />
      </div>
      <div className="footer__links">
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>CONTACT</p>
        <p>FILMS</p>
      </div>
      <span className="footer__divider" />
      <p className="footer__copyright">@2023 Celebration Chapters</p>
    </div>
  );
};
