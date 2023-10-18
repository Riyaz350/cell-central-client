import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Apple = () => {
    const [filtered, setFiltered] =useState([])
    const loadedData = useLoaderData()
    

    useState(()=>{
        const filteredPhones = loadedData.filter(phone => (phone.brand).toLowerCase() ===  "apple")
        setFiltered(filteredPhones)
        console.log(filteredPhones)
    })
    return (
        <div>
            
            <div className=" max-w-7xl mx-auto gap-20 space-y-8 lg:space-y-0  lg:grid grid-cols-2 ">
            {
                filtered.map(phone => < div key={phone._id}>
                    <div className="lg:w-[400px] ">
                    <div  className="  bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                        <div className="lg:max-w-lg  flex justify-center mx-auto">
                            <img className=" rounded-t-lg w-56" src={phone.photo} alt="product image" />
                        </div>
                        <div className=" flex  flex-col justify-between p-10 gap-6 ">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Name: {phone.name}</h5>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Brand: {phone.brand}</h5>




                            <div className="flex items-center mt-2.5 mb-5">
                            
                                

                                <span className="bg-blue-100 text-blue-800 text-md font-semibold p-2 rounded dark:bg-blue-200 dark:text-blue-800">Rating: {phone.rating}/5</span>
                            </div>

                            <span className="text-3xl font-bold text-gray-900 dark:text-white">Price:<span className="text-[#3e9c35]">{phone.price}</span>TK</span>

                            <div className="flex items-center justify-between">
                                <a href="#" className="text-white bg-black hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Details</a>
                                <Link to={`updatePhone/${phone._id}`} className="text-white bg-black hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>)
            }
            </div>
        </div>
    );
};

export default Apple;