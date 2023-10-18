import React, { useState } from "react";

const Checkbox = () => {
  const initialCheckboxes = [
    { id: 1, label: "Checkbox 1" },
    { id: 2, label: "Checkbox 2" },
    { id: 3, label: "Checkbox 3" },
    { id: 4, label: "Checkbox 4" },
    { id: 5, label: "Checkbox 5" },
  ];

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (e, id, label) => {
    if (e.target.checked) {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, { id, label }]);
      alert(`Selected: ${label}`);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item.id !== id)
      );
      alert(`Deselected: ${label}`);
    }
  };

  return (
    <div>
      <h1>List of Checkboxes</h1>
      <div>
        {initialCheckboxes.map((checkbox) => (
          <label key={checkbox.id}>
            <input
              type="checkbox"
              checked={selectedCheckboxes.some(
                (selectedItem) => selectedItem.id === checkbox.id
              )}
              onChange={(e) =>
                handleCheckboxChange(e, checkbox.id, checkbox.label)
              }
            />
            {checkbox.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
