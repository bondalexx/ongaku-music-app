import VideoComponent from "@/components/LoginPage/VideoComponent";
import { signIn } from "next-auth/react";

const LoginPage: React.FC = () => {
    return <div className="w-full h-screen relative">
         <VideoComponent />
         <a  onClick={() => {
                     signIn("spotify", { callbackUrl: "/" });
                  }} className="text-[32px] fixed top-[calc(50%-44px)] left-[calc(50%-270px)] font-[600] text-white hover:bg-[#1b13224b] p-[40px] rounded-[20px] transition ease-in-out duration-300 " href="http://localhost:8888">Log in with Spotify account</a>
    </div>;
}

export default LoginPage;