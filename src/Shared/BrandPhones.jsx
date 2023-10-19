import { Link } from "react-router-dom";

const BrandPhones = ({phone}) => {
    const {_id, name, photo, brand, type, rating, price} =phone

        return (
            <div>
                  <div className="lg:w-[400px] mx-auto">
                        <div  className="  bg-white border border-gray-200 rounded-lg shadow h-[700px] dark:bg-gray-800 dark:border-gray-700">
                            <div className="lg:max-w-lg  flex justify-center mx-auto">
                                <img className=" rounded-t-lg w-56 h-64" src={photo} alt="product image" />
                            </div>
                            <div className=" flex  flex-col justify-center   p-10 gap-6 ">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-bold">Name:</span> {name}</h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-bold">Brand:</span> {(brand).toUpperCase()}</h5>
    
                                <div className="flex items-start gap-6 flex-col">
                                    <p><span className="text-xl font-bold">Type of product:</span> {type}</p>
                                    <span className="bg-blue-100 text-blue-800 text-md font-semibold p-2 rounded dark:bg-blue-200 dark:text-blue-800">Rating: {rating}/5</span>
                                </div>
    
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">Price: <span className="text-[#3e9c35]">{price}</span> TK</span>
    
                                <div className="flex items-center justify-between">
                                    <Link to={`/phoneDetails/${_id}`} className="text-white bg-black hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Details</Link>
                                    <Link to={`/updatePhone/${_id}`} className="text-white bg-black hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>
                                </div>
                            </div>
                        </div>
                        </div>
            </div>
        );
    
};

export default BrandPhones;