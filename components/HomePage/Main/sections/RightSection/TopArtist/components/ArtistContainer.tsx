import Artist from "./Artist";

const ArtistContainer : React.FC = () => {
    return(
        <div className="flex flex-col gap-[25px]">
            <Artist />
            <Artist />
            <Artist />  
        </div>
    )
}

export default ArtistContainer;