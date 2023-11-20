import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../SocialLogin/SocialLogin";



const Register = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { registerUser, userUpdate } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const photo = data.photo;
        const name = data.name;
        registerUser(email, password)
            .then(result => {
                console.log(result);
                userUpdate(name, photo)
                    .then(result => {
                        console.log(result);
                        // window.location.reload(false);
                        const userInfo = { name, email }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {

                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Registration Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    }

   
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>

            <div className="">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold ">REGISTRATION</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name"
                                        name="name"
                                        {...register("name", { required: true })}
                                        className="input input-bordered pr-32 md:pr-48" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text"
                                        {...register("photo", { required: true })} placeholder="Please provide a valid url"
                                        name="photo"
                                        className="input input-bordered pr-32 md:pr-48" />
                                    {errors.photo && <span className="text-red-600">PhotoURL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        {...register("email", { required: true })}
                                        name="email"
                                        placeholder="Email" className="input input-bordered pr-32 md:pr-48" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"}
                                            name="password"
                                            {...register("password", {
                                                required: true, minLength: 6, maxLength: 22,
                                                pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                            })}
                                            placeholder="Password" className="input input-bordered pr-32 md:pr-48" />
                                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase, one lowercase, <br /> one number and one special  characters</p>}
                                        <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>
                                    </div>
                                    <div className="mt-4 items-center flex">

                                        <input className="checkbox checkbox-accent"

                                            type="checkbox" name="terms" id="terms" />
                                        <label
                                            className="ml-2"
                                            htmlFor="terms">Accept Out <a className="font-medium hover:underline" href="">Terms And Conditions</a></label>
                                    </div>


                                </div>
                                <div className="form-control mt-4">
                                    <button

                                        className="btn  bg-teal-400 ">REGISTER</button>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <h2 className="text-md p-5">Already have an account? <Link to="/login"><span className="text-lg font-medium hover:underline text-teal-400">Login Here</span></Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;