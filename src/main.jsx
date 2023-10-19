import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import Home from './Pages/Home.jsx';
import LogIn from './Pages/LogIn.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Register from './Pages/Register.jsx';
import Apple from './Brands/Apple.jsx';
import Nokia from './Brands/Nokia.jsx';
import OnePlus from './Brands/OnePlus.jsx';
import Oppo from './Brands/Oppo.jsx';
import Samsung from './Brands/Samsung.jsx';
import Xiaomi from './Brands/Xiaomi.jsx';
import UpdatePhone from './Pages/UpdatePhone.jsx';
import MyCart from './Pages/Cart/MyCart.jsx';
import PhoneDetails from './Pages/PhoneDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:'/addProduct',
        element:<AddProduct></AddProduct>
      },
      
      {
        path:'/myCart',
        element:<MyCart></MyCart>,
        loader:()=>fetch('http://localhost:5000/cart')
      },
      {
        path:'/logIn',
        element:<LogIn></LogIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:':brand/updatePhone/:id',
        element:<UpdatePhone></UpdatePhone>,
        loader:({params})=> fetch(`http://localhost:5000/phones/${params.id}`)
      },
      {
        path:':brand/phoneDetails/:id',
        element:<PhoneDetails></PhoneDetails>,
        loader:({params})=> fetch(`http://localhost:5000/phones/${params.id}`)
      },
      {
        path:'/apple',
        element:<Apple></Apple>,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:'/nokia',
        element:<Nokia></Nokia>,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:'/onePlus',
        element:<OnePlus></OnePlus>,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:'/oppo',
        element:<Oppo></Oppo>,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:'/samsung',
        element:<Samsung></Samsung>,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:'/xiaomi',
        element:<Xiaomi></Xiaomi>,
        loader:()=>fetch('http://localhost:5000/phones')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>  
  </React.StrictMode>,
)
