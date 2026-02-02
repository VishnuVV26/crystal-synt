"use client";
import Image from "next/image";
import logo from "../../../assets/images/Logo.jpg";
import { useEffect, useState } from "react";
const HeaderContainer = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white">
      {/* Top Info Bar */}
      {/* <div className="flex justify-between border-b border-white/20 px-6 py-2 text-sm bg-black/40 backdrop-blur">
        <p>
          Bldg. 400, Road 411, Block 704, P.O. Box 38145, Salmabad, Kingdom of Bahrain
        </p>
        <div className="flex gap-2 items-center">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <p>www.crystalbahrain.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <p>+973 17784818, 172711</p>
        </div>
      </div> */}
      {/* Main Header */}
      <div
        className={`flex items-center justify-between px-6 py-4 transition-all duration-300
          ${scrolled ? "bg-white/90" : "bg-black/0"}
        `}
      >
        {/* Logo */}
        <div className="flex gap-2">
          <Image src={logo} alt="Crystal Logo" width={50} height={50} />
          <div className="font-bold flex flex-col">
            <p className="text-blue-600 text-4xl ml-2">Crystal</p>
            <h6 className="text-red-600 text-xl ml-2"> Trading W.L.L</h6>
          </div>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          {["Home", "Services", "About Us", "Our Products", "Gallery", "Contact Us"].map((item) => (
            <p
              key={item}
              className={`${scrolled ? "text-black hover:border-black" : "text-white hover:border-white"} text-md  font-bold cursor-pointer hover:border-b-4  transition`}
            >
              {item}
            </p>
          ))}
        </nav>
        <div />
      </div>
    </header>
  );
};
export default HeaderContainer;