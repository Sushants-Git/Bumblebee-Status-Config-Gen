export default function ParametersInput({ id, parameters, values, onChange }) {
  return (
    <div className="parameters-input-wrappers">
      {parameters.map((parameter) => {
        const { name, description, defaultChoice, example } = parameter;
        return (
          <div key={`${name}-${id}`} className="name-and-description-wrapper">
            <label className="name-and-description" htmlFor={`${name}-${id}`}>
              <code className="parameters-name">{name}</code>
              <span>{description}</span>
            </label>
            <input
              type="text"
              id={`${name}-${id}`}
              placeholder={defaultChoice}
              value={values[name] ?? ""}
              onChange={(event) => onChange(name, event.target.value)}
            />
            {example && <span className="example">e.g. {example}</span>}
          </div>
        );
      })}
    </div>
  );
}
