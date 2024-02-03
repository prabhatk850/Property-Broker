import React from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'

const Wrapper = styled.div`
display: flex;
margin: 50px 7% 50px;
width: 85%;
`;

const Div = styled.div`
width: 20%;
@media (max-width: 1024px) {
    width: 30%;
}
@media (max-width: 768px) {
    display: none;
}
`;

const InnerContainer = styled.div`
margin-left: 80px;
background-color: aqua;
`;

const PageHeading = styled.div`
font-size: 25px;
font-weight: 200;
color: black;

`;


function Product() {
  return (
    <Wrapper>
      <Div>
      <Sidebar/>
      </Div>
    <InnerContainer>
        <PageHeading>1,234 properties matching your search</PageHeading>
    </InnerContainer>
    </Wrapper>
  )
}

export default Product