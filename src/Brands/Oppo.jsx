import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import AdSlider from "../Shared/AdSlider";
import BrandPhones from "../Shared/BrandPhones";

const Oppo = () => {
    const [filtered, setFiltered] =useState([])
    const loadedData = useLoaderData()
    

    useState(()=>{
        const filteredPhones = loadedData.filter(phone => (phone.brand).toLowerCase() ===  "oppo")
        setFiltered(filteredPhones)
        console.log(filteredPhones)
    })
    return (
        <div>
        <Navbar></Navbar>
        <AdSlider></AdSlider>
        <div className=" max-w-7xl mb-10 mx-auto gap-20 space-y-4 lg:space-y-0  lg:grid grid-cols-2 ">
        {
            filtered.map(phone => <BrandPhones key={phone._id} phone={phone}></BrandPhones>)

        }
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Oppo;