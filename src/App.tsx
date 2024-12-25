import {BrowserRouter, Routes, Route} from "react-router";
import MainLayout from "@/layout/MainLayout.tsx";
import Home from "@/pages/Home.tsx";
import AllArtifacts from "@/pages/AllArtifacts.tsx";
import AddArtifacts from "@/pages/AddArtifacts.tsx";
import Register from "@/pages/Register.tsx";
import {Toaster} from "react-hot-toast";
import Login from "@/pages/Login.tsx";

function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/all-artifacts" element={<AllArtifacts/>}/>
                        <Route path="/add-artifacts" element={<AddArtifacts/>}/>
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
