/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <div className="flex justify-center mt-40"> <span className="loading loading-infinity loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace to="/login"></Navigate>
};

export default PrivateRoute;