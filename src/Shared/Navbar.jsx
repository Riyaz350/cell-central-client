import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../AuthProvider/AuthProvider";


  const Navbar = () => {

  const [photo, setPhoto] =useState('')
  const [userName, setUserName] =useState('')
  const {user, logOut} =useContext(AuthContext)

  // NavLink classes
  const active = 'btn text-white font-bold bg-red-700 border-2 border-white rounded-2xl hover:bg-white hover:text-red-700 hover:border-red-700'
  const inActive = 'btn text-black border-2 rounded-lg hover:bg-red-700 hover:border-white hover:text-white'

 //LogOut button handler 
  const handleLogOut = e =>{
    e.preventDefault()
    logOut()
    .then(()=>{swal("Logged Out","Successfully","success");  })
    .catch(()=>{console.log("error")})
  }

  useEffect(()=>{
    if(user){
        if(user.photoURL && user.displayName){
          setPhoto(user.photoURL)   
        setUserName(user.displayName) 
        }  
      }
    
  },[user])



  // reused
  const navLinks = <>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/">Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/addProduct">Add product</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/myCart">My Cart</NavLink>
      </>
      

      
    return (
      
      
        <div className="navbar bg-black lg:px-10 flex flex-col lg:flex-row justify-center items-center ">
          <div className="lg:navbar-start flex lg:flex-row justify-between">
              <div className="dropdown  overflow-visible">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
                </ul>
              </div>
              <img className="overflow-hidden lg:w-2/4" src="https://i.ibb.co/5WXf9dG/image-removebg-preview.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className=" px-1 text-xl text-white space-x-6">
                {navLinks}
              </ul>
            </div>
            <div className="lg:navbar-end justify-center">
              {!user ? <NavLink to="/login" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive}>Log In</NavLink>:
                 
                  <div className="flex  lg:flex-row  justify-center lg:justify-end items-center gap-4  lg:w-full">
                    <h1 className="text-white  ">{userName}</h1>
                    <div className="flex  gap-6 justify-center">
                    <img src={photo} alt="" className="w-[50px] rounded-full"/>
                  <Link onClick={handleLogOut} className='btn text-black font-bold border-2 rounded-2xl hover:bg-red-700 hover:border-white hover:text-white'>Log out</Link>
                    </div>
                    </div>
                 
                  }
          </div>
        </div>
          );
                
};

export default Navbar;