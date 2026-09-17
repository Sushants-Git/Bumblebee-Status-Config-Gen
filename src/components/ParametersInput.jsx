export default function ParametersInput({ id, parameters, values, onChange }) {
  return (
    <div className="parameters-input-wrappers">
      {parameters.map((parameter) => {
        let { name, description, defaultChoice, example } = parameter;
        return (
          <div key={`${name}-${id}`} className="name-and-description-wrapper">
            <label className="name-and-description" htmlFor={`${name}-${id}`}>
              <span className="parameters-name">{name}</span> : {description}
            </label>
            <div>
              <input
                type="text"
                id={`${name}-${id}`}
                placeholder={defaultChoice}
                value={values[name] ?? ""}
                onChange={(event) => onChange(name, event.target.value)}
              />
              <span className="example">
                {example === "" ? "" : `Eg : ${example}`}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
