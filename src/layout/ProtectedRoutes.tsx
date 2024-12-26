import useAuthStore from "@/store/authStore.ts";
import {Navigate, Outlet} from "react-router";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";

export default function ProtectedRoutes(){

    const { currentUser, authLoading } = useAuthStore();


    if (authLoading) {
        return <LoadingSpinner />;
    }


    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;

}