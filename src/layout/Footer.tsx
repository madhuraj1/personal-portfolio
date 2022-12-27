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
export const Footer = () => {
  const { data } = useQuery<IContact>(contactQuery);
  const onClick = (link: string) => {
    window.open(link);
  };
  return (
    <div className="footer">
      <p className="footer__link__name">My Social Media Links</p>

      <div className="footer__link">
        <AiFillYoutube
          onClick={() =>
            onClick(data?.contactCollection.items[0].youtube ?? "")
          }
          color="lightblue"
        />
        <AiFillInstagram
          onClick={() =>
            onClick(data?.contactCollection.items[0].instagram ?? "")
          }
          color="white"
        />
        <a href={`mailto:${data?.contactCollection.items[0].email ?? ""}`}>
          <SiGmail color="white" />
        </a>
      </div>
      <div style={{ fontSize: "14px" }}> © Madhuraj Photography 2022</div>
      <div className="footer__separator"></div>
      <div className="footer__copyright">
        <div>
          <AiOutlineWhatsApp style={{ marginTop: "5px" }} />
          {data?.contactCollection.items[0].number}
        </div>
        <div>
          <AiOutlineMail style={{ marginTop: "5px" }} />
          {data?.contactCollection.items[0].email}
        </div>
      </div>
    </div>
  );
};
