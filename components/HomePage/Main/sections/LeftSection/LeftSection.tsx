import Image from "next/image";

import Trending from "./Trending/Trending";

import alternativeImg from "@/public/img/genre-alternative-3.png";

const LeftSection: React.FC = () => {
  return <section className="flex flex-col gap-[20px] w-[calc(64%-35px)]">
    <Image src={alternativeImg} alt="alternative"  className="rounded-[40px]" />
    <Trending />
  </section>;
};

export default LeftSection;
