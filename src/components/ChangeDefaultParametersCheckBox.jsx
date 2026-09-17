export default function ChangeDefaultParametersCheckBox({
  id,
  checked,
  onChange,
}) {
  return (
    <>
      <div className="change-default-wrapper">
        <input
          type="checkbox"
          id={`change-${id}`}
          className="change-default"
          name="Change Defaults"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <label htmlFor={`change-${id}`}>Change Defaults</label>
      </div>
    </>
  );
}
