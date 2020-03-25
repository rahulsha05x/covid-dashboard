import React from 'react';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import Search from '../Search/Search';
import TableComponent from '../Table/Table';
const PanelDiv = styled.div`
    padding:30px; 
`
const TableContainer = styled.div`
    height:500px;
    overflow-y:scroll;
`
const Panel = ({data,search,sortByParam,rowClicked}) => {
    
    return (
        <PanelDiv>
            <Search findCountry={search}/>
            <Divider />
            <TableContainer>
                <TableComponent data={data} sortByParam={sortByParam} rowClicked={rowClicked} />
            </TableContainer>
            
        </PanelDiv>
    )
}
export default Panel;