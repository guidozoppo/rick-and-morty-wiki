import "./results.css";
import PersonajeCard from "../Card/PersonajeCard";

const Results = ( { personajes, view } ) => {
        
    const renderResults = () => {
        if(view === "episode"){
            return (
                personajes?.map( personaje => (
                    <PersonajeCard key={personaje.id} personaje={personaje} />
                ))
            )
        } else if(view === "characters") {
            return (
                personajes?.results?.map( personaje => (
                    <PersonajeCard key={personaje.id} personaje={personaje} />
                ))
            )
        }
    }

    return (
        renderResults()
    );
};

export default Results;