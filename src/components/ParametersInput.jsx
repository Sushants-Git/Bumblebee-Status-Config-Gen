export default function ParametersInput({
  id,
  index,
  setModulesParameters,
  setChangeIfParameterAdded,
  module,
}) {
  return (
    <div className="parameters-input-wrappers">
      {module.parameters.map((parameter, parameterIndex) => {
        let { name, description, defaultChoice, example } = parameter;
        return (
          <div key={`${name}-${id}`} className="name-and-description-wrapper">
            <div className="name-and-description">
              <span className="parameters-name">{name}</span> : {description}
            </div>
            <div>
              <input
                type="text"
                placeholder={defaultChoice}
                onChange={(event) => {
                  setModulesParameters((preModuleParameters) => {
                    let tempPreModuleParameters = [...preModuleParameters];
                    tempPreModuleParameters[index].parameters[
                      parameterIndex
                    ].currentValue = event.target.value.trim();
                    return tempPreModuleParameters;
                  });
                  setChangeIfParameterAdded((preValue) => !preValue);
                }}
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
