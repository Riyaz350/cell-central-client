import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import AdSlider from "../Shared/AdSlider";
import BrandPhones from "../Shared/BrandPhones";

const Xiaomi = () => {
    const [filtered, setFiltered] =useState([])
    const loadedData = useLoaderData()
    

    useState(()=>{
        const filteredPhones = loadedData.filter(phone => (phone.brand).toLowerCase() ===  "xiaomi")
        setFiltered(filteredPhones)
        console.log(filteredPhones)
    })
    if(filtered){
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
    }else{
        return(

            <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
        </div>
        </div>
        )
    }
   
};

export default Xiaomi;