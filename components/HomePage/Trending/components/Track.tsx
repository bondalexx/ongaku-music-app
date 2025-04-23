import Image from "next/image";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { albertSans } from "@/ui/fonts";
import formatDuration from "@/helpers/formatDuration";
import type { TrackInfo } from "@/types/tracks.interface";

const Track: React.FC<{ trackInfo: TrackInfo, index: number }> = ({ trackInfo,index }) => {
    return <div style={{boxShadow:" 0px 1px 5px 0px #e6e6e6"}} className={` ${albertSans.className} px-[15px] h-[60px] ease-out duration-300 hover:bg-[#f5f4f4] rounded-[10px] flex items-center justify-between cursor-pointer`}>
        <div className="flex gap-[65px]">
            <div className="flex gap-[15px] items-center">
                <p className="text-[#9D9D9D] text-[20px] font-medium w-[30px]">0{index+1}</p>
                <div className="flex items-center gap-[15px]">
                    <Image src={trackInfo.track.album.images[2].url} alt={trackInfo.track.album.name} height={45} width={45} className="rounded-[8px]" />
                    <div className=" flex flex-col">
                        <p className="text-[20px] font-medium w-[200px] text-nowrap ellipsis overflow-hidden ">{trackInfo.track.name}</p>
                        <div className="flex gap-[5px] items-center">
                            <FaUser fontSize="13px" color="#888888" />
                            <span className="text-[13px] text-[#9b9b9b] font-semibold">{trackInfo.track.artists[0].name}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[90px] items-center text-[20px] font-medium">
                <div className="flex items-center gap-[5px] w-[220px]">
                    <p className="max-w-[200px] text-nowrap ellipsis overflow-hidden">{trackInfo.track.album.name}</p>
                    <div className="bg-[#AEAEAE] px-[4px] rounded-[4px]">
                       {trackInfo.track.explicit && ( <p className="text-[10px] font-bold ">E</p>)}
                    </div>
                </div>
                <p>{formatDuration(trackInfo.track.duration_ms)}</p>
            </div>
        </div>
        <div className="flex items-center gap-[30px]">
            <FaRegHeart  fontSize="20px" color="black" className="cursor-pointer" />
            <FaEllipsis fontSize="20px" color="black" className="cursor-pointer" />
        </div>
    </div>
}

export default Track;