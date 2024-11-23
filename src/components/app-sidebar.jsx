'use client'
import { useState } from "react";
import Image from "next/image";

// Icons
import ArrowSvg from "@/icons/sidebar/arrow.svg";
import CalendarSvg from "@/icons/sidebar/calendar.svg";
import NotepadSvg from "@/icons/sidebar/notepad.svg";
import QuestionSvg from "@/icons/sidebar/question.svg";
import LogoSvg from "@/icons/sidebar/Logo.svg";
import Profilesvg from "@/icons/sidebar/profile.svg";
import Uploadsvg from "@/icons/sidebar/Upload.svg";
import ToggleArrow from "@/icons/sidebar/TogggleArrow.svg"

const items = [
  {
    title: "Questions",
    url: "#",
    icon: QuestionSvg,
  },
  {
    title: "Notes",
    url: "#",
    icon: NotepadSvg,
  },
  {
    title: "Calendar",
    url: "#",
    icon: CalendarSvg,
  },
  {
    title: "Redirect",
    url: "#",
    icon: ArrowSvg,
  },
];

export function AppSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`hidden md:flex flex-col bg-[#ffffff] text-black h-screen transition-all duration-300 shadow-2xl ${
        isExpanded ? "w-64" : "w-[76px]"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-center py-4">
        <Image src={LogoSvg} alt="Logo" className={`transition-all ${isExpanded ? "mb-4" : ""}`} />
      </div>

      {/* Sidebar Content */}
      <div className={`flex-1 ${isExpanded ? 'p-0' : 'p-2'}`}>
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item.title} className="group">
        <a
          href={item.url}
          className={`flex items-center gap-4 p-2 hover:bg-gray-200 transition-all   rounded-md ${isExpanded ? 'justify-start' : 'justify-center'} ${isExpanded ? 'pl-4' : ''}`}
        >
          <Image src={item.icon} alt="" width={24} height={24} />
          {isExpanded && <span className="text-sm text-gray-500">{item.title}</span>}
        </a>
      </li>
    ))}
  </ul>
</div>

<div className={`absolute  w-[15px] h-[80px] rounded-tr-3xl rounded-br-3xl bg-white  top-1/2   ${isExpanded ? "left-64 " : "left-[76px]"}    flex flex-col justify-center items-center cursor-pointer `  }  onClick={() => setIsExpanded((prev) => !prev)} >
    <Image src={ToggleArrow} alt="Toggle Arrow" width={30} height={30} className={`cursor-pointer ${isExpanded ? "rotate-180 " : "rotate-0"} `}          
 />
</div>


      {/* Sidebar Footer */}
      <div className="flex flex-col gap-3 items-center justify-end p-4">
        <div className="flex flex-row justify-start items-center gap-3   w-full">

      <button className="flex flex-row justify-center items-center p-[3px] h-[35px] w-[45px] bg-gradient-to-r from-[#FC8026] to-[#014EE6] rounded-xl">
      <div className="flex flex-row justify-center items-center bg-white py-3 px-2 rounded-xl h-[34px] w-[45px]">
        <Image
          src={Uploadsvg}
          alt="Upload"
          width={20} // Adjust width for proper scaling
          height={20} // Adjust height for proper scaling
          className="w-auto h-auto"
        />
      </div>
    </button>
    {isExpanded && <span className="text-sm text-gray-500">Upload</span>}

        </div>
        <div className="flex flex-row justify-start items-center gap-3   w-full">

          <Image
            src={Profilesvg}
            alt="profile"

            className="w-[40px] h-[40px]"
          />
    {isExpanded && <span className="text-sm text-gray-500">Profile</span>}

          </div>
      
        {/* <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex items-center justify-center bg-gray-600 p-2 rounded-full hover:bg-gray-700"
        >
          <Image
            src={ArrowSvg}
            alt="Toggle Sidebar"
            className={`transition-transform ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button> */}
      </div>
    </div>
  );
}
