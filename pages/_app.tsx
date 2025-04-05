import AsideNav from "@/components/AsideNav/AsideNav";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component,   pageProps: { session, ...pageProps } }: AppProps) {
  return (
  <SessionProvider session={session}>
    <div className="h-screen w-full pl-[20px] pr-[10px] py-[10px] bg-[#23222A] flex gap-[20px]">
      <AsideNav />
      <Component {...pageProps} />
    </div>
  </SessionProvider>
  )
}
