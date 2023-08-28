import Favoritos from "pages/favoritos/Favoritos.jsx";
import Inicio from "./pages/inicio/Inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "pages/Player/Player.jsx";
import NaoEncontrado from "pages/NaoEncontrado/NaoEncontrado.jsx";
import PaginaBase from "pages/PaginaBase/PaginaBase.jsx";

export default function AppRoutes(){
    return(
        <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<PaginaBase/>}>
                            <Route index element={<Inicio/>}/>
                            <Route path='favoritos' element={<Favoritos/>}/>
                            <Route path=':id' element={<Player/>}/>
                            <Route path="*" element={<NaoEncontrado />}/>
                        </Route>
                    </Routes>    
        </BrowserRouter>
    )
}