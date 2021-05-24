import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button:{
    backgroundColor: '#536b78',
    color:'#ffffff',
    maxWidth:'18rem',
    minWidth:'18rem',
    maxHeight:'4rem',
    minHeight:'4rem',
   "&:hover":{
        backgroundColor: '#96AFBD'
    },
  },
}));

export default function CButton(props) {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <Button style={{  fontFamily: "Fira Mono, monospace", fontSize:"1.1rem"}} variant="contained" className={classes.button}>{props.ButtonName}</Button>
    </div>
  );
}
