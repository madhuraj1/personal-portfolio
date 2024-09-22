// import React, { useState } from "react";
// import {
//   SiBehance,
//   SiFacebook,
//   SiGmail,
//   SiInstagram,
//   SiTwitter,
//   SiWhatsapp,
//   SiYoutube,
// } from "react-icons/si";
// import email from "../../assets/email.png";
// import location from "../../assets/location.png";
// import phone from "../../assets/phone.png";
// import shape from "../../assets/shape.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { MinimalFooter } from "../../layout/MinimalFooter";
// import { useQuery } from "@apollo/client";
// import { contactQuery } from "../../schema/Query";
// import { IContact } from "../../types/pages/Contact.types";
// import ContactImage from ".././../assets/contact.jpg";
// import Send from "../../assets/send.svg";
// export const Contact = () => {
//   const { data } = useQuery<IContact>(contactQuery);

//   const [contact, setContact] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     subject: "StaticForms - Contact Form",
//     honeypot: "", // if any value received in this field, form submission will be ignored.
//     message: "",
//     replyTo: "@", // this will set replyTo of email to email address entered in the form
//     accessKey: "6af45e78-b803-4a42-9a03-054b9d010602", // get your access key from https://www.staticforms.xyz
//   });
//   const notify = (message: string) => toast(message);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setContact({ ...contact, [e.target.name]: e.target.value });

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   try {
//   //     console.log(contact);

//   //     const res = await fetch("https://api.staticforms.xyz/submit", {
//   //       method: "POST",
//   //       body: JSON.stringify(contact),
//   //       headers: { "Content-Type": "application/json" },
//   //     });

//   //     const json = await res.json();
//   //     console.log(json);

//   //     if (json.success) {
//   //       notify("Thank you for reaching out to us.");
//   //     } else {
//   //       notify("Error while sending");
//   //     }
//   //   } catch (e) {
//   //     notify("An error occured while submitting the form");
//   //   }
//   // };
//   const handlesubmit = (e: any) => {
//     e.preventDefault();
//     if (
//       (formdata.email !== "",
//       formdata.message !== "",
//       formdata.name !== "",
//       formdata.phone !== "")
//     ) {
//       const formData = new FormData();
//       setLoading(true);
//       formData.append("name", formdata.name);
//       formData.append("email", formdata.email);
//       formData.append("phone", formdata.phone);
//       formData.append("message", formdata.message);
//       fetch("https://www.actionforms.io/e/r/madhurajphotography", {
//         method: "POST",
//         body: formData,
//       })
//         .then((res) => {
//           setLoading(false);
//           if (res.status === 200) {
//             notify("Succesfully recieved");
//           }
//         })
//         .catch((err) => {
//           setLoading(false);
//         });
//     }
//   };
//   const [formdata, setformdata] = useState<{
//     name: string;
//     email: string;
//     phone: string;
//     message: string;
//   }>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setformdata((form) => {
//       return { ...form, [e.target.name]: e.target.value };
//     });
//   };
//   const [loading, setLoading] = useState<boolean>(false);
//   return (
//     <>
//       <div className="contactme">
//         <div className="contactme__image">
//           <img src={ContactImage} alt="" />
//         </div>
//         <div className="contactme__form">
//           <form
//             className="form"
//             // action="https://www.actionforms.io/e/r/madhurajphotography"
//             // method="POST"
//             target=""
//             onSubmit={handlesubmit}
//           >
//             <div className="form__heading">Details About You</div>
//             <div className="form__name">
//               <label htmlFor="">Name</label>
//               <input onChange={onChange} name="name" required type="text" />
//             </div>
//             <div className="form__email">
//               <label htmlFor="">Email</label>
//               <input onChange={onChange} required name="email" type="email" />
//             </div>
//             <div className="form__number">
//               <label htmlFor="">Phone Number</label>
//               <input onChange={onChange} name="phone" required type="tel" />
//             </div>
//             <div className="form__message">
//               <label htmlFor="">Message</label>
//               <input onChange={onChange} name="message" required type="text" />
//             </div>
//             <button type="submit">
//               {loading ? (
//                 <span>Please Wait...</span>
//               ) : (
//                 <>
//                   <span>Get in touch</span>
//                   <img src={Send} alt="send-btn" />
//                 </>
//               )}
//             </button>
//             <div className="contactme__social-container">
//               <ul className="social-icons">
//                 <li>
//                   <a
//                     onClick={() =>
//                       window.open(data?.contactCollection.items[0].instagram)
//                     }
//                   >
//                     <i className="fa fa-instagram">
//                       <SiInstagram />
//                     </i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i
//                       onClick={() =>
//                         window.open(data?.contactCollection.items[0].youtube)
//                       }
//                       className="fa fa-twitter"
//                     >
//                       <SiYoutube />
//                     </i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={() => {
//                       navigator.clipboard.writeText(
//                         data?.contactCollection.items[0].number || ""
//                       );
//                       notify("Number Copied to clipbord");
//                     }}
//                     href="#"
//                   >
//                     <i className="fa fa-linkedin">
//                       <SiWhatsapp />
//                     </i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={() => {
//                       navigator.clipboard.writeText(
//                         data?.contactCollection.items[0].email || ""
//                       );
//                       notify("Gmail Copied to clipbord");
//                     }}
//                     href="#"
//                   >
//                     <i className="fa fa-codepen">
//                       <SiGmail />
//                     </i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </form>
//         </div>

//         {/* <span className="big-circle"></span> */}
//         {/* <img src={shape} className="square" alt="" />
//         <div className="form">
//           <div className="contact-info">
//             <h3 className="title">Let's get in touch</h3>
//             <p className="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
//               dolorum adipisci recusandae praesentium dicta!
//             </p>

//             <div className="info">
//               <div className="information">
//                 <img src={location} className="icon" alt="" />
//                 <p>{data?.contactCollection.items[0].address}</p>
//               </div>
//               <div className="information">
//                 <img src={email} className="icon" alt="" />
//                 <p>{data?.contactCollection.items[0].email}</p>
//               </div>
//               <div className="information">
//                 <img src={phone} className="icon" alt="" />
//                 <p>{data?.contactCollection.items[0].number}</p>
//               </div>
//             </div>

//             <div className="social-media">
//               <p>Connect with us :</p>
//               <div className="social-icons">
//                 <a href={data?.contactCollection.items[0].instagram}>
//                   <SiFacebook />
//                 </a>
//                 <a href="#">
//                   <SiTwitter
//                     href={data?.contactCollection.items[0].instagram}
//                   />
//                 </a>
//                 <a href="#">
//                   <SiInstagram
//                     href={data?.contactCollection.items[0].instagram}
//                   />
//                 </a>
//                 <a href="#">
//                   <SiBehance
//                     href={data?.contactCollection.items[0].instagram}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="contact-form">
//             <span className="circle one"></span>
//             <span className="circle two"></span>

//             <form
//               onSubmit={handleSubmit}
//               action="index.html"
//               autoComplete="off"
//             >
//               <h3 className="title">Contact us</h3>
//               <div className="input-container">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   className="input"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="input-container">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   className="input"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="input-container">
//                 <input
//                   type="tel"
//                   placeholder="Phone number"
//                   name="contact"
//                   className="input"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="input-container textarea">
//                 <input
//                   name="message"
//                   placeholder="Message"
//                   className="input"
//                   type={""}
//                   onChange={handleChange}
//                 ></input>
//               </div>
//               <input type="submit" value="Send" className="btn" />
//             </form>
//           </div>
//         </div> */}
//         <ToastContainer />
//       </div>
//     </>
//   );
// };
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPinIcon, PhoneIcon, LetterText } from 'lucide-react';
import ContactImage from '.././../assets/contact.jpg';
export const Contact = () => {
  return (
    <div className="relative flex min-h-[100vh] items-center justify-center">
      <div className="-z-1 absolute h-full w-full xs:hidden md:block">
        <img src={ContactImage} alt="" className="h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl rounded-lg bg-white bg-opacity-80 py-24 shadow-lg xs:w-[calc(100vw-2rem)] xs:p-4 sm:p-12 md:w-8/12">
        <h1 className="mb-6 text-center text-3xl font-bold">Contact Us!</h1>
        <p className="mb-8 text-center text-gray-600">
          The promise to "get back to you as soon as possible" assures prompt
          attention to inquiries.
        </p>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name *
                </label>
                <Input id="name" placeholder="Name" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <Input id="email" type="email" placeholder="Email" required />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <Input id="phone" type="tel" placeholder="Phone" required />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description *
                </label>
                <Textarea id="description" placeholder="Message" required />
              </div>
              <Button variant={'ghost'} className="w-full bg-black text-white">
                Send
              </Button>
            </form>
          </div>

          <div className="w-full space-y-4 md:w-1/2">
            <div className="flex items-center space-x-2 text-gray-600">
              <PhoneIcon className="h-5 w-5 text-orange-500" />
              <span>470-601-1911</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <LetterText className="h-5 w-5 text-orange-500" />
              <span>Pagedone1234@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPinIcon className="h-5 w-5 text-orange-500" />
              <span>789 Oak Lane, Lakeside, TX 54321</span>
            </div>
            <div className="h-64 rounded-lg bg-gray-300">
              {/* Replace with actual map component or embed */}
              <div className="flex h-full w-full items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
