import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid'; 
import Main from './Main/Main';
import './App.css';

function App() {
  return (
    <Grid container className='App'>
      <Grid item xs={12}>
        <Main />
      </Grid>
    </Grid>
  );
}

export default App;
