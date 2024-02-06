import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import { useNavigate,useLocation } from 'react-router-dom';
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
padding: 5px 15px;
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
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
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
border-radius: 5px;
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
align-items: center;
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
height: 30px;
font-size: 20px;
font-weight: 200;
margin-bottom: 20px;
border: 1px solid #d9d9d9;
border-radius: 5px;
padding: 0 10px;
border: none;
outline: none;
@media (max-width: 768px) {
    width: 80%;
}
`;
const Input1=styled.input`
width: 20%;
height: 35px;
font-size: 20px;
font-weight: 200;
margin-bottom: 20px;
border: 1px solid #d9d9d9;
border-radius: 5px;
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
border: 1px solid #d9d9d9;
border-radius: 5px;
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
background: red;
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

const navigate = useNavigate();
const location = useLocation();
// const {PreviousValue}=location?.state; 
const PreviousValue = location?.state?.PreviousValue;

const [profileData,setProfileData]=useState(PreviousValue)

const updateOtherRoom = (value) => {
  if (profileData.otherRoom === undefined) {
    setProfileData({ ...profileData, "otherRoom": [value] });
  } else {
    setProfileData({ ...profileData, "otherRoom": [...profileData.otherRoom, value] });
    console.log("firsttt", profileData.otherRoom);
  }
  console.log("firstu", value);
};


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

const [closeParking,setCloseParking]=useState(0);
const [openParking,setOpenParking]=useState(0);
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

const handleage=(e)=>{
  setAge("red");
  setAge1("gray");
  setAge2("gray");
  setAge3("gray");
  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"ageOfProperty":value})
}

const handleage1=(e)=>{
  setAge1("red");
  setAge("gray");
  setAge2("gray");
  setAge3("gray");
  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"ageOfProperty":value})
}

const handleage2=(e)=>{
  setAge2("red");
  setAge1("gray");
  setAge("gray");
  setAge3("gray");
  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"ageOfProperty":value})
}

const handleage3=(e)=>{
  setAge3("red");
  setAge1("gray");
  setAge2("gray");
  setAge("gray");
  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"ageOfProperty":value})
}

const handleavailability=(e)=>{
  setReady("red");
  setUnderconstruct("gray");
  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"propertyAvailable":value})
}

const handleavailability1=(e)=>{
  setUnderconstruct("red");
  setReady("gray");
  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"propertyAvailable":value})
}


const handleinc=()=>{
  setCloseParking(closeParking+1);
  
  setProfileData(prevState => ({
    ...prevState,
    closeParking: prevState.closeParking ? prevState.closeParking + 1 : 1,
  }));
}

const handleinc1=()=>{
  setOpenParking(openParking+1);
  setProfileData(prevState => ({
    ...prevState,
    openParking: prevState.openParking ? prevState.openParking + 1 : 1,
  }));
}
const handleinc2=()=>{
  SetValue2(value2+1);
  setProfileData({...profileData,"furnishType":[{"light":value2+1}]})
}

  const handleinc3 = () => {
    SetValue3(value3 + 1);

    // Find the index of the object that contains the 'fan' property
    const index = profileData.furnishType.findIndex(item => 'fan' in item);

    if (index !== -1) {
      // If the 'fan' property exists, update it
      setProfileData(prevState => {
        const newFurnishType = [...prevState.furnishType];
        newFurnishType[index] = { 'fan': value3 + 1 };
        return { ...prevState, 'furnishType': newFurnishType };
      });
    } else {
      // If the 'fan' property doesn't exist, add it
      setProfileData(prevState => ({
        ...prevState,
        'furnishType': [...prevState.furnishType, { 'fan': value3 + 1 }]
      }));
    }
  }

