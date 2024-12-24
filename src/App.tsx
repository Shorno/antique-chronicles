import {BrowserRouter, Routes, Route} from "react-router";
import MainLayout from "@/layout/MainLayout.tsx";
import Home from "@/pages/Home.tsx";
import AllArtifacts from "@/pages/AllArtifacts.tsx";
import AddArtifacts from "@/pages/AddArtifacts.tsx";
import Register from "@/pages/Register.tsx";
import {Toaster} from "react-hot-toast";

function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/all-artifacts" element={<AllArtifacts/>}/>
                        <Route path="/add-artifacts" element={<AddArtifacts/>}/>
                        <Route path="/registration" element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster position={"top-center"}/>
        </>
    )
}

export default App
