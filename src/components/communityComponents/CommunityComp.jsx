import { useRouter } from "next/navigation";
import Eyesvg from "../../icons/community/eyes.svg";
import Bluecircle from "../../icons/community/bluecircle.svg";
import Image from "next/image";
import Sharecomp from "./Sharecomp";
import CommunityButton from "./CommunityButtons";

export default function CommunityFunction({ postid }) {
  const router = useRouter();

  const navigateToUserPage = () => {
    router.push(`community/post/${postid}`);
  };

  return (
    <div
      className="w-full border flex flex-col gap-2 shadow-md p-4 rounded-[10px] cursor-pointer hover:border-[#014EE6] transition duration-300"
      onClick={navigateToUserPage} // Navigate on click
    >
      {/* First line */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 justify-center items-center">
          <span className="rounded-full bg-[#FC8026] text-white h-[40px] w-[40px] flex flex-row justify-center items-center">
            A
          </span>
          <div className="flex flex-col">
            <p>Rahul Singh</p>
            <span className="text-[#8E8E8E]">8 hours ago</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Image src={Eyesvg} alt="Eye" width={20} height={20} />
          <span className="text-black">125</span>
        </div>
      </div>

      {/* Second line */}
      <div className="flex flex-row justify-start gap-3 items-center">
        <Image src={Bluecircle} alt="Bluecircle" width={10} height={10} />
        <span className="font-semibold">Preparation Strategy</span>
      </div>

      {/* Third line */}
      <div className="text-[#3A3A3A]">
        Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum
        amet mattis nulla sagittis. Ultricies consectetur vitae bibendum
        volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.
      </div>

      {/* Fourth line */}
      <div className="flex flex-row flex-wrap gap-2 justify-start items-center">
        <Sharecomp />
        <p className="text-[#FC8026] text-[15px]">New comment 5 min ago</p>

        <div className="flex gap-2 justify-end ml-auto">
          <CommunityButton text="Strategy" />
          <CommunityButton text="Preparation" />
        </div>
      </div>
    </div>
  );
}
