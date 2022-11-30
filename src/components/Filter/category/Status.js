const Status = ({setStatus}) => {
    let estados = ["Alive", "Dead", "Unknown"];

    const changeStatus = (e) => {
        setStatus(e.target.innerHTML);
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    Status
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                {estados.map((item, index) => (
                     <div className="btn-group" role="group" key={index}>
                     <input key={index}
                       className="btn-check"
                       type="radio"
                       name="statusFilter"
                       id={`${item}-${index}`}
                       />
                     <label
                       onClick={changeStatus}
                       className="btn btn-outline-primary"
                       htmlFor={`${item}-${index}`}
                     >
                       {item}
                     </label>
                   </div>
                ))}
                </div>
            </div>
        </div>
        
    );
}

export default Status;