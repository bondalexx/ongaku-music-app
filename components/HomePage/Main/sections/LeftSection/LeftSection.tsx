import Image from "next/image";

import Trending from "./Trending/Trending";
import Slider from "./Slider/Slider";

import alternativeImg from "@/public/img/genre-alternative-3.png";

const images = [
  { imgURL: "/img/genre-alternative.png", imgAlt: "alternative" },
  { imgURL: "/img/genre-hiphop.png", imgAlt: "hiphop" },
  { imgURL: "/img/genre-pop.png", imgAlt: "pop" },
  { imgURL: "/img/genre-soul.png", imgAlt: "soul" },
];

const LeftSection: React.FC = () => {
  return <section className="flex flex-col gap-[20px] w-[calc(64%-35px)]">
     <Slider>
     {images.map((image, index) => {
  return (
    <div
      key={index}
      style={{ position: "relative", width: "100%", height: "500px" }}
      className="rounded-[40px] overflow-hidden"
    >
      <Image
        src={image.imgURL}
        alt={image.imgAlt}
        fill
        className="object-cover"
      />
    </div>
  );
})}
      </Slider>
    <Trending />
  </section>;
};

export default LeftSection;
