import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, AppBar, Toolbar, IconButton, TextField, Typography, makeStyles } from '@material-ui/core';
import axios from 'axios';

function AddPost() {

    const styles = useStyles();

    const [title,setTitle] = useState('');
    const [location,setLocation] = useState('');
    const [desc,setDesc] = useState('');
    const [file,setFile] = useState('');

    const handleSubmit = () => {
        const postData = {
            title: title,
            location: location,
            desc: desc,
            file: file,
            date: new Date(),
            likes:0,
            dislikes:0
        }
        axios.post('http://localhost:5000/addPost',postData)
            .then((res) => { console.log("Data sent",res) })
            .catch((error) => {
                console.log("Cannot send data to Database ",error);
            })

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
                <label>Add an Image: <input type="file" name="image" onChange={(val) => setFile(val.target.value)} /></label>
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