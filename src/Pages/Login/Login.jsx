import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useEffect, useState } from 'react';
import SocialLogin from "../../SocialLogin/SocialLogin";
const Login = () => {
    const { logIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result);
                // navigate(location?.state ? location.state : '/');
                navigate(from);
                Swal.fire({
                    title: "User Login Successful.",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                        `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                        `
                    }
                });
            })
            .catch(error => {
                console.error(error);

            })
    }

    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className=" mx-auto">

                <section className="flex flex-col md:flex-row h-screen items-center">

                    <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen ">
                        <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                       flex items-center justify-center">

                        <div className="w-full h-100">


                            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                            <form onSubmit={handleLogin}
                                className="mt-6" action="#" method="POST">
                                <div>
                                    <label className="block text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required />
                                </div>

                                <div className="mt-4 relative">
                                    <label className="block text-gray-700">Password</label>
                                    <input type={showPassword ? "text" : "password"}

                                        name="password" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                      focus:bg-white 
                        focus:outline-none" required />
                                    <span className="absolute bottom-5 right-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>

                                <div className="text-right mt-2">
                                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                                </div>
                                <div>
                                    {/* <label className="block text-gray-700">Email Address</label> */}
                                    <LoadCanvasTemplate />
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" id="" placeholder="type the captcha above" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required />
                                    {/* <button onClick={handleValidateCaptcha} className='btn btn-outline btn-primary btn-sm w-full mt-2'>validate</button> */}
                                </div>

                                <button disabled={disabled} type="submit" className="w-full  btn-outline btn btn-secondary   text-white  rounded-lg
                           mt-6">Log In</button>
                            </form>

                            <hr className="my-6 border-gray-300 w-full" />

                            <SocialLogin />

                            <p className="mt-8">Need an account?

                                <Link to={'/register'}>                           <span className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                                    account</span></Link>


                            </p>


                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Login;