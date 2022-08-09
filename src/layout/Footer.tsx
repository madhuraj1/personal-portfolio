import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__link__name">My Social Media Links</p>
      <div className="footer__link">
        <AiFillLinkedin color="lightblue" />
        <AiOutlineWhatsApp color="green" />
        <AiFillTwitterCircle color="lightblue" />
        <SiGmail color="" />
      </div>
      <div className="footer__separator"></div>
      <div className="footer__copyright">c My name, Managalore 2022</div>
    </div>
  );
};
