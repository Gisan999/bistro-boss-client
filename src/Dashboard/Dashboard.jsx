import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaStar,  FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="">
            <div className="flex ">
                <div className="w-96 min-h-screen bg-[#D1A054]">
                    <ul className="menu">
                        {
                            isAdmin ?
                                <>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink to={"/dashboard/adminHome"}> <FaHome></FaHome>
                                            Admin Home
                                        </NavLink>
                                    </li>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink to={"/dashboard/addItems"}>  <FaUtensils></FaUtensils>
                                            Add Items
                                        </NavLink>
                                    </li>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink to={"/dashboard/manageItems"}>
                                            <FaList></FaList>
                                            Manage Items
                                        </NavLink>
                                    </li>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink to={"/dashboard/manageBookings"}>  <FaBook></FaBook>
                                            Manage Bookings
                                        </NavLink>
                                    </li>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink to={"/dashboard/allUsers"}>
                                            <FaUsers></FaUsers>
                                            All Users
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink
                                            to={"/dashboard/userHome"}> <FaHome></FaHome>
                                            User Home
                                        </NavLink>
                                    </li>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink
                                            to={"/dashboard/history"}>  <FaCalendar></FaCalendar>
                                           payment History
                                        </NavLink>
                                    </li>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink
                                            to={"/dashboard/cart"}>  <FaShoppingCart></FaShoppingCart>
                                            My cart
                                        </NavLink>
                                    </li>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink
                                            to={"/dashboard/review"}>
                                            <FaStar></FaStar>
                                            Add Review
                                        </NavLink>
                                    </li>
                                    <li className="text-lg font-medium italic font-sans">
                                        <NavLink
                                            to={"/dashboard/paymentHistory"}>
                                            <FaList></FaList>
                                            payment Real History
                                        </NavLink>
                                    </li>
                                </>
                        }

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
                                <FaEnvelope></FaEnvelope>
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