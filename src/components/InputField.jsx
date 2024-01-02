import { useEffect, useRef, useState } from "react";
import { modulesData, themesData } from "./data.js";

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
  const [selectedTheme, setSelectedTheme] = useState("");
  const [autocompleteResults, setAutocompleteResults] = useState([]);

  // console.log("modulesArray", modulesArray);
  // console.log("checkArray", checkedArray);
  // console.log("modulesParameters", modulesParameters);

  let dependencies = null;
  let dependenciesArray = [];

  for (let i = 0; i < modulesArray.length; i++) {
    if (!modulesArray[i].requirements) continue;
    modulesArray[i].requirements.forEach((requirement, index) => {
      if (notInDependenciesArray(requirement)) {
        dependenciesArray.push({
          value: requirement,
          tech: modulesArray[i].tech[index],
        });
      }
    });
  }

  function notInDependenciesArray(requirement) {
    return !dependenciesArray.some(
      (requirementObj) => requirementObj.value === requirement
    );
  }

  // dependencies = dependenciesArray
  //   .map((obj) => {
  //     // console.log(obj);
  //     return obj.value;
  //   })
  //   .join(" ");

  dependencies = dependenciesArray.map((obj) => {
    return (
      <span style={{ color: getDependenciesStyle(obj.tech) }} key={uuidv4()}>
        {obj.value}{" "}
      </span>
    );
  });

  function getDependenciesStyle(packageName) {
    if (packageName === "py") {
      return "#48FF4F";
    } else if (packageName === "ex") {
      return "#48baff";
    }
  }

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

  useEffect(() => {
    setTheme((preValue) => {
      if (selectedTheme === "") {
        return "<theme>";
      }
      const theme = themesData.find(
        (theme) => theme.themeTag === selectedTheme
      );
      return theme.themeTag;
    });
  }, [selectedTheme]);

  function handleInputOnChange(event) {
    let value = event.target.value.toLowerCase();
    if (value[value.length - 1] === " " && value.trim() !== "") {
      const module = modulesData.find((module) => module.name === value.trim());
      if (module && !doesModuleAlreadyExist(value)) {
        addTag(module);
      }
      setInputValue("");
      setAutocompleteResults([]);
    } else {
      setInputValue(value);
      if (value === "") {
        setAutocompleteResults([]);
      } else {
        setAutocompleteResults(
          modulesData.filter((module) => {
            return (
              module.name.substring(0, value.length).toLowerCase() ===
              value.toLowerCase()
            );
          })
        );
      }
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

  function onClickCopyButton() {
    if (!copyButtonClicked) {
      let copiedText = `bar {\n\tstatus_command ${pathToBumblebee} \\`;

      if (listOfModules !== "<list of modules>") {
        copiedText += `\n\t\t-m ${listOfModules} \\`;
      }

      if (listOfModuleParams !== "<list of module parameters>") {
        copiedText += `\n\t\t-p ${listOfModuleParams} \\`;
      }

      if (theme !== "<theme>") {
        copiedText += `\n\t\t-t ${theme}`;
      }

      copiedText += "\n}";

      console.log(copiedText);
      navigator.clipboard.writeText(copiedText).then(() => {
        toast.message("Copied to clipboard !", {
          description:
            "All the things that have not been selected will be ignored in the copy.",
        });
        copiedIcon();
      });
    }
  }

  return (
    <div>
      <div className="github-logo">
        <a
          href="https://github.com/Sushants-Git/Bumblebee-Status-Config-Gen"
          target="_blank"
        >
          <GitHubLogo />
          GitHub
        </a>
      </div>
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
        themesData={themesData}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        autocompleteResults={autocompleteResults}
        setAutocompleteResults={setAutocompleteResults}
      />
      <OutputText>
        <pre>
          {outputText}
          <button className="copy-button" onClick={onClickCopyButton}>
            {!copyButtonClicked ? <CopyButton /> : <CopiedButton />}
          </button>
        </pre>
      </OutputText>
      <div className="parameters-wrapper">
        <div>
          {dependenciesArray.length ? (
            <span className="dependencies">dependencies</span>
          ) : (
            ""
          )}
          {dependencies}
        </div>
        <div className="dependencies-type">
          <span className="dependencies" style={{ visibility: "hidden" }}>
            dependencies
          </span>
          {dependenciesArray.length ? (
            <div className="box-wrappers">
              <div className="green-color-div">
                <div className="box"></div>
                <div>Python</div>
              </div>
              <div className="blue-color-div">
                <div className="box"></div>
                <div>Executable</div>
              </div>
              <div className="white-color-div">
                <div className="box"></div>
                <div>Unknown</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {modulesArray.map((module, index) => {
          let { id, name, description, parameters } = module;
          return (
            <div className="module-wrapper" data-id={id} key={id}>
              <div>
                <span className="name">{name}</span>{" "}
                {module.contrib ? "by " : ""}
                {module.contrib?.map(({ name, link }, index, array) => (
                  <a href={link} className="contrib-links" target="_blank">
                    {name}
                    {index === array.length - 1 ? " " : ", "}
                  </a>
                ))}
                <div className="description">{description}</div>
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

function GitHubLogo() {
  return (
    <svg viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  );
}

function CopyButton() {
  return (
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
  );
}

function CopiedButton() {
  return (
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
  );
}
