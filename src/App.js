import React, { useState, useEffect } from "react";

import styles from "./App.module.css";

import { Cards, Chart, CountryPicker, Header } from "./components";
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  useEffect(() => {
    async function getData(selectedCountry) {
      const fetchedData = await fetchData(selectedCountry);
      console.log("App", fetchedData);

      setData(fetchedData);
    }

    getData(selectedCountry);
  }, [selectedCountry]);

  const onSelectChangeHandler = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Cards data={data} />
      <CountryPicker
        pickerChangeHandler={onSelectChangeHandler}
      ></CountryPicker>
      <Chart data={data} country={selectedCountry}></Chart>
    </div>
  );
}

export default App;
