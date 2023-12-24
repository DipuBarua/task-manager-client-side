import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className=" min-h-screen text-center py-48 space-x-1">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/logIn"} state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;