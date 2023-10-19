import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import HomeBrands from "./HomeBrands";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* 6 brands */}
           <HomeBrands></HomeBrands>

            <Footer></Footer>
        </div>
    );
};

export default Home;