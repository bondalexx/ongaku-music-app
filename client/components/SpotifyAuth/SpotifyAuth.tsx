
import LoginPage from "@/app/loginPage/page";
import LayoutPage from "@/app/layoutPage/pages";
import AsideNav from "@/app/aside-nav/page";

const SpotifyAuth : React.FC<{token: string | null, handleLogout: () => void}> = ({ token, handleLogout }) => {
  return (
    <div>
      {token !== null ? (
        <div className="h-screen w-full pl-[20px] pr-[10px] py-[10px] bg-[#23222A] flex gap-[20px]">
            <AsideNav />
            <LayoutPage />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default SpotifyAuth;
