import React from 'react'
import UpArrowSvg from '../../icons/community/upArrow.svg'
import DownArrowSvg from '../../icons/community/downArrow.svg'
import ReplyButton from "../../icons/community/Reply.svg"
import Commenticon from "@/icons/community/comments.svg";
import ShowRepliesicon from "@/icons/community/showreplies.svg";
import Image from 'next/image'
function InnerCommentsComponent() {
  const [showReplies, setShowReplies] = React.useState(false) 
  return (
    <div className='w-full rounded-lg mt-2  flex flex-row justify-end items-start gap-3'>
<div className="rounded-full  text-white h-full flex flex-row justify-start items-center leading-none relative">
  {/* the connecting line */}
  <div className='absolute border-b-2 border-gray-300 w-[29px] h-32 left-[-29px] bottom-5 rounded-bl-2xl '></div>
  <span className='rounded-full bg-[#FC8026] text-white h-[40px] w-[40px]  flex flex-row justify-center items-center leading-none'>

  A
  </span>

  
</div>

          
          <div className='flex flex-col gap-3'>

         <div className="flex flex-row gap-2 justify-start items-center">
          <div className="flex flex-col">
            <p>Rahul Singh</p>
            <span className="text-[#8E8E8E]">8 hours ago</span>
          </div>

        </div>
          {/* second */}
          <p>
          Lorem ipsum dolor sit amet consectetur. Arcu amet nulla at neque non tempor id eu. In enim purus elementum viverra volutpat turpis fringilla amet. Consequat suspendisse nibh quisque in ultrices ipsum ut feugiat gravida. Sollicitudin in.
          </p>

          {/* third */}
          <div className='flex flex-row  flex-wrap gap-6 justify-start items-center'>
          <div className="bg-[#F9F9F9] rounded-[26px] flex flex-row gap-[10px] px-[10px] py-2">
            <Image src={UpArrowSvg} alt="Message" width={20} height={20} />
            <span>100</span>
            <div className='border border-l-[#CFCFCF]'></div>

            <Image src={DownArrowSvg} alt="Message" width={20} height={20} />
            <span>100</span>
        </div>

        <div className='flex flex-row gap-2'>
            <Image src={ReplyButton} alt="Reply" width={20} height={20} />
            <span className='cursor-pointer'>Reply</span>

        </div>

        <div className='flex flex-row gap-2'>
            <Image src={ShowRepliesicon} alt="Comment" width={20} height={20}  /> 
            <span className='text-[#8E8E8E]'>show 10 replies</span>
        </div>

          </div>

          {/* <InnerCommentsComponent /> */}
    </div>
          </div>
  )
}

export default InnerCommentsComponent