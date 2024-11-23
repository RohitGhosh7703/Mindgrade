import Questionicon from '@/icons/sidebar/question.svg';
import Reviewicon from '@/icons/sidebar/notepad.svg';
import Calendaricon from '@/icons/sidebar/calendar.svg';
import Arrowicon from '@/icons/sidebar/arrow.svg';
import Scansvg from "@/icons/sidebar/scan.svg";
import Navbarsvg from "@/icons/navbar/navbar.svg";
import Image from 'next/image';
export default function () {
    return (

        <div  className="absolute bottom-0 flex flex-row justify-evenly items-center   w-full shadow-Lg"
        
        >

            <div className='w-full flex flex-row justify-evenly items-end'>
{/* <div className='w-[40%] flex flex-row justify-around bg-white rounded-tr-[30px] h-[65px] z-10 border '> */}
<div className='w-[40%] flex flex-row justify-around bg-white h-[65px] z-10 border-none '>
            <div className='flex flex-col gap-2 justify-center items-center cursor-pointer'>
            <Image src={Questionicon} alt="Question" width={20} height={20} />
            <span>Questions</span>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center cursor-pointer '>
            <Image src={Reviewicon} alt="Question" width={20} height={20} />
            <span>Review</span>
            </div>
</div>

{/* <div className="w-[20%] h-[60px] relative bg-transparent border-none opacity-1">
  <div
    className="absolute top-0 left-0 right-0 bg-whit border-none h-full w-full z-0"
    style={{
      clipPath: 'ellipse(100% 120% at 50% 100%)', // Creates a curved bottom shape
      height: '85%', // Controls the height of the inner div
      borderBottomLeftRadius: '50%', // For smooth curve on bottom left
      borderBottomRightRadius: '50%', // For smooth curve on bottom right
    }}
  ></div>
</div> */}

<div className='w-[20%] h-[60px] opacity-1 relative bg-white rounded-[-200px] z-1'>
<div
    className="absolute top-0  left-0 right-0 bg-transparent border-none h-full w-full "
    style={{
    //   clipPath: 'ellipse(100% 120% at 50% 100%)', // Creates a curved bottom shape
      height: '85%', // Controls the height of the inner div
      borderBottomLeftRadius: '50%', // For smooth curve on bottom left
      borderBottomRightRadius: '50%', // For smooth curve on bottom right
    }}
  ></div>
</div>


        
            <div className='w-[40%] flex flex-row justify-around bg-white  h-[65px] z-10 border-none'>

            <div className='flex flex-col gap-2 justify-center items-center cursor-pointer'>
            <Image src={Calendaricon} alt="Question" width={20} height={20} />
            <span>Library</span>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center cursor-pointer'>
            <Image src={Arrowicon} alt="Question" width={20} height={20} />
            <span>Progress</span>
            </div>
            </div>
            </div>

           
             <div className='absolute bottom-4 margin-auto z-10'>
            <Image src={Scansvg} alt="Question" width={80} height={80} />
            </div>
        </div>
    );
}