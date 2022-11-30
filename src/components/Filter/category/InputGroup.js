const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="filters-div mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
        return (
            <option value={x + 1} key={index}>
                {name} - {x + 1}
            </option>
        );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
