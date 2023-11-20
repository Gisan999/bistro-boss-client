/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center mt-40"> <span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={{ from: location }} replace to="/"></Navigate>
};

export default AdminRoute;
