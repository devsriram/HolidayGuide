import React from 'react';
import { NativeSelect, FormControl, makeStyles } from '@material-ui/core';
// import styles from './select-state.css';

const countries = [
        {
                id:1,
                name: 'India'
        },
        {
                id:2,
                name: 'Massachusetts'
        },
        {
                id:3,
                name: 'England'
        },
        {
                id:4,
                name: 'Australia'
        },
]


const SelectState = () => {
    const classes = useStyles();
    return ( 
        <FormControl className={classes.formControl}>
        <NativeSelect defaultValue="">
                <option value="">Select your preferred state</option>
                {countries.map((data) => <option key={data.id} value={data.name}>{data.name}</option>)}
        </NativeSelect>
        </FormControl>
        );
}

const useStyles =  makeStyles(({
        formControl : {
                width: '70%',
                marginBottom: 30
        }
}));
 
export default SelectState;