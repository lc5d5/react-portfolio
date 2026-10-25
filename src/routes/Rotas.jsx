import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../components/Home";
import Sobre from "../components/Sobre";

const Rotas = () => {
    return ( 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                </Routes>
        </BrowserRouter>
     );
}
 
export default Rotas;