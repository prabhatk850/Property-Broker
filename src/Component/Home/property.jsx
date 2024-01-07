import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Text1 = styled.div`
color:black;
padding-bottom: 5px;
`;
const Main = styled.div`
`;
const Image = styled.img`
`;
const Wrapper = styled.div``;
const Container = styled.div``;
const Container2 = styled.div``;




function Property({ img, Text, Subtext, Cost }) {
    const navigate = useNavigate();
    return (
      <Main onClick={() => { navigate("/product", { state: { MHeading1: Text, SubHeading: Subtext } }) }}>
        <Image src={img}></Image>
        <Wrapper>
          <Container>
            <Text1>{Text}</Text1>
            <Text1 style={{ color: "gray" }}>{Subtext}</Text1>
          </Container>
          <Container2>
            <Text style={{ fontWeight: "500" }}>{Cost}</Text>
          </Container2>
        </Wrapper>
      </Main>
    );
  }

export default Property