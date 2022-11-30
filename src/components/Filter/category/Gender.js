const gender = ( {setGender} ) => {
    let genders = ["female", "male", "genderless", "unknown"];

    const changeGender = (e) => {
      setGender(e.target.innerHTML);
    }

    return (
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Gender
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-3">
              {genders.map((item, index) => (
                <div className="btn-group" role="group" key={index}>
                <input key={index}
                  className="btn-check"
                  type="radio"
                  name="statusFilter"
                  id={`${item}-${index}`}
                  />
                <label
                  onClick={changeGender}
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

export default gender;