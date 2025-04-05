import Search from "./Search";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center " >
            <h1 className="text-[40px] font-semibold cursor-default">Home</h1>
            <Search />
        </header>
    );
};

export default Header;