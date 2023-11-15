import { FaCalendar, FaHome, FaList, FaPhone, FaShoppingBag, FaShoppingCart, FaStar} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
       <div className="">
         <div className="flex ">
            <div className="w-96 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/dashboard/userHome"}> <FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/dashboard/reservation"}>  <FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/dashboard/cart"}>  <FaShoppingCart></FaShoppingCart>My cart</NavLink>
                    </li>
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/dashboard/review"}>  
                        <FaStar></FaStar>
                        Add Review</NavLink>
                    </li>
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/dashboard/bookings"}>  
                        <FaList></FaList>
                        My Bookings</NavLink>
                    </li>

                </ul>
                <hr className="mx-4 mt-4" />
                <hr className="mx-4 mb-4" />
                <ul className="menu">
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/"}> <FaHome></FaHome>Home</NavLink>
                    </li>
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/menu"}>  
                        <FaList></FaList>
                        Menu</NavLink>
                    </li>
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/"}>  
                        <FaShoppingBag></FaShoppingBag>
                        Shop</NavLink>
                    </li>
                    <li className="text-lg font-medium italic font-sans">
                        <NavLink to={"/dashboard/contact"}>  
                        <FaPhone></FaPhone>
                        Contact</NavLink>
                    </li>
                  

                </ul>
            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
       </div>
    );
};

export default Dashboard;