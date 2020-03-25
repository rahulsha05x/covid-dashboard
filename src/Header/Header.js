import React from 'react'
import styled from 'styled-components';
const Head = styled.div`
    padding:20px;
    height:100px;
    background-image: linear-gradient(to bottom right, #13EBA2, #056644); 
    color:#FFF;
    margin-bottom:2rem;
`

const Header = () => {
return (
    <Head>

        <h1>Covid-19 tracker</h1>

    </Head>
)
}
export default Header;