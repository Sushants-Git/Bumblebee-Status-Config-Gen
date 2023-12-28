import { useEffect, useRef, useState } from "react";
import { modulesData } from "./data.js";

import { v4 as uuidv4 } from "uuid";

import InputAndTags from "./InputAndTags.jsx";
import ChangeDefaultParametersCheckBox from "./ChangeDefaultParametersCheckBox.jsx";
import ParametersInput from "./ParametersInput.jsx";

import { Toaster, toast } from "sonner";

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
  const [copyButtonClicked, setCopyButtonClicked] = useState(false);

  // console.log("modulesArray", modulesArray);
  // console.log("checkArray", checkedArray);
  // console.log("modulesParameters", modulesParameters);


  let dependencies = null;
  let dependenciesArray = [];

  for (let i = 0; i < modulesArray.length; i++) {
    if (!modulesArray[i].requirements) continue;
    modulesArray[i].requirements.forEach((requirement, index) => {
      if (notInDependenciesArray(requirement))
        dependenciesArray.push({
          value: requirement,
          tech: modulesArray[i].tech[index],
        });
    });
  }

  function notInDependenciesArray(requirement) {
    return !dependenciesArray.includes(
      (requirementObj) => requirementObj.value === requirement
    );
  }

  dependencies = dependenciesArray
    .map((obj) => {
      console.log(obj);
      return obj.value;
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

  useEffect(() => {
    setListOfModules(() => {
      if (modulesArray.length === 0) {
        return "<list of modules>";
      }
      return modulesArray.map((module) => module.name).join(" ");
    });
  }, [modulesArray]);

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
    [changeIfParameterAdded, modulesArray.length, unCheckedToggle.value]
  );

  function handleInputOnChange(event) {
    let value = event.target.value.toLowerCase();

    if (value[value.length - 1] === " " && value.trim() !== "") {
      const module = modulesData.find((module) => module.name === value.trim());
      if (module && !doesModuleAlreadyExist(value)) {
        addTag(module);
      }
      setInputValue("");
    } else {
      setInputValue(value);
    }
  }

  function doesModuleAlreadyExist(value) {
    return modulesArray.some((module) => module.name === value.trim());
  }

  const getParams = (module) =>
    module.parameters.map((parameter) => ({ ...parameter, currentValue: "" }));

  function addTag(module) {
    let id = uuidv4();

    setModulesArray((preModules) => preModules.concat({ ...module, id: id }));

    setModulesParameters((preModuleParameters) => {
      let newModuleParameter = module.parameters
        ? {
            id: id,
            hasParameters: true,
            parameters: getParams(module),
          }
        : { hasParameters: false };

      return preModuleParameters.concat(newModuleParameter);
    });
  }

  function deleteTag(id) {
    const elementToBeDeletedIndex = modulesArray.findIndex(
      (module) => module.id === id
    );

    const removeElementAtIndex = (array, index) => {
      let tempArray = [...array];
      tempArray.splice(index, 1);
      return tempArray;
    };

    setModulesArray((preModules) =>
      removeElementAtIndex(preModules, elementToBeDeletedIndex)
    );
    setCheckedArray((prevChecked) =>
      removeElementAtIndex(prevChecked, elementToBeDeletedIndex)
    );
    setModulesParameters((preModuleParameters) =>
      removeElementAtIndex(preModuleParameters, elementToBeDeletedIndex)
    );
  }

  function copiedIcon() {
    if (copyButtonClicked) return;
    setCopyButtonClicked((prevValue) => !prevValue);
    setTimeout((preValue) => {
      setCopyButtonClicked((prevValue) => !prevValue);
    }, 1500);
  }

  return (
    <div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#101010",
            color: "#ffffff",
            border: "1px solid #282828",
          },
        }}
      />
      <InputAndTags
        inputValue={inputValue}
        inputRef={inputRef}
        handleInputOnChange={handleInputOnChange}
        modulesArray={modulesArray}
        deleteTag={deleteTag}
      />
      <OutputText>
        <pre>
          {outputText}
          <button
            className="copy-button"
            onClick={() => {
              if (!copyButtonClicked) {
                navigator.clipboard.writeText(outputText).then(() => {
                  toast("Copied to clipboard!");
                  copiedIcon();
                });
              }
            }}
          >
            {!copyButtonClicked ? (
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
              </svg>
            ) : (
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            )}
          </button>
        </pre>
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
    </div>
  );
}

function OutputText({ children }) {
  return <div className="output-text">{children}</div>;
}
