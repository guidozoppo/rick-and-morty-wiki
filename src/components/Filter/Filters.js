import "./filters.css";
import Status from "./category/Status";
import Species from "./category/Species";
import Gender from "./category/Gender";

const Filters = ({setStatus, setSpecies, setGender, clearFilters}) => {

    const resetFilters = () => {
        clearFilters();
        var ele = document.getElementsByName("statusFilter");
        for(var i=0;i <ele.length; i++){
            ele[i].checked = false;
        }
    }

    return (
        <div className="filters-div">
            <div className="filters-title-div">
                <h4>Filters</h4>
                <button className="btn btn-link" onClick={resetFilters}>Clear Filters</button>
            </div>
            <div className="accordion filter-categorys" id="accordionExample">
                <Status setStatus={setStatus} />
                <Species setSpecies={setSpecies}/>
                <Gender setGender={setGender}/>
            </div>
        </div>
    );
};

export default Filters;