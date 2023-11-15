/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-9 px-3 lg:px-0">
                <div className="grid md:grid-cols-2 gap-7	">
                    {
                        items.map(data => <MenuItem key={data._id} item={data}></MenuItem>)
                    }
                </div>
                <div className="flex justify-center mt-5">
                   <Link to={`/order/${title}`}>
                   <button className=' mt-5 btn bg-transparent text-black outline-none border-0  border-b-4 btn-outline px-8'>ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;