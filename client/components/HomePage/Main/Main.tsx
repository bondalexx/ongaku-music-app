import LeftSection from "./sections/LeftSection/LeftSection"
import RightSection from "./sections/RightSection/RightSection"

const Main : React.FC = () => {
    return (
        <div className="flex gap-[70px]">
            <LeftSection/>
            <RightSection />
        </div>
    )
}

export default Main