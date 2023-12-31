import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";



const LogIn = () => {


    const navigate = useNavigate()

    const {theme, user, signInUser, signInPop} =useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    const provider = new GoogleAuthProvider();


    const location = useLocation()
    
    // Email password sign in
    const handleSignIn = e =>{
        e.preventDefault()
        signInUser(email, password)
        .then(()=>{            
            swal("Signed In","Successfully","success");
            console.log(user)
            e.target.reset()
            navigate(location?.state? location.state :'/')
            })
        .catch((error)=>{
            if(error.code === 'auth/user-not-found'){
                swal("ERROR","Invalid Email", "error")
            }else if(error.code  === 'auth/wrong-password'){
                swal("ERROR","Wrong Password", "error")
            }
        })
    }

    // Google Sign in 
    const handleGoogleSignIn = () =>{
        signInPop(provider)
        .then(()=>{
            swal("Welcome", "Google sign up successful", "success")
            navigate(location?.state? location.state :'/')

        }).catch(()=>{
        })
    }

    // Firebase: Error (auth/invalid-login-credentials).
    return (
        
        <div  className={` ${theme? "dark-home" : "light-home"}`}>
        <Navbar></Navbar>

            <div data-aos='fade-up' className="py-20 lg:p-20">
                <div className={` ${theme? "bg-black  max-w-xl rounded-3xl mx-auto my-20 py-10 px-5 lg:p-20 border-2 border-white" : "text-black light-home max-w-xl rounded-3xl mx-auto my-20 py-10 px-5 lg:p-20 border-2 border-black"}`}>
                    <div className="text-center ">
                    <h1 className="text-3xl mb-10 lg:text-5xl font-bold ">Sign in </h1>
                    </div>
                    <div className={theme?"bg-black p-10 rounded-xl":"bg-white p-10 rounded-xl"}>
                    <form onSubmit={handleSignIn} className={theme?"bg-black ":"bg-white"}>
                        <div className="form-control">
                        <label className="label">
                            <span className={theme?"label-text text-white":" label-text text-black"}>Email</span>
                        </label>
                        <input onChange={e=> setEmail(e.target.value)} type="email"  placeholder="email" className="input input-bordered border-[#0d3454] text-[#0d3454]" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className={theme?"label-text  text-white":"text-black"}>Password</span>
                        </label>
                        <input onChange={e=> setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered border-[#0d3454]" required />
                        <div>
                        </div>

                        <label className="label">
                            <a href="#" className= {theme?"label-text  text-white label-text-alt text-base link link-hover":"text-black label-text-alt text-base link link-hover"}>Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-4">
                        <button className="btn  bg-white text-black font-bold border-black hover:shadow-white hover:bg-red-700 hover:text-white   ">Login</button>
                        </div>
                            

                            <div className="space-y-5 mt-5">
                            <p className="text-center ">Do not have an account?? <Link to="/register" className="text-blue-500 hover:underline">Register Here</Link></p>
                            <div className="flex items-center gap-4"><hr className="w-full h-2 " /><p>OR</p><hr className="w-full" /></div>
                            </div>
                    </form>
                    <div className="flex justify-center items-center">
                            <button onClick={handleGoogleSignIn} className="btn  sm:btn-sm md:btn-md lg:btn-lg my-4 hover:bg-red-700 hover:text-white"><FcGoogle/> Sign In With Google</button>
                            </div>
                    </div>
                </div>
                </div>
            <Footer></Footer>
            </div>

    );
};

export default LogIn;