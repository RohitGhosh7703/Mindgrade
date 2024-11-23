export default function SelectableButtons ({text ,onClick})  {  
    return ( 
        <button className="text-[#5B5B5B] border border-[#5B5B5B] rounded-full cursor-pointer px-[10px] py-[4px]">
            {text}
        </button>
    )
}