import { useAppSelector } from "@/lib/hooks"
import Track from "./Track"
import { TrackInfo } from "@/types/tracks.interface";

const TracksContainer : React.FC = () => {
    const tracks = useAppSelector(state => state.tracks.trendingTracks.tracks);
    const getFiveFirstTracks = () => {
        if (tracks) {
            return tracks.tracks.items.slice(0, 5);
        }else{
            return [];
        }
    }
    return <div className="flex flex-col gap-[20px]">
        {
            getFiveFirstTracks().map((trackInfo: TrackInfo, index: number) => {
                return <Track trackInfo={trackInfo} key={trackInfo.track.id} index={index} />;
            })
        }
    </div>
}

export default TracksContainer