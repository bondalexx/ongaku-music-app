import Image from "next/image";
import { FaEllipsis } from "react-icons/fa6";
import { albertSans } from "@/ui/fonts";
import stevelacy from "@/public/img/stevelacy.png"

const Artist : React.FC = () => {
    return(
        <div style={{boxShadow:" 0px 1px 5px 0px #e6e6e6"}} className={`${albertSans.className} px-[15px] flex items-center justify-between rounded-[10px] h-[60px] ease-out duration-300 hover:bg-[#f5f4f4] cursor-pointer`}>
            <div className="flex gap-[12px] items-center">
                <Image src={stevelacy} alt="stevelacy" height={45} width={45} className="rounded-[10px]" />
                <p  className="text-[20px] font-medium">Steve Lacy</p>
            </div>
            <div className="flex items-center gap-[18px]">
                <p className="text-[#888888] text-[13px] font-medium">14924 Followers</p>
                <p className="text-[#888888] text-[13px] font-medium">14924 Plays</p>
                <FaEllipsis fontSize="20px" color="black" className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Artist;