import "./search.css";

const Search = ( { setSearch, title, searchCharacter, subTitle } ) => {
    
    const renderSearchBox = () => {
        if(searchCharacter===true) {
            return (
                <div className="search-div-container-form">
                    <form className="search-input-div">
                        <input placeholder="Search for characters" type="text" onChange={(e) => setSearch(e.target.value)}/>
                        <button className="btn btn-primary fs-5">Search</button>
                    </form>
                </div>
            )
        }
    }
    return (
        <div className="search-div">
            <div>
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
            </div>
            {renderSearchBox()}
        </div>
    );
};

export default Search;