import Image from "next/image";

import type { TrackInfo } from "@/types/tracks.interface";

import { FaEllipsis } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { albertSans } from "@/ui/fonts";

const Artist: React.FC<{ trackInfo: TrackInfo }> = ({ trackInfo }) => {
    return(
        <div style={{boxShadow:" 0px 1px 5px 0px #e6e6e6"}} className={`${albertSans.className} px-[15px] flex items-center justify-between rounded-[10px] h-[60px] ease-out duration-300 hover:bg-[#f5f4f4] cursor-pointer`}>
            <div className="flex gap-[12px] items-center">
                <Image src={trackInfo.track.album.images[2].url} alt={trackInfo.track.album.name} height={45} width={45} className="rounded-[10px]" />
                <p  className="text-[20px] font-medium">{trackInfo.track.artists[0].name}</p>
            </div>
            <div className="flex items-center gap-[18px]">
                <FaRegHeart  fontSize="20px" color="black" className="cursor-pointer" />
                <FaEllipsis fontSize="20px" color="black" className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Artist;