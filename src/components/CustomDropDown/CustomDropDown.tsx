import React from "react";
import { CountryPair } from "../LandingPageContent/LandingPageContent";
import { Combobox } from "evergreen-ui";

import "./CustomDropDown.css";

export interface ICustomDropDownProps {
  values: CountryPair[];
  selected: CountryPair;
  setCountry: (country: CountryPair) => void;
}

function CustomDropDown({
  values,
  selected,
  setCountry,
}: ICustomDropDownProps) {
  return (
    <Combobox
      className="custom_dropdown"
      initialSelectedItem={{ label: selected.name }}
      items={values.map((x) => {
        return { label: x.name };
      })}
      itemToString={(item) => (item ? item.label : "")}
      onChange={(selectedValue) => {
        if (selectedValue != null && selectedValue !== selected.name) {
          var selectedCountry = values.find(
            (x) => x.name === selectedValue.label
          );
          if (selectedCountry != null) setCountry(selectedCountry);
        }
      }}
    />
  );
}

export default CustomDropDown;