const handleinc4=()=>{
  SetValue4(value4+1);
  const index = profileData.furnishType.findIndex(item => 'tv' in item);

    if (index !== -1) {
      // If the 'fan' property exists, update it
      setProfileData(prevState => {
        const newFurnishType = [...prevState.furnishType];
        newFurnishType[index] = { 'tv': value4 + 1 };
        return { ...prevState, 'furnishType': newFurnishType };
      });
    } else {
      // If the 'fan' property doesn't exist, add it
      setProfileData(prevState => ({
        ...prevState,
        'furnishType': [...prevState.furnishType, { 'tv': value4 + 1 }]
      }));
    }
}
const handleinc5=()=>{
  SetValue5(value5+1);
  const index = profileData.furnishType.findIndex(item => 'ac' in item);

    if (index !== -1) {
      // If the 'fan' property exists, update it
      setProfileData(prevState => {
        const newFurnishType = [...prevState.furnishType];
        newFurnishType[index] = { 'ac': value5 + 1 };
        return { ...prevState, 'furnishType': newFurnishType };
      });
    } else {
      // If the 'fan' property doesn't exist, add it
      setProfileData(prevState => ({
        ...prevState,
        'furnishType': [...prevState.furnishType, { 'ac': value5 + 1 }]
      }));
    }
}
const handleinc6=()=>{
  SetValue6(value6+1);
  const index = profileData.furnishType.findIndex(item => 'gyser' in item);

    if (index !== -1) {
      // If the 'fan' property exists, update it
      setProfileData(prevState => {
        const newFurnishType = [...prevState.furnishType];
        newFurnishType[index] = { 'gyser': value6 + 1 };
        return { ...prevState, 'furnishType': newFurnishType };
      });
    } else {
      // If the 'fan' property doesn't exist, add it
      setProfileData(prevState => ({
        ...prevState,
        'furnishType': [...prevState.furnishType, { 'gyser': value6 + 1 }]
      }));
    }
}




const handledec=()=>{
  if(closeParking>0){
  setCloseParking(closeParking-1);

  setProfileData(prevState => ({
    ...prevState,
    closeParking: prevState.closeParking ? prevState.closeParking - 1 : 1,
  }));
}
}

const handledec1=()=>{
  if(openParking>0){
  setOpenParking(openParking-1);
  setProfileData(prevState => ({
    ...prevState,
    openParking: prevState.openParking ? prevState.openParking - 1 : 1,
  }));

}
}
const handledec2=()=>{
  if(value2>0){
  SetValue2(value2-1);

  const index = profileData.furnishType.findIndex(item => 'light' in item);

  if (index !== -1) {
    // If the 'fan' property exists, update it
    setProfileData(prevState => {
      const newFurnishType = [...prevState.furnishType];
      newFurnishType[index] = { 'light': value2 - 1 };
      return { ...prevState, 'furnishType': newFurnishType };
    });
  } else {
    setProfileData(prevState => ({
      ...prevState,
      'furnishType': [...prevState.furnishType, { 'light': value2 - 1 }]
    }));
}
}}
const handledec3=()=>{
  if(value3>0){
  SetValue3(value3-1);
  const index = profileData.furnishType.findIndex(item => 'fan' in item);

  if (index !== -1) {
    // If the 'fan' property exists, update it
    setProfileData(prevState => {
      const newFurnishType = [...prevState.furnishType];
      newFurnishType[index] = { 'fan': value3 - 1 };
      return { ...prevState, 'furnishType': newFurnishType };
    });
  } else {
    setProfileData(prevState => ({
      ...prevState,
      'furnishType': [...prevState.furnishType, { 'fan': value3 - 1 }]
    }));
}
}
}
const handledec4=()=>{
  if(value4>0){
  SetValue4(value4-1);
  const index = profileData.furnishType.findIndex(item => 'tv' in item);

  if (index !== -1) {
    // If the 'fan' property exists, update it
    setProfileData(prevState => {
      const newFurnishType = [...prevState.furnishType];
      newFurnishType[index] = { 'tv': value4 - 1 };
      return { ...prevState, 'furnishType': newFurnishType };
    });
  } else {
    setProfileData(prevState => ({
      ...prevState,
      'furnishType': [...prevState.furnishType, { 'tv': value4 - 1 }]
    }));

  }
}
}
const handledec5=()=>{
  if(value5>0){
  SetValue5(value5-1);
  const index = profileData.furnishType.findIndex(item => 'ac' in item);

  if (index !== -1) {
    // If the 'fan' property exists, update it
    setProfileData(prevState => {
      const newFurnishType = [...prevState.furnishType];
      newFurnishType[index] = { 'ac': value5 - 1 };
      return { ...prevState, 'furnishType': newFurnishType };
    });
  } else {
    setProfileData(prevState => ({
      ...prevState,
      'furnishType': [...prevState.furnishType, { 'ac': value5 - 1 }]
    }));
  }
}
}
const handledec6=()=>{
  if(value6>0){
  SetValue6(value6-1);
  const index = profileData.furnishType.findIndex(item => 'gyser' in item);

  if (index !== -1) {
    // If the 'fan' property exists, update it
    setProfileData(prevState => {
      const newFurnishType = [...prevState.furnishType];
      newFurnishType[index] = { 'gyser': value6 - 1 };
      return { ...prevState, 'furnishType': newFurnishType };
    });
  } else {
    setProfileData(prevState => ({
      ...prevState,
      'furnishType': [...prevState.furnishType, { 'gyser': value6 - 1 }]
    }));
  }
}
}

