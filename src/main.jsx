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
import UpdatePhone from './Pages/UpdatePhone.jsx';
import MyCart from './Pages/Cart/MyCart.jsx';
import PhoneDetails from './Pages/PhoneDetails.jsx';
import PrivateRoute from './Shared/PrivateRoute';
import FilteredPhones from './Pages/FilteredPhones';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/phones')
      },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/cart')
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
        path:'/updatePhone/:id',
        element:<UpdatePhone></UpdatePhone>,
        loader:({params})=> fetch(`https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/product/${params.id}`)
      },
      {
        path:'/phoneDetails/:id',
        element:<PhoneDetails></PhoneDetails>,
        loader:({params})=> fetch(`https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/product/${params.id}`)
      },
      {
        path:'/filteredPhones/:brand',
        element:<FilteredPhones></FilteredPhones>,
        loader:({params})=>fetch(`https://cell-central-server-ami9pzegc-riyaz-ahmeds-projects.vercel.app/phones/${params.brand}`)
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
