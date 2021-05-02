import React from 'react';
import { Paper, CardContent, Typography, Grid, makeStyles, CardActions, Button, Box, Avatar } from '@material-ui/core';
// import waterfalls from '../../images/k1speed.jpg';
import { AccessAlarms } from '@material-ui/icons'
import ThumbUpSharp from '@material-ui/icons/ThumbUpSharp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';


function CardComponent({eventsList}) {

    const styles = useStyles();

    return (
        <div className={styles.root}>
            <img src= {require( `./images/${eventsList.imageSrc}`).default} alt='k1 speed'  className={styles.image}/>
            <div className={styles.container2}>
                <div className={styles.data1} >
                <Typography variant='h5' gutterBottom className = {styles.heading}>
                    {eventsList.name}
                </Typography>
                </div>
                <div className={styles.data2} >
                <Typography variant="body2" component="p">
                    {eventsList.place}
                </Typography>
                </div>
                <div className={styles.data3}>
                    <AccessAlarms fontSize = 'small' className = {styles.timeIcon} />
                    <Typography variant="body2" component="p" className={styles.timeData}>
                        Posted {eventsList.time} days ago
                    </Typography>
                </div>
            </div>
            <div className={styles.container3}>
                <div className={styles.data5} >
                    <div className={styles.data51}>
                        <ThumbUpAltOutlinedIcon fontSize = 'large' />
                        <Typography variant="body2" component="p" style={{paddingLeft: 8}}>
                            {eventsList.likes}
                        </Typography>
                    </div>
                    <div className={styles.data52}>
                    <ThumbDownAltOutlinedIcon fontSize = 'large' />
                        <Typography variant="body2" component="p" style={{paddingLeft: 8}}>
                            {eventsList.dislikes}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

const useStyles = makeStyles((theme) => ({
    root: {
      width : '100%',
      display: "flex",
    },
    root2: {
        flexGrow: 1,
        width : '100%',
        flexDirection: "row"
      },
    image: {
        width: '20%',
        height: 100
    },
    heading : {
        alignSelf: 'center'
    },
    container2 : {
        width : "60%",
        paddingLeft: 25,
        // border: `2px solid red`,
    },
    data1: {
        height : '40%',
        flex: 1,
        // border: `2px solid red`,
        alignContent: 'center',
    },
    data2: {
        height : '30%',
        flex: 1,
        // border: `2px solid red`,
        display: 'flex',
        justifyContent: 'space-between'
    },
    data3: {
        height : '30%',
        flex: 1,
        // border: `2px solid red`,
        display: 'flex',
    },
    container3: {
        width: '20%',
        // border: `2px solid red`,
    },
    data4: {
        height : '40%',
        width: '100%',
        // border: `2px solid red`,
        alignContent: 'center',
        paddingLeft: 5,
        display: 'flex'
    },
    timeIcon: {
        color: 'green',
        height: 18
    },
    timeData: {
        color: 'green'
    },
    data5: {
        display: 'flex',
        height : '100%',
        width: '100%',
        // border: `2px solid red`,
        paddingTop: 20
    },
    data51: {
        alignItems: 'center',
        justifyContent: 'center',
        // border: `2px solid red`,
        width: '50%',
        paddingLeft: 25
    },
    data52: {
        alignItems: 'center',
        justifyContent: 'center',
        // border: `2px solid red`,
        width: '50%',
        paddingLeft: 25,
    }
}));

export default CardComponent;