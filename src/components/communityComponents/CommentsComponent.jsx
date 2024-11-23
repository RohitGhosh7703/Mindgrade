import React, { useState } from 'react';
import UpArrowSvg from '../../icons/community/upArrow.svg';
import DownArrowSvg from '../../icons/community/downArrow.svg';
import ReplyButton from "../../icons/community/Reply.svg";
import ShowRepliesicon from "@/icons/community/showreplies.svg";
import Image from 'next/image';
import InnerCommentsComponent from './Innercomponents';

function CommentsComponent() {
  // State to manage visibility of the line and replies
  const [showReplies, setShowReplies] = useState(false);

  // Function to toggle replies visibility
  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className='w-full rounded-lg shadow-md p-4 flex flex-row justify-start items-start gap-3 relative'>
      {/* Parent User Icon */}
      <div className="rounded-full bg-[#FC8026] text-white h-[40px] w-[40px] flex justify-center items-center leading-none relative">
        A

       
      </div>

      {showReplies && (
          <div
            className="absolute left-[35px] top-[10] w-[1px] bg-gray-300"
            style={{ height: '95%', zIndex: -1 }}
          ></div>
        )}

     
      <div className='flex flex-col gap-3 w-full relative'>
        {/* User Info */}
        <div className="flex flex-row gap-2 justify-start items-center">
          <div className="flex flex-col">
            <p>Rahul Singh</p>
            <span className="text-[#8E8E8E]">8 hours ago</span>
          </div>
        </div>

        {/* Comment Text */}
        <p>
          Lorem ipsum dolor sit amet consectetur. Arcu amet nulla at neque non tempor id eu.
          In enim purus elementum viverra volutpat turpis fringilla amet. Consequat suspendisse
          nibh quisque in ultrices ipsum ut feugiat gravida. Sollicitudin in.
        </p>

        {/* Action buttons */}
        <div className='flex flex-row flex-wrap  gap-6 justify-start items-center'>
          <div className="bg-[#F9F9F9] rounded-[26px] flex flex-row gap-[10px] px-[10px] py-2">
            <Image src={UpArrowSvg} alt="Upvote" width={20} height={20} />
            <span>100</span>
            <div className='border border-l-[#CFCFCF]'></div>
            <Image src={DownArrowSvg} alt="Downvote" width={20} height={20} />
            <span>100</span>
          </div>

          <div className='flex flex-row gap-2 cursor-pointer'>
            <Image src={ReplyButton} alt="Reply" width={20} height={20} />
            <span>Reply</span>
          </div>

          <div className='flex flex-row gap-2 cursor-pointer' onClick={toggleReplies}>
            <Image src={ShowRepliesicon} alt="Show Replies" width={20} height={20} />
            <span className='text-[#8E8E8E]'>
              {showReplies ? 'Hide Replies' : 'Show 10 replies'}
            </span>
          </div>
        </div>

        {/* Line that becomes visible when showReplies is true */}
      

        {/* Inner comments (replies) */}
        {showReplies && <InnerCommentsComponent />}
        {showReplies && <InnerCommentsComponent />}
      </div>
    </div>
  );
}

export default CommentsComponent;
