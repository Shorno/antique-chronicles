import {BrowserRouter, Routes, Route} from "react-router";
import MainLayout from "@/layout/MainLayout.tsx";
import Home from "@/pages/Home.tsx";
import AllArtifacts from "@/pages/AllArtifacts.tsx";

function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/all-artifacts" element={<AllArtifacts/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
