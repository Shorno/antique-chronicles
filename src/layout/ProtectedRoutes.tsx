import useAuthStore from "@/store/authStore.ts";
import {Navigate, Outlet, useLocation} from "react-router";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";

export default function ProtectedRoutes() {
    const location = useLocation();
    const {currentUser, authLoading} = useAuthStore();


    if (authLoading) {
        return <LoadingSpinner/>;
    }


    return currentUser ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace/>;

}