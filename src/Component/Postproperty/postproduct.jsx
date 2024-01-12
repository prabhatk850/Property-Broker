import React,{useState} from 'react'
import Sidebar from './sidebar'
import styled from 'styled-components'
import './ocbc.css'
import { useNavigate } from 'react-router-dom';





const Wrapper = styled.div`
margin: 50px 10% 50px;
display: flex;
@media (max-width: 768px) {
    margin: 50px 0 50px;
    height: 650px;
    width: 100%;
}
`;

const Content = styled.div`
width: 100%;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
border-radius: 10px;
margin-left: 10px;
margin-right: 10px;
padding: 0 50px 0 50px;
@media (max-width: 768px) {
  margin:0 5%;
}
`;


const Heading = styled.div`
font-size: 30px;
font-weight: 200;
color: red;
@media(max-width: 768px) {
    font-size: 20px;
}
`;

const SubHeading = styled.div`
font-size: 20px;
font-weight: 200;
color: gray;
padding-bottom: 10px;
@media(max-width: 768px) {
    font-size: 17px;
}
`;

const Div = styled.div`
margin-right: 30px;
padding: 5px 20px;
border: 1px solid #d9d9d9;
border-radius: 15px;
`;
const Div1 = styled.span`
margin-right: 10px;
display: flex;
align-items: center;
padding: 10px 20px;
border: 1px solid #d9d9d9;
border-radius: 20px;
margin-bottom: 10px;
`;

const Button = styled.span`
font-size: 25px;
font-weight: 500;
color: white;
margin-top: 70px;
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

const Div2 = styled.div`
@media (max-width: 768px) {
    display: none;
}
`;

const Flex = styled.div`
display: flex;

@media (max-width: 768px) {
    display: block;
}
`;


function Postproduct() {

    const navigate=useNavigate();
    const [style,setStyle]=useState("gray");
    const [style1,setStyle1]=useState("gray");
    
    const handlechange=()=>{
       if(style === "gray"){ 
        setStyle("red");
        setStyle1("gray");
        }
    }
    const handlechange1=()=>{
       if(style1 === "gray"){
        setStyle1("red");
        setStyle("gray");
       } 
    }

    const [type,setType]=useState("gray");
    const [type1,setType1]=useState("gray");
    const [type2,setType2]=useState("gray");
    const [type3,setType3]=useState("gray");
    const [type4,setType4]=useState("gray");

    const handleclick=()=>{
         if(type === "gray"){ 
          setType("red");
          setType1("gray");
          setType2("gray");
          setType3("gray");
          setType4("gray");
          }
     }
        const handleclick1=()=>{
            if(type1 === "gray"){ 
            setType1("red");
            setType("gray");
            setType2("gray");
            setType3("gray");
            setType4("gray");
            }
        }
        const handleclick2=()=>{
            if(type2 === "gray"){ 
            setType2("red");
            setType1("gray");
            setType("gray");
            setType3("gray");
            setType4("gray");
            }
        }
        const handleclick3=()=>{
            if(type3 === "gray"){ 
            setType3("red");
            setType1("gray");
            setType2("gray");
            setType("gray");
            setType4("gray");
            }
        }
        const handleclick4=()=>{
            if(type4 === "gray"){ 
            setType4("red");
            setType1("gray");
            setType2("gray");
            setType3("gray");
            setType("gray");
            }
        }
       
   

    const name = "Prabhat Kumar Verma";
  return (
    <Wrapper>
        <Div2>
        <Sidebar/>
        </Div2>
        <Content>
            <div style={{margin:"40px 0"}}>
            <Heading>Welcome Back {name},</Heading>
            <Heading>Fill out basic details</Heading>
            </div>
            <div style={{margin:"40px 0"}}>
            <SubHeading>I{"'"}m Looking to</SubHeading>
            <div style={{display:"flex"}}>
            <Div className={style} onClick={handlechange}>Sell</Div>
            <Div className={style1} onClick={handlechange1} >Rent</Div>
            </div>
            </div>
            
            <div style={{margin:"40px 0"}}>
            <SubHeading>What kind of property do you have?</SubHeading>
            
                <Flex>
            <Div1 className={type} onClick={handleclick}>Flat/Appartment</Div1>
            <Div1 className={type1} onClick={handleclick1} >Independent floor</Div1>
                </Flex>
                <Flex>
            <Div1 className={type2} onClick={handleclick2} >Independent House</Div1>
            <Div1 className={type3} onClick={handleclick3} >Farm House</Div1>
                </Flex>             
                <Flex>
            <Div1 className={type4} onClick={handleclick4} >Other</Div1>
                </Flex>
            </div>
           
            <div style={{margin:"50px 0 0 0"}}>
            <Button onClick={()=>{navigate("/addproperty/location")}}> Continue</Button>
            </div>
        </Content>
    </Wrapper>
     
     
  )
}

export default Postproduct