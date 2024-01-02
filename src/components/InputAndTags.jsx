export default function InputAndTags({
  inputValue,
  inputRef,
  handleInputOnChange,
  modulesArray,
  deleteTag,
  themesData,
  setSelectedTheme,
  selectedTheme,
  autocompleteResults,
  setAutocompleteResults,
}) {
  return (
    <div className="tags-wrapper">
      <div id="tags-input-wrapper">
        <div className="input-wrapper">
          <label htmlFor="tags">Modules</label>
          <input
            type="text"
            value={inputValue}
            id="tags"
            ref={inputRef}
            onChange={handleInputOnChange}
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
              <ul className="autocomplete-results">
                {autocompleteResults.map((item) => (
                  <li
                    onClick={(event) => {
                      handleInputOnChange({
                        target: { value: event.target.innerText + " " },
                      });
                      // console.log(event.target.innerText);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
