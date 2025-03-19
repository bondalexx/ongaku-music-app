import Header from "@/components/HomePage/Header/Header";
import Main from "@/components/HomePage/Main/Main";

import "../../ui/scroll.css"

const HomePage : React.FC = () => {
    return (
        <main className="w-full bg-[white] rounded-[30px] overflow-hidden relative ">
            <div className="flex flex-col overflow-y-scroll h-full px-[40px] py-[15px] scroll">
                <Header />
                <Main />
            </div>
        </main>
    );
}

export default HomePage;