import React, { useState } from "react";
import { SiBehance, SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import shape from "../../assets/shape.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "StaticForms - Contact Form",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: "6af45e78-b803-4a42-9a03-054b9d010602", // get your access key from https://www.staticforms.xyz
  });
  const notify = (message: string) => toast(message);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(contact);

      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();
      console.log(json);

      if (json.success) {
        notify("Thank you for reaching out to us.");
      } else {
        notify("Error while sending");
      }
    } catch (e) {
      notify("An error occured while submitting the form");
    }
  };
  return (
    <div className="container">
      {/* <span className="big-circle"></span> */}
      <img src={shape} className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src={location} className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <SiFacebook />
              </a>
              <a href="#">
                <SiTwitter />
              </a>
              <a href="#">
                <SiInstagram />
              </a>
              <a href="#">
                <SiBehance />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={handleSubmit} action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <input
                type="tel"
                placeholder="Phone number"
                name="contact"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="input-container textarea">
              <input
                name="message"
                placeholder="Message"
                className="input"
                type={""}
                onChange={handleChange}
              ></input>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
