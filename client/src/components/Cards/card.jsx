import React, { useState } from 'react';
import { Paper, CardContent, Typography, Grid, makeStyles, CardActions, Button, Box, Avatar } from '@material-ui/core';
import k1speed from './images/k1speed.jpg';
import { AccessAlarms } from '@material-ui/icons'
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { useDispatch } from "react-redux";
import moment from 'moment';
import { likePost, dislikePost } from "../../Requests/requests";


function CardComponent({posts}) {
    const dispatch = useDispatch();
    const styles = useStyles();

    const [likeToggle, setLikeToggle] = useState(false);
    const [dislikeToggle, setDislikeToggle] = useState(false);

    const postLiked = (id,likes) => {
        dispatch(likePost(id,likes))
        setLikeToggle(!likeToggle);
    }

    const postDisliked = (id,dislikes) => {
        dispatch(dislikePost(id,dislikes));
        setDislikeToggle(!dislikeToggle);
    }

    return (
        <div className={styles.root}>
            {/* <img src= {require( `./images/${eventsList.imageSrc}`).default} alt='k1 speed'  className={styles.image}/> */}
            <img src= {k1speed} alt='k1 speed'  className={styles.image}/>
            <div className={styles.container2}>
                <div className={styles.data1} >
                <Typography variant='h5' gutterBottom className = {styles.heading}>
                    {posts.title}
                </Typography>
                </div>
                <div className={styles.data2} >
                <Typography variant="body2" component="p">
                    {posts.location}
                </Typography>
                </div>
                <div className={styles.data3}>
                    <AccessAlarms fontSize = 'small' className = {styles.timeIcon} />
                    <Typography variant="body2" component="p" className={styles.timeData}>
                        {`Posted ${moment(posts.date).fromNow()}`}
                    </Typography>
                </div>
            </div>
            <div className={styles.container3}>
                <div className={styles.data5} >
                    <div className={styles.data51}>
                        {(likeToggle) ? (<Button onClick={() => setLikeToggle(!likeToggle)}><ThumbUp color='primary' fontSize = 'large' /></Button>)
                            : (<Button onClick={() => postLiked(posts._id,posts.likes)} ><ThumbUpAltOutlinedIcon fontSize = 'large' /></Button>)}
                        <Typography variant="body2" component="p">
                            {posts.likes}
                        </Typography>
                    </div>
                    <div className={styles.data52}>
                    {(dislikeToggle) ? (<Button onClick={() => setDislikeToggle(!dislikeToggle)}><ThumbDown color='secondary' fontSize = 'large' /></Button>)
                            : (<Button onClick={() => postDisliked(posts._id,posts.dislikes)} ><ThumbDownAltOutlinedIcon fontSize = 'large' /></Button>)}
                        <Typography variant="body2" component="p">
                            {posts.dislikes}
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: `2px solid red`,
        width: '50%',
        flexDirection: 'column',
    },
    data52: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: `2px solid red`,
        width: '50%',
        flexDirection: 'column',
    },
    likeButton : {
        // alignItems: 'center',
        // justifyContent: 'center',
    },
}));

export default CardComponent;