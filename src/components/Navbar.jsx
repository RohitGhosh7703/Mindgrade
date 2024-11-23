'use client'
import { useState } from "react";
import FireSvg from "@/icons/navbar/fire.svg";
import CallSvg from "@/icons/navbar/call.svg";
import Line from "@/icons/navbar/line.svg";
import Hamburgermenu from "@/icons/navbar/hamburgermenu.svg";
import Dropdown from "@/icons/navbar/dropdown.svg";
import Image from "next/image";
import Logo from "@/icons/sidebar/Logo.svg";
import crossicon from "@/icons/navbar/cross.svg"

export function Navbar({ onToggleSidebar }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-[73px] flex items-center justify-start gap-6  md:justify-between px-6 text-black bg-white shadow-md transition-all duration-300">
      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className=""
        >
          <Image src={Hamburgermenu} alt="Hamburger" width={35} height={35} />
        </button>
      </div>

      {/* Greeting and Fire Button */}
      <div className="flex items-center gap-4">
        <p className="text-[#0D0D0D] font-semibold text-[20px]">Hey Rahul!</p>

        {/* fire button */}
        <button className="block md:hidden relative p-[2px] bg-gradient-to-r from-[#FC8026] to-[#014EE6] rounded-full">
          <div className="flex flex-row justify-center items-center gap-4 bg-white text-[#014EE6] font-bold py-2 px-4 rounded-full">
            <Image src={FireSvg} alt="Fire" width={20} height={20} />
            <span>2</span>
          </div>
        </button>
      </div>
       

      {/* Desktop Navbar Items */}
      <div className="hidden lg:flex items-center gap-4">
      <button className="relative p-[2px] bg-gradient-to-r from-[#FC8026] to-[#014EE6] rounded-full">
          <div className="flex flex-row justify-center items-center gap-4 bg-white text-[#014EE6] font-bold py-2 px-4 rounded-full">
            <Image src={FireSvg} alt="Fire" width={20} height={20} />
            <span>2</span>
          </div>
        </button>
        <button className="border-[2px] border-[#014EE6] rounded-md px-[8px] py-[8px]">
          <span className="text-[#014EE6] font-medium">Explore Community</span>
        </button>
        <button className="bg-gradient-to-r from-[#014EE6C4] via-[#014EE6C4] to-[#012B80] text-white font-bold py-2 px-4 rounded hover:brightness-110 transition duration-300 w-[218px] flex flex-row">
          <span>Polity</span>
          <div className="flex flex-1 justify-end items-center gap-2">
            <Image src={Line} alt="Line" width={1} height={1} />
            <Image src={Dropdown} alt="Dropdown" width={15} height={15} />
          </div>
        </button>
        <Image src={CallSvg} alt="Call" width={20} height={20} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-20 top-0 left-0 w-full h-screen bg-white p-4 shadow-md lg:hidden transform transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <Image src={Logo} alt="Logo" width={30} height={30} />

          {/* Cross Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="cursor-pointer"
          >
            <Image src={crossicon} alt="Close Menu" width={20} height={20} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-4 mt-6">
          <li>
            <button onClick={onToggleSidebar} className="w-full text-left">
              Questions
            </button>
          </li>
          <li>
            <button onClick={onToggleSidebar} className="w-full text-left">
              Notes
            </button>
          </li>
          <li>
            <button onClick={onToggleSidebar} className="w-full text-left">
              Calendar
            </button>
          </li>
          <li>
            <button onClick={onToggleSidebar} className="w-full text-left">
              Redirect
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
