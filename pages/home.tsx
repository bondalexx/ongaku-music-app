import Header from "@/components/HomePage/Header/Header";
import Main from "@/components/HomePage/Main/Main";
import scrollStyles from "@/styles/scroll.module.css";

const HomePage : React.FC = () => {
    return (
        <div className={`h-full w-full  overflow-hidden rounded-[30px]`}>
            <div className={`flex flex-col px-[40px] h-full py-[15px] bg-[white] w-full ${scrollStyles.scroll}  `}>
                <Header />
                <Main />
            </div>
        </div>
    );
}

export default HomePage;