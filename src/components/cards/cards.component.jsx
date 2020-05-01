import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';


import styles from './cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {

    if(!confirmed){
        return "Loading...";
    }

    const lastUpdateFormatted = new Date(lastUpdate).toDateString();

    return (
        <div className="styles.container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={confirmed.value} duration={1.75} separator=" "/>
                        </Typography>
                        <Typography color="textSecondary">{lastUpdateFormatted}</Typography>
                        <Typography variant="body2" gutterBottom>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovery)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovery</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={recovered.value} duration={1.75} separator=" "/>
                        </Typography>
                        <Typography color="textSecondary">{lastUpdateFormatted}</Typography>
                        <Typography variant="body2" gutterBottom>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deadths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={deaths.value} duration={1.75} separator=" "/>
                        </Typography>
                        <Typography color="textSecondary">{lastUpdateFormatted}</Typography>
                        <Typography variant="body2" gutterBottom>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;