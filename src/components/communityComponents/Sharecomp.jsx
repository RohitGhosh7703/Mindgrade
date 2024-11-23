import MessageSvg from '../../icons/community/message.svg'
import UpArrowSvg from '../../icons/community/upArrow.svg'
import DownArrowSvg from '../../icons/community/downArrow.svg'
import Image from 'next/image'
export default function Sharecomp() {
    return (
        <div className="bg-[#F9F9F9] rounded-[26px] flex flex-row gap-[10px] px-[10px] py-2">
            <Image src={UpArrowSvg} alt="Message" width={20} height={20} />
            <span>100</span>
            <div className='border border-l-[#CFCFCF]'></div>

            <Image src={DownArrowSvg} alt="Message" width={20} height={20} />
            <span>100</span>
            <div className='border border-l-[#CFCFCF]'></div>

            <Image src={MessageSvg} alt="Message" width={20} height={20} />
            <span>100</span>
            {/* <div className='border border-l-[#CFCFCF]'></div> */}
        </div>
    )
}