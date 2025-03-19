"use client"

import AsideNav from "./aside-nav/page";
import HomePage from "./homePage/page";
import { useState,useEffect } from "react";
import LoginPage from "./loginPage/page";

const getTokenFromUrl = (): Record<string, string | undefined> => {
  const hash = window.location.hash.substring(1);
  if (!hash) return {};

  return hash.split("&").reduce((acc, item) => {
    const parts = item.split("=");
    if (parts.length === 2) {
      acc[parts[0]] = decodeURIComponent(parts[1]);
    }
    return acc;
  }, {} as Record<string, string | undefined>);
};

export default function Home() {
  const [spotifyToken, setSpotifyToken] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const token = getTokenFromUrl().access_token;
    window.location.hash = "";

    if(token){
      setSpotifyToken(token);
      setLoggedIn(true);
    }
  },[])
  return (
    <div>
      {loggedIn ? ( 
        <div className="h-screen w-full pl-[20px] pr-[10px] py-[10px] bg-[#23222A] flex gap-[20px]">
          <AsideNav />
          <HomePage />
        </div>
    ) : (
        <LoginPage/>
    )}
    </div>
   
  );
}
