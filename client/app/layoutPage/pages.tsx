import HomePage from "./homePage/page";

const LayoutPage : React.FC = () => {
    return (
        <main className="w-full bg-[white] rounded-[30px] overflow-hidden relative " >
             <HomePage />
        </main>
    );
};

export default LayoutPage;