import "./card.css";
import { useNavigate } from "react-router-dom";
import CardDetail from "./CardDetail";

const PersonajeCard = ( { personaje } ) => {   
    const navigate = useNavigate();

    const viewDetail = () => {
        navigate(`/cardDetail/${personaje.id}`)
    }

    const detectarEstado = () => {
        if(personaje.status === "Dead") {
            return "Muerto";
        } else if(personaje.status === "Alive") {
            return "Vivo";
        } else {
            return "Desconocido";
        }
    }


    return (
        <div className="card-div" onClick={viewDetail}>
            <div className="conteiner-img">
                <img src={personaje.image} alt="Imagen-Pj"></img>
            </div>
            <div className="description-div">
                <div className={`badge bg-secondary`}>{detectarEstado()}</div>
                <div>
                    <p className="fs-4 fw-bold">{personaje.name}</p>
                </div>
                <div className="div-location">
                    <p className="fw-bold">Last Location: </p>
                    <p>{personaje?.location?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonajeCard;