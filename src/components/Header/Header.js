import { useNavigate } from "react-router-dom";
import "./header.css";

const Encabezado = () => {
    const navigate = useNavigate();
    
    const navigateTo = (e) => {
        const elem = e?.target?.style;
        elem.color += "blue";
        const destino = e.target.attributes.destino.value;
        navigate(`/${destino}`);
    }

    return (
        <header>
            <div destino="" className="home-link" onClick={navigateTo}>
                Rick & Morty <span destino="">Wiki</span>
            </div>
            <div className="sections">
                <ul className="list-group">
                    <li className="list-group-item" destino="" onClick={navigateTo}>Characters</li>
                    <li className="list-group-item" destino="episode" onClick={navigateTo}>Episode</li>
                    <li className="list-group-item" destino="location" onClick={navigateTo}>Location</li>
                </ul>
            </div>
        </header>
    );
};

export default Encabezado;