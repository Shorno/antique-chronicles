import Navbar from "@/components/Navbar.tsx";
import {Outlet} from "react-router";

export default function MainLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}