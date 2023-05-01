import Encabezado from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Filters from "../../components/Filter/Filters";
import Results from "../../components/Results/Results";
import Pagination from "../../components/Pagination/Pagination";

import { useFetchPersonajesQuery } from "../../redux/api/personajes";
import { useState } from "react";
import Error from "../responses/Error";

const Home = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [currentPage, setCurrenPage] = useState(1);
    const { data, isLoading, isSuccess, isFetching, isError, error } = useFetchPersonajesQuery({currentPage, search, status, species, gender});

    const clearFilters = () => {
        setStatus("");
        setSpecies("");
        setGender("");
    }

    const renderResults = () => {
        if (isError) {
            return <Error message={error?.data?.error} />
        } else if(isLoading || isFetching) {
            return <div>Cargando</div>;
        } else if (isSuccess && data?.results) {
            return <Results personajes={data} view="characters"/>
        }
    }

    return (

        <div>
            <Encabezado />
            <Search setSearch={setSearch} title="Characters" searchCharacter={true}/>
            <div className="filter-results-div">
                <Filters setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} clearFilters={clearFilters}/>
                <div className="results-div">
                    {renderResults()}
                </div>
            </div>
            <Pagination
                info={data}
                setCurrenPage={setCurrenPage}
            />
        </div>
    );
}

export default Home;