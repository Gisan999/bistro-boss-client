import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const UpdateItem = () => {
    const { register, handleSubmit , reset} = useForm();
const item = useLoaderData();

    console.log(item);

    const onSubmit = (data) =>{
        console.log(data);
    }
    return (
        <div>
            <div className="flex justify-center mt-5">
                <div className="space-y-5">
                    <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">---Refresh Info---</h1>
                    <h4 className="text-4xl pb-5 w-96 text-center border-b-4">UPDATE AN ITEM</h4>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto border mt-10">
                <div className="bg-slate-200">
                    <form className="space-y-6 p-8" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Recipe name <span className="text-red-500">*</span></span>
                            </label>
                            <input className="w-full py-3 pl-3" {...register("name")} required type="text" placeholder="Recipe name" />
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Category <span className="text-red-500">*</span></span>
                                </label>
                                <select defaultValue="default" {...register('category', { required: true })}
                                    className="select rounded-none w-full " >
                                    <option disabled value="default">Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Price <span className="text-red-500">*</span></span>
                                </label>
                                <input {...register("price")} required className="w-full pl-3 py-3" type="number" placeholder="Price" />
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Recipe Details <span className="text-red-500">*</span></span>
                            </label>
                            <textarea {...register('recipe')} required className="w-full pl-3 pt-3" placeholder="Recipe Details" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <input  {...register("image")} type="file" required className="file-input bg-white w-full max-w-xs" />
                        </div>
                        <button className="btn text-white rounded-none px-8  bg-gradient-to-r from-[#835D23] to-[#B58130]">Add Item <FaUtensils></FaUtensils></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;