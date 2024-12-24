import Navbar from "@/components/Navbar.tsx";
import {Outlet} from "react-router";
import Footer from "@/components/Footer.tsx";

export default function MainLayout() {
    return (
        <>
            <Navbar/>
            <div className={"min-h-screen"}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}