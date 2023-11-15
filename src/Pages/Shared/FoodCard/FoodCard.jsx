/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const { image, price, name, recipe, category, _id } = item;
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                image, price, name, recipe, category, id: _id, email: user.email
            }
            console.log(cartItem);
            axiosSecure.post('/cart', cartItem)
            .then(res => {
                const data = res.data;
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Food Added To Cart",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                      
                }
            })
        } else {
            Swal.fire({
                title: "You are not login!",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
                <img className="w-full" src={image} alt="Sunset in the mountains" />
                <p className="bg-black p-1 px-3 rounded-md text-white absolute right-3 top-2">${price}</p>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <h2 className="text-xl font-semibold">Item: {category}</h2>
                    <p className="text-gray-700 h-12 text-base">
                        {recipe}
                    </p>
                </div>
                <div className="px-6 flex justify-center pt-4 pb-2">
                    <button onClick={handleAddToCart} className=' mt-5 btn bg-transparent text-yellow-600 border-0  border-b-4 border-yellow-600 px-8 hover:bg-black hover:border-yellow-600'>ADD TO CART</button>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;