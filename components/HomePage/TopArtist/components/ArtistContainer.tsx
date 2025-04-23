import { useAppSelector } from "@/lib/hooks";
import type { TrackInfo } from "@/types/tracks.interface";
import Artist from "./Artist";

const ArtistContainer : React.FC = () => {
        const tracks = useAppSelector(state => state.tracks.trendingTracks.tracks);
        const getThreeFirstArtist = () => {
            if (tracks) {
                return tracks.tracks.items.slice(0, 3);
            }else{
                return [];
            }
        }
    return(
        <div className="flex flex-col gap-[25px]">
            {
                getThreeFirstArtist().map((trackInfo: TrackInfo) => {
                    return <Artist trackInfo={trackInfo} key={trackInfo.track.id}  />;
                })
            }
        </div>
    )
}

export default ArtistContainer;