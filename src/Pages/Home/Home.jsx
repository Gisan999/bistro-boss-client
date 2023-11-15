import { Helmet } from "react-helmet-async";
import PopularManu from "../PopularManu/PopularManu";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
               <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <div className="flex justify-center">
                <div className="space-y-5">
                    <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">---From 11:00am to 10:00pm---</h1>
                    <h4 className="text-4xl pb-5 w-96 text-center border-b-4">ORDER ONLINE</h4>
                </div>
            </div>
            <Category />
            <PopularManu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;