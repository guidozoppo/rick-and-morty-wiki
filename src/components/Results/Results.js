import "./results.css";
import PersonajeCard from "../Card/PersonajeCard";

const Results = ( { personajes, view } ) => {
    
    const verDetalle = () => {
    }
    
    const renderResults = () => {
        if(view === "episode"){
            return (
                personajes?.map( personaje => (
                    <PersonajeCard key={personaje.id} personaje={personaje} onClick={verDetalle} />
                ))
            )
        } else if(view === "characters") {
            return (
                personajes?.results?.map( personaje => (
                    <PersonajeCard key={personaje.id} personaje={personaje} onClick={verDetalle} />
                ))
            )
        }
    }

    return (
        renderResults()
    );
};

export default Results;