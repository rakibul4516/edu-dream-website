import Achivement from "../../Component/Achivement/Achivement";
import Banner from "../../Component/Banner/Banner";
import Cards from "../../Component/Cards/Cards";
import UpcomingEvent from "../../Component/OurEvents/UpcomingEvent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Achivement></Achivement>
            <UpcomingEvent></UpcomingEvent>
        </div>
    );
};

export default Home;