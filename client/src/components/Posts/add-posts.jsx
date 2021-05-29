import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, TextField, Typography, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { createPost } from "../../Requests/requests"
import { getAllPosts } from '../../Requests/requests';

function AddPost() {

    const dispatch = useDispatch();

    const styles = useStyles();

    const [title,setTitle] = useState('');
    const [location,setLocation] = useState('');
    const [desc,setDesc] = useState('');
    const [file,setFile] = useState('');

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }


    const handleSubmit = () => {
        const postData = {
            title: title,
            location: location,
            desc: desc,
            fileName: title,
            date: new Date(),
            likes:0,
            dislikes:0
        }
        console.log("Submitted Values: ",postData);
        dispatch(createPost(postData));
        }

    return (
        <div className={styles.container}>
            <Typography variant='h4' style={{alignSelf:'center', marginBottom:20}}>Share your Experience</Typography>
            <form>
            <div className={styles.primaryData}>
            <TextField variant="outlined" label="Title" onChange={(val) => setTitle(val.target.value)} style={{width:'40%'}} />
            <TextField variant="outlined" label="Location" onChange={(val) => setLocation(val.target.value)} style={{width:'40%'}} />
            </div>
            <div className={styles.secondaryData}>
                <TextField variant="outlined" label="Description" onChange={(val) => setDesc(val.target.value)} multiline rows={6} style={{width:'80%'}} />
            </div>
            <div className={styles.fileContainer}>
                <label>Add an Image: <input type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handleFile} /></label>
            </div>
            <div className={styles.buttonContainer}>
            <Button variant="contained" color="primary" style={{width:'80%'}} onClick={handleSubmit} >Submit</Button>
            </div>
            </form>
        </div>
    )
}

const useStyles = makeStyles({
    container : {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 10,
        // border: `2px solid red`,
        width: '100%'
    },
    primaryData : {
        display : 'flex',
        justifyContent: 'space-between',
        // border: `2px solid red`,
        padding: 10,
    },
    secondaryData: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    fileContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20
    }
})

export default AddPost;