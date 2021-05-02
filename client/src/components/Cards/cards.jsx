import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import CardComponent from './card.jsx'
import eventsData from './data'

function Cards() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Grid container spacing={2} xs={12} md={12} lg={12} xl={12}>
              {eventsData.map(events => (
                <Paper className = {styles.paper} elevation={8} >
                  <CardComponent key={events.id} eventsList = {events} />
                </Paper>
              ))}
              
            </Grid>
        </div>
    )
} 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 20,
      width : '70%'
    },
    card : {
      width : '100%'
    },
    paper : {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      height: 130,
      width: '100%',
      marginBottom: 20
    }
}));

export default Cards;