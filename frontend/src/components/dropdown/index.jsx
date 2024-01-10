import React from "react";
import Dropdown from "react-dropdown";

const options = [
  { value: "op1", label: "All Location" },
  { value: "op30", label: "Andaman and Nicobar Islands" },
  { value: "op2", label: "Andra Pradesh" },
  { value: "op3", label: "Arunachal Pradesh" },
  { value: "op4", label: "Assam" },
  { value: "op5", label: "Bihar" },
  { value: "op6", label: "Chandigarh" },
  { value: "op7", label: "Chhattisgarh" },
  { value: "op8", label: "Daman and Diu" },
  { value: "op9", label: "Delhi" },
  { value: "op10", label: "Goa" },
  { value: "op11", label: "Gujarat" },
  { value: "op12", label: "Haryana" },
  { value: "op13", label: "Himachal Pradesh" },
  { value: "op14", label: "Jammu & Kashmir" },
  { value: "op15", label: "Jharkhand" },
  { value: "op16", label: "Karnataka" },
  { value: "op17", label: "Kerala" },
  { value: "op18", label: "Lakshadweep" },
  { value: "op19", label: "Madhya Pradesh" },
  { value: "op20", label: "Maharashtra" },
  { value: "op21", label: "Manipur" },
  { value: "op22", label: "Meghalaya" },
  { value: "op23", label: "Mizoram" },
  { value: "op24", label: "Nagaland" },
  { value: "op25", label: "Odisha" },
  { value: "op26", label: "Puducherry" },
  { value: "op27", label: "Punjab" },
  { value: "op28", label: "Rajasthan" },
  { value: "op29", label: "Sikkim" },
  { value: "op30", label: "Tamil Nadu" },
  { value: "op31", label: "Telangana" },
  { value: "op32", label: "Tripura" },
  { value: "op33", label: "Uttarakhand" },
  { value: "op34", label: "Uttar Pradesh" },
  { value: "op35", label: "West Bengal" },
  
];

function SelectLocation() {
  return (
    <Dropdown
      options={options}
      className="react-dropdown select-location"
      value={options[0]}
    />
  );
}

export default SelectLocation;
