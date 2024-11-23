'use client';
import { useParams } from "next/navigation";
import Image from "next/image";
import Backbutton from "@/icons/community/backbutton.svg";
import pdfImage from "@/assets/pdf.png";
import pdficon from "@/assets/pdficon.png";
import Commenticon from "@/icons/community/comments.svg";
import Sharecomp from "@/components/communityComponents/Sharecomp";
import CommentsComponent from "@/components/communityComponents/CommentsComponent";
import Link from "next/link";
export default function Postpage () {
    const {postid} = useParams()
    return (
        <div className="flex flex-col justify-center items-center p-4 ">
            <div className="w-full md:w-[60%] flex flex-col justify-start items-start">

{/* first  */}
                <Link href="/community">
            <div className="flex flex-row gap-3">
                <Image src={Backbutton} alt="Backbutton" width={10} height={10} />
                <span className="font-thin">Back</span>
            </div>
                </Link>

{/* second */}
        <div className="flex flex-row gap-2 justify-center items-center mt-6">
          <span className="rounded-full bg-[#FC8026] text-white h-[35px] w-[35px] flex flex-row justify-center items-center">
            A
          </span>
          <div className="flex flex-col">
            <p>Rahul Singh</p>
            <span className="text-[#8E8E8E]">8 hours ago</span>
          </div>
        </div>


        {/* third */}
        <div className="text-[#3A3A3A] font-light">
            <div className="flex flex-row justify-start gap-3 items-center mt-4">
                <span className="font-semibold text-xl">Current Affairs Snapshot November 21, 2024</span>
            </div>

           <div className="flex flex-col gap-5">
            <p>
            Lorem ipsum dolor sit amet consectetur. Nunc integer quis eu odio. Ac purus congue donec vitae arcu non. Massa nisi netus metus volutpat nulla porttitor dictum sed. Cursus ipsum id scelerisque sit. Sed gravida diam non volutpat sed. Enim justo enim consectetur sit turpis dictumst. Congue suspendisse dictum adipiscing proin ac. Non volutpat eget at tortor sed lectus facilisi ac tincidunt. Nec pharetra quam donec cras aliquam cras hendrerit dignissim pulvinar.
            </p>

            <p>
            Cras gravida sem sed donec urna eget. Massa viverra diam lacinia lacinia lorem nulla nunc nibh feugiat. Facilisis urna aliquam vehicula amet. Mauris facilisi laoreet sed sit sed eu molestie est. At diam diam a neque volutpat nisi faucibus urna. Malesuada proin magna nascetur rhoncus molestie nunc. Eu orci id in egestas fringilla eget. Sem at proin cras sit velit placerat. Vel lacus laoreet cursus elementum augue magna ac viverra mi.
            </p>

            <p>
            Quis ut in viverra ipsum. Feugiat eu tortor eleifend sit neque sapien at viverra. Viverra sagittis ac iaculis ornare quis. Diam tellus est pulvinar justo nullam at. Id et nibh ac neque nam lectus tellus eros in. Massa sed dolor donec.
            </p>
           </div>
        </div>

        {/* fourth */}
        <div className="mt-[20px]">
            <div>

            <Image src={pdfImage} alt="pdf" width={250} height={250} />
            <div className="bg-[#F3F3F5] flex justify-start gap-3 p-4">
            <Image src={pdficon} alt="pdficon" width={20} height={20} />
            <span className="">Notes.pdf</span>
            </div>
            </div>
        </div>

        {/* fifth */}
        <div className="mt-[20px]">
        <Sharecomp />
        </div>

        {/* sixth */}
        <div className="flex flex-row justify-between items-center w-full mt-[20px]">
            <span className="text-xl">Comments</span>
            <button className="bg-[#F9F9F9] text-[#0D0D0D] p-2 flex flex-row gap-3 rounded-lg">
                <Image src={Commenticon} alt="Commenticon" width={20} height={20} />
                Comment
            </button>

        </div>

        {/* seventh  */}
        <div className="flex flex-col justify-center items-center gap-5 w-full">
            <CommentsComponent />
            <CommentsComponent />
        </div>
            </div>
        </div>
    )
}