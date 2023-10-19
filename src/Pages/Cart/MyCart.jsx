import {  useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import CartCard from "./CartCard";

const MyCart = () => {
    const cart = useLoaderData()
    return (
        <div className="flex flex-col ">
            <Navbar></Navbar>
            
            <div className="flex flex-col gap-5 my-32">
              <h1 className="text-6xl font-bold text-center">Your Cart</h1>
              {
                cart.map(phone => <CartCard key={phone._id} phone={phone}></CartCard>)
              }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;