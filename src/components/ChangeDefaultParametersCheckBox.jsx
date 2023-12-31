export default function ChangeDefaultParametersCheckBox({
  id,
  index,
  checkedArray,
  setCheckedArray,
  setUnCheckedToggle,
}) {
  function handleChange(event) {
    if (checkedArray[index] !== event.target.checked) {
      setCheckedArray((prevCheckedArray) => {
        let tempCheckedArray = [...prevCheckedArray];
        tempCheckedArray[index] = event.target.checked; // This line is important to maintain the order of the checkedArray
        return tempCheckedArray;
      });
    }
    if (event.target.checked === false) {
      setUnCheckedToggle((preValue) => ({
        value: !preValue.value,
        id: event.target.id,
      }));
    }
  }
  return (
    <div className="change-default-wrapper">
      <input
        type="checkbox"
        id={`change-${id}`}
        className="change-default"
        name="Change Defaults"
        onChange={handleChange}
      />
      <label htmlFor={`change-${id}`}>Change Defaults</label>
    </div>
  );
}
