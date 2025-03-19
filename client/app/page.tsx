"use client"
import SpotifyAuth from "@/components/SpotifyAuth/SpotifyAuth";
import { useSpotifyAuth } from "@/utils/auth";

export default function Home() {
  const { token, handleLogout } = useSpotifyAuth();
  return <SpotifyAuth token={token} handleLogout={handleLogout} />;
}
