import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
 
        return <Navigate to="/auth/signup" />;

}

// If user is authenticated, render the children components
return children;
};
