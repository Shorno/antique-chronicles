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

function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/artifacts" element={<AllArtifacts/>}/>
                        <Route element={<ProtectedRoutes/>}>
                            <Route path="/add-artifacts" element={<AddArtifacts/>}/>
                            <Route path="/artifacts/:artifactName" element={<ArtifactDetails/>}/>
                            <Route path="/my-artifacts" element={<MyArtifacts/>}/>
                            <Route path="/my-artifacts/update/:artifactName" element={<UpdateArtifact/>}/>
                        </Route>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster position={"top-center"}/>
        </>
    )
}

export default App
