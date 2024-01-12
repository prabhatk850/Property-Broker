
import styled from 'styled-components'
import Sidebar from './sidebar'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';





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

const Div2 = styled.span`
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
padding: 5px 11px;
border: 1px solid #d9d9d9;
border-radius: 20px;

`;

const Div5 = styled.span`
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
padding: 8px 14px;
border: 1px solid #d9d9d9;
border-radius: 20px;
margin-bottom: 10px;
@media (max-width:768px){
  width: 130px;
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


const Div3 = styled.div`
@media (max-width: 768px) {
    display: none;
}
`;

const Select=styled.select`
height:35px;
font-size:20px;
padding: 0 10px;
color: gray;
border: 1px solid #d9d9d9;
border-bottom:none;
border-top: none;
border-right: none;
outline: none;
`;

const Choice=styled.option`
color: gray;
`;

const Div=styled.div`
display: flex;
height: 35px;
justify-content: space-between;
width: 50%;
margin-bottom: 10px;
border: 1px solid #d9d9d9;
@media (max-width: 768px) {
    width: 60%;
}
@media (max-width: 500px) {
  width: 95%;

}

`;

const BB=styled.div`
color: red;
width: 15px;
display: flex;
justify-content: center;
font-size: 15px;
font-weight: 200;
`;

const BB1=styled.div`
color: red;
display: flex;
justify-content: center;
font-size: 15px;
font-weight: 200;
`;


const Input=styled.input`
width: 40%;
height: 35px;
font-size: 20px;
font-weight: 200;
margin-bottom: 20px;
border: 1px solid #d9d9d9;
padding: 0 10px;
border: none;
outline: none;
@media (max-width: 768px) {
    width: 80%;
}
`;
const Input1=styled.input`
width: 40%;
height: 35px;
font-size: 20px;
font-weight: 200;
margin-bottom: 20px;
border: 1px solid #d9d9d9;
padding: 0 10px;
margin-right: 20px;

@media (max-width: 768px) {
    width: 80%;
}
`;

const Flex = styled.div`
display: flex;
align-items: center;
@media (max-width: 768px) {
    display: block;
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

const SButton1 = styled.div`
font-size: 18px;
font-weight: 300;
display: flex;
width: 140px;
margin: 5px;
padding: 8px 10px;
border-radius: 20px;
@media(max-width: 768px) {
    font-size: 18px;
}
`;

const Select1=styled.select`
height:40px;
font-size:18px;
padding: 0 30px 0 10px;
color: gray;
outline: none;
`;

const Furnish=styled.div`
box-shadow: 0 0 10px 0 rgba(185, 10, 10, 0.1);
border-radius: 10px;
margin: 10px 50px 20px 0;
padding: 10px 10px 10px 10px;

@media (max-width: 920px) {
    margin: 10px 5px 20px 0;
    padding: 20px 10px 20px 10px;
}
@media (max-width: 500px) {
  margin: 10px 5% 20px 5%;
}

`;

const Flex1=styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: block;
  }
  // Add any other CSS properties here to achieve the desired symmetrical look
`;

const Button1=styled.input`
 height: 20px;
width: 20px;
  border-color: gray;
  border-radius: 4px;
  font-size: 17px;
  padding: 0 2px 4px 2px;
  margin-right: 8px;
  &:hover{cursor: pointer;
  }
