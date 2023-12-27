export default function InputAndTags({
  inputValue,
  inputRef,
  handleInputOnChange,
  modulesArray,
  deleteTag,
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
