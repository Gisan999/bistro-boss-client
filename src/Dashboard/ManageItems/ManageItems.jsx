import { MdDelete } from "react-icons/md";
import useMenu from "../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = data => {
        console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${data._id}`)

                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }


            }
        });

    }

    return (
        <div>
            <div className="flex justify-center mt-5">
                <div className="space-y-5">
                    <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">---Hurry up---</h1>
                    <h4 className="text-4xl pb-5 w-96 text-center border-b-4">MANAGE ALL ITEMS</h4>
                </div>
            </div>
            <div>
                <div className="max-w-screen-lg mx-auto border mt-10 p-6">

                    <div className="flex justify-between">
                        <h2 className="text-4xl font-semibold uppercase">Total items: {menu.length}</h2>

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
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    menu?.map((data, idx) => <tr key={data._id}>
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
                                            <Link to={`/dashboard/updateItem/${data._id}`}>
                                                <button
                                                    className="btn text-white text-2xl bg-[#D1A054]"><FaEdit></FaEdit></button></Link>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDelete(data)} className="btn text-white text-2xl bg-[#B91C1C]"><MdDelete></MdDelete></button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageItems;