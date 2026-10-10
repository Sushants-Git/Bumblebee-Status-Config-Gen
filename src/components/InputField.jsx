import { useEffect, useState } from "react";
import { modulesData, themesData } from "./data.js";

import InputAndTags from "./InputAndTags.jsx";
import ChangeDefaultParametersCheckBox from "./ChangeDefaultParametersCheckBox.jsx";
import ParametersInput from "./ParametersInput.jsx";
import ThemeImage from "./ThemeImage.jsx";

import { Toaster, toast } from "sonner";

const PATH_PLACEHOLDER = "<path to bumblebee-status/bumblebee-status>";

const moduleByName = new Map(
  modulesData.map((module) => [module.name, module]),
);

function createModule(name, values = {}) {
  return {
    id: crypto.randomUUID(),
    name,
    checked: Object.keys(values).length > 0,
    values,
  };
}

// Quote a parameter value for the shell that runs status_command
function shellQuote(value) {
  if (/^[\w.,:%/@+=-]+$/.test(value)) return value;
  return `'${value.replace(/'/g, `'\\''`)}'`;
}

// Hash format: #m=cpu disk&t=gruvbox&cpu.warning=50
function readStateFromHash() {
  const params = new URLSearchParams(window.location.hash.slice(1));
  const names = (params.get("m") || "").split(/\s+/).filter(Boolean);
  const seen = new Set();

  const modules = names
    .filter(
      (name) => moduleByName.has(name) && !seen.has(name) && seen.add(name),
    )
    .map((name) => {
      const values = {};
      moduleByName.get(name).parameters?.forEach((parameter) => {
        const value = params.get(parameter.name);
        if (value) values[parameter.name] = value;
      });
      return createModule(name, values);
    });

  const theme = params.get("t") || "";
  return {
    modules,
    theme: themesData.some((t) => t.themeTag === theme) ? theme : "",
  };
}

function writeStateToHash(modules, selectedTheme) {
  const params = new URLSearchParams();
  if (modules.length) params.set("m", modules.map((m) => m.name).join(" "));
  if (selectedTheme) params.set("t", selectedTheme);
  modules.forEach((module) => {
    if (!module.checked) return;
    Object.entries(module.values).forEach(([name, value]) => {
      if (value.trim() !== "") params.set(name, value.trim());
    });
  });

  const hash = params.toString();
  const url =
    window.location.pathname +
    window.location.search +
    (hash ? `#${hash}` : "");
  window.history.replaceState(null, "", url);
}

function buildConfig(modules, selectedTheme, withPlaceholders) {
  const parameters = modules
    .filter((module) => module.checked)
    .flatMap((module) =>
      Object.entries(module.values)
        .filter(([, value]) => value.trim() !== "")
        .map(([name, value]) => `${name}=${shellQuote(value.trim())}`),
    );

  const lines = [
    `status_command ${PATH_PLACEHOLDER}`,
    modules.length
      ? `-m ${modules.map((module) => module.name).join(" ")}`
      : withPlaceholders && "-m <list of modules>",
    parameters.length
      ? `-p ${parameters.join(" ")}`
      : withPlaceholders && "-p <list of module parameters>",
    selectedTheme ? `-t ${selectedTheme}` : withPlaceholders && "-t <theme>",
  ].filter(Boolean);

  const body = lines
    .map((line, index) => (index === 0 ? `\t${line}` : `\t\t${line}`))
    .join(" \\\n");

  return `bar {\n${body}\n}`;
}

