import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 50px 70px 0 40px;
background-color: #d9d9d9;
border-radius: 10px;
`;

const Div = styled.div`
padding-bottom:50px;

`;

const Text = styled.div`
font-size: 20px;
font-weight: 300;
padding-bottom: 5px;
`;

const Subtext = styled.div`
font-size: 12px;
color: gray;
font-weight: 600;
`;

const  steps=[{step:"Basic Details" ,stepno:"1"},
{step:"Property Location" ,stepno:"2"},
{step:"Property Profile", stepno:"3"},
{step:"Photo" ,  stepno:"4"},
{step:"Pricing & Others", stepno:"5"},
];

function Sidebar() {
  return (
    <Wrapper>
        {steps.map((e, key) => (
       <Div key={key}>
        <Text>{e.step}</Text>
        <Subtext>Step {e.stepno}</Subtext>
       </Div>))}
    </Wrapper>
  )
}

export default Sidebar