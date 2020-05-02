import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./card-item.module.css";

const CardItem = ({ title, value, lastUpdate, description }) => {
  let conditionStyle = undefined;

  switch (title.toLowerCase()) {
    case "infected":
      conditionStyle = styles.infected;
      break;
    case "recovery":
      conditionStyle = styles.recovery;
      break;
    case "deaths":
      conditionStyle = styles.deaths;
      break;
    default:
      conditionStyle = null;
  }

  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, conditionStyle)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          <CountUp start={0} end={value} duration={1.75} separator=" " />
        </Typography>
        <Typography color="textSecondary">{lastUpdate}</Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardItem;
