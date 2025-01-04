import {BrowserRouter, Routes, Route} from "react-router";
import MainLayout from "@/layout/MainLayout.tsx";
import Home from "@/pages/Home.tsx";
import AllArtifacts from "@/pages/AllArtifacts.tsx";
import AddArtifacts from "@/pages/AddArtifacts.tsx";
import Register from "@/pages/Register.tsx";
import {Toaster} from "react-hot-toast";
import Login from "@/pages/Login.tsx";
import ProtectedRoutes from "@/layout/ProtectedRoutes.tsx";
import ArtifactDetails from "@/pages/ArtifactDetails.tsx";
import MyArtifacts from "@/pages/MyArtifacts.tsx";
import UpdateArtifact from "@/pages/UpdateArtifact.tsx";
import ScrollToTop from "@/lib/FixScroll.tsx";
import NotFound from "@/components/NotFound.tsx";
import LikedArtifacts from "@/pages/LikedArtifacts.tsx";

function App() {


    return (
        <>
            <BrowserRouter>
                <ScrollToTop/>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/artifacts" element={<AllArtifacts/>}/>
                        <Route element={<ProtectedRoutes/>}>
                            <Route path="/add-artifacts" element={<AddArtifacts/>}/>
                            <Route path="/artifacts/:artifactName" element={<ArtifactDetails/>}/>
                            <Route path="/my-artifacts" element={<MyArtifacts/>}/>
                            <Route path="/my-artifacts/update/:artifactName" element={<UpdateArtifact/>}/>
                            <Route path="/liked-artifacts" element={<LikedArtifacts/>}/>
                        </Route>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster position={"top-center"}/>
        </>
    )

}

export default App
