import ArtistContainer from "./components/ArtistContainer";
import Heading from "./components/Heading";

const TopArtist : React.FC = () => {
    return <div className="flex flex-col w-full gap-[20px]">
        <Heading />
        <ArtistContainer />
    </div>
}

export default TopArtist;