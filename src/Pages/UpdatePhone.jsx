import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdatePhone = () => {

    const loadedPhone = useLoaderData()
    const {_id, name, photo, brand, type, price, rating, description} = loadedPhone;
    console.log(_id)
    const handleForm = e => {
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        const brand = form.brand.value
        const photo = form.photo.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value
        const addPhone = {name, brand, photo, type, price, rating, description}
        
        fetch(`http://localhost:5000/phones/${_id}`,{
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
        <div className="p-10">
            <form onSubmit={handleForm} >
                    <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" defaultValue={name}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name"   />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="brand" defaultValue={brand}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Brand"   />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="photo" defaultValue={photo} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Photo URL"   />
                    </div>
                    
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="type" defaultValue={type} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type"   />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="price" defaultValue={price} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Price"   />
                        </div>
                   
                    
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="rating" defaultValue={rating} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Rate from 1-5"   />
                        </div>
                        
                    </div>
                    <div>
                    <input name="description" placeholder="Description" defaultValue={description} className="textarea textarea-bordered textarea-lg w-full max-w-full my-6" ></input>
                    </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    );
};

export default UpdatePhone;