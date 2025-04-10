import React, { useEffect, useRef, useState, ReactNode } from "react";
import sliderStyles from "@/styles/slider.module.css";

interface CustomCarouselProps {
  children: ReactNode[];
}

const Slider: React.FC<CustomCarouselProps> = ({ children }) => {
  const [index, setIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<any>(null);

  const totalSlides: number = children.length;

  const extendedSlides = [...children, ...children.slice(0, 2)]; 

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const startAutoSlide = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(nextSlide, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  useEffect(() => {
    if (index === totalSlides - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 800);
    } else {
      setIsTransitioning(true);
    }
  }, [index]);

  return (
    <div
    className={sliderStyles.container__slider}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
         className={sliderStyles.slider__track}
        ref={trackRef}
        style={{
          transform: `translateY(-${index * 100}%)`,
          transition: isTransitioning ? "transform 0.8s ease" : "none",
        }}
      >
        {children.map((item, i) => (
          <div className={sliderStyles.slider_item} key={i}>
            {item}
          </div>
        ))}
      </div>

      <div className={sliderStyles.container__slider__links}>
        {children.map((_, i) => (
          <button
            key={i}
            className={
              i === index % totalSlides
                ? `${sliderStyles.container__slider__links_small} ${sliderStyles.container__slider__links_small_active}`
                : sliderStyles.container__slider__links_small
            }
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;

