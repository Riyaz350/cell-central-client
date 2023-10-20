import swal from "sweetalert";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddProduct = () => {

    const {theme} =useContext(AuthContext)

    const handleAddPhone = e =>{
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        const brand = (form.brand.value).toLowerCase()
        const photo = form.photo.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value
        const addPhone = {name, brand, photo, type, price, rating, description}
        form.reset()
        console.log(addPhone)

        fetch('https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/phones',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addPhone)
        })
        .then(res => res.json())
        .then(data =>{
            swal("Phone Added", "The phone has been added to the database", "success");
            console.log(data)
        })

    }

    return (
        <div className={` ${theme? "dark-home" : "light-home"}`}>
            <Navbar></Navbar>
            <div className="p-10 lg:px-20 lg:py-20 ">
            <h1 className={theme? "text-3xl lg:text-5xl mb-10 text-white":"text-3xl lg:text-5xl mb-10 text-black"}>Add a new product</h1>
            <form  onSubmit={handleAddPhone} className="lg:space-y-10">
                    <div className="grid md:grid-cols-2 md:gap-6 ">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="brand"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Brand" required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Photo URL" required />
                    </div>
                    
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Price" required />
                        </div>
                   
                    
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Rate from 1-5" required />
                        </div>
                        
                    </div>
                    <div>
                    <textarea name="description" placeholder="Description"  className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
            <button type="submit" className="text-black hover:text-white bg-white hover:bg-red-700 border-2 border-black hover:border-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Phone</button>
            </form>
        </div>
            <Footer></Footer>
        </div>                                                                                       
    );
};

export default AddProduct;