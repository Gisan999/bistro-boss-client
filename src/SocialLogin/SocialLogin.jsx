import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const googleSignIn = ()=>{
        googleLogin()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div className="flex justify-center m-5">
            <button onClick={googleSignIn} className="btn btn-info btn-circle btn-outline ">
                <FaGoogle className="text-xl"></FaGoogle>
            </button>

        </div>
    );
};

export default SocialLogin;