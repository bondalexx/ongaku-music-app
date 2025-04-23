import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const Main : React.FC = () => {
    return (
        <div className="flex gap-[70px]">
            <LeftSection/>
            <RightSection />
        </div>
    )
}

export default Main