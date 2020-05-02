import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import styles from "./chart.module.css";

import { fetchDailyData } from "../../api";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const getDailyData = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
      console.log("Chart", dailyData);
    };

    getDailyData();
  }, []);

  const { confirmed, recovered, deaths } = data;

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map((daily) => daily.date),
        datasets: [
          {
            data: dailyData.map((daily) => daily.confirmed),
            label: "Infected",
            borderColor: "#3333FF",
            fill: true,
          },
          {
            data: dailyData.map((daily) => daily.deaths),
            label: "Deaths",
            borderColor: "rgba(255, 0, 0, 0.6)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  let barChart = null;

  if (country && confirmed) {
    const barData = {
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          label: "People",
          backgroundColor: [
            "rgba(0, 0, 255, 0.6)",
            "rgba(0, 255, 0, 0.6)",
            "rgba(255, 0, 0, 0.6)",
          ],
          data: [confirmed.value, recovered.value, deaths.value],
        },
      ],
    };

    const barOptions = {
      legend: { display: false },
      title: { display: true, text: `State in ${country}` },
    };

    console.log("Chart:: ", barData);

    barChart = <Bar data={barData} options={barOptions} />;
  }

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
