import PicksForYou from "./PicksForYou/PicksForYou";
import TopArtist from "./TopArtist/TopArtist";

const RightSection: React.FC = () => {
  return <section className="flex flex-col gap-[20px] w-[calc(36%-35px)]">
    <TopArtist />
    <PicksForYou />
  </section>;
};

export default RightSection;
