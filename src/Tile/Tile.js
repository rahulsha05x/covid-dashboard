import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Formatter from '../utils/Formatter';

const TileContent = styled.div`
    padding:30px;
    h2 {
        margin:0;
        color: ${props => props.category === 'Confirmed'?'red':'grey'};
    }

`
const Tile = ({count,category}) => {
    
    return (
        <Paper>
            <TileContent category={category}>
                <h2>{Formatter.format(count)}</h2>
                <b>{category}</b>
            </TileContent>
        </Paper>
    )
}
export default Tile