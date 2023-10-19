import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const PhoneDetails = () => {
    const phone = useLoaderData()
    const {brand, name, photo, price, type, description, rating } = phone
    return (
        <div>
            <Navbar></Navbar>
            <div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default PhoneDetails;