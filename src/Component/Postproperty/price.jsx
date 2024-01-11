import React from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Wrapper = styled.div`
margin: 50px 10% 120px;
display: flex;
`;

const Content = styled.div`
width: 100%;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
margin-left: 15px;
border-radius: 10px;
padding: 0 50px 0 50px;
`;

const Back = styled.span`
width: 70px;
font-size: 20px;
font-weight: 200;
color: gray;
margin-top: 20px;
padding-bottom: 10px;
display: flex;
align-items: center;
&:hover{
  cursor: pointer;
  color: black;
}
`;

const Div2 = styled.div`
@media (max-width: 768px) {
    display: none;
}
`;

function Price() {

  const navigate = useNavigate();
  return (
    <Wrapper>
        <Div2>
        <Sidebar/>
        </Div2>
        <Content>
        <Back onClick={()=>{navigate("/photos")}}> <FaArrowLeftLong style={{marginRight:"5px", fontSize:"15px"}}/> Back</Back>
        </Content>
    </Wrapper>
  )
}

export default Price