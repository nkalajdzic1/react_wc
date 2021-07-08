import React from "react";
import { CountryPair } from "../LandingPageContent/LandingPageContent";
import { Combobox } from "evergreen-ui";

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
          if (
            selectedCountry != null &&
            selectedCountry.name !== selectedValue.label
          )
            setCountry(selectedCountry);
        }
      }}
    />
  );
}

export default CustomDropDown;
