import React from 'react';
import { Button, AppBar, Toolbar, IconButton, MenuIcon, Typography, makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const HomeNavbar = () => {

    var classes = useStyles();
    return ( 
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Holiday Guide
                </Typography>
                <Link style={{marginRight:50, color:'white'}} to="/addPost">Add an Event</Link>
                <Link style={{marginRight:20, color:'white'}}>Show Recent</Link>
            </Toolbar>
        </AppBar>
    );
    
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
  }));
 
export default HomeNavbar;