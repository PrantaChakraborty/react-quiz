import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// redirect to home page if user is logged in and try to visit login/signup
export default function PublicRoute({ children }) {
	const { currentUser } = useAuth();
	return !currentUser ? children : <Navigate to="/" />;
}
