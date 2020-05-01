import React, { useState, useEffect } from "react";

import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from './api';

function App() {
  
  const [data, setData] = useState({});

  useEffect( () => {  
    async function getData(){
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    
    getData();
  },[]);

  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker></CountryPicker>
      <Chart></Chart>
    </div>
  );
}

export default App;
