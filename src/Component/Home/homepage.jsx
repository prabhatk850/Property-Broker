import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Slider from "@mui/material/Slider";



import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;

`;

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px 0 0 0;
`;

const Head = styled.div`
padding: 10px 5%;
font-size: 30px;
font-weight: 800;
border: 1px solid red;
color: red;
`;

const Div2 = styled.div`
display: flex;
justify-content: space-around;
margin: 20px 20px;
`;
const Div1 = styled.div`
display: flex;
margin: 30px 0;
justify-content: space-around;
`;

const Main = styled.div`
border: 1px solid black;
margin: 0 25% ;
border-radius: 10px;
`;
 
const Select=styled.select`
height:40px;

font-size:18px;
padding: 0 10px;
color: gray;
`;
const Select1=styled.select`
height:40px;
font-size:18px;
padding: 0 20px;
color: gray;

`;

const Choice=styled.option`
color: gray;
`;

const Input=styled.input`
width: 90%;
height: 44px;
font-size: 18px;
color: gray;
padding: 0 10px;

`;

const Button=styled.input`
height: 20px;
width: 20px;
  border: 4px;
  border-color: gray;
  border-radius: 4px;
  font-size: 17px;
  padding: 0 2px 4px 2px;
  margin-right: 8px;
  &:hover{cursor: pointer;
  }
  `;

const Flex=styled.div`
display: flex;
color: gray;
margin: 10px 0;
`;

const Text=styled.div`
font-size: 15px;
font-weight: 400;
color: black;
margin-bottom: 5px;
`;

const Search=styled.div`
background-color: red;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
font-size: 20px;
height: 50px;
width: 150px;

`;

 
function Homepage() {
  
  const [value, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <Wrapper>
        <Header/>
        <div style={{height:"700px"}}>
        <Div>
           <Head style={{borderTopLeftRadius:"10px"}}>Buy</Head>
           <Head style={{borderTopRightRadius:"10px"}}>Rent</Head>
        </Div>
        <Main>
          <Div1>
          <div>
            <Text>Location</Text>
          <Select>
            <Choice disabled selected hidden>Location</Choice>
            <Choice>Delhi</Choice>
            <Choice>Ghaziabad</Choice>
            <Choice>Gurgaon</Choice>
            <Choice>Noida</Choice>
          </Select>
          </div>
          <div >
          <Text>Locality</Text>
          <Input type='text' placeholder='Search Localities'></Input>
          </div>
         </Div1>
         <Div2>
         <div>
          <Text>Property Type</Text>
          <Flex> <Button type='checkbox'></Button> Flat/Appartment</Flex>
          <Flex> <Button type='checkbox'></Button> Independent Floor</Flex>
          <Flex> <Button type='checkbox'></Button> Independent House</Flex>
          <Flex> <Button type='checkbox'></Button> Farm House</Flex>
          <Flex> <Button type='checkbox'></Button> Other</Flex>
         </div>
        <div>
          <Text>Property Status</Text>
         <Select1>
            <Choice disabled selected hidden>Property Type</Choice>
            <Choice>Ready to move</Choice>
            <Choice>Under Construction</Choice>
          </Select1>
          <div style={{marginTop:"30px"}}>
            <Text>Budget</Text>
            <Slider value={value} onChange={handleChange} valueLabelDisplay='' min={0} max={100} />
            <div style={{color:"gray"}}>Range is {value[0]} to {value[1]} Lacs</div>
            </div>  
          </div>
         </Div2>
         <Div2 style={{marginTop:"50px"}}>
         <Search>Search</Search>
         </Div2>
        </Main>
        </div>
        <Footer/>
    </Wrapper>
  )
}

export default Homepage