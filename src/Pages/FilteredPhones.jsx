import { useLoaderData } from "react-router-dom";
import BrandPhones from "../Shared/BrandPhones";
import Navbar from "../Shared/Navbar";
import AdSlider from "../Shared/AdSlider";
import Footer from "../Shared/Footer";


const FilteredPhones = () => {
    const loadedData = useLoaderData()
    

    if(loadedData.length > 0){
        return (
            <div>
                <Navbar></Navbar>
                <AdSlider></AdSlider>
                <div className=" max-w-7xl mb-10 mx-auto gap-20 space-y-4 lg:space-y-0  lg:grid grid-cols-2 ">
                {
                    loadedData.map(phone => <BrandPhones key={phone._id} phone={phone} dataLength={loadedData}></BrandPhones>)
                }
                </div>
                <Footer></Footer>
            </div>
    )}
        else{
            return <>
            <Navbar></Navbar>
            <div className="flex flex-col items-center text-center my-10 lg:my-20">
                <h1 className="text-3xl lg:text-6xl">Sorry but we are currently out of stock on this product...</h1>
                <img src="https://i.ibb.co/mJJR6D9/3369473-removebg-preview.png" alt="" />
            </div>
            <Footer></Footer>

            </>
        }
    }
export default FilteredPhones;