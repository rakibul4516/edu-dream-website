import Achivement from "../../Component/Achivement/Achivement";
import Banner from "../../Component/Banner/Banner";
import Cards from "../../Component/Cards/Cards";
import Footer from "../../Component/Footer/Footer";
import UpcomingEvent from "../../Component/OurEvents/UpcomingEvent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Achivement></Achivement>
            <UpcomingEvent></UpcomingEvent>
            <Footer></Footer>
        </div>
    );
};

export default Home;