const handlefurnish=(e)=>{
  setFurnish("red");
  setSemifurnish("gray");
  setUnfurnish("gray");
  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"furnishing":value})
}

const handlesemifurnish=(e)=>{
  setSemifurnish("red");
  setFurnish("gray");
  setUnfurnish("gray");
  
  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"furnishing":value})
}

const handleunfurnish=(e)=>{
  setUnfurnish("red");
  setFurnish("gray");
  setSemifurnish("gray");

  const value = e.target.getAttribute('data-value');
  setProfileData({...profileData,"furnishing":value})
}


const handlecolor=(e)=>{
  if(color === "gray"){
    setColor("red");
  }else{
    setColor("gray")
  }
  setChecked(!checked);
  
  const value = e.target.getAttribute('data-value');
  console.log("first2",value)
 
    updateOtherRoom(value);
  
}

const handlecolor1=(e)=>{
  
  setChecked1(!checked1);
  const value = e.target.getAttribute('data-value');
  updateOtherRoom(value);
  if(color1 === "gray"){
    setColor1("red");
  }else{
    setColor1("gray")
  }
}

const handlecolor2=(e)=>{
  if(color2 === "gray"){
    setColor2("red");
  }else{
    setColor2("gray")
  }
  setChecked2(!checked2);
  const value = e.target.getAttribute('data-value');
  console.log("first2",value)
 
    updateOtherRoom(value);
  
}

