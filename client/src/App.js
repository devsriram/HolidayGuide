import React from 'react';
import HomeNavbar from './components/app-bar'
import SelectState from './components/select-state'
import { makeStyles } from '@material-ui/core';
import Cards from './components/Cards/cards'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPost from './components/Posts/add-posts';


function App() {
    const styles = useStyles();

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