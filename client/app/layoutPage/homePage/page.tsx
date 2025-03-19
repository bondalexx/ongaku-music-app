import Header from "@/components/HomePage/Header/Header";
import Main from "@/components/HomePage/Main/Main";

import "@/ui/scroll.css"

const HomePage : React.FC = () => {
    return (
        <>
            <div className="flex flex-col overflow-y-scroll h-full px-[40px] py-[15px] scroll">
                <Header />
                <Main />
            </div>
        </>
    );
}

export default HomePage;