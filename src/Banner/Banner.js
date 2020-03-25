import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tile from '../Tile/Tile'

const Banner = ({latest}) => {
    
    return(
        <Grid container  spacing={3} justify='space-evenly'>
            <Grid item xs={3}>
                <Tile  count={latest.confirmed} category='Confirmed'/>
            </Grid>
            <Grid item xs={3}>
                <Tile count={latest.deaths} category='Death'/>
            </Grid>
            <Grid item xs={3}>
                <Tile count={latest.recovered} category='Recovered'/>
            </Grid>
        </Grid>
    )
}
export default Banner;