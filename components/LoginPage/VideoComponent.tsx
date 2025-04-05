"use client";
import { ReactElement, useEffect, useRef } from "react";

export default function VideoComponent(): ReactElement {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback error: ", error);
      });
    }
  }, []);
  
  return (
    <div className="bg-black">
      <video
        ref={videoRef}
        muted
        loop
        className="fixed top-0 left-0 w-full h-full bg-transparent" 
        style={{
          objectFit: "cover"}}
      >
      <source src="./loginBackground.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

