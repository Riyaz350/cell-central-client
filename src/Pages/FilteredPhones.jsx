import { useLoaderData } from "react-router-dom";
import BrandPhones from "../Shared/BrandPhones";
import Navbar from "../Shared/Navbar";
import AdSlider from "../Shared/AdSlider";
import Footer from "../Shared/Footer";

const FilteredPhones = () => {
    const loadedData = useLoaderData()
    

    return (
        <div>
            <Navbar></Navbar>
            <AdSlider></AdSlider>
            <div className=" max-w-7xl mb-10 mx-auto gap-20 space-y-4 lg:space-y-0  lg:grid grid-cols-2 ">
            {
                loadedData.map(phone => <BrandPhones key={phone._id} phone={phone}></BrandPhones>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FilteredPhones;