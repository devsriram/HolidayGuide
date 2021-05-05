import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import CardComponent from './card.jsx'
import eventsData from './data'
import { initialPostScheme } from '../Models/data-model';
import axios from 'axios';

function Cards() {

  useEffect(() => {
    getEventsData();
  },[])

  const styles = useStyles();
  const [myEventsData, setMyEventsData] = useState([]);

  const getEventsData = async () => {
    console.log('Function has been called');
    const response = await axios.get('http://localhost:5000/getPosts');
    console.log("Server data: ",response.data);
    setTimeout(async () => {
      await setMyEventsData(response.data);
    }, 3000);    
    setTimeout(async () => {
      await console.log("my Data",myEventsData);
    }, 3000);    
      // .then((response) => {
      //   setMyEventsData(response);
      //   console.log("Request sent");
      //   console.log("Server data: ",response.data);
      //   setMyEventsData(response.data);
      //   console.log("my Data",myEventsData);
      // })
      // .catch((error) => console.log("Cannot fetch data",error));
  }

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