export default function InputField() {
  const [modules, setModules] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [copyButtonClicked, setCopyButtonClicked] = useState(false);
  const [loadedFromUrl, setLoadedFromUrl] = useState(false);

  useEffect(() => {
    const { modules, theme } = readStateFromHash();
    setModules(modules);
    setSelectedTheme(theme);
    setLoadedFromUrl(true);
  }, []);

  useEffect(() => {
    if (loadedFromUrl) writeStateToHash(modules, selectedTheme);
  }, [modules, selectedTheme, loadedFromUrl]);

  const dependencies = new Map();
  modules.forEach((module) => {
    const { requirements, tech } = moduleByName.get(module.name);
    requirements?.forEach((requirement, index) => {
      if (requirement && !dependencies.has(requirement)) {
        dependencies.set(requirement, tech?.[index]);
      }
    });
  });

  function handleInputOnChange(event) {
    let value = event.target.value.toLowerCase();
    if (value[value.length - 1] === " " && value.trim() !== "") {
      const name = value.trim();
      if (!moduleByName.has(name)) {
        setInputValue(name);
        setInputError(`No module called "${name}"`);
        setAutocompleteResults([]);
        return;
      }
      if (modules.some((module) => module.name === name)) {
        setInputError(`"${name}" is already added`);
      } else {
        setModules((preModules) => preModules.concat(createModule(name)));
        setInputError("");
      }
      setInputValue("");
      setAutocompleteResults([]);
    } else {
      setInputValue(value);
      setInputError("");
      if (value.trim() === "") {
        setAutocompleteResults([]);
      } else {
        setAutocompleteResults(
          modulesData.filter((module) =>
            module.name.toLowerCase().startsWith(value.trim()),
          ),
        );
      }
    }
  }

  function updateModule(id, update) {
    setModules((preModules) =>
      preModules.map((module) => (module.id === id ? update(module) : module)),
    );
  }

  function deleteTag(id) {
    setModules((preModules) => preModules.filter((module) => module.id !== id));
  }

  function moveModule(index, offset) {
    setModules((preModules) => {
      const target = index + offset;
      if (target < 0 || target >= preModules.length) return preModules;
      const tempModules = [...preModules];
      [tempModules[index], tempModules[target]] = [
        tempModules[target],
        tempModules[index],
      ];
      return tempModules;
    });
  }

  function setChecked(id, checked) {
    // Unchecking "Change Defaults" drops the values entered for that module
    updateModule(id, (module) => ({
      ...module,
      checked,
      values: checked ? module.values : {},
    }));
  }

  function setParameter(id, name, value) {
    updateModule(id, (module) => ({
      ...module,
      values: { ...module.values, [name]: value },
    }));
  }

  function copiedIcon() {
    if (copyButtonClicked) return;
    setCopyButtonClicked(true);
    setTimeout(() => setCopyButtonClicked(false), 1500);
  }

  function onClickCopyButton() {
    if (!copyButtonClicked) {
      const copiedText = buildConfig(modules, selectedTheme, false);

      navigator.clipboard.writeText(copiedText).then(() => {
        toast.message("Copied to clipboard", {
          description:
            "Placeholders for anything you haven’t set are left out.",
        });
        copiedIcon();
      });
    }
  }

  return (
    <>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{ className: "toast" }}
      />
      <div className="layout">
        <section className="builder" aria-label="Configure your bar">
          <InputAndTags
            inputValue={inputValue}
            inputError={inputError}
            handleInputOnChange={handleInputOnChange}
            modulesArray={modules}
            deleteTag={deleteTag}
            themesData={themesData}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            autocompleteResults={autocompleteResults}
            setAutocompleteResults={setAutocompleteResults}
          />
          {modules.length ? (
            <ol className="module-list">
              {modules.map((module, index) => {
                const { id, name, checked, values } = module;
                const { description, parameters, contrib } =
                  moduleByName.get(name);
                return (
                  <li className="module-wrapper" data-id={id} key={id}>
                    <div className="module-header">
                      <div>
                        <span className="name">{name}</span>
                        {contrib && (
                          <span className="contrib">
                            by{" "}
                            {contrib.map(({ name, link }, index, array) => (
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={`${name}-${index}`}
                              >
                                {name}
                                {index === array.length - 1 ? "" : ", "}
                              </a>
                            ))}
                          </span>
                        )}
                      </div>
                      <div className="module-actions">
                        <button
                          onClick={() => moveModule(index, -1)}
                          disabled={index === 0}
                          aria-label={`Move ${name} earlier in the bar`}
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => moveModule(index, 1)}
                          disabled={index === modules.length - 1}
                          aria-label={`Move ${name} later in the bar`}
                          title="Move down"
                        >
                          ↓
                        </button>
                        <button
                          onClick={() => deleteTag(id)}
                          aria-label={`Remove ${name}`}
                          title="Remove"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                    <p className="description">{description}</p>
                    {parameters && (
                      <ChangeDefaultParametersCheckBox
                        id={id}
                        checked={checked}
                        onChange={(checked) => setChecked(id, checked)}
                      />
                    )}
                    {checked && parameters && (
                      <ParametersInput
                        id={id}
                        parameters={parameters}
                        values={values}
                        onChange={(parameterName, value) =>
                          setParameter(id, parameterName, value)
                        }
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          ) : (
            <p className="empty-state">
              Modules you add show up here, in the order they appear on the bar.
            </p>
          )}
        </section>
        <aside className="output" aria-label="Generated config">
          <div className="output-text">
            <div className="output-header">
              <span>~/.config/i3/config</span>
              <button
                className="copy-button"
                onClick={onClickCopyButton}
                aria-label="Copy config"
              >
                {!copyButtonClicked ? <CopyButton /> : <CopiedButton />}
                {!copyButtonClicked ? "Copy" : "Copied"}
              </button>
            </div>
            <pre>{buildConfig(modules, selectedTheme, true)}</pre>
          </div>
          <ThemeImage theme={selectedTheme} />
          {dependencies.size > 0 && (
            <div className="dependencies-wrapper">
              <h2 className="dependencies">Dependencies</h2>
              <ul className="dependency-list">
                {[...dependencies].map(([value, tech]) => (
                  <li className={`dependency-${tech || "unknown"}`} key={value}>
                    {value}
                  </li>
                ))}
              </ul>
              <p className="legend">
                <span className="dependency-py">python package</span> ·{" "}
                <span className="dependency-ex">executable</span> ·{" "}
                <span className="dependency-unknown">unknown</span>
              </p>
            </div>
          )}
        </aside>
      </div>
    </>
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
