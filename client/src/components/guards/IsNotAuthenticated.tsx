import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function IsNotAuthenticated() {
    const { isAuthenticated } = useAuthContext();

    return (
        isAuthenticated
            ? <Navigate to='/' />
            : <Outlet />
    )
}