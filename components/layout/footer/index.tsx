import React from "react";
import logo from "../../../assets/images/Logo.jpg";
import Image from "next/image";
const FooterContainer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#2b2b27] to-[#1f1f1c] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left Section */}
        <div>
          <div className="mb-6">
            {/* Logo placeholder */}
            {/* <div className="w-14 h-14 border border-[#e8c9a0] rounded-full flex items-center justify-center text-[#e8c9a0]"> */}
            <div className="flex gap-2">
              <Image src={logo} alt="Crystal Logo" width={50} height={50} />
              <div className="font-bold flex flex-col">
                <h2 className="text-blue-600 text-2xl ml-2">Crystal</h2>
                <h6 className="text-red-600 text-xl ml-2"> Trading W.L.L</h6>
              </div>
            </div>
            {/* </div> */}
          </div>
          <p className="text-gray-300 leading-relaxed mb-8">
            Crystal International Galvanizing & Powder coating Factoryestablished in 2003,
            Crystal Factory is a Bahrain leading galvanizing and powder coating company.
          </p>
          {/* Social Icons */}
          {/* <div className="flex gap-6 text-xl text-white">
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div> */}
        </div>
        {/* Middle Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-10">Contact Us</h3>
          <div className="space-y-8 text-gray-300">
            <div className="flex gap-4 items-start border-b border-white/10 pb-6">
              <svg className="h-14 w-14 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p> CRYSTAL INTERNATIONAL TRADING W.L.L
                Office 400, Road 411, Block 704 Salmabad Kingdom Of Bahrain.</p>
            </div>
            <div className="flex gap-4 items-center border-b border-white/10 pb-6">
              {/* <FaPhone className="text-[#e8c9a0]" /> */}
              <svg className="h-4 w-4 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <p>+973-17784818,</p>
              <p>+973-17789694</p>
            </div>
            <div className="flex gap-4 items-center">
              <svg className="h-4 w-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p> trading@crystalbahrain.com</p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-10">Subscribe Us</h3>
          <p className="text-gray-300 mb-8">
            Stay updated with our latest news. We promise not to spam!
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-white/20 px-6 py-4 pr-14 text-white placeholder-gray-400 focus:outline-none"
            />
            {/* <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-[#e8c9a0]" /> */}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-white text-black text-center py-6">
        Copyright © 2026 Crystal International Trading. W.L.L. All Rights Reserved.
      </div>
      {/* Scroll To Top */}
      <button
        // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-8 bottom-20 bg-gray-200 p-4 rounded-full text-black shadow-lg"
      >
        {/* <FaArrowUp /> */}
      </button>
    </footer>
  );
}
export default FooterContainer