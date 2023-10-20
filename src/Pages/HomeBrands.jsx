import { Link } from "react-router-dom";

const HomeBrands = () => {
    return (
        <div className="  lg:grid grid-cols-3 max-w-7xl  gap-10 my-10 mx-auto">
        <Link to='/filteredPhones/nokia'>
        <div className="border-2 border-black lg:border-0 card w-full lg:w-96 h-52 bg-base-100 lg:shadow-xl mb-10 px-20">
            <img src="https://i.ibb.co/JyyPvt9/image-removebg-preview-9.png" className="w-52 lg:w-fit mx-auto h-1/2 m-5 mb-0" alt="Nokia" />
            <div className="card-body flex-row justify-center">
                <h2 className="card-title ">Nokia</h2>
            </div>
            </div>
        </Link>
        <Link to='/filteredPhones/samsung'>
        <div className="border-2 border-black lg:border-0  card w-full lg:w-96 h-52 bg-base-100 lg:shadow-xl mb-10 px-20">
            <img src="https://i.ibb.co/KKxWYF3/image-removebg-preview-10.png" className="w-52 lg:w-fit mx-auto h-1/2" alt="Nokia" />
            <div className="card-body ">
                <h2 className="card-title flex-row justify-center">Samsung</h2>
            </div>
            </div>
        </Link>
        <Link to='/filteredPhones/apple'>
        <div className="border-2 border-black lg:border-0  card w-full lg:w-96 h-52 bg-base-100 lg:shadow-xl mb-10 px-20">
            <img src="https://i.ibb.co/5MWVD1d/image-removebg-preview-11.png" className="w-52 lg:w-fit mx-auto h-1/2" alt="Nokia" />
            <div className="card-body ">
                <h2 className="card-title flex-row justify-center">Apple</h2>
            </div>
            </div>
        </Link>
        <Link to='/filteredPhones/oneplus'>
        <div className="border-2 border-black lg:border-0  card w-full lg:w-96 h-52 bg-base-100 lg:shadow-xl mb-10 px-20">
            <img src="https://i.ibb.co/ZgYRw2V/image-removebg-preview-12.png" className="w-52 lg:w-fit mx-auto h-1/2" alt="Nokia" />
            <div className="card-body ">
                <h2 className="card-title flex-row justify-center">One Plus</h2>
            </div>
            </div>
        </Link>
        <Link to='/filteredPhones/oppo'>
        <div className=" border-2 border-black lg:border-0  card w-full lg:w-96 h-52 bg-base-100 lg:shadow-xl mb-10 px-20">
            <img src="https://i.ibb.co/r7XQqPF/image-removebg-preview-14.png" className="w-52 lg:w-fit mx-auto h-1/2" alt="Nokia" />
            <div className="card-body ">
                <h2 className="card-title flex-row justify-center">Oppo</h2>
            </div>
            </div>
        </Link>
        <Link to='/filteredPhones/xiaomi'>
        <div className="border-2 border-black lg:border-0  card w-full lg:w-96 h-52 bg-base-100 lg:shadow-xl mb-10 px-20">
            <img src="https://i.ibb.co/MSLjvjK/image-removebg-preview-15.png" className="w-52 lg:w-fit mx-auto h-1/2" alt="Nokia" />
            <div className="card-body ">
                <h2 className="card-title flex-row justify-center">Xiaomi</h2>
            </div>
            </div>
        </Link>
    </div>
    );
};

export default HomeBrands;