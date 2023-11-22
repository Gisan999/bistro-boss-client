// import { FaRemoveFormat } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();

                        }
                    })
            }
        });

    }

    return (
        <div>
            <div className="flex justify-center mt-5">
                <div className="space-y-5">
                    <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">---My Cart---</h1>
                    <h4 className="text-4xl pb-5 w-96 text-center border-b-4">WANNA ADD MORE?</h4>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto border mt-10 p-6">

                <div className="flex justify-between">
                    <h2 className="text-4xl font-semibold uppercase">Total orders: {cart.length}</h2>
                    <h2 className="uppercase text-4xl font-semibold">Total Price: {totalPrice}</h2>

                    {cart.length ? <Link to="/dashboard/payment">  <button className="btn bg-[#D1A054] text-white">pay</button></Link> :
                        <button disabled className="btn bg-[#D1A054] text-white">pay</button>}
                </div>

                <div className="overflow-x-auto">
                    <table className="table mt-5">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-base">
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart?.map((data, idx) => <tr key={data._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16 my-3">
                                                    <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {data.name}
                                    </td>
                                    <td>$ {data.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(data._id)} className="btn text-white text-2xl bg-[#B91C1C]"><MdDelete></MdDelete></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;