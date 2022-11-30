import "./search.css";

const Search = ( { setSearch } ) => {

    return (
        <div className="search-div">
            <div>
                <h3>Characters</h3>
            </div>
            <div className="search-div-container-form">
                <form className="search-input-div">
                    <input placeholder="Search for characters" type="text" onChange={(e) => setSearch(e.target.value)}/>
                    <button className="btn btn-primary fs-5">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Search;