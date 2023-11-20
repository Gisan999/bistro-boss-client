import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
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
            <div className="max-w-screen-lg mx-auto border mt-10 p-6">

                <div className="flex justify-between">
                    <h2 className="text-4xl font-semibold uppercase">All Users: { }</h2>
                    <h2 className="uppercase text-4xl font-semibold">Total Users: {users.length}</h2>
                    <button className="btn bg-[#D1A054] text-white">pay</button>
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
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((data, idx) => <tr key={data._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>

                                        {data.name}
                                    </td>
                                    <td>
                                        {data.email}
                                    </td>
                                    <td>
                                       { data.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(data)} className="btn text-white text-2xl bg-[#D1A054]"><FaUser></FaUser></button>}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDeleteUser(data._id)} className="btn text-white text-2xl bg-[#B91C1C]"><MdDelete></MdDelete></button>
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

export default AllUsers;