const handlecolor3=(e)=>{
  if(color3 === "gray"){
    setColor3("red");
  }else{
    setColor3("gray")
  }
  setChecked3(!checked3);
  const value = e.target.getAttribute('data-value');
 
    updateOtherRoom(value);
 
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


const handleclick=(e)=>{
     if(type === "gray"){ 
      setType("red");
      setType1("gray");
      setType2("gray");
      setType3("gray");
      setType4("gray");
      }
      const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bedroom":value})
      console.log("first",profileData)
 }
    const handleclick1=(e)=>{
        if(type1 === "gray"){ 
        setType1("red");
        setType("gray");
        setType2("gray");
        setType3("gray");
        setType4("gray");
        }
        const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bedroom":value})
    }
    const handleclick2=(e)=>{
        if(type2 === "gray"){ 
        setType2("red");
        setType1("gray");
        setType("gray");
        setType3("gray");
        setType4("gray");
        }
        const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bedroom":value})
    }
    const handleclick3=(e)=>{
        if(type3 === "gray"){ 
        setType3("red");
        setType1("gray");
        setType2("gray");
        setType("gray");
        setType4("gray");
        }
        const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bedroom":value})
    }
    const handleclick4=(e)=>{
        if(type4 === "gray"){ 
        setType4("red");
        setType1("gray");
        setType2("gray");
        setType3("gray");
        setType("gray");
        }
        const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bedroom":value})
    }

    const handlebath=(e)=>{
      if(pype === "gray"){ 
       setPype("red");
       setPype1("gray");
       setPype2("gray");
       setPype3("gray");
       setPype4("gray");
       }
       const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bathroom":value})
  }
     const handlebath1=(e)=>{
         if(pype1 === "gray"){ 
         setPype1("red");
         setPype("gray");
         setPype2("gray");
         setPype3("gray");
         setPype4("gray");
         }
         const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bathroom":value})
     }
     const handlebath2=(e)=>{
         if(pype2 === "gray"){ 
         setPype2("red");
         setPype1("gray");
         setPype("gray");
         setPype3("gray");
         setPype4("gray");
         }
         const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bathroom":value})
     }
     const handlebath3=(e)=>{
         if(pype3 === "gray"){ 
         setPype3("red");
         setPype1("gray");
         setPype2("gray");
         setPype("gray");
         setPype4("gray");
         }
         const value = e.target.getAttribute('data-value');
      setProfileData({...profileData,"bathroom":value})
     }
     const handlebath4=(e)=>{
         if(pype4 === "gray"){ 
         setPype4("red");
         setPype1("gray"); 
         setPype2("gray");
         setPype3("gray");
         setPype("gray");
         }
         const value = e.target.getAttribute('data-value');
      setProfileData({...profileData," bathroom":value})
     }

     const handlebalcony=(e)=>{
      if(hype === "gray"){ 
       setHype("red");
       setHype1("gray");
       setHype2("gray");
       setHype3("gray");
       }
       const value = e.target.getAttribute('data-value');
       setProfileData({...profileData,"balcony":value})
  }
     const handlebalcony1=(e)=>{
         if(hype1 === "gray"){ 
         setHype1("red");
         setHype("gray");
         setHype2("gray");
         setHype3("gray");
         }
         const value = e.target.getAttribute('data-value');
       setProfileData({...profileData,"balcony":value})
     }
     const handlebalcony2=(e)=>{
         if(hype2 === "gray"){ 
         setHype2("red");
         setHype1("gray");
         setHype("gray");
         setHype3("gray");
         }
         const value = e.target.getAttribute('data-value');
       setProfileData({...profileData,"balcony":value})
     }
     const handlebalcony3=(e)=>{
         if(hype3 === "gray"){ 
         setHype3("red");
         setHype1("gray");
         setHype2("gray");
         setHype("gray");
         }
         const value = e.target.getAttribute('data-value');
       setProfileData({...profileData,"balcony":value})
     }

     const [carpetArea,setCarpetArea]=useState(0);
      const [builtupArea,setBuiltupArea]=useState(0); 
      const [superBuiltupArea,setSuperBuiltupArea]=useState(0);

      const[checkbox,setCheckbox]=useState(true);
      const[checkbox1,setCheckbox1]=useState(true);
      const[checkbox2,setCheckbox2]=useState(true);
      const[checkbox3,setCheckbox3]=useState(true);
      const[checkbox4,setCheckbox4]=useState(true);
      const[checkbox5,setCheckbox5]=useState(true);
      const[checkbox6,setCheckbox6]=useState(true);
      


      const handlecheckbox=()=>{
        setCheckbox(!checkbox);

        const index = profileData.furnishType.findIndex(item => 'sofa' in item);

        if (index !== -1) {
          // If the 'sofa' property exists, update it
          setProfileData(prevState => {
            const newFurnishType = [...prevState.furnishType];
            newFurnishType[index] = { 'sofa': checkbox };
            return { ...prevState, 'furnishType': newFurnishType };
          });
        } else {
          // If the 'sofa' property doesn't exist, add it
          setProfileData(prevState => ({
            ...prevState,
            'furnishType': [...prevState.furnishType, { 'sofa': checkbox }]
          }));
        }
      }
     

      const handlecheckbox1=()=>{
        setCheckbox1(!checkbox1);
        const index = profileData.furnishType.findIndex(item => 'washingMachine' in item);

        if (index !== -1) {
          // If the 'diningTable' property exists, update it
          setProfileData(prevState => {
            const newFurnishType = [...prevState.furnishType];
            newFurnishType[index] = { 'washingMachine': checkbox1 };
            return { ...prevState, 'furnishType': newFurnishType };
          });
        } else {
          // If the 'diningTable' property doesn't exist, add it
          setProfileData(prevState => ({
            ...prevState,
            'furnishType': [...prevState.furnishType, { 'washingMachine': checkbox1 }]
          }));
        }
      }

      const handlecheckbox2=()=>{
        setCheckbox2(!checkbox2);
        const index = profileData.furnishType.findIndex(item => 'waterPurifier' in item);

        if (index !== -1) {
          // If the 'diningTable' property exists, update it
          setProfileData(prevState => {
            const newFurnishType = [...prevState.furnishType];
            newFurnishType[index] = { 'waterPurifier': checkbox2 };
            return { ...prevState, 'furnishType': newFurnishType };
          });
        } else {
          // If the 'diningTable' property doesn't exist, add it
          setProfileData(prevState => ({
            ...prevState,
            'furnishType': [...prevState.furnishType, { 'waterPurifier': checkbox2 }]
          }));
        } 
      }

      const handlecheckbox3=()=>{
        setCheckbox3(!checkbox3);
        const index = profileData.furnishType.findIndex(item => 'microWave' in item);

        if (index !== -1) {
          // If the 'diningTable' property exists, update it
          setProfileData(prevState => {
            const newFurnishType = [...prevState.furnishType];
            newFurnishType[index] = { 'microWave': checkbox3 };
            return { ...prevState, 'furnishType': newFurnishType };
          });
        } else {
          // If the 'diningTable' property doesn't exist, add it
          setProfileData(prevState => ({
            ...prevState,
            'furnishType': [...prevState.furnishType, { 'microWave': checkbox3 }]
          }));
        } 
      }
      

      const handlecheckbox4=()=>{
        setCheckbox4(!checkbox4);
        const index = profileData.furnishType.findIndex(item => 'modularKitchen' in item);

        if (index !== -1) { 
          // If the 'modularKitchen' property exists, update it
          setProfileData(prevState => {
            const newFurnishType = [...prevState.furnishType];
            newFurnishType[index] = { 'modularKitchen': checkbox4 };
            return { ...prevState, 'furnishType': newFurnishType };
          });
        } else {
          // If the 'modularKitchen' property doesn't exist, add it
          setProfileData(prevState => ({
            ...prevState,
            'furnishType': [...prevState.furnishType, { 'modularKitchen': checkbox4 }]
          }));
        }
      }


      const handlecheckbox5=()=>{

        setCheckbox5(!checkbox5);
        const index = profileData.furnishType.findIndex(item => 'fridge' in item);

        if (index !== -1) {
          // If the 'fridge' property exists, update it
          setProfileData(prevState => {
            const newFurnishType = [...prevState.furnishType];
            newFurnishType[index] = { 'fridge': checkbox5 };
            return { ...prevState, 'furnishType': newFurnishType };
          });
        } else {
          // If the 'fridge' property doesn't exist, add it
          setProfileData(prevState => ({
            ...prevState,
            'furnishType': [...prevState.furnishType, { 'fridge': checkbox5 }]
          }));
        }
      }

      const handlecheckbox6=()=>{
        setCheckbox6(!checkbox6);
        const index = profileData.furnishType.findIndex(item => 'stove' in item);

        if (index !== -1) {
          // If the 'stove' property exists, update it
          setProfileData(prevState => {
            const newFurnishType = [...prevState.furnishType];
            newFurnishType[index] = { 'stove': checkbox6 };
            return { ...prevState, 'furnishType': newFurnishType };
          });
        } else {
          // If the 'stove' property doesn't exist, add it
          setProfileData(prevState => ({
            ...prevState,
            'furnishType': [...prevState.furnishType, { 'stove': checkbox6 }]
          }));
        }
      }




  

  

  const onTop = () => {
    window.scrollTo(0, 0);
}
useEffect(() => {
  console.log("first",PreviousValue)
    onTop()
}, [navigate]);

  return (
    <Wrapper>
       <Div3>
        <Sidebar/>
        </Div3>
        <Content>
        <div className='back' onClick={()=>{navigate("/addproperty/location")}}> <FaArrowLeftLong style={{marginRight:"5px", fontSize:"15px"}}/> Back</div>
        <div style={{marginBottom:"20px"}} className='heading'>Tell us about your peoperty</div>
        <div className='subheading'>Add Room Details</div>
        <Supersub>No. of bedroom</Supersub>
        <div className='flex1'>
            <Div1 className={type} data-value={"1"} onClick={(e)=>{handleclick(e)}}>1</Div1>
            <Div1 className={type1} data-value={"2"} onClick={(e)=>{handleclick1(e)}}>2</Div1>
            <Div1 className={type2} data-value={"3"} onClick={(e)=>{handleclick2(e)}}>3</Div1>
            <Div1 className={type3} data-value={"4"} onClick={(e)=>{handleclick3(e)}}>4</Div1>
            <Div1 className={type4} data-value={"4+"} onClick={(e)=>{handleclick4(e)}}>4+</Div1>        
        </div>
        <Supersub>No. of bathroom</Supersub>
        <div className='flex1'>
            <Div1 className={pype} data-value={"1"} onClick={(e)=>{handlebath(e)}}>1</Div1>
            <Div1 className={pype1} data-value={"2"} onClick={(e)=>{handlebath1(e)}}>2</Div1>
            <Div1 className={pype2} data-value={"3"} onClick={(e)=>{handlebath2(e)}}>3</Div1>
            <Div1 className={pype3} data-value={"4"} onClick={(e)=>{handlebath3(e)}}>4</Div1>
            <Div1 className={pype4} data-value={"4+"} onClick={(e)=>{handlebath4(e)}}>4+</Div1>
        </div>
        <Supersub>No. of balconies</Supersub>
        <div className='flex1'>
            <Div1 className={hype} data-value={"1"} onClick={(e)=>{handlebalcony(e)}}>1</Div1>
            <Div1 className={hype1} data-value={"2"} onClick={(e)=>{handlebalcony1(e)}}>2</Div1>
            <Div1 className={hype2} data-value={"3"} onClick={(e)=>{handlebalcony2(e)}}>3</Div1>
            <Div1 className={hype3} data-value={"4"} onClick={(e)=>{handlebalcony3(e)}}>4</Div1>
        </div>

        <div className='subheading'>Add Area Details</div>
       
        <Div>
        <Input placeholder='Carpet Area' onChange={(e)=>{setCarpetArea(e.target.value)}}></Input>
        <Select onChange={(e)=>{setProfileData({...profileData,"area":[{[carpetArea]:e.target.value}]})}}>
            <Choice value={"Sq.ft"} selected>Sq.ft</Choice>
            <Choice value={"Sq.yard"}>Sq.yard</Choice>
            <Choice value={"Sq.m"}>Sq.m</Choice>
            <Choice value={"Acres"}>Acres</Choice>
            <Choice value={"Bigha"}>Bigha</Choice>
        </Select>
        </Div>

        <div className='flex'>
        <BB1 className={style2} style={{marginRight:"20px"}} onClick={handlestyle}>+ Add Built-up Area</BB1>
        <BB1 className={style3} onClick={handlestyle1}>+ Add Super Built-up Area</BB1>
        </div>

        <div className={style}>
        <Div>
        <Input onChange={(e)=>{setBuiltupArea(e.target.value)}}  placeholder='Built-up Area'></Input>
        <Select onChange={(e)=>{setProfileData({...profileData,"area":[...profileData.area,{[builtupArea]:e.target.value}]})}}>
            <Choice value={"Sq.ft"} selected>Sq.ft</Choice>
            <Choice value={"Sq.yard"}>Sq.yard</Choice>
            <Choice value={"Sq.m"}>Sq.m</Choice>
            <Choice value={"Acres"}>Acres</Choice>
            <Choice value={"Bigha"}>Bigha</Choice>
        </Select>
        </Div>
        </div>
        <div className={style1}>
        <Div>
        <Input  onChange={(e)=>{setSuperBuiltupArea(e.target.value)}} placeholder='Super Built-up Area'></Input>
        <Select onChange={(e)=>{setProfileData({...profileData,"area":[...profileData.area,{[superBuiltupArea]:e.target.value}]})}}>
            <Choice value={"Sq.ft"} selected>Sq.ft</Choice>
            <Choice value={"Sq.yard"}>Sq.yard</Choice>
            <Choice value={"Sq.m"}>Sq.m</Choice>
            <Choice value={"Acres"}>Acres</Choice>
            <Choice value={"Bigha"}>Bigha</Choice>
        </Select>
        </Div>
        </div>

        <div className='subheading'>Other Rooms</div>
        <Flex>
          <div className='od' >
        <SButton1 className={color} >{checked?<div>✔️ </div>:<div>➕</div>} <div data-value={"Pooja Room"} onClick={handlecolor} style={{padding:"0 0 0 7px"}}>Pooja Room</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={color1} >{checked1?<div>✔️ </div>:<div>➕</div>} <div data-value={"Study Room"}  onClick={handlecolor1} style={{padding:"0 0 0 7px"}}>Study Room</div></SButton1>
        </div>
        </Flex>   
        <Flex>  
        <div className='od' >  
        <SButton1 className={color2} >{checked2?<div>✔️ </div>:<div>➕</div>} <div data-value={"Store Room"} onClick={handlecolor2} style={{padding:"0 0 0 7px"}}>Store Room</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={color3} >{checked3?<div>✔️ </div>:<div>➕</div>} <div data-value={"Servent Room"} onClick={handlecolor3} style={{padding:"0 0 0 7px"}}>Servent Room</div></SButton1>
        </div>
        </Flex>
       <div className='subheading'>Furnishing</div>
       <Flex>
           <div className='od' onClick={handledisplay}><Div5 className={furnish} data-value={"Full-Furnished"} onClick={(e)=>{handlefurnish(e)}}>Full-Furnished</Div5></div>
           <div className='od' onClick={handledisplay}><Div5 className={semifurnish} data-value={"Semi-Furnished"} onClick={(e)=>{handlesemifurnish(e)}}>Semi-Furnished</Div5></div>
           <div className='od' onClick={handledisplayn}> <Div5 className={unfurnish} data-value={"Un-Furnished"} onClick={(e)=>{handleunfurnish(e)}}>Un-Furnished</Div5></div>
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
        <BB style={{marginRight:"10px",color:"gray"}}>{value3}</BB>
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
          <Button1 type='checkbox' onChange={handlecheckbox} style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Sofa</Supersub>
        </div>
        </Flex>

<Flex1>
        <div style={{marginRight:"11%"}}>
        <div style={{display:"Flex",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' onChange={handlecheckbox1} style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",padding:"0 10px 0 0",margin:"0"}}>Washing machine</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"20%" ,marginTop:"15px"}}>
          <Button1 type='checkbox'onChange={handlecheckbox2} style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Micro Wave</Supersub>
        </div>
        
        <div style={{display:"Flex",minWidth:"23%" ,margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' onChange={handlecheckbox3} style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Fridge</Supersub>
        </div>
        
        </div>

        <div>
        <div style={{display:"Flex",minWidth:"33%",margin:"15px 0 0 0"}}>
          <Button1 type='checkbox' onChange={handlecheckbox4} style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Water Purifier</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"33%" ,marginTop:"15px"}}>
          <Button1 type='checkbox' onChange={handlecheckbox5} style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Modular Kitchen</Supersub>
        </div>
        <div style={{display:"Flex",minWidth:"23%" ,marginTop:"15px"}}>
          <Button1 type='checkbox' onChange={handlecheckbox6} style={{height:"20px",width:"20px"}}></Button1>
          <Supersub style={{fontSize:"18px",marginRight:"20px",padding:"0 10px",margin:"0"}}>Stove</Supersub>
        </div>
        </div>
        </Flex1>   
        </Furnish>
       
        <div className='subheading'>Parking</div>
       <Flex>
        <div style={{marginRight:"40px"}} className='flex'>
        <Supersub style={{fontSize:"15px",marginRight:"20px"}}>Close Parking</Supersub>
        <Div2 onClick={handledec}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{closeParking}</BB>
        <Div2 data-value={"closeParking"} onClick={handleinc}>+</Div2>
        </div>
        <div className='flex'>
        <Supersub style={{fontSize:"15px",marginRight:"20px"}}>Open Parking</Supersub>
        <Div2 onClick={handledec1}>-</Div2>
        <BB style={{marginRight:"10px",color:"gray"}} >{openParking}</BB>
        <Div2 data-value={"openParking"} onClick={handleinc1}>+</Div2>
        </div>
       </Flex>
       
        <div className='subheading'>Floor Details</div>
        <Input1 type='text' onChange={(e)=>{setProfileData({...profileData,"totalFloor":e.target.value})}} placeholder='Total Floors'></Input1>
        <Input1 type='text' onChange={(e)=>{setProfileData({...profileData,"propertyFloor":e.target.value})}} placeholder='Property Floor'></Input1>

        <div className='subheading'>Availability status</div>
        <Flex>
            <div className='od' onClick={handlespropertyage}>
              <Div1 style={{width:"150px"}} className={ready} data-value="Ready to move" onClick={(e)=>{handleavailability(e)}}>Ready to move</Div1>
            </div>
            <div className='od' onClick={handlepropertyage1}>
            <Div1 style={{width:"150px"}} className={underconstruct} data-value="Under Construction" onClick={(e)=>{handleavailability1(e)}}>Under Construction</Div1>
            </div>
        </Flex>
        <Div4 className={propertyage}>
          <div className='subheading'>Age of property</div>
          <Flex>
            <Div1 className={age} data-value="0-1 Years" onClick={(e)=>{handleage(e)}}>0-1 Years</Div1>
            <Div1 className={age1} data-value="1-5 Years" onClick={(e)=>{handleage1(e)}}>1-5 Years</Div1>
            <Div1 className={age2} data-value="5-10 Years" onClick={(e)=>{handleage2(e)}}>5-10 Years</Div1>
            <Div1 className={age3} data-value="10+ Years" onClick={(e)=>{handleage3(e)}}>10+ Years</Div1>
            </Flex>
        </Div4>
        <Div4 className={propertyage1}>
          <div className='subheading'>Possesion By</div>
          <Select1 onChange={(e)=>{setProfileData({...profileData,"possesionBy":e.target.value})}}>
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
        <Button onClick={()=>{navigate("/addproperty/photos",{state:{"PreviousValue":profileData}})}}>Continue</Button>
        </div>
        </Content>
    </Wrapper>
  )
}
export default Propertyprofile