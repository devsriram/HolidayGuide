import React, { useState, useEffect } from 'react';
import HomeNavbar from './components/app-bar'
import SelectState from './components/select-state'
import { makeStyles } from '@material-ui/core';
import Cards from './components/Cards/cards'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPost from './components/Posts/add-posts';
import axios from 'axios';


function App() {
    const styles = useStyles();

    // const [myEventsData, setMyEventsData] = useState([]);

    // const getEventsData = async () => {
    //   console.log('Function has been called');
    //   await axios.get('http://localhost:5000/getPosts') 
    //     .then((response) => {
    //       setMyEventsData(response);
    //       console.log("Request sent");
    //       console.log(myEventsData);
    //     })
    //     .catch((error) => console.log("Cannot fetch data",error));
    // }

    // useEffect( () => {
    //   getEventsData();
    // },[]);

    return (
      <React.Fragment>
        <Router>
            <HomeNavbar />
            <Switch>
                <div className = {styles.mainContainer}>
                    <Route exact path="/">
                        {/* <SelectState /> */}
                        <Cards />
                    </Route>
                    <Route path="/addPost">
                        <AddPost />
                    </Route>
                </div>
            </Switch>
        </Router>
      </React.Fragment>
    );
}

const useStyles = makeStyles({
    mainContainer : {
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        paddingTop : 20
    }
})
  

export default App;