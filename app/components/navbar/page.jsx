import Image from "next/image";
import Link from "next/link";
import UserIcon from "../icons/UserIcon";

export default function Navbar() {
  return (
<header className="bg-white h-[72px]" >
  <div className=" mx-auto md:px-20 px-3 h-full w-full flex items-center justify-between"  style={{ boxShadow: '0 3px 8px 0 rgba(0, 0, 0, 0.15)' }}>
    
    {/* Logo */}
    <div className="flex-shrink-0 pb-2">
      <a href="https://www.cfainstitute.org/" target="_blank" rel="noopener noreferrer">
        <Image src="/logo.png" alt="CFA Institute" width={175} height={40} priority />
      </a>
    </div>

    {/* Sign In Button */}
   <a
  href="https://v2.accounts.accredible.com/login?app=recipient-portal&origin=https:%2F%2Fcredentials.cfainstitute.org%2F8d649f15-d4d7-44a2-9a3b-4605556a832f"
  rel="noopener noreferrer"
  className="flex items-center h-full cursor-pointer"
>
  <button className="flex items-center h-full cursor-pointer px-4 hover:bg-gray-200 space-x-2">
    <div className="flex items-center justify-center">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="w-[1.7rem] h-[1.7rem] text-black/60 border-[0.5px] border-gray-300 rounded-full"
        fill="currentColor"
      >
        <path d="M99,50C99,22.9,77.1,1,50,1S1,22.9,1,50c0,14.6,6.4,27.7,16.5,36.6C17.6,70.8,32.1,58,50,58s32.4,12.8,32.5,28.6
          C92.6,77.7,99,64.6,99,50z M50,52.8c-10.8,0-19.5-8.7-19.5-19.5c0-10.8,8.7-19.5,19.5-19.5s19.5,8.7,19.5,19.5
          C69.5,44.1,60.8,52.8,50,52.8z"
        />
      </svg>
    </div>
    <span className="text-black font-medium text-base">Sign in</span>
  </button>
</a>

  </div>
</header>

  );
}
