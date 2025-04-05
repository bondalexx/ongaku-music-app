import Heading from "./components/Heading"
import TracksContainer from "./components/TracksContainer"
const Trending : React.FC = () => {
    return <div className="flex flex-col w-full gap-[20px]">
        <Heading />
        <TracksContainer />
    </div>
}

export default Trending