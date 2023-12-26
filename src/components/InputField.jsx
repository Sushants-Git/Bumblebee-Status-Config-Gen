import { useEffect, useRef, useState } from "react";
import { modulesData } from "./data.js";

export default function InputField() {
  const [modulesArray, setModulesArray] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [modulesParameters, setModulesParameters] = useState([]);
  const [changeIfParameterAdded, setChangeIfParameterAdded] = useState(false);

  // console.log("modulesArray", modulesArray);
  // console.log("checkArray", checkedArray);
  // console.log("modulesParameters", modulesParameters);

  let dependencies = modulesArray
    .map((module) => {
      console.log(module);
      if (module.requirements) {
        return module.requirements.map((requirement) => requirement).join(" ");
      } else {
        return "";
      }
    })
    .join(" ");

  const [pathToBumblebee, setPathToBumblebee] = useState(
    "<path to bumblebee-status/bumblebee-status>"
  );
  const [listOfModules, setListOfModules] = useState("<list of modules>");
  const [listOfModuleParams, setListOfModuleParams] = useState(
    "<list of module parameters>"
  );
  const [theme, setTheme] = useState("<theme>");

  const outputText = ` bar {
    \tstatus_command ${pathToBumblebee} \\
    \t\t-m ${listOfModules} \\
    \t\t-p ${listOfModuleParams} \\
    \t\t-t ${theme}
        }`;

  useEffect(
    function () {
      setListOfModules((preValue) => {
        if (modulesArray.length === 0) {
          return "<list of modules>";
        }
        let temp = "";
        modulesArray.forEach((module) => (temp += module.name + " "));
        return temp;
      });
    },
    [modulesArray.length]
  );

  useEffect(
    function () {
      setListOfModuleParams((preValue) => {
        let hasParameters = false;
        let temp = "";
        modulesParameters.forEach((modulesParameter) => {
          if (!modulesParameter.parameters) return;
          modulesParameter.parameters.map((parameter) => {
            if (parameter.currentValue !== "") {
              temp += `${parameter.name}="` + `${parameter.currentValue}" `;
              hasParameters = true;
            }
          });
        });
        if (!hasParameters) {
          temp = "<list of module parameters>";
        }
        return temp;
      });
    },
    [changeIfParameterAdded, modulesArray.length]
  );

  function generateCustomUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  function handleInputOnChange(event) {
    let value = event.target.value;
    if (value[value.length - 1] === " " && value.trim() !== "") {
      modulesData.forEach((module) => {
        if (module.name === value.trim()) addTag(module);
      });
      setInputValue("");
    } else setInputValue(value);
  }

  function addTag(module) {
    setModulesArray((preModules) => {
      let tempPreModules = [...preModules];
      tempPreModules.push({ ...module, id: generateCustomUUID() });
      return tempPreModules;
    });

    setModulesParameters((preModuleParameters) => {
      function getParams() {
        return module.parameters.map((parameter) => ({
          ...parameter,
          currentValue: "",
        }));
      }
      let tempPreModuleParameters = [...preModuleParameters];
      if (module.parameters) {
        tempPreModuleParameters.push({
          hasParameters: true,
          parameters: getParams(),
        });
      } else {
        tempPreModuleParameters.push({ hasParameters: false });
      }
      return tempPreModuleParameters;
    });
  }

  function deleteTag(id) {
    let elementToBeDeletedIndex = null;
    modulesArray.forEach((module, index) => {
      if (module.id === id) elementToBeDeletedIndex = index;
    });

    setModulesArray((preModules) => {
      let tempPreModules = [...preModules];
      let returnModules = [];
      tempPreModules.forEach((module, index) => {
        if (index !== elementToBeDeletedIndex) returnModules.push(module);
      });
      return returnModules;
    });

    setCheckedArray((prevChecked) => {
      let tempPreChecked = [...prevChecked];
      let returnChecked = [];
      tempPreChecked.forEach((check, index) => {
        if (index !== elementToBeDeletedIndex) returnChecked.push(check);
      });
      return returnChecked;
    });

    setModulesParameters((preModuleParameters) => {
      let tempPreModuleParameters = [...preModuleParameters];
      let returnPreModuleParameters = [];
      tempPreModuleParameters.forEach((check, index) => {
        if (index !== elementToBeDeletedIndex)
          returnPreModuleParameters.push(check);
      });
      return returnPreModuleParameters;
    });
  }

  return (
    <>
      <div className="tags-wrapper">
        <label htmlFor="tags">Modules</label>
        <div id="tags-input-wrapper">
          <input
            type="text"
            value={inputValue}
            id="tags"
            ref={inputRef}
            onChange={handleInputOnChange}
          />
          <div
            id="created-tags-wrapper"
            style={{ marginTop: modulesArray.length ? "10px" : "0" }}
          >
            {modulesArray.map((module) => {
              const { id, name } = module;
              return (
                <span
                  className="tag"
                  data-id={id}
                  key={id}
                  onClick={(event) => {
                    deleteTag(event.target.dataset.id);
                  }}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="output-text">
        <pre>{outputText}</pre>
      </div>
      <div className="parameters-wrapper">
        <div>dependencies : {dependencies}</div>
        {modulesArray.map((module, index) => {
          let { id, name, description, parameters } = module;
          return (
            <div className="module-wrapper" data-id={id} key={id}>
              <div>
                {name} : {description}
              </div>
              <div>
                {parameters && (
                  <div>
                    <input
                      type="checkbox"
                      id={`change-${id}`}
                      className="change-default"
                      name="Change Default"
                      onChange={(event) => {
                        if (checkedArray[index] !== event.target.checked) {
                          setCheckedArray((prevCheckedArray) => {
                            let tempCheckedArray = [...prevCheckedArray];
                            tempCheckedArray[index] = event.target.checked;
                            return tempCheckedArray;
                          });
                        }
                      }}
                    />
                    <label htmlFor={`change-${id}`}>Change Default</label>
                  </div>
                )}
              </div>
              <div>
                {checkedArray[index] && module.parameters && (
                  <div className="parameters-input-wrappers">
                    {module.parameters.map((parameter, parameterIndex) => {
                      let { name, description, defaultChoice, example } =
                        parameter;
                      return (
                        <div key={`${name}-${id}`}>
                          <div className="name-and-description">
                            {name} : {description}
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder={defaultChoice}
                              onChange={(event) => {
                                setModulesParameters((preModuleParameters) => {
                                  let tempPreModuleParameters = [
                                    ...preModuleParameters,
                                  ];
                                  tempPreModuleParameters[index].parameters[
                                    parameterIndex
                                  ].currentValue = event.target.value.trim();
                                  return tempPreModuleParameters;
                                });
                                setChangeIfParameterAdded(
                                  (preValue) => !preValue
                                );
                                // console.log(
                                //   JSON.stringify(
                                //     modulesParameters[index].parameters[
                                //       parameterIndex
                                //     ]
                                //   )
                                // );
                                // console.log(event.target.value);
                              }}
                            />
                            <span className="example">Eg : {example}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
