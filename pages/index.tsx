import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import HomePage from "./home";
import LoginPage from "./login";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status, update } = useSession();
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.accessToken) {
      setToken(session.accessToken);
    }
  }, [status, session]);

  useEffect(() => {
    console.log("Session updated:", session);
  }, [session]);

  useEffect(() => {
    if (token.length > 0) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, [token, router]);

  return (
    <div className="w-full h-screen">
    </div>
  );
}
