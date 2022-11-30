const species = ( {setSpecies} ) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const changeSpecies = (e) => {
    setSpecies(e.target.innerHTML);
  }
    return (
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Species
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-3">
              {species.map((item, index) => (
                <div className="btn-group" role="group" key={index}>
                <input key={index}
                  className="btn-check"
                  type="radio"
                  name="statusFilter"
                  id={`${item}-${index}`}
                  />
                <label
                  onClick={changeSpecies}
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

export default species;