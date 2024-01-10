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
margin-bottom: 30px;
display: flex;
align-items: center;
&:hover{
  cursor: pointer;
  color: black;
}
`;

const Heading = styled.div`
font-size: 30px;
font-weight: 200;
color: red;
margin-bottom: 30px;
`;

const SubHeading = styled.div`
font-size: 18px;
font-weight: 200;
color: gray;
padding-bottom: 5px;
`;

const Div = styled.div``;

const Button = styled.span`
font-size: 25px;
font-weight: 500;
color: white;
margin-top: 70px;
background-color: red;
padding: 10px 20px;
border-radius: 30px;
`;

const Input = styled.input`
width: 40%;
height: 35px;
font-size: 20px;
font-weight: 200;
margin-bottom: 20px;
border: 1px solid #d9d9d9;
padding: 0 10px;

`;




function Propertylocation() {

  

  const navigate = useNavigate();

  return (

    
    <Wrapper>
        <Sidebar/>
        <Content>
        <Back onClick={()=>{navigate("/addproperty")}}> <FaArrowLeftLong style={{marginRight:"5px", fontSize:"15px"}}/> Back</Back>
        <Heading>Where is your property located?</Heading>
          <Div>
          <SubHeading>Enter Location</SubHeading>
            <Input type="text" list='locations' placeholder="Enter Location"/>
            <datalist id="locations">
                <option value="Delhi">Delhi</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Noida">Noida</option>
                <option value="Gurugram">Gurugram</option>
            </datalist>
          </Div>

          <Div>
          <SubHeading>Please Enter Appartment / Society</SubHeading>
          <Input type="text" placeholder="Appartment / Society"/>
          </Div>

          <Div>
          <SubHeading>Enter Locality</SubHeading>
          <Input type="text" placeholder="Locality"/>
          </Div>

          <Div>
          <SubHeading>Enter House no.</SubHeading>
          <Input type="text" placeholder="House"/>
          </Div>

          <div style={{margin:"30px 0 0 0"}}>
            <Button onClick={()=>{navigate("/propertyprofile")}}> Continue</Button>
            </div>
        </Content>
    </Wrapper>
  )
}

export default Propertylocation