import Image from "next/image";
import { LuSettings } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

import logo from "@/public/img/logo.png"

const AsideNav : React.FC = () => {
    return (
        <aside className="h-full w-[100px] flex flex-col justify-between items-center py-[30px] ">
           <div className="flex flex-col items-center gap-[80px] w-full">
              <Image src={logo} alt="logo" height={40} width={40} className="cursor-pointer" />
              <div className="flex flex-col items-center w-full gap-[60px]">
                <div className="flex flex-col items-center gap-[40px]">
                <FaHome color="#9796B6" fontSize="40px" className="cursor-pointer" />
                <FaMusic color="#9796B6" fontSize="35px" className="cursor-pointer" />
                <FaRegFolder color="#9796B6" fontSize="35px" className="cursor-pointer" />
                <FaRegUser color="#9796B6" fontSize="35px" className="cursor-pointer" />
                </div>
                <div className="w-full h-[1px] bg-[#454466]" style={{boxShadow:" 0px 0px 3px 0px rgba(171, 171, 171, 49%)"}}></div>
                <FaRegHeart color="#9796B6" fontSize="35px" className="cursor-pointer" />
              </div>
          
           </div>
           <LuSettings color="#9796B6" fontSize="40px" className="cursor-pointer" />
        </aside>
    );
}

export default AsideNav;