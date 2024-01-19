import React,{useEffect} from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";



const Wrapper = styled.div`
margin: 50px 10% 120px;
display: flex;
padding-bottom: 40px;

@media (max-width: 768px) {
    margin: 50px 0 50px;    
}
`;

const Content = styled.div`
width: 100%;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
border-radius: 10px;
margin-left: 10px;
margin-right: 10px;
padding: 0 0px 0 50px;
@media (max-width: 768px) {
  margin:0 5%;
}
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


const Div1 = styled.span`
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
padding: 8px 14px;
border: 1px solid #d9d9d9;
border-radius: 20px;
margin-bottom: 10px;

@media (max-width: 768px) {
  width: 180px;
}
`;

const Flex = styled.div`
display: flex;
align-items: center;
@media (max-width: 768px) {
    display: block;
}
`;



const Input = styled.input`
width: 40%;
height: 35px;
font-size: 20px;
font-weight: 200;
margin-bottom: 20px;
margin-right: 10px;
border: 1px solid #d9d9d9;
padding: 0 10px;
@media (max-width: 768px) {
    width: 80%;
}
`;

const Button1=styled.input`
 height: 20px;
width: 20px;
background: red;
  border-color: gray;
  border-radius: 4px;
  font-size: 17px;
  padding: 0 2px 4px 2px;
  margin-right: 8px;
  &:hover{cursor: pointer;
  }
`;

const Supersub = styled.div`
font-size: 15px;
font-weight: 200;
min-width: 50px;
color:black;
padding-bottom: 10px;
margin-top: 15px;
@media (max-width: 768px) {
    
}
`;


const Button = styled.span`
font-size: 25px;
font-weight: 500;
color: white;

background-color: red;
padding: 10px 20px;
border-radius: 30px;
&:hover{
    cursor: pointer;
    background-color:#fa5050 ;
    }
@media(max-width: 768px) {
    font-size: 20px;
}

`;

function Price() {

  const [age, setAge] = React.useState('gray');
  const [age1, setAge1] = React.useState('gray');
  const [age2, setAge2] = React.useState('gray');
  const [age3, setAge3] = React.useState('gray');

  const handleage = () => {
    setAge('red');
    setAge1('gray');
    setAge2('gray');
    setAge3('gray');
  }

  const handleage1 = () => {
    setAge('gray');
    setAge1('red');
    setAge2('gray');
    setAge3('gray');
  }

  const handleage2 = () => {
    setAge('gray');
    setAge1('gray');
    setAge2('red');
    setAge3('gray');
  }

  const handleage3 = () => {
    setAge('gray');
    setAge1('gray');
    setAge2('gray');
    setAge3('red');
  }



  const navigate = useNavigate();

  const onTop = () => {
    window.scrollTo(0, 0);
}
useEffect(() => {
    onTop()
}, [navigate]);

  return (
    <Wrapper>
        <Div2>
        <Sidebar/>
        </Div2>
        <Content>
        <Back onClick={()=>{navigate("/addproperty/photos")}}> <FaArrowLeftLong style={{marginRight:"5px", fontSize:"15px"}}/> Back</Back>
        <div className='heading'>Add Pricing and Details</div>
        <div className='subheading'>Ownership?</div>
          <Flex>
            <Div1 className={age} onClick={handleage}>Freehold</Div1>
            <Div1 className={age1} onClick={handleage1}>Leasehold</Div1>
            <Div1 className={age2} onClick={handleage2}>Co-operative Society</Div1>
            <Div1 className={age3} onClick={handleage3}>Power of attorney</Div1>
          </Flex>

          <div className='subheading'>Price Details</div>
          
          <Input type="text" placeholder="₹ Expected price"/>
          <Input type="text" placeholder="₹ Price per Sq.ft"/>

          <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>All inclusive price</Supersub>
        </div>
          <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Tax & Govt. charges excluded</Supersub>
        </div>
          <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Price Negotialble</Supersub>
        </div>

        <div className='subheading'> What makes your peoperty unique</div>
        <div className='subheading' style={{fontSize:"13px",margin:"0"}}>Add discription</div>
        <textarea style={{width:"80%",height:"100px",border:"1px solid #d9d9d9",padding:"10px 10px",fontSize:"15px",borderRadius:"5px"}} placeholder="Share some details about your property like spacious rooms, well maintained facilities"></textarea> 
        <div style={{marginTop:"50px",marginBottom:"40px"}}>
        <Button onClick={()=>{navigate("/addproperty/amenities")}}>Continue</Button>
        </div> 
        </Content>
    </Wrapper>
  )
}

export default Price