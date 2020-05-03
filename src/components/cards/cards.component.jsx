import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./cards.module.css";

import CardItem from "./card-item/card-item.component";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  const lastUpdateFormatted = new Date(lastUpdate).toDateString();

  return (
    <div className={styles.container}>
      <Grid
        container
        spacing={3}
        justify="center"
        style={{ margin: "0", width: "100%" }}
      >
        <CardItem
          title="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdateFormatted}
          description="Number of active cases of COVID-19"
        />
        <CardItem
          title="Recovery"
          value={recovered.value}
          lastUpdate={lastUpdateFormatted}
          description="Number of recoveries from COVID-19"
        />
        <CardItem
          title="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdateFormatted}
          description="Number of deaths caused by COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
