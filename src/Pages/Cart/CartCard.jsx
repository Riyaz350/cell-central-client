import swal from "sweetalert";
import Swal from "sweetalert2";

const CartCard = ({phone, setCart, cart}) => {
    const {_id, name, price, photo, brand, type} = phone;

    const handleDelete = _id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
        fetch(`https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/cart/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount>0)
            { 
                swal('Deleted','The product has been deleted from the cart', 'success')
                const filtered = cart.filter(phones => phones._id !== _id)
                // console.log(data, filtered)
                setCart(filtered)
        }

        else{
            swal('ERROR','Failed to delete from the cart', 'error')}
        })

    }})

    }
    return (
        <div className="">
            <div className="lg:w-2/3 mx-auto ">
                    <div  className="lg:grid grid-cols-5  bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                        <div className="col-span-2 lg:max-w-lg pt-5 flex justify-center mx-auto">
                            <img className=" rounded-t-lg w-56 h-64" src={photo} alt="product image" />
                        </div>
                        <div className="col-span-3 flex  flex-col justify-start   p-5 gap-6 ">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-bold">Name:</span> {name}</h5>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-bold">Brand:</span> {brand}</h5>

                            <div className="flex items-start gap-6 flex-col">
                                <p><span className="text-xl font-bold">Type of product:</span> {type}</p>
                            </div>

                            <span className="text-xl font-bold text-gray-900 dark:text-white">Price: <span className="text-[#3e9c35]">{price}</span> TK</span>

                            <div className="flex items-center justify-between">
                                <button onClick={()=>handleDelete(_id)} className="text-white bg-black hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove from cart</button>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
    );
};

export default CartCard;