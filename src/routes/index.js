import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home";
import Episode from "../views/episode";
import Location from "../views/location";

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/episode/" element={<Episode />}/>
            <Route path="/location/" element={<Location />}/>
        </Routes>
    </BrowserRouter>
);

export default RoutesComponent;