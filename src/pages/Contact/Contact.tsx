import React, { useState } from "react";
import {
  SiBehance,
  SiFacebook,
  SiGmail,
  SiInstagram,
  SiTwitter,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import shape from "../../assets/shape.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MinimalFooter } from "../../layout/MinimalFooter";
import { useQuery } from "@apollo/client";
import { contactQuery } from "../../schema/Query";
import { IContact } from "../../types/pages/Contact.types";
import ContactImage from ".././../assets/contact.jpg";
import Send from "../../assets/send.svg";
export const Contact = () => {
  const { data } = useQuery<IContact>(contactQuery);

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

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     console.log(contact);

  //     const res = await fetch("https://api.staticforms.xyz/submit", {
  //       method: "POST",
  //       body: JSON.stringify(contact),
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     const json = await res.json();
  //     console.log(json);

  //     if (json.success) {
  //       notify("Thank you for reaching out to us.");
  //     } else {
  //       notify("Error while sending");
  //     }
  //   } catch (e) {
  //     notify("An error occured while submitting the form");
  //   }
  // };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (
      (formdata.email !== "",
      formdata.message !== "",
      formdata.name !== "",
      formdata.phone !== "")
    ) {
      const formData = new FormData();
      setLoading(true);
      formData.append("name", formdata.name);
      formData.append("email", formdata.email);
      formData.append("phone", formdata.phone);
      formData.append("message", formdata.message);
      fetch("https://www.actionforms.io/e/r/madhurajphotography", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            notify("Succesfully recieved");
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };
  const [formdata, setformdata] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformdata((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <div className="contactme">
        <div className="contactme__image">
          <img src={ContactImage} alt="" />
        </div>
        <div className="contactme__form">
          <form
            className="form"
            // action="https://www.actionforms.io/e/r/madhurajphotography"
            // method="POST"
            target=""
            onSubmit={handlesubmit}
          >
            <div className="form__heading">Details About You</div>
            <div className="form__name">
              <label htmlFor="">Name</label>
              <input onChange={onChange} name="name" required type="text" />
            </div>
            <div className="form__email">
              <label htmlFor="">Email</label>
              <input onChange={onChange} required name="email" type="email" />
            </div>
            <div className="form__number">
              <label htmlFor="">Phone Number</label>
              <input onChange={onChange} name="phone" required type="tel" />
            </div>
            <div className="form__message">
              <label htmlFor="">Message</label>
              <input onChange={onChange} name="message" required type="text" />
            </div>
            <button type="submit">
              {loading ? (
                <span>Please Wait...</span>
              ) : (
                <>
                  <span>Get in touch</span>
                  <img src={Send} alt="" />
                </>
              )}
            </button>
            <div className="contactme__social-container">
              <ul className="social-icons">
                <li>
                  <a
                    onClick={() =>
                      window.open(data?.contactCollection.items[0].instagram)
                    }
                  >
                    <i className="fa fa-instagram">
                      <SiInstagram />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      onClick={() =>
                        window.open(data?.contactCollection.items[0].youtube)
                      }
                      className="fa fa-twitter"
                    >
                      <SiYoutube />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigator.clipboard.writeText(
                        data?.contactCollection.items[0].number || ""
                      );
                      notify("Number Copied to clipbord");
                    }}
                    href="#"
                  >
                    <i className="fa fa-linkedin">
                      <SiWhatsapp />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigator.clipboard.writeText(
                        data?.contactCollection.items[0].email || ""
                      );
                      notify("Gmail Copied to clipbord");
                    }}
                    href="#"
                  >
                    <i className="fa fa-codepen">
                      <SiGmail />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>

        {/* <span className="big-circle"></span> */}
        {/* <img src={shape} className="square" alt="" />
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
                <p>{data?.contactCollection.items[0].address}</p>
              </div>
              <div className="information">
                <img src={email} className="icon" alt="" />
                <p>{data?.contactCollection.items[0].email}</p>
              </div>
              <div className="information">
                <img src={phone} className="icon" alt="" />
                <p>{data?.contactCollection.items[0].number}</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href={data?.contactCollection.items[0].instagram}>
                  <SiFacebook />
                </a>
                <a href="#">
                  <SiTwitter
                    href={data?.contactCollection.items[0].instagram}
                  />
                </a>
                <a href="#">
                  <SiInstagram
                    href={data?.contactCollection.items[0].instagram}
                  />
                </a>
                <a href="#">
                  <SiBehance
                    href={data?.contactCollection.items[0].instagram}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
              onSubmit={handleSubmit}
              action="index.html"
              autoComplete="off"
            >
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
        </div> */}
        <ToastContainer />
      </div>
    </>
  );
};
