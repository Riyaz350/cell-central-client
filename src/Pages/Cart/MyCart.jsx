import {  useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import CartCard from "./CartCard";
import { useState } from "react";

const MyCart = () => {
    const loadedCart = useLoaderData()
    const [cart, setCart] = useState(loadedCart)
    if(cart.length !== 0){
      return (
        <div className="flex flex-col justify-between">
            <Navbar></Navbar>
            
            <div className="flex flex-col gap-5 my-32">
              <h1 className="text-6xl font-bold text-center">Your Cart</h1>
              {
                cart.map(phone => 
                <CartCard key={phone._id}
                    phone={phone}
                    setCart={setCart}  
                    cart={cart}>
                    
                   </CartCard>)
              }
            </div>
            <Footer></Footer>
        </div>
    );
    }
    else{
      return(
        <div> 
          <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center py-20">
              <h1 className="text-3xl lg:text-6xl">Sorry but your cart is empty... </h1>
            <img src="https://i.ibb.co/xmmV1ZW/cart-removebg-preview.png" alt="" />

            </div>
          <Footer></Footer>
          </div>
      )
    }
};

export default MyCart;