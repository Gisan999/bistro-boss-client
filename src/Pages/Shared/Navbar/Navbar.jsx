import { Link } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    console.log(cart);

    const navbar = <>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/'}>CONTACT US</Link></li>
        <li><Link to={'/'}>DASHBOARD</Link></li>
        <li><Link to={'/menu'}>OUR MENU</Link></li>
        <li><Link to={'/order/salad'}>ORDER FOOD</Link></li>
        <li><Link to="/dashboard/cart">
            <button className="btn btn-sm btn-outline btn-secondary text-2xl">
               <FaCartPlus></FaCartPlus>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>

        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">logout</button>
            </> : <><li><Link to={'/login'}>LOGIN</Link></li></>
        }
    </>

    return (
        <div>
            <div className=" ">

                <div className="navbar bg-black bg-opacity-50 fixed z-10 ">
                    <div className="navbar-start text-white">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navbar}
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
                    </div>
                    <div className="navbar-end hidden lg:flex text-white">
                        <ul className="menu menu-horizontal ">
                            {navbar}
                        </ul>
                    </div>
                    {/* <div className="navbar-end">
        <a className="btn">Button</a>
    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;