import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Branches from "./Branches";
import HomeBrands from "./HomeBrands";

const Home = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="">
                <img src="https://i.ibb.co/P92cd5F/3062.jpg" alt="" />
            </div>

            {/* 6 brands */}
           <HomeBrands></HomeBrands>

           
            <Branches></Branches>
            <Footer></Footer>
        </div>
    );
};

export default Home;