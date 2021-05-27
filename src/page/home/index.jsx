import BestPick from "./component/BestPick";
import Brands from "./component/Brands";
import Categrories from "./component/Categories";
import CountDown from "./component/CountDown";
import Features from "./component/Features";
import Reviews from "./component/Reviews";
import TopSeller from "./component/TopSeller";

export default function Home() {
    return (
        <>
            <Categrories />
            <Features />
            <BestPick />
            <TopSeller />
            <CountDown />
            <Reviews />
            <Brands />
        </>
    )
}