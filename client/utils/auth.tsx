"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useSpotifyAuth = (): {
  token: string | null;
  handleLogout: () => void;
} => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const checkAuth = async () => {
      try {
        const storedToken = localStorage.getItem("spotify_access_token");
        if (storedToken) {
          setToken(storedToken);
        }

        if (typeof window !== "undefined") {
          const hash = window.location.hash;
          if (hash) {
            const params = new URLSearchParams(hash.substring(1));
            const accessToken = params.get("access_token");
            const refreshToken = params.get("refresh_token");

            if (accessToken) {
              localStorage.setItem("spotify_access_token", accessToken);
              if (refreshToken) {
                localStorage.setItem("spotify_refresh_token", refreshToken);
              }
              setToken(accessToken);
              try {
                await router.push("/");
              } catch (error) {
                console.error("Error during navigation:", error);
              }
            }
          }
        }
      } catch (error) {
        console.error("Error during Spotify authentication:", error);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout: () => void = () => {
    try {
      localStorage.removeItem("spotify_access_token");
      localStorage.removeItem("spotify_refresh_token");
      setToken(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return { token: isClient ? token : null, handleLogout };
};


