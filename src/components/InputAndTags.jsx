import { useEffect, useRef, useState } from "react";

export default function InputAndTags({
  inputValue,
  inputError,
  handleInputOnChange,
  modulesArray,
  deleteTag,
  themesData,
  setSelectedTheme,
  selectedTheme,
  autocompleteResults,
  setAutocompleteResults,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const listRef = useRef(null);

  useEffect(() => {
    setActiveIndex(-1);
  }, [autocompleteResults]);

  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return;
    listRef.current.children[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  function selectResult(item) {
    handleInputOnChange({ target: { value: item.name + " " } });
  }

  function handleKeyDown(event) {
    const count = autocompleteResults.length;
    if (!count) {
      if (event.key === "Enter" && inputValue.trim() !== "") {
        event.preventDefault();
        handleInputOnChange({ target: { value: inputValue.trim() + " " } });
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % count);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((index) => (index <= 0 ? count - 1 : index - 1));
        break;
      case "Enter":
      case "Tab":
        if (activeIndex < 0 && event.key === "Tab") return;
        event.preventDefault();
        selectResult(autocompleteResults[Math.max(activeIndex, 0)]);
        break;
      case "Escape":
        event.preventDefault();
        setAutocompleteResults([]);
        break;
    }
  }

  return (
    <div className="tags-wrapper">
      <div id="tags-input-wrapper">
        <div className="input-wrapper">
          <label htmlFor="tags">Modules</label>
          <input
            type="text"
            value={inputValue}
            id="tags"
            placeholder="<module name> <press space>"
            onChange={handleInputOnChange}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-expanded={autocompleteResults.length > 0}
            aria-controls="autocomplete-results"
            aria-activedescendant={
              activeIndex >= 0
                ? `autocomplete-option-${activeIndex}`
                : undefined
            }
            autoComplete="off"
            aria-invalid={inputError !== ""}
            aria-describedby="tags-error"
          />
          <div
            className="autocomplete-wrapper"
            style={
              autocompleteResults.length
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <label htmlFor="tags">Modules</label>
            <div>
              <ul
                className="autocomplete-results"
                id="autocomplete-results"
                role="listbox"
                ref={listRef}
              >
                {autocompleteResults.map((item, index) => (
                  <li
                    key={item.name}
                    id={`autocomplete-option-${index}`}
                    role="option"
                    aria-selected={index === activeIndex}
                    className={index === activeIndex ? "active" : ""}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectResult(item)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="input-error" id="tags-error" role="status">
          {inputError}
        </p>
        <div className="input-wrapper">
          <label htmlFor="theme-select">Theme</label>
          <select
            name="theme"
            id="theme-select"
            value={selectedTheme}
            onChange={(event) => setSelectedTheme(event.target.value)}
          >
            <option value="">-- Please choose a theme --</option>
            {themesData.map((theme) => (
              <option value={theme.themeTag} key={theme.themeTag}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
        <div className="tags-created">
          {!!modulesArray.length && (
            <>
              <label htmlFor="tags">Modules</label>
              <div
                id="created-tags-wrapper"
                style={{ marginTop: modulesArray.length ? "10px" : "0" }}
              >
                {modulesArray.map((module) => {
                  const { id, name } = module;
                  return (
                    <button
                      type="button"
                      className="tag"
                      key={id}
                      onClick={() => deleteTag(id)}
                      aria-label={`Remove ${name}`}
                      title={`Remove ${name}`}
                    >
                      {name}
                      <span className="tag-remove" aria-hidden="true">
                        ×
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
