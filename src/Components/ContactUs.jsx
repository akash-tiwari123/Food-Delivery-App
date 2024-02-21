import React from "react";
import TopNav from "./TopNav";
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {FaGlobe} from 'react-icons/fa'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const ContactUs = () => {
    
  return (
    <div>
        <TopNav/>
      <section id="section-wrapper" className="w-full p-10 ">
        <div className="box-wrapper flex w-11/12 mx-auto mt-35 rounded-3xl pt-16">
          <div className="info-wrap w-2/5 h-551 p-10 float-left flex flex-col rounded-3xl bg-gradient-to-b from-purple-600 to-indigo-600 text-white">
            <h2 className="info-title text-left text-4xl font-bold mb-4">
              Contact Information
            </h2>
            <h3 className="info-sub-title text-xl font-light mb-6">
              Fill up the form and our Team will get back to you within 24 hours
            </h3>
            <ul className="info-details my-12">
              <li className="flex items-center text-lg pb-7">
              <div className="h-10 w-10 bg-orange-700 rounded-full">
                <BsPhone className="mx-[10px] my-[10px] "/>
                </div>
                <span className="ml-5">Phone:</span>{" "}
                <a href="tel:+1235235598" className="text-white ml-1">
                  +1235235598
                </a>
              </li>
              <li className="flex items-center text-lg pb-7">
              <div className="h-10 w-10 bg-orange-700 rounded-full">
                <MdEmail className="mx-[10px] my-[10px] "/>
                </div>
                <span className="ml-5">Email:</span>{" "}
                <a href="mailto:info@yoursite.com" className="text-white ml-1">
                  info@yoursite.com
                </a>
              </li>
              <li className="flex items-center text-lg pb-7">
                <div className="h-10 w-10 bg-orange-700 rounded-full">
                <FaGlobe className="mx-[10px] my-[10px] "/>
                </div>
                <span className="ml-5">Website:</span>{" "}
                <a href="#" className="text-white ml-1">
                  yoursite.com
                </a>
              </li>
            </ul>

            <ul className="flex justify-center ml-[-30px] mt-[-10px]">
              <li>
                <a href="#" className="text-white">
                  <div className="h-13 w-13 bg-orange-700 rounded-xl mx-3 flex justify-center items-center">
                      <FaFacebook size={30} className="mx-[10px] my-[10px] "/>
                  </div>               
                 </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <div className="h-13 w-13 bg-orange-700 rounded-xl mx-3 flex justify-center items-center">
                      <FaTwitter size={30} className="mx-[10px] my-[10px] "/>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <div className="h-13 w-13 bg-orange-700 rounded-xl mx-2 flex justify-center items-center">
                      <FaLinkedin size={30} className="mx-[10px] my-[10px]  "/>
                  </div>
                </a>
              </li>
            </ul>
          </div>


          <div className="form-wrap w-3/5 p-10 rounded-3xl bg-gray-200">
            <form action="https://formspree.io/f/xrgnqqbn" method="POST">
              <h2 className="form-title text-left text-4xl font-bold mb-8">
                Send us a message
              </h2>
              <div className=" flex flex-wrap">
                <div className=" w-1/2 mb-4">
                  <input
                    type="text"
                    name="firstname"
                    className="w-[300px] rounded-3xl shadow-[inset_10px_10px_10px_#cbced1,inset_8px_8px_8px_#ffffff]  p-4 border-none outline-none bg-none text-lg text-gray-700"
                    placeholder="First Name"
                  />
                </div>
                <div className=" w-1/2 mb-4">
                    
                  <input
                    name="lastname"
                    type="text"
                    className="w-[300px] rounded-3xl shadow-[inset_10px_10px_10px_#cbced1,inset_8px_8px_8px_#ffffff]  ml-2 p-4 border-none outline-none bg-none text-lg text-gray-700"
                    placeholder="Last Name"
                  />
                </div>
                <div className=" w-1/2 mb-4">
                  <input
                    name="email"
                    type="email"
                    className="  w-[300px] rounded-3xl shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff] p-4 border-none outline-none bg-none text-lg text-gray-700"
                    placeholder="Mail"
                  />
                </div>
                <div className=" w-1/2 mb-4">
                  <input
                    name='number'
                    type="number"
                    className=" w-[300px] rounded-3xl   shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff] ml-2  p-4 border-none outline-none bg-none text-lg text-gray-700"
                    placeholder="Phone"
                  />
                </div>
                <div className=" w-full mb-4">
                  <textarea
                    name="message"
                    className="w-full rounded-3xl  shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff] p-4 border-none outline-none bg-none text-lg text-gray-700"
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="submit-button w-full h-16 mb-4 border-none outline-none cursor-pointer text-lg font-bold text-white text-center bg-orange-700 rounded-full shadow-md transition duration-500 hover:bg-purple-900"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
