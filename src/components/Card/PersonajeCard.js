import "./card.css";

const PersonajeCard = ( { personaje, onClick } ) => {
    const urlImg = personaje.image;
    
    const handleClick = (id) => {
        onClick(id)
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
        <div className="card-div" onClick={handleClick(personaje.id)}>
            <div className="conteiner-img">
                <img src={urlImg} alt="Imagen-Pj"></img>
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