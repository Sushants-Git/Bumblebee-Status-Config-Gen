import { useEffect, useRef, useState } from "react";
import { modulesData } from "./data.js";

import { v4 as uuidv4 } from "uuid";

import InputAndTags from "./InputAndTags.jsx";
import ChangeDefaultParametersCheckBox from "./ChangeDefaultParametersCheckBox.jsx";
import ParametersInput from "./ParametersInput.jsx";

export default function InputField() {
  const [modulesArray, setModulesArray] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [modulesParameters, setModulesParameters] = useState([]);
  const [changeIfParameterAdded, setChangeIfParameterAdded] = useState(false);
  const [unCheckedToggle, setUnCheckedToggle] = useState({
    value: false,
    id: null,
  });

  // console.log("modulesArray", modulesArray);
  // console.log("checkArray", checkedArray);
  // console.log("modulesParameters", modulesParameters);

  let dependencies = modulesArray
    .map((module) => {
      // console.log(module);
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
      let hasParameters = false;
      let temp = "";
      let cleanDefaultsOf = null;

      modulesParameters.forEach((modulesParameter, index) => {
        if (!modulesParameter.parameters) return;
        if (checkedArray[index] === false) {
          if (
            modulesArray[index].id ===
            unCheckedToggle.id.substring("change-".length)
          ) {
            cleanDefaultsOf = unCheckedToggle.id.substring("change-".length);
            return;
          } else {
            return;
          }
        }
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

      setListOfModuleParams((preValue) => {
        return temp;
      });

      if (cleanDefaultsOf === null) {
        return;
      } else {
        setModulesParameters((preModuleParameters) => {
          let tempPreModuleParameters = [...preModuleParameters];
          console.log(tempPreModuleParameters);
          tempPreModuleParameters.forEach((moduleParameter, index) => {
            if (moduleParameter.id === cleanDefaultsOf) {
              moduleParameter.parameters.forEach(
                (parameter) => (parameter.currentValue = "")
              );
            }
          });
          return tempPreModuleParameters;
        });
      }
    },
    [changeIfParameterAdded, modulesArray.length, unCheckedToggle]
  );

  function handleInputOnChange(event) {
    let value = event.target.value.toLowerCase();

    if (value[value.length - 1] === " " && value.trim() !== "") {
      modulesData.forEach((module) => {
        if (module.name === value.trim() && !doesModuleAlreadyExist(value))
          addTag(module);
      });
      setInputValue("");
    } else setInputValue(value);
  }

  function doesModuleAlreadyExist(value) {
    if (modulesArray.length !== 0) {
      let moduleAlreadyExists = false;
      modulesArray.forEach((module) => {
        if (module.name === value.trim()) moduleAlreadyExists = true;
      });
      if (moduleAlreadyExists) return true;
    }
  }

  function addTag(module) {
    let id = uuidv4();
    setModulesArray((preModules) => {
      let tempPreModules = [...preModules];
      tempPreModules.push({ ...module, id: id });
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
          id: id,
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
      <InputAndTags
        inputValue={inputValue}
        inputRef={inputRef}
        handleInputOnChange={handleInputOnChange}
        modulesArray={modulesArray}
        deleteTag={deleteTag}
      />
      <OutputText>
        <pre>{outputText}</pre>
      </OutputText>
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
                  <ChangeDefaultParametersCheckBox
                    id={id}
                    index={index}
                    checkedArray={checkedArray}
                    setCheckedArray={setCheckedArray}
                    setUnCheckedToggle={setUnCheckedToggle}
                  />
                )}
              </div>
              <div>
                {checkedArray[index] && module.parameters && (
                  <ParametersInput
                    id={id}
                    index={index}
                    setModulesParameters={setModulesParameters}
                    setChangeIfParameterAdded={setChangeIfParameterAdded}
                    module={module}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function OutputText({ children }) {
  return <div className="output-text">{children}</div>;
}
