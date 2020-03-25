import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tile from '../Tile/Tile'
import styled from 'styled-components';

const BannerWrapper = styled.div`
    padding:30px;
`

const Banner = ({latest}) => {
    
    return(
        <BannerWrapper>

            <Grid container  spacing={3} justify='space-evenly'>
                <Grid item md={3} xs={12}>
                    <Tile  count={latest.confirmed} category='Confirmed'/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Tile count={latest.deaths} category='Death'/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Tile count={latest.recovered} category='Recovered'/>
                </Grid>
            </Grid>
        </BannerWrapper>
    )
}
export default Banner;