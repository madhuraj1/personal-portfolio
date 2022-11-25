import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { SiGmail, SiWhatsapp } from "react-icons/si";
export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__link__name">My Social Media Links</p>
      <div className="footer__link">
        <AiFillYoutube color="lightblue" />
        <AiFillInstagram color="white" />
        <SiWhatsapp color="white" />
      </div>
      <div className="footer__separator"></div>
      <div className="footer__copyright">
        <div> © Madhuraj Photography 2022</div>

        <div>madhurajphotography.in@gmail.com</div>
      </div>
    </div>
  );
};
