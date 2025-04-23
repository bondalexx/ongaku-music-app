import Image from "next/image";
import Link from "next/link";

import Trending from "./Trending/Trending";
import Slider from "./Slider";

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
      <Link href={`/genre/${image.imgAlt}`}>
      
      <Image
        src={image.imgURL}
        alt={image.imgAlt}
        fill
        className="object-cover"
      />
      </Link>
    </div>
  );
})}
      </Slider>
    <Trending />
  </section>;
};

export default LeftSection;
