export default function ChangeDefaultParametersCheckBox({
  id,
  checked,
  onChange,
}) {
  return (
    <label className="change-default-wrapper" htmlFor={`change-${id}`}>
      <input
        type="checkbox"
        id={`change-${id}`}
        className="change-default"
        name="Change Defaults"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      Change defaults
    </label>
  );
}
