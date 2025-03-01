import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProtectRoute = ({ children }) => {
    const { isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/sign-in");
        }
    }, [isAuthenticated, navigate]);

    // Only render children if authenticated
    return isAuthenticated ? children : null;
};

export default ProtectRoute;
