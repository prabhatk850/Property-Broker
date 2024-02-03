import React, { useState } from 'react'
import Slider from "@mui/material/Slider";
import styled from 'styled-components'
import { Container } from '@mui/material';
import Property from './property';
import { useNavigate } from 'react-router-dom';





const Wrapper = styled.div`
width: 100%;
@media (max-width: 767px) {
display: none;
}
`;

const Wrapper2 = styled.div`
width: 100%;
@media (min-width: 768px) {
  display: none;
}
`;

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0 0 0;

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
margin: 0 24% ;
border-radius: 10px;

@media (max-width: 767px) {
  margin: 0 0 40px 0;
  margin-bottom: 50px;
  padding: 15px;
}
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
margin-right: 10px;
padding: 0 10px 0 20px;

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
const Flex1=styled.div`
display: flex;
justify-content: space-around;
color: gray;
width: 60%;
`;

const Text=styled.div`
font-size: 15px;
font-weight: 400;
color: black;
margin-bottom: 8px;
`;
const Text1=styled.div`
font-size: 15px;
height: 20px;
width: 80px;
font-weight: 400;
display: flex;
padding: 5px 2px;
justify-content: center;
align-items: center;
color: white;
background-color: gray;
margin: 8px;
border-radius: 5px;
`;
const Heading=styled.div`
font-size: 25px;
font-weight: 700;
color: black;
margin-bottom: 5px;
margin-top: 40px;
@media (max-width: 767px) {
  padding:7px ;
}
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

const Range=styled.input`
margin: 0 8px 0 8px ;
width :100%;
height: 20px;
border: 1px solid gray;
border-radius: 5px;
`;

const Grid=styled.div`
margin-top: 30px;
display: grid;
grid-template-columns: repeat(2, 1fr);
@media (max-width: 767px) {
  grid-template-columns: repeat(1, 1fr);
}
`;

 
function Homepage(props) {

  const navigate = useNavigate();
  
  const [purpose,setPurpose]=useState('Buy');
  const handdleClick=(display)=>{
    setPurpose(display);
  };
  const [value, setValue] = useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checked, setChecked] = useState(true);
  const handleCheck = () => {
  setChecked(!checked)
  };

  const data=["1Rk","1BHK","2BHK","3BHK","4BHK","4+BHK"];
  




  
  return (
    <Container>
    <Wrapper>
        
        <div style={{height:"100%",marginBottom:"50px"}}>
        <Div>
           <Head onClick={()=>{handdleClick('Buy')}} style={{borderTopLeftRadius:"10px",borderRight:"none"}}>Buy</Head>
           <Head onClick={()=>{handdleClick('Rent')}} style={{borderTopRightRadius:"10px"}}>Rent</Head>
        </Div>
        <Main>
          <Div1>
          <div >
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
         <div>
          <Text>Property Type</Text>
          <Flex> <Button type='checkbox'></Button> Flat/Appartment</Flex>
          <Flex> <Button type='checkbox'></Button> Independent Floor</Flex>
          <Flex> <Button type='checkbox'></Button> Independent House</Flex>
          <Flex> <Button type='checkbox'></Button> Farm House</Flex>
          <Flex> <Button type='checkbox'></Button> Other</Flex>
         </div>
         
                  
          <Grid>
            {data.map((item,index)=>(
              <Text1 key={index} onClick={handleCheck} >{checked?<div>➕ </div>:<div>✔️</div>} <div style={{padding:"0 0 0 7px"}}>{item}</div></Text1>
            )
            )}
          </Grid>
        
        </div>
        <div>
        {(purpose==='Buy')?<div>
        <Text>Property Status</Text>
         <Select1>
            <Choice disabled selected hidden>Property Type</Choice>
            <Choice>Ready to move</Choice>
            <Choice>Under Construction</Choice>
          </Select1>
        </div>:<div >
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
            <Input style={{marginBottom:"10px"}} type='text' placeholder='Enter Range'></Input>
            <Slider value={value} onChange={handleChange} valueLabelDisplay='' min={0} max={100} />
            <div style={{color:"gray",display:"flex"}}>Range is {value[0]} to {value[1]}  {(purpose==='Buy')?<div> Lacs</div>:<div>K</div>}</div>
            <div style={{marginTop:"15px"}}>
              <Flex1>
                <Text>Max:</Text>
                <Range style={{padding:"0 0 0 10px"}} type='text' placeholder='max'></Range>
                {(purpose==='Buy')?<div>Lacs</div>:<div>K</div>}
              </Flex1>
              <Flex1>
                <Text style={{marginRight:"3px"}}>Min:</Text>
                <Range style={{padding:"0 0 0 10px"}} type='text' placeholder='min'></Range>
                {(purpose==='Buy')?<div>Lacs</div>:<div>K</div>}
              </Flex1>
            </div>
            </div>  
          </div>
         </Div2>
         <Div2 style={{margin:"25px 0 25px 0"}}>
         <Search onClick={()=>{navigate("/product")}}>Search</Search>
         </Div2>
        </Main>
        
        <div style={{margin:"100px 0 0 0"}}>
        <Heading>Recommended Properties</Heading>
      <Div>
        <Property/> 
      </Div>
      </div>
        </div>
    </Wrapper>


{/* Mobile view */}
    <Wrapper2>
      
        <Div>
           <Head onClick={()=>{handdleClick('Buy')}} style={{borderTopLeftRadius:"10px",borderRight:"none"}}>Buy</Head>
           <Head onClick={()=>{handdleClick('Rent')}} style={{borderTopRightRadius:"10px"}}>Rent</Head>
        </Div>
    <Main>
          
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
          <div style={{marginTop:"20px"}}>
          <Text>Locality</Text>
          <Input type='text' placeholder='Search Localities'></Input>
          </div>
         <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>
         <div style={{marginTop:"20px"}}>
          <Text>Property Type</Text>
          <Flex> <Button type='checkbox'></Button> Flat/Appartment</Flex>
          <Flex> <Button type='checkbox'></Button> Independent Floor</Flex>
          <Flex> <Button type='checkbox'></Button> Independent House</Flex>
          <Flex> <Button type='checkbox'></Button> Farm House</Flex>
          <Flex> <Button type='checkbox'></Button> Other</Flex>
         </div>
         
         {(purpose==='Buy')?<div style={{marginTop:"40px"}}>
        <Text>Property Status</Text>
         <Select1>
            <Choice disabled selected hidden>Property Type</Choice>
            <Choice>Ready to move</Choice>
            <Choice>Under Construction</Choice>
          </Select1>
        </div>:<div style={{marginTop:"20px"}}>
        <Text>Furnishing</Text>
         <Select2>
            <Choice disabled selected hidden>Furnishing</Choice>
            <Choice>Unfurnished</Choice>
            <Choice>Semi-Furnished</Choice>x
            <Choice>Furnished</Choice>
          </Select2>
          </div>}
          </div>
         <Grid>
            {data.map((item,index)=>(
              <Text1 key={index} onClick={handleCheck} >{checked?<div>➕ </div>:<div>✔️</div>} <div style={{padding:"0 0 0 7px"}}>{item}</div></Text1>
            )
            )}
          </Grid>
          </div>
          <div style={{marginTop:"30px"}}>
            <Text>Budget</Text>
            <Input style={{marginBottom:"10px"}} type='text' placeholder='Enter Range'></Input>
            <Slider value={value} onChange={handleChange} valueLabelDisplay='' min={0} max={100} />
            <div style={{color:"gray"}}>Range is {value[0]} to {value[1]} Lacs</div>
            <div style={{marginTop:"15px"}}>
              <Flex1><Text>Min:</Text><Range style={{padding:"0 0 0 10px",marginLeft:"10px"}} type='text' placeholder='max'></Range>{(purpose==='Buy')?<div>Lacs</div>:<div>K</div>}</Flex1>
              <Flex1><Text>Max:</Text><Range style={{padding:"0 0 0 10px"}} type='text' placeholder='min'></Range>{(purpose==='Buy')?<div>Lacs</div>:<div>K</div>}</Flex1>
            </div>
            </div>  
         <Div2 style={{margin:"50px 0 30px 0"}}>
         <Search onClick={()=>{navigate("/product")}}>Search</Search>
         </Div2>
        </Main>
        <div style={{margin:"30px 0 0 0"}}>
        <Heading>Recommended Properties</Heading>
      <Div>
        <Property/> 
      </Div>
      </div>
    </Wrapper2>
    </Container>
  )
}

export default Homepage