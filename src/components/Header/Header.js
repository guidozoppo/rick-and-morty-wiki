import { useNavigate } from "react-router-dom";
import "./header.css";

const Encabezado = () => {
    const navigate = useNavigate();
    
    const navigateHome = (e) => {
        const destino = e.target.attributes.destino.value;
        navigate(`/${destino}`);
    }

    return (
        <header>
            <div destino="" className="home-link" onClick={navigateHome}>
                Rick & Morty <span destino="">Wiki</span>
            </div>
            <div className="sections">
                <ul>
                    <li destino="" onClick={navigateHome}>Characters</li>
                    <li destino="episode" onClick={navigateHome}>Episode</li>
                    <li destino="location" onClick={navigateHome}>Location</li>
                </ul>
            </div>
        </header>
    );
};

export default Encabezado;