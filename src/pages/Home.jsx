import React from 'react'
import Button from '../components/Button'
import styled from 'styled-components'
import SaiBabaPic from '../images/SaiBaba.png'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(1),

  },
}));



export default function Home() {
    const classes = useStyles();

   return (
    <React.Fragment>
    <br/>
      <Container maxWidth="lg">

        <main>

        <Grid container spacing={2} style={{justifyContent: "center"}}>
          <img src={SaiBabaPic} alt="sai" style={{maxWidth:'18rem',minWidth:'18rem',maxHeight:'25rem',minHeight:'25rem',}}/>
        </Grid>

        <Grid container spacing={2} style={{justifyContent: "center"}} >
          <h2>Om Sai Ram </h2>
        </Grid>

        <br/>
        <br/>

          <Grid container spacing={2} style={{justifyContent: "center"}} >
          <Link style={{ textDecoration: 'none' }} to="/NagaSaiLive"><Button ButtonName= 'Naga Sai Live' /></Link>
           <Link style={{ textDecoration: 'none' }} to="/StavanManjiri"><Button ButtonName= 'Sai Stavana Manjari' /> </Link>
            <Button ButtonName= 'Sai Question & Answer' />
            <Button ButtonName= 'Ask Baba' />
            <Button ButtonName= 'Naga Sai Bhajan Mandali - Women' />
          </Grid>

        </main>

      </Container>



    </React.Fragment>
  );
}
