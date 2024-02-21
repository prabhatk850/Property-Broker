import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Wrapper = styled.div`
margin: 50px 10% 120px;
display: flex;

@media (max-width: 768px) {
    margin: 50px 0 50px;    
    height: 600px;
}
`;

const Content = styled.div`
width: 100%;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
margin-left: 10px;
margin-right: 10px;
border-radius: 10px;
padding: 0 50px 0 50px;
@media (max-width: 768px) {
  margin:0 5%;
}
`;

const Back = styled.span`
width: 80px;
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
@media(max-width: 768px) {
    font-size: 20px;
}
`;

const SubHeading = styled.div`
font-size: 18px;
font-weight: 200;
color: gray;
padding-bottom: 5px;
@media(max-width: 768px) {
    font-size: 17px;
}
`;

const Div = styled.div`

`;

const Button = styled.span`
font-size: 25px;
font-weight: 500;
color: white;
margin-top: 70px;
background-color: red;
padding: 10px 20px;
border-radius: 30px;
@media(max-width: 768px) {
    font-size: 20px;
}
`;

const Input = styled.input`
width: 40%;
height: 35px;
font-size: 20px;
font-weight: 200;
margin-bottom: 20px;
border: 1px solid #d9d9d9;
border-radius: 5px;
padding: 0 10px;
@media (max-width: 768px) {
    width: 80%;
}
`;

const Div2 = styled.div`
@media (max-width: 768px) {
    display: none;
}
`;






function Propertylocation() {

  

  const navigate = useNavigate();

  const location =  useLocation();
  // const {PreviousValue} = location?.state;
  const PreviousValue = location.state.PreviousValue;

  const [locationData,setLocationData] = useState(PreviousValue);
  
  const onTop = () => {
    window.scrollTo(0, 0);
}
useEffect(() => {
    onTop()
    console.log("state",PreviousValue)

}, [navigate]);


  return (

    
    <Wrapper>
        <Div2>
        <Sidebar/>
        </Div2>
        <Content>
        <Back onClick={()=>{navigate("/addproperty")}}><FaArrowLeftLong style={{marginRight:"5px", fontSize:"15px"}}/> Back</Back>
        <Heading>Where is your property located?</Heading>
          <Div>
          <SubHeading>Enter Location</SubHeading>
            <Input type="text" list='locations' onChange={(e)=>{setLocationData({...locationData,"location":e.target.value})}} placeholder="Enter Location"/>
            {console.log("location",locationData)}
            <datalist id="locations">
                <option value="Delhi">Delhi</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Noida">Noida</option>
                <option value="Gurugram">Gurugram</option>
            </datalist>
          </Div>

          <Div>
          <SubHeading>Please Enter Appartment / Society</SubHeading>
          <Input type="text" onChange={(e)=>{setLocationData({...locationData,"appartmentName":e.target.value})}} placeholder="Appartment / Society"/>
          </Div>

          <Div>
          <SubHeading>Enter Locality</SubHeading>
          <Input type="text" onChange={(e)=>{setLocationData({...locationData,"locality":e.target.value})}} placeholder="Locality"/>
          </Div>

          <Div>
          <SubHeading>Enter House no.</SubHeading>
          <Input type="text" onChange={(e)=>{setLocationData({...locationData,"houseNo":e.target.value})}} placeholder="House"/>
          </Div>

          <div style={{margin:"30px 0 0 0"}}>
            <Button onClick={()=>{navigate("/addproperty/propertyprofile",{state:{"PreviousValue":locationData}})}}> Continue</Button>
            </div>
        </Content>
    </Wrapper>
  )
}

export default Propertylocation