`;

const Div4=styled.div``;


function Propertyprofile() {
 

const [type,setType]=useState("gray");
const [type1,setType1]=useState("gray");
const [type2,setType2]=useState("gray");
const [type3,setType3]=useState("gray");
const [type4,setType4]=useState("gray");

const [pype,setPype]=useState("gray");
const [pype1,setPype1]=useState("gray");
const [pype2,setPype2]=useState("gray");
const [pype3,setPype3]=useState("gray");
const [pype4,setPype4]=useState("gray");

const [hype,setHype]=useState("gray");
const [hype1,setHype1]=useState("gray");
const [hype2,setHype2]=useState("gray");
const [hype3,setHype3]=useState("gray");

const [style,setStyle]=useState("none");
const [style1,setStyle1]=useState("none");
const [style2,setStyle2]=useState("block");
const [style3,setStyle3]=useState("block");

const [checked,setChecked]=useState(false);
const[checked1,setChecked1]=useState(false);
const[checked2,setChecked2]=useState(false);
const[checked3,setChecked3]=useState(false);

const [color,setColor]=useState("gray");
const [color1,setColor1]=useState("gray");
const [color2,setColor2]=useState("gray");
const [color3,setColor3]=useState("gray");


const [furnish,setFurnish]=useState("gray");
const [semifurnish,setSemifurnish]=useState("gray");
const [unfurnish,setUnfurnish]=useState("gray");

const [value,setValue]=useState(0);
const [value1,setValue1]=useState(0);
const [value2,SetValue2]=useState(0);
const [value3,SetValue3]=useState(0);
const [value4,SetValue4]=useState(0);
const [value5,SetValue5]=useState(0);
const [value6,SetValue6]=useState(0);


const [ready,setReady]=useState("gray");
const [underconstruct,setUnderconstruct]=useState("gray");

const [age,setAge]=useState("gray");
const [age1,setAge1]=useState("gray");
const [age2,setAge2]=useState("gray");
const [age3,setAge3]=useState("gray");

const [propertyage,setPropertyage]=useState("none");
const [propertyage1,setPropertyage1]=useState("none");

const [display,setDisplay]=useState("none");

const handledisplay=()=>{
  if(display==="none"){
    setDisplay("block");
  }
}
const handledisplayn=()=>{
  setDisplay("none");
}


const handlespropertyage=()=>{
  if(propertyage === "none"){
    setPropertyage("block");
    setPropertyage1("none");
  }
}

const handlepropertyage1=()=>{
  if(propertyage1 === "none"){
    setPropertyage1("block");
    setPropertyage("none");
  }
}

const handleage=()=>{
  setAge("red");
  setAge1("gray");
  setAge2("gray");
  setAge3("gray");
}

const handleage1=()=>{
  setAge1("red");
  setAge("gray");
  setAge2("gray");
  setAge3("gray");
}

const handleage2=()=>{
  setAge2("red");
  setAge1("gray");
  setAge("gray");
  setAge3("gray");
}

const handleage3=()=>{
  setAge3("red");
  setAge1("gray");
  setAge2("gray");
  setAge("gray");
}

const handleavailability=()=>{
  setReady("red");
  setUnderconstruct("gray");
}

const handleavailability1=()=>{
  setUnderconstruct("red");
  setReady("gray");
}


const handleinc=()=>{
  setValue(value+1);
}

const handleinc1=()=>{
  setValue1(value1+1);
}
const handleinc2=()=>{
  SetValue2(value2+1);
}
const handleinc3=()=>{
  SetValue3(value3+1);
}
const handleinc4=()=>{
  SetValue4(value4+1);
}
const handleinc5=()=>{
  SetValue5(value5+1);
}
const handleinc6=()=>{
  SetValue6(value6+1);
}




const handledec=()=>{
  if(value>0){
  setValue(value-1);
}
}

const handledec1=()=>{
  if(value1>0){
  setValue1(value1-1);
}
}
const handledec2=()=>{
  if(value2>0){
  SetValue2(value2-1);
}
}
const handledec3=()=>{
  if(value3>0){
  SetValue3(value3-1);
}
}
const handledec4=()=>{
  if(value4>0){
  SetValue4(value4-1);
}
}
const handledec5=()=>{
  if(value5>0){
  SetValue5(value5-1);
}
}
const handledec6=()=>{
  if(value6>0){
  SetValue6(value6-1);
}
}

const handlefurnish=()=>{
  setFurnish("red");
  setSemifurnish("gray");
  setUnfurnish("gray");
}

const handlesemifurnish=()=>{
  setSemifurnish("red");
  setFurnish("gray");
  setUnfurnish("gray");
}

const handleunfurnish=()=>{
  setUnfurnish("red");
  setFurnish("gray");
  setSemifurnish("gray");
}

const handleCheck=()=>{
  setChecked(!checked);

}

const handleCheck1=()=>{
  setChecked1(!checked1);

}

const handleCheck2=()=>{
  setChecked2(!checked2);
  
}

const handleCheck3=()=>{
  setChecked3(!checked3);
 
}

const handlecolor=()=>{
  if(color === "gray"){
    setColor("red");
  }else{
    setColor("gray")
  }
}

const handlecolor1=()=>{
  if(color1 === "gray"){
    setColor1("red");
  }else{
    setColor1("gray")
  }
}

const handlecolor2=()=>{
  if(color2 === "gray"){
    setColor2("red");
  }else{
    setColor2("gray")
  }
}

const handlecolor3=()=>{
  if(color3 === "gray"){
    setColor3("red");
  }else{
    setColor3("gray")
  }
}


const handlestyle=()=>{
    if(style === "none"){ 
      setStyle("block");
      setStyle2("none");
      }
}
const handlestyle1=()=>{
    if(style1 === "none"){ 
      setStyle1("block");
      setStyle3("none");
      }

}


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

    const handlebath=()=>{
      if(pype === "gray"){ 
       setPype("red");
       setPype1("gray");
       setPype2("gray");
       setPype3("gray");
       setPype4("gray");
       }
  }
     const handlebath1=()=>{
         if(pype1 === "gray"){ 
         setPype1("red");
         setPype("gray");
         setPype2("gray");
         setPype3("gray");
         setPype4("gray");
         }
     }
     const handlebath2=()=>{
         if(pype2 === "gray"){ 
         setPype2("red");
         setPype1("gray");
         setPype("gray");
         setPype3("gray");
         setPype4("gray");
         }
     }
     const handlebath3=()=>{
         if(pype3 === "gray"){ 
         setPype3("red");
         setPype1("gray");
         setPype2("gray");
         setPype("gray");
         setPype4("gray");
         }
     }
     const handlebath4=()=>{
         if(pype4 === "gray"){ 
         setPype4("red");
         setPype1("gray"); 
         setPype2("gray");
         setPype3("gray");
         setPype("gray");
         }
     }

     const handlebalcony=()=>{
      if(hype === "gray"){ 
       setHype("red");
       setHype1("gray");
       setHype2("gray");
       setHype3("gray");
       }
  }
     const handlebalcony1=()=>{
         if(hype1 === "gray"){ 
         setHype1("red");
         setHype("gray");
         setHype2("gray");
         setHype3("gray");
         }
     }
     const handlebalcony2=()=>{
         if(hype2 === "gray"){ 
         setHype2("red");
         setHype1("gray");
         setHype("gray");
         setHype3("gray");
         }
     }
     const handlebalcony3=()=>{
         if(hype3 === "gray"){ 
         setHype3("red");
         setHype1("gray");
         setHype2("gray");
         setHype("gray");
         }
     }
     
  

  const navigate = useNavigate();
  return (
    <Wrapper>
       <Div3>
        <Sidebar/>
        </Div3>
        <Content>
        <div className='back' onClick={()=>{navigate("/location")}}> <FaArrowLeftLong style={{marginRight:"5px", fontSize:"15px"}}/> Back</div>
        <div style={{marginBottom:"20px"}} className='heading'>Tell us about your peoperty</div>
        <div className='subheading'>Add Room Details</div>
        <Supersub>No. of bedroom</Supersub>
        <div className='flex'>
            <Div1 className={type} onClick={handleclick}>1</Div1>
            <Div1 className={type1} onClick={handleclick1}>2</Div1>
            <Div1 className={type2} onClick={handleclick2}>3</Div1>
            <Div1 className={type3} onClick={handleclick3}>4</Div1>
            <Div1 className={type4} onClick={handleclick4}>4+</Div1>        
        </div>
        <Supersub>No. of bathroom</Supersub>
        <div className='flex'>
            <Div1 className={pype} onClick={handlebath}>1</Div1>
            <Div1 className={pype1} onClick={handlebath1}>2</Div1>
            <Div1 className={pype2} onClick={handlebath2}>3</Div1>
            <Div1 className={pype3} onClick={handlebath3}>4</Div1>
            <Div1 className={pype4} onClick={handlebath4}>4+</Div1>
        </div>
        <Supersub>No. of balconies</Supersub>
        <div className='flex'>
            <Div1 className={hype} onClick={handlebalcony}>1</Div1>
            <Div1 className={hype1} onClick={handlebalcony1}>2</Div1>
            <Div1 className={hype2} onClick={handlebalcony2}>3</Div1>
            <Div1 className={hype3} onClick={handlebalcony3}>4</Div1>
        </div>

        <div className='subheading'>Add Area Details</div>
       
        <Div>
        <Input placeholder='Carpet Area'></Input>
        <Select>
            <Choice selected>Sq.ft</Choice>
            <Choice>Sq.yard</Choice>
            <Choice>Sq.m</Choice>
            <Choice>Acres</Choice>
            <Choice>Bigha</Choice>
        </Select>
        </Div>

        <div className='flex'>
        <BB1 className={style2} style={{marginRight:"20px"}} onClick={handlestyle}>+ Add Built-up Area</BB1>
        <BB1 className={style3} onClick={handlestyle1}>+ Add Super Built-up Area</BB1>
        </div>

        <div className={style}>
        <Div>
        <Input  placeholder='Built-up Area'></Input>
        <Select>
            <Choice selected>Sq.ft</Choice>
            <Choice>Sq.yard</Choice>
            <Choice>Sq.m</Choice>
            <Choice>Acres</Choice>
            <Choice>Bigha</Choice>
        </Select>
        </Div>
        </div>
        <div className={style1}>
        <Div>
        <Input  placeholder='Super Built-up Area'></Input>
        <Select>
            <Choice selected>Sq.ft</Choice>
            <Choice>Sq.yard</Choice>
            <Choice>Sq.m</Choice>
            <Choice>Acres</Choice>
            <Choice>Bigha</Choice>
        </Select>
        </Div>
        </div>

        <div className='subheading'>Other Rooms</div>
        <Flex>
          <div onClick={handlecolor}>
        <SButton1 className={color}  onClick={handleCheck} >{checked?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Pooja Room</div></SButton1>
        </div>
        <div onClick={handlecolor1}>
        <SButton1 className={color1}  onClick={handleCheck1} >{checked1?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Study Room</div></SButton1>
        </div>
        </Flex>   
        <Flex>  
        <div onClick={handlecolor2}>  
        <SButton1 className={color2}  onClick={handleCheck2} >{checked2?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Store Room</div></SButton1>
        </div>
        <div onClick={handlecolor3}>
        <SButton1 className={color3}  onClick={handleCheck3} >{checked3?<div>✔️ </div>:<div>➕</div>} <div style={{padding:"0 0 0 7px"}}>Servent Room</div></SButton1>
        </div>
        </Flex>
       <div className='subheading'>Furnishing</div>
       <Flex>
           <div onClick={handledisplay}><Div5 className={furnish} onClick={handlefurnish}>Full-Furnished</Div5></div>
           <div onClick={handledisplay}><Div5 className={semifurnish} onClick={handlesemifurnish}>Semi-Furnished</Div5></div>
           <div onClick={handledisplayn}> <Div5 className={unfurnish} onClick={handleunfurnish}>Un-Furnished</Div5></div>
       </Flex>
       
        <Furnish style={{display}}>
          <Flex>
        <div className='flex' >
        <Supersub style={{fontSize:"18px",marginRight:"20px"}}>Light </Supersub>
        <div className='flex'>
        <Div2 onClick={handledec2}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{value2}</BB>
        <Div2 onClick={handleinc2}>+</Div2>
        </div></div>

        <div className='flex'>
        <Supersub style={{fontSize:"18px",marginRight:"20px"}}>Fan</Supersub>
        <div className='flex'>
        <Div2 onClick={handledec3}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{value3}</BB>
        <Div2 onClick={handleinc3}>+</Div2>
        </div></div>
        </Flex>
        <Flex>
        <div className='flex '>
        <Supersub style={{fontSize:"18px",marginRight:"20px"}}>TV</Supersub>
        <div className='flex'>
        <Div2 onClick={handledec4}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{value4}</BB>
        <Div2 onClick={handleinc4}>+</Div2>
        </div></div>
        <div className='flex'>
        <Supersub style={{fontSize:"18px",marginRight:"20px"}}>AC</Supersub>
        <div className='flex'>
        <Div2 onClick={handledec5}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{value5}</BB>
        <Div2 onClick={handleinc5}>+</Div2>
        </div></div>
        </Flex>
        <Flex>
        <div className='flex'>
        <Supersub style={{fontSize:"18px",marginRight:"20px"}}>Geyser</Supersub>
        <div className='flex'>
        <Div2 onClick={handledec6}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{value6}</BB>
        <Div2 onClick={handleinc6}>+</Div2>
        </div></div>
        <div style={{display:"Flex"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Sofa</Supersub>
        </div>
        </Flex>

<Flex1>
        <div style={{marginRight:"11%"}}>
        <div style={{display:"Flex",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",padding:"0 10px 0 0",margin:"0"}}>Washing machine</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"20%" ,marginTop:"15px"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Micro Wave</Supersub>
        </div>
        
        <div style={{display:"Flex",minWidth:"23%" ,margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Fridge</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"23%" ,marginTop:"15px"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Stove</Supersub>
        </div>
        </div>

        <div>
        <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Water Purifier</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"33%" ,marginTop:"15px"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Modular Kitchen</Supersub>
        </div>
        
        <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Chimney </Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"33%" ,marginTop:"15px"}}>
          <Button1 type='checkbox' style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Exhaust Fan</Supersub>
        </div>
        </div>
        </Flex1>   
        </Furnish>
       
        <div className='subheading'>Parking</div>
       <Flex>
        <div style={{marginRight:"40px"}} className='flex'>
        <Supersub style={{fontSize:"15px",marginRight:"20px"}}>Close Parking</Supersub>
        <Div2 onClick={handledec}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{value}</BB>
        <Div2 onClick={handleinc}>+</Div2>
        </div>
        <div className='flex'>
        <Supersub style={{fontSize:"15px",marginRight:"20px"}}>Open Parking</Supersub>
        <Div2 onClick={handledec1}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{value1}</BB>
        <Div2 onClick={handleinc1}>+</Div2>
        </div>
       </Flex>
       
        <div className='subheading'>Floor Details</div>
        <Input1 type='text' placeholder='Total Floors'></Input1>
        <Input1 type='text' placeholder='Property Floor'></Input1>

        <div className='subheading'>Availability status</div>
        <Flex>
            <div onClick={handlespropertyage}>
              <Div1 style={{width:"150px"}} className={ready} onClick={handleavailability}>Ready to move</Div1>
            </div>
            <div onClick={handlepropertyage1}>
            <Div1 style={{width:"150px"}} className={underconstruct} onClick={handleavailability1}>Under Construction</Div1>
            </div>
        </Flex>
        <Div4 className={propertyage}>
          <div className='subheading'>Age of property</div>
          <Flex>
            <Div1 className={age} onClick={handleage}>0-1 Years</Div1>
            <Div1 className={age1} onClick={handleage1}>1-5 Years</Div1>
            <Div1 className={age2} onClick={handleage2}>5-10 Years</Div1>
            <Div1 className={age3} onClick={handleage3}>10+ Years</Div1>
            </Flex>
        </Div4>
        <Div4 className={propertyage1}>
          <div className='subheading'>Possesion By</div>
          <Select1>
            <Choice disabled selected hidden>Possesion By</Choice>
            <Choice>Within 3 Months</Choice>
            <Choice>Within 6 Months</Choice>
            <Choice>By 2025</Choice>
            <Choice>By 2026</Choice>
            <Choice>By 2027</Choice>
            <Choice>By 2028</Choice>
            <Choice>By 2029</Choice>
            <Choice>By 2030</Choice>
          </Select1>
        
        </Div4>
        <div style={{margin:"70px 0 40px"}}>
        <Button onClick={()=>{navigate("/photos")}}>Continue</Button>
        </div>
        </Content>
    </Wrapper>
  )
}

export default Propertyprofile