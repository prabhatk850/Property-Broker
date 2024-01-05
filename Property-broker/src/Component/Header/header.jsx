import React from 'react'
import styled from 'styled-components'
import { FaHouseChimney, FaUserNinja } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";



const Wrapper = styled.div`
width: 96%;
padding: 1% 2% ;
display: flex;
justify-content: space-between; 
background-color: #F5F5F5;
box-shadow: 5px 1px 5px 5px #E0E0E0;
`;
const Logo= styled(FaHouseChimney)`
width: 60px;
height: 60px;
color: red;
`;
const Login = styled(FaUserNinja)`
  width: 30px;
  height: 30px;
  color: red;
  margin-right: 30px;
`;
const Menu = styled(TiThMenu)`
  width: 30px;
  height: 30px;
  color: red;
 
`;

const Name= styled.div`
font-size: 25px;
font-weight: 800;
padding-top: 30px;
color: black;
`;

const Owner= styled.div`
font-size: 15px;
height: 20px;
background-color: red;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px 15px;
color: white;
font-weight: bold;
margin-right: 70px;
&:hover{
  cursor: pointer;
  background-color: #ff4d4f;

}
`;



function Header() {
  return (
    <Wrapper>
      <div style={{display:"flex"}}>
      <Logo />
      <Name>Property Broker</Name>
      </div>
      <div style={{display:"flex",alignItems:"center"}}>
        <Owner>
          Post Property
        </Owner>
        <Login/>
        <Menu/>
      </div>
    </Wrapper>
  )
}

export default Header