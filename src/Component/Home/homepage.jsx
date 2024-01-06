import React, { useState } from 'react'
import Slider from "@mui/material/Slider";
import styled from 'styled-components'
// import Property from './property'




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
border-bottom: none;
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
border: 1px solid red;
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
padding: 0 30px 0 10px;
color: gray;
`;
const Select2=styled.select`
width: 100%;
height:40px;
font-size:18px;
padding: 0 60px  0 10px ;
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
const Heading=styled.div`
font-size: 18px;
font-weight: 500;
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
&:hover{
  cursor: pointer;
  background-color: #ff4d4f;

}

`;

 
function Homepage(props) {
  
  const [purpose,setPurpose]=useState('Buy');
  const handdleClick=(display)=>{
    setPurpose(display);
  };
  const [value, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const properties = [
  //   { img: props.img, Text: props.Text, Subtext: props.Subtext, Cost: props.Cost },
  //   { img: props.img2, Text: props.Text2, Subtext: props.Subtext2, Cost: props.Cost2 },
  //   { img: props.img3, Text: props.Text3, Subtext: props.Subtext3, Cost: props.Cost3 },
  //   { img: props.img4, Text: props.Text4, Subtext: props.Subtext4, Cost: props.Cost4 },
  //   { img: props.img5, Text: props.Text5, Subtext: props.Subtext5, Cost: props.Cost5 },
  //   { img: props.img6, Text: props.Text6, Subtext: props.Subtext6, Cost: props.Cost6 },
  // ];


  
  return (
    <Wrapper>
        
        <div style={{height:"700px"}}>
        <Div>
           <Head onClick={()=>{handdleClick('Buy')}} style={{borderTopLeftRadius:"10px",borderRight:"none"}}>Buy</Head>
           <Head onClick={()=>{handdleClick('Rent')}} style={{borderTopRightRadius:"10px"}}>Rent</Head>
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
        {(purpose==='Buy')?<div>
        <Text>Property Status</Text>
         <Select1>
            <Choice disabled selected hidden>Property Type</Choice>
            <Choice>Ready to move</Choice>
            <Choice>Under Construction</Choice>
          </Select1>
        </div>:<div>
        <Text>Furnishing</Text>
         <Select2>
            <Choice disabled selected hidden>Furnishing</Choice>
            <Choice>Unfurnished</Choice>
            <Choice>Semi-Furnished</Choice>x
            <Choice>Furnished</Choice>
          </Select2>
          </div>}

          <div style={{marginTop:"30px"}}>
            <Text>Budget</Text>
            <Slider value={value} onChange={handleChange} valueLabelDisplay='' min={0} max={100} />
            <div style={{color:"gray"}}>Range is {value[0]} to {value[1]} Lacs</div>
            </div>  
          </div>
         </Div2>
         <Div2 style={{margin:"50px 0 30px 0"}}>
         <Search>Search</Search>
         </Div2>
        </Main>

        <Heading>Recommended Properties</Heading>
        {/* <Div>
      {properties.map((property, index) => (
        <Property key={index} {...property} />
      ))}
    </Div> */}
        
        </div>
    </Wrapper>
  )
}

export default Homepage