export default function CommunityButton({ text }) {
    return (
      <button
        // onClick={onClick}
        className="px-[10px] py-1 font-medium border border-[#FC8026] 
                   bg-gradient-to-r from-[#FFE39AA3] via-[#FFF2D286] to-[#FFF2D286] 
                   hover:brightness-105 transition duration-300 text-[#FC8026] rounded-full"
      >
        {text}
      </button>
    );
  }
  