import React from 'react';
import "../css/firebase-ui-auth.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from '@reach/router';
import AuthPage from './authPage';
import MainApp from './MainApp.jsx';
// import firebase from 'firebase/app';

function App() {
  const [authenticated] = React.useState(true);
  return (
    <>
      <CssBaseline />
      <Router>
        {
          authenticated ?
            <MainApp path='/home' /> :
            <AuthPage path='/' />
        }
      </Router>
    </>
  );
}

export default App;



























/*import React, { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CssBaseline from '@material-ui/core/CssBaseline';

import { Router } from "@reach/router";


const useStyles = makeStyles(theme => ({

}))



export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <h1>HEllO</h1>
      {/* <Router>
      </Router> *e/}
    </div>
  )
}*/