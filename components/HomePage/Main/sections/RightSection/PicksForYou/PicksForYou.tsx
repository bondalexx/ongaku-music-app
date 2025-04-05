import Image from "next/image";
import station from "@/public/img/station.png"
import album from "@/public/img/album.png"

const PicksForYou: React.FC = () => {
    return (
        <div className="flex flex-col gap-[8px]">
            <h1 className="text-[32px] font-semibold">Picks for You</h1>
            <div style={{gridTemplateColumns:"repeat(2, 1fr)", gridAutoColumns:"240px"}} className="grid gap-[30px] text-[20px] font-semibold">
                <div className="flex flex-col gap-[10px] cursor-pointer ">
                    <Image  src={station} className="w-[240px] h-[240px]" alt="Station for you" />
                    <p>Your station</p>
                </div>
                <div className="flex flex-col gap-[10px] cursor-pointer ">
                    <Image  src={album} className="w-[240px] h-[240px]" alt="Your favorite album" />
                    <p>Your favorite album</p>
                </div>
                <div className="flex flex-col gap-[10px] cursor-pointer ">
                    <Image  src={album} className="w-[240px] h-[240px]" alt="Listen again" />
                    <p>Listen again</p>
                </div>
                <div className="flex flex-col gap-[10px] cursor-pointer ">
                    <Image  src={album} className="w-[240px] h-[240px]" alt="Your favorite playlist" />
                    <p>Your favorite playlist</p>
                </div>

            </div>
        </div>
    )
}

export default PicksForYou;