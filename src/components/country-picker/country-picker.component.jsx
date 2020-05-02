import React, { useEffect, useState } from "react";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";

import styles from "./country-picker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ pickerChangeHandler }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchedCountries = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };

    fetchedCountries();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => pickerChangeHandler(e)}>
        <option value="">Global</option>
        {countries.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
