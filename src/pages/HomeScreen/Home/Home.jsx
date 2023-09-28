import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PrevEvents from "../Events/PrevEvents/PrevEvents";
import UpEvents from "../Events/UpEvents/UpEvents";
import Massage from "../Massage/Massage";
import Featured from "../../Shared/Featured/Featured";
import Birthday from "../Birthday/Birthday";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NSTUSC | Home</title>
            </Helmet>
            <Banner></Banner>
            <Birthday></Birthday>
            <UpEvents></UpEvents>
            <PrevEvents></PrevEvents>
            <Massage></Massage>
            <Featured></Featured>
        </div>
    );
};

export default Home;