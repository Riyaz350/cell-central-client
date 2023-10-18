

const AddProduct = () => {

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

        fetch('http://localhost:5000/phones',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addPhone)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })

    }

    return (
        <div className="p-10">
            <form  onSubmit={handleAddPhone} >
                    <div className="grid md:grid-cols-2 md:gap-6">
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
                    <input name="description" placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-full my-6" ></input>
                    </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


            {/* <form onSubmit={handleAddPhone} className="bg-gray-600 lg:p-10">
                <h1 className="text-4xl font-semibold mb-4 text-white">Add New Phone</h1>


                    <div className="flex flex-col gap-6">
                    <div className="form-control ">
                        <label className="input-group">
                            <span>Name</span>
                            <input name="name" type="text" placeholder="" className="input input-bordered" />
                        </label>
                    </div>


                    <div className="form-control ">
                        <label className="input-group">
                            <span>Brand</span>
                            <input name="brand" type="text" placeholder="" className="input input-bordered" />
                        </label>
                    </div>


                    <div className="form-control ">
                        <label className="input-group">
                            <span>Type</span>
                            <input name="type" type="text" placeholder="" className="input input-bordered" />
                        </label>
                    </div>
                    </div>


                    <div className="form-control my-6">
                        <label className="input-group">
                            <input name="price" type="text" placeholder="Place Amount" className="input input-bordered" />
                            <span>USD</span>
                        </label>
                    </div>


                    <div>
                    <textarea placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-lg" ></textarea>
                    </div>


                    <div className="form-control my-6">
                        <label className="input-group">
                            <span>Rating</span>
                            <input name="rating" type="text" placeholder="Rate from 1-5" className="input input-bordered" />
                        </label>
                    </div>

                    

                    <input type="submit" className="btn   md:btn-md lg:btn-lg" value='Submit'/>
                </form> */}

        </div>
    );
};

export default AddProduct;