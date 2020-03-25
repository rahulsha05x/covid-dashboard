import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
const SearchWrapper = styled.div`
    padding:10px;
    margin-top:2px;
`

const Search = ({findCountry}) => {
    return (
        <SearchWrapper>
            <TextField id="standard-basic" label="Search Country" onKeyUp={e=>findCountry(e)}/>
        </SearchWrapper>
    )
}
export default Search;