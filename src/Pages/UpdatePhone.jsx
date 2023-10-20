import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdatePhone = () => {

    const {theme} =useContext(AuthContext)

    const loadedPhone = useLoaderData()
    const {_id, name, photo, brand, type, price, rating, description} = loadedPhone;
    console.log(_id)
    const handleForm = e => {
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
        
        fetch(`https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/phones/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addPhone)
        })
        .then(res => res.json())
        .then(data => {
            swal("Success", "Data has been changed", "success");

            console.log(data)})
    }


    return (
        <div className={` ${theme? "dark-home" : "light-home"}`}>
            <Navbar></Navbar>
            <div className="p-10 lg:px-20 lg:py-20 ">
            <form onSubmit={handleForm} className="space-y-10">
            <h1 className="text-3xl lg:text-5xl mb-10 ">Update {name}</h1>
                    <div className="space-y-10">
                    <div className="grid md:grid-cols-2 md:gap-6 ">
                    <div className="relative z-0 w-full mb-6 group">
                        <h3 className={theme?"text-white text-xl  mb-4":"text-xl text-gray-800 mb-4"}>Name</h3>
                        <input type="text" name="name" defaultValue={name}  className="block py-2.5  w-full text-sm  bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name"   />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <h3 className={theme?"text-white text-xl  mb-4":"text-xl text-gray-800 mb-4"}>Brand</h3>
                        <input type="text" name="brand" defaultValue={brand}  className="block py-2.5  w-full text-sm  bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Brand"   />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <h3 className={theme?"text-white text-xl  mb-4":"text-xl text-gray-800 mb-4"}>Photo URL</h3>
                        <input type="text" name="photo" defaultValue={photo} className="block py-2.5  w-full text-sm  bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Photo URL"   />
                    </div>
                    
                        <div className="relative z-0 w-full mb-6 group">
                            <h3 className={theme?"text-white text-xl  mb-4":"text-xl text-gray-800 mb-4"}>Type</h3>
                            <input type="text" name="type" defaultValue={type} className="block py-2.5  w-full text-sm  bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type"   />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <h3 className={theme?"text-white text-xl  mb-4":"text-xl text-gray-800 mb-4"}>Price</h3>
                            <input type="text" name="price" defaultValue={price} className="block py-2.5  w-full text-sm bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Price"   />
                        </div>
                   
                    
                        <div className="relative z-0 w-full mb-6 group">
                            <h3 className={theme?"text-white text-xl  mb-4":"text-xl text-gray-800 mb-4"}>Rating</h3>
                            <input type="text" name="rating" defaultValue={rating} className="block py-2.5  w-full text-sm bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Rate from 1-5"   />
                        </div>
                        
                    </div>
                    <div>
                    <h3 className={theme?"text-xl text-gray-800 text-white": "text-xl text-gray-800"}>Description</h3>

                    <textarea name="description" placeholder="Description" defaultValue={description} className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
            <button type="submit" className="text-black hover:text-white bg-white hover:bg-red-700 border-2 border-black hover:border-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div></form>
        </div>

        <Footer></Footer>
        </div>
    );
};

export default UpdatePhone;