'use client';
import { useState } from "react";
import FireSvg from "@/icons/sidebar/fire.svg";
import InnerFireSvg from "@/icons/sidebar/innerfire.svg";
import SelectableButton from "@/components/Buttons/Selectablebuttons";
import CommunityFunction from "@/components/communityComponents/CommunityComp";
import Tagbuttons from "@/components/communityComponents/Tagbuttons";
import SearchbarIcon from "@/icons/sidebar/Searchicon.svg";
import Image from "next/image";
export default function Community() {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex min-h-screen ">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-4 w-[100%] md:w-[65%]">
        <p className="font-medium text-xl">Community</p>
        <div className="flex flex-row justify-between flex-wrap gap-2">
          <div className="flex flex-row gap-4">
            <SelectableButton
              text="All"
              isSelected={selectedButton === "All"}
              onClick={() => handleButtonClick("All")}
            />
            <SelectableButton
              text="Preparation Strategy"
              isSelected={selectedButton === "Preparation Strategy"}
              onClick={() => handleButtonClick("Preparation Strategy")}
            />
            <SelectableButton
              text="Interview Experience"
              isSelected={selectedButton === "Interview Experience"}
              onClick={() => handleButtonClick("Interview Experience")}
            />
          </div>
          <button className="bg-[#014EE6] text-white font-medium py-2 px-4 rounded-md">
            Write
          </button>
        </div>
        <div className="border-[0.5px] mb-[20px]"></div>
        <div className="flex flex-col justify-start items-center gap-3">
          <CommunityFunction  postid={1}/>
          <CommunityFunction postid={2}/>
          <CommunityFunction postid={3}/>
        </div>
      </div>

      {/* Divider */}
      <div className="ml-3 border-l-[1px] border-[#CFCFCF] h-screen hidden md:block"></div>

      {/* Right Section */}
      <div className="w-[35%] px-4 hidden md:block">

        {/* first box of the right div */}
      <div className="hidden md:flex h-auto w-full p-4  rounded-lg bg-gradient-to-b from-[#FFE39AA3] to-[#FFF2D286] via-[#FFE39AA3]  bg-no-repeat  flex-row justify-start items-center">
      <div className="relative h-[50px] w-[50px]">
            {/* Larger SVG */}

            {/* Smaller SVG */}
            <Image
              src={InnerFireSvg}
              alt="Inner Fire"
              width={100}
              height={100}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

      <div className="flex flex-col gap-2 px-6">
      <p className="font-semibold">
      Achieve Your Goals with Keep The Streak Alive
      </p>
      <button className="bg-[#FC8026] text-white rounded-2xl w-fit p-2"> 
      Start Practicing
      </button>
          </div>


      </div>
{/* second box for the search bar */}
      <div className="p-[20px] border border-[#47474733] rounded-lg mt-[20px]">
        
        <p className="text-black font-medium text-xl"> Tags</p>
        <div className="relative flex items-center border border-[#47474733] p-1 rounded focus-within:border-gray-800 mt-[14px]">
      {/* Search Icon */}
      <div className="absolute left-2 flex items-center justify-center cursor-pointer">
        <Image src={SearchbarIcon} alt="Search Icon" width={16} height={16} />
      </div>

      {/* Input Field */}
      <input
        placeholder="Search for tag"
        className="pl-8 pr-2 py-1 w-full focus:outline-none"
      />
    </div>

      <div className="flex flex-row flex-wrap gap-[10px] mt-[22px]">
      <Tagbuttons text="Interview" />
      <Tagbuttons text="Strategy" />
      <Tagbuttons text="Economics" />
      <Tagbuttons text="Socioloagy" />
      <Tagbuttons text="Indian History" />
      <Tagbuttons text="Socialogy" />
      <Tagbuttons text="Interview" />
      <Tagbuttons text="Strategy" />
      <Tagbuttons text="Economics" />
      <Tagbuttons text="Socioloagy" />
      <Tagbuttons text="Indian History" />
      <Tagbuttons text="Socialogy" />
    
      </div>
      </div>

      </div>
    </div>
  );
}
