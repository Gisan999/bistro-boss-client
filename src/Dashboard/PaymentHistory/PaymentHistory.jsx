import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payment = [] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`)
            return res.data;
        }
    })
    console.log(payment);
    return (
        <div>

            <div className="max-w-screen-lg mx-auto border mt-10 p-6">

                <div className="flex justify-between">
                    <h2 className="text-4xl font-semibold uppercase">Total orders: </h2>



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
                                <th>PRICE</th>
                                <th>TRANSACTION ID</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payment?.map((data, idx) => <tr key={data._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                  
                                    <td>
                                        $ {data.price}
                                    </td>
                                    <td>{data.transactionId}</td>
                                    <td>
                                        {data.status}
                                        {/* <button className="btn text-white text-2xl bg-[#B91C1C]"><MdDelete></MdDelete></button> */}
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default PaymentHistory;