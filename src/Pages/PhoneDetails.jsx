import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import swal from "sweetalert";


const PhoneDetails = () => {

    const phone = useLoaderData()
    const { brand, name, photo, price, type, description, rating } = phone

    const addToCart = phone=>{
        fetch('https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/cart',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(phone)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            swal("Added to cart", "Go to my cart to complete the purchase", "success")
        })
    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto lg:my-20">
              <div className="lg:w-[800px] mx-auto ">
                    <div  className="lg:grid grid-cols-3  bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="col-span-1 lg:max-w-lg pt-10 flex justify-center mx-auto">
                            <img className=" rounded-t-lg w-56 h-64" src={photo} alt="product image" />
                        </div>
                        <div className="col-span-2 flex  flex-col justify-start   p-10 gap-6 ">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-bold">Name:</span> {name}</h5>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-bold">Brand:</span> {(brand).toUpperCase()}</h5>

                            <div className="flex items-start gap-6 flex-col">
                                <p><span className="text-xl font-bold">Type of product:</span> {type}</p>
                                <span className="bg-blue-100 text-blue-800 text-md font-semibold p-2 rounded dark:bg-blue-200 dark:text-blue-800">Rating: {rating}/5</span>
                                <p><span className="text-xl font-bold">Description: </span>{description}</p>
                            </div>

                            <span className="text-3xl font-bold text-gray-900 dark:text-white">Price: <span className="text-[#3e9c35]">{price}</span> TK</span>

                            <div className="flex items-center justify-between">
                                <button onClick={()=>addToCart(phone)} className="text-white bg-black hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default PhoneDetails;