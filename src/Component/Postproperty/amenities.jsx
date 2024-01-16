import React,{useState} from 'react'
import Sidebar from './sidebar'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import './ocbc.css'
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
padding: 15px 25px;
border-radius: 30px;
&:hover{
    cursor: pointer;
    background-color:#fa5050 ;
    }
@media(max-width: 768px) {
    font-size: 20px;
}
`;

const SButton1 = styled.div`
font-size: 18px;
font-weight: 300;
display: flex;
margin: 5px;
padding: 8px 10px;
border-radius: 20px;
@media(max-width: 768px) {
    font-size: 18px;
    width: 200px;
}
`;

const Flex = styled.div`
display: flex;
align-items: center;
@media (max-width: 768px) {
    display: block;
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
`;

const Select=styled.select`
height:35px;
font-size:20px;
padding: 0 10px;
color: gray;
border: 1px solid #d9d9d9;
outline: none;
width: 25%;

@media (max-Width:768px){
    width: 50%;
}
`;

const Choice=styled.option`
color: gray;
`;

function Amenities() {

    const [checked, setChecked] = useState(false);
    const [color, setColor] = useState("gray");
    const handleCheck = () => {
        setChecked(!checked);
        }
        const handlecolor=()=>{
            if(color === "gray"){
              setColor("red");
            }else{
              setColor("gray")
            }
          }
    const [checked1, setChecked1] = useState(false);
    const [color1, setColor1] = useState("gray");
    const handleCheck1 = () => {
        setChecked1(!checked1);
        }
        const handlecolor1=()=>{
            if(color1 === "gray"){
              setColor1("red");
            }else{
              setColor1("gray")
            }
          }
    const [checked2, setChecked2] = useState(false);
    const [color2, setColor2] = useState("gray");
    const handleCheck2 = () => {
        setChecked2(!checked2);
        }
        const handlecolor2=()=>{
            if(color2 === "gray"){
              setColor2("red");
            }else{
              setColor2("gray")
            }
          }
    const [checked3, setChecked3] = useState(false);
    const [color3, setColor3] = useState("gray");
    const handleCheck3 = () => {
        setChecked3(!checked3);
        }
        const handlecolor3=()=>{
            if(color3 === "gray"){
              setColor3("red");
            }else{
              setColor3("gray")
            }
          }

    const [checked4, setChecked4] = useState(false);
    const [color4, setColor4] = useState("gray");
    const handleCheck4 = () => {
        setChecked4(!checked4);
        }
        const handlecolor4=()=>{
            if(color4 === "gray"){
              setColor4("red");
            }else{
              setColor4("gray")
            }
          }

    const [checked5, setChecked5] = useState(false);
    const [color5, setColor5] = useState("gray");
    const handleCheck5 = () => {
        setChecked5(!checked5);
        }
        const handlecolor5=()=>{
            if(color5 === "gray"){
              setColor5("red");
            }else{
              setColor5("gray")
            }
          }

    const [checked6, setChecked6] = useState(false);
    const [color6, setColor6] = useState("gray");
    const handleCheck6 = () => {
        setChecked6(!checked6); 
        }
        const handlecolor6=()=>{
            if(color6 === "gray"){
              setColor6("red");
            }else{
              setColor6("gray")
            }
          }


    const [checked7, setChecked7] = useState(false);
    const [color7, setColor7] = useState("gray");
    const handleCheck7 = () => {
        setChecked7(!checked7);
        }
        const handlecolor7=()=>{
            if(color7 === "gray"){
                setColor7("red");
            }else{
                setColor7("gray")
            }
        }

    const [checked8, setChecked8] = useState(false);
    const [color8, setColor8] = useState("gray");
    const handleCheck8 = () => {
        setChecked8(!checked8);
        }
        const handlecolor8=()=>{
            if(color8 === "gray"){
                setColor8("red");
            }else{
                setColor8("gray")
            }
        }

    const [checked9, setChecked9] = useState(false);
    const [color9, setColor9] = useState("gray");
    const handleCheck9 = () => {
        setChecked9(!checked9);
        }
        const handlecolor9=()=>{
            if(color9 === "gray"){
                setColor9("red");
            }else{
                setColor9("gray")
            }
        }

    const [checked10, setChecked10] = useState(false);
    const [color10, setColor10] = useState("gray");
    const handleCheck10 = () => {
        setChecked10(!checked10);
        }
        const handlecolor10=()=>{
            if(color10 === "gray"){
                setColor10("red");
            }
            else{
                setColor10("gray")
            }
        }

    const [checked11, setChecked11] = useState(false);
    const [color11, setColor11] = useState("gray");
    const handleCheck11 = () => {
        setChecked11(!checked11);
        }
        const handlecolor11=()=>{
            if(color11 === "gray"){

                setColor11("red");
            }
            else{
                setColor11("gray")
            }   
        }

    const [checked12, setChecked12] = useState(false);
    const [color12, setColor12] = useState("gray");
    const handleCheck12 = () => {

        setChecked12(!checked12);
        }
        const handlecolor12=()=>{
            if(color12 === "gray"){

                setColor12("red");
            }
            else{
                setColor12("gray")
            }
        }

    const [checked13, setChecked13] = useState(false);
    const [color13, setColor13] = useState("gray");
    const handleCheck13 = () => {
        setChecked13(!checked13);
        }
        const handlecolor13=()=>{
            if(color13 === "gray"){
                setColor13("red");
            }
            else{
                setColor13("gray")
            }
        }

    const [checked14, setChecked14] = useState(false);
    const [color14, setColor14] = useState("gray");
    const handleCheck14 = () => {
        setChecked14(!checked14);
        }
        const handlecolor14=()=>{
            if(color14 === "gray"){
                setColor14("red");
            }
            else{
                setColor14("gray")
            }
        }

    const [checked15, setChecked15] = useState(false);
    const [color15, setColor15] = useState("gray");
    const handleCheck15 = () => {
        setChecked15(!checked15);
        }
        const handlecolor15=()=>{
            if(color15 === "gray"){
                setColor15("red");
            }
            else{
                setColor15("gray")
            }
        }

    const [checked16, setChecked16] = useState(false);
    const [color16, setColor16] = useState("gray");
    const handleCheck16 = () => {
        setChecked16(!checked16);
        }
        const handlecolor16=()=>{
            if(color16 === "gray"){
                setColor16("red");
            }
            else{
                setColor16("gray")
            }
        }

    const [checked17, setChecked17] = useState(false);
    const [color17, setColor17] = useState("gray");
    const handleCheck17 = () => {
        setChecked17(!checked17);
        }
        const handlecolor17=()=>{
            if(color17 === "gray"){
                setColor17("red");
            }
            else{
                setColor17("gray")
            }
        }

    const [checked18, setChecked18] = useState(false);
    const [color18, setColor18] = useState("gray");
    const handleCheck18 = () => {
        setChecked18(!checked18);
        }
        const handlecolor18=()=>{

            if(color18 === "gray"){
                setColor18("red");
            }
            else{
                setColor18("gray")
            }
        }

    const [checked19, setChecked19] = useState(false);
    const [color19, setColor19] = useState("gray");
    const handleCheck19 = () => {
        setChecked19(!checked19);
        }
        const handlecolor19=()=>{
            if(color19 === "gray"){
                setColor19("red");
            }
            else{
                setColor19("gray")
            }
        }

    const [checked20, setChecked20] = useState(false);
    const [color20, setColor20] = useState("gray");
    const handleCheck20 = () => {
        setChecked20(!checked20);
        }
        const handlecolor20=()=>{
            if(color20 === "gray"){
                setColor20("red");
            }
            else{
                setColor20("gray")
            }
        }

    const [checked21, setChecked21] = useState(false);
    const [color21, setColor21] = useState("gray");
    const handleCheck21 = () => {
        setChecked21(!checked21);
        }
        const handlecolor21=()=>{
            if(color21 === "gray"){
                setColor21("red");
            }
            else{
                setColor21("gray")
            }
        }

    const [checked22, setChecked22] = useState(false);
    const [color22, setColor22] = useState("gray");
    const handleCheck22 = () => {
        setChecked22(!checked22);
        }
        const handlecolor22=()=>{
            if(color22 === "gray"){
                setColor22("red");
            }
            else{
                setColor22("gray")
            }
        }

    const [checked23, setChecked23] = useState(false);
    const [color23, setColor23] = useState("gray");
    const handleCheck23 = () => {
        setChecked23(!checked23);
        }
        const handlecolor23=()=>{
            if(color23 === "gray"){
                setColor23("red");
            }
            else{

                setColor23("gray")
            }
        }

    const [checked24, setChecked24] = useState(false);
    const [color24, setColor24] = useState("gray");
    const handleCheck24 = () => {
        setChecked24(!checked24);   
        }
        const handlecolor24=()=>{
            if(color24 === "gray"){
                setColor24("red");
            }
            else{
                setColor24("gray")
            }
        }

    const [checked25, setChecked25] = useState(false);
    const [color25, setColor25] = useState("gray");
    const handleCheck25 = () => {

        setChecked25(!checked25);
        }
        const handlecolor25=()=>{
            if(color25 === "gray"){
                setColor25("red");
            }
            else{
                setColor25("gray")
            }
        }


    const [checked26, setChecked26] = useState(false);
    const [color26, setColor26] = useState("gray");
    const handleCheck26 = () => {

        setChecked26(!checked26);
        }
        const handlecolor26=()=>{
            if(color26 === "gray"){
                setColor26("red");
            }
            else{
                setColor26("gray")
            }
        }

    const [checked27, setChecked27] = useState(false);
    const [color27, setColor27] = useState("gray");
    const handleCheck27 = () => {
        setChecked27(!checked27);
        }
        const handlecolor27=()=>{
            if(color27 === "gray"){
                setColor27("red");      
            }
            else{
                setColor27("gray")
            }
        }

    const [checked28, setChecked28] = useState(false);
    const [color28, setColor28] = useState("gray");
    const handleCheck28 = () => {
        setChecked28(!checked28);
        }
        const handlecolor28=()=>{
            if(color28 === "gray"){
                setColor28("red");
            }
            else{
                setColor28("gray")
            }
        }

    const [checked29, setChecked29] = useState(false);
    const [color29, setColor29] = useState("gray");
    const handleCheck29 = () => {
        setChecked29(!checked29);
        }
        const handlecolor29=()=>{
            if(color29 === "gray"){
                setColor29("red");
            }
            else{
                setColor29("gray")
            }
        }

    
        const [facings,setFacings]=useState("gray");
        const [facings1,setFacings1]=useState("gray");
        const [facings2,setFacings2]=useState("gray");
        const [facings3,setFacings3]=useState("gray");
        const [facings4,setFacings4]=useState("gray");
        const [facings5,setFacings5]=useState("gray");
        const [facings6,setFacings6]=useState("gray");
        const [facings7,setFacings7]=useState("gray");
        
        const handlepropertyface=()=>{
            if(facings === "gray"){
                setFacings("red");
                setFacings1("gray");
                setFacings2("gray");
                setFacings3("gray");
                setFacings4("gray");
                setFacings5("gray");
                setFacings6("gray");
                setFacings7("gray");
            }
        }

        const handlepropertyface1=()=>{
            if(facings1 === "gray"){
                setFacings1("red");
                setFacings("gray");
                setFacings2("gray");
                setFacings3("gray");
                setFacings4("gray");
                setFacings5("gray");
                setFacings6("gray");
                setFacings7("gray");    
            }
        }

        const handlepropertyface2=()=>{
            if(facings2 === "gray"){
                setFacings2("red");
                setFacings1("gray");
                setFacings("gray");
                setFacings3("gray");
                setFacings4("gray");
                setFacings5("gray");
                setFacings6("gray");
                setFacings7("gray");
            }
        }

        const handlepropertyface3=()=>{
            if(facings3 === "gray"){
                setFacings3("red");
                setFacings1("gray");
                setFacings2("gray");
                setFacings("gray");
                setFacings4("gray");
                setFacings5("gray");
                setFacings6("gray");
                setFacings7("gray");

            }
        }

        const handlepropertyface4=()=>{
            if(facings4 === "gray"){
                setFacings4("red");
                setFacings1("gray");
                setFacings2("gray");    
                setFacings3("gray");
                setFacings("gray");
                setFacings5("gray");
                setFacings6("gray");
                setFacings7("gray");
            }
        }

        const handlepropertyface5=()=>{
            if(facings5 === "gray"){
                setFacings5("red");
                setFacings1("gray");
                setFacings2("gray");
                setFacings3("gray");
                setFacings4("gray");
                setFacings("gray");
                setFacings6("gray");
                setFacings7("gray");
            }
        }

        const handlepropertyface6=()=>{
            if(facings6 === "gray"){
                setFacings6("red");
                setFacings1("gray");
                setFacings2("gray");
                setFacings3("gray");
                setFacings4("gray");
                setFacings5("gray");
                setFacings("gray");
                setFacings7("gray");
            }
        }

        const handlepropertyface7=()=>{
            if(facings7 === "gray"){    
                setFacings7("red");
                setFacings1("gray");
                setFacings2("gray");
                setFacings3("gray");
                setFacings4("gray");
                setFacings5("gray");
                setFacings6("gray");
                setFacings("gray");
            }
        }

        const [color30, setColor30] = useState("gray");
        const [color31, setColor31] = useState("gray");
        const [color32, setColor32] = useState("gray");
        const [color33, setColor33] = useState("gray");
        const [color34, setColor34] = useState("gray");

        const [checked30, setChecked30] = useState(false);
        const [checked31, setChecked31] = useState(false);
        const [checked32, setChecked32] = useState(false);
        const [checked33, setChecked33] = useState(false);
        const [checked34, setChecked34] = useState(false);

        const handleCheck30 = () => {
            setChecked30(!checked30);
            }
        const handlecolor30=()=>{
            
            if(color30 === "gray"){
                setColor30("red");
            }else{
                setColor30("gray")
            }
        }

        const handleCheck31 = () => {
            setChecked31(!checked31);
            }


        const handlecolor31=()=>{
            if(color31 === "gray"){
                setColor31("red");
            }else{
                setColor31("gray")
            }
        }


        const handleCheck32 = () => {
            setChecked32(!checked32);
            }
        const handlecolor32=()=>{
            if(color32 === "gray"){
                setColor32("red");
            }else{

                setColor32("gray")
            }
        }

        const handleCheck33 = () => {
            setChecked33(!checked33);
            }

        const handlecolor33=()=>{
            if(color33 === "gray"){
                setColor33("red");
            }else{
                setColor33("gray")
            }
        }


        const handleCheck34 = () => {
            setChecked34(!checked34);
            }

        const handlecolor34=()=>{
            if(color34 === "gray"){
                setColor34("red");
            }else{
                setColor34("gray")
            }
        }



    const navigate = useNavigate();
  return (
    <Wrapper>
    <Div2>
    <Sidebar/>
    </Div2>
    <Content>
    <Back onClick={()=>{navigate("/addproperty/propertyprofile")}}> <FaArrowLeftLong style={{marginRight:"5px", fontSize:"15px"}}/> Back</Back>
    <div className='heading'>Add Amenities/Unique features</div>
    <div className='subheading'> Amenities</div>
    <Flex>
          <div className='od' onClick={handlecolor}>
        <SButton1 className={color}  onClick={handleCheck} >{checked?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Maintenance Staff</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor1}>
        <SButton1 className={color1}  onClick={handleCheck1} >{checked1?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Water Storage</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor4}>
        <SButton1 className={color4}  onClick={handleCheck4} >{checked4?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Piped Gas</div></SButton1>
        </div>
        </Flex>   
        <Flex>  
        <div className='od' onClick={handlecolor2}>  
        <SButton1 className={color2}  onClick={handleCheck2} >{checked2?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Waste Disposal</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor3}>
        <SButton1 className={color3}  onClick={handleCheck3} >{checked3?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Rain water harvesting</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor5}>
        <SButton1 className={color5}  onClick={handleCheck5} >{checked5?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Visitor Parking</div></SButton1>
        </div>
        </Flex>
        <Flex>
        <div className='od' onClick={handlecolor6}>
        <SButton1 className={color6}  onClick={handleCheck6} >{checked6?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Park</div></SButton1>
        </div>
        </Flex>

        <div className='subheading'>Property Features</div>
        <Flex>
          <div className='od' onClick={handlecolor7}>
        <SButton1 className={color7}  onClick={handleCheck7} >{checked7?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>High Ceilling Height</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor8}>
        <SButton1 className={color8}  onClick={handleCheck8} >{checked8?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>False  Seeling Light</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor9}>
        <SButton1 className={color9}  onClick={handleCheck9} >{checked9?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Internet wifi connectivity</div></SButton1>
        </div>
        </Flex>   
        <Flex>  
        <div className='od' onClick={handlecolor10}>  
        <SButton1 className={color10}  onClick={handleCheck10} >{checked10?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Centrally Air Conditioned</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor11}>
        <SButton1 className={color11}  onClick={handleCheck11} >{checked11?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Security/Fire alarm</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor12}>
        <SButton1 className={color12}  onClick={handleCheck12} >{checked12?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Private Garden/ Terrace</div></SButton1>
        </div>
        </Flex>
        <Flex>
        <div className='od' onClick={handlecolor13}>
        <SButton1 className={color13}  onClick={handleCheck13} >{checked13?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Specious Interior</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor14}>
        <SButton1 className={color14}  onClick={handleCheck14} >{checked14?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Recently renovated</div></SButton1>
        </div>
        </Flex>

        <div className='subheading'>Society/Building Feature</div>
        <Flex>
        <div className='od' onClick={handlecolor15}>
        <SButton1 className={color15}  onClick={handleCheck15} >{checked15?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Fitness Center/Gym</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor16}>
        <SButton1 className={color16}  onClick={handleCheck16} >{checked16?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Swimming Pool</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor17}>
        <SButton1 className={color17}  onClick={handleCheck17} >{checked17?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Club House</div></SButton1>
        </div>
        </Flex>
        <Flex>
        <div className='od' onClick={handlecolor18}>
        <SButton1 className={color18}  onClick={handleCheck18} >{checked18?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Lifts</div></SButton1>
        </div>
        </Flex>

        <div className='subheading'>Other Features</div>
        <Flex>
        <div className='od' onClick={handlecolor19}>
        <SButton1 className={color19}  onClick={handleCheck19} >{checked19?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Seperate entry for servant room</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor20}>
        <SButton1 className={color20}  onClick={handleCheck20} >{checked20?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>No open drainage around</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor21}>
        <SButton1 className={color21}  onClick={handleCheck21} >{checked21?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Bank Attached Property</div></SButton1>
        </div>
        </Flex>
        <Flex>
        <div className='od' onClick={handlecolor22}>
        <SButton1 className={color22}  onClick={handleCheck22} >{checked22?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Low density property</div></SButton1>
        </div>
        </Flex>

        <div className='subheading'>Water Source</div>
        <Flex>
        <div className='od' onClick={handlecolor23}>
        <SButton1 className={color23}  onClick={handleCheck23} >{checked23?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Muncipal corporation</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor24}>
        <SButton1 className={color24}  onClick={handleCheck24} >{checked24?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Borewell/Tank</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor25}>
        <SButton1 className={color25}  onClick={handleCheck25} >{checked25?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>24*7 Water</div></SButton1>
        </div>
        </Flex>

        <div className='subheading'>Overlooking</div>
        <Flex>
        <div className='od' onClick={handlecolor26}>
        <SButton1 className={color26}  onClick={handleCheck26} >{checked26?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Garden/Park</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor27}>
        <SButton1 className={color27}  onClick={handleCheck27} >{checked27?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Pool</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor28}>
        <SButton1 className={color28}  onClick={handleCheck28} >{checked28?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Club</div></SButton1>
        </div>
        </Flex>
        <Flex>
        <div className='od' onClick={handlecolor29}>
        <SButton1 className={color29}  onClick={handleCheck29} >{checked29?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Main road</div></SButton1>
        </div>
        </Flex>

        <div className='subheading'>Other Features</div>
        <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>In a gated Society</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Corner Property</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Pet Friendly</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Weelchair Friendly</Supersub>
        </div>

        <div className='subheading'>Property facing</div>
        <Flex>
            <div className='od'>
              <Div1 style={{width:"150px"}} className={facings} onClick={handlepropertyface}>North</Div1>
            </div>
            <div className='od'>
            <Div1 style={{width:"150px"}} className={facings1} onClick={handlepropertyface1}>South</Div1>
            </div>
            <div className='od'>
            <Div1 style={{width:"150px"}} className={facings2} onClick={handlepropertyface2}>East</Div1>
            </div>
        </Flex> 
        <Flex>   
            <div className='od'>
            <Div1 style={{width:"150px"}} className={facings3} onClick={handlepropertyface3}>West</Div1>
            </div>
            <div className='od'>
            <Div1 style={{width:"150px"}} className={facings4} onClick={handlepropertyface4}>North-East</Div1>
            </div>
            <div className='od'>
            <Div1 style={{width:"150px"}} className={facings5} onClick={handlepropertyface5}>South-East</Div1>
            </div>
        </Flex>
        <Flex>    
            <div className='od'>
            <Div1 style={{width:"150px"}} className={facings6} onClick={handlepropertyface6}>North-West</Div1>
            </div>
            <div className='od'>
            <Div1 style={{width:"150px"}} className={facings7} onClick={handlepropertyface7}>South-West</Div1>
            </div>
        </Flex>       

        <div className='subheading'>Flooring type</div>
        <Select>
            <Choice selected disabled>Select</Choice>
            <Choice>Marble</Choice>
            <Choice>Concrete</Choice>
            <Choice>Granite</Choice>
            <Choice>Ceramic</Choice>
        </Select>

        <div className='subheading'>Location Advantage</div>
        <Flex>
        <div className='od' onClick={handlecolor30}>
        <SButton1 className={color30}  onClick={handleCheck30} >{checked30?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Close to Metro</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor31}>
        <SButton1 className={color31}  onClick={handleCheck31} >{checked31?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Close to School</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor32}>
        <SButton1 className={color32}  onClick={handleCheck32} >{checked32?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Close to Hospital</div></SButton1>
        </div>
        </Flex>
        <Flex>
        <div className='od' onClick={handlecolor33}>
        <SButton1 className={color33}  onClick={handleCheck33} >{checked33?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Close to Market</div></SButton1>
        </div>
        <div className='od' onClick={handlecolor34}>
        <SButton1 className={color34}  onClick={handleCheck34} >{checked34?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}></div>Close to Railway Station</SButton1>
        </div>
        </Flex>

<div style={{marginTop:"50px",marginBottom:"40px"}}>
<Button onClick={()=>{navigate("/thankyou")}}>Post Property</Button>
</div>
   
    </Content>
</Wrapper>
  )
}

export default Amenities