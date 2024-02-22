
import React, { useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
z-index: 10;
position: fixed;
background-color: #151010;
top: 0;
left: 0;
width: 100%;
min-height:100% ;
height: auto;
opacity: 0.9;
`;

const Div =styled.div`
position: fixed;
margin: 150px 250px;
border-radius: 10px;
width: 60%;
opacity: 1; 
z-index: 2;
`;

const Div1 =styled.div`
background-color: white;
opacity: 1;
z-index: 2;
border-radius: 10px;
padding: 20px;
display: flex;
`;

const Heading=styled.div`
font-size: 25px;
font-weight: 700;
color: #ff3535da;
margin-bottom: 10px;
`;

const Input=styled.input`
outline: none;
border: none;
border-bottom: 1px solid #d9d9d9;
width: 90%;
padding: 5px;
font-size: 17px;
`;

const Select=styled.select`
height: 42px;
width: max-content;
outline : none;
border: none;
border-bottom: 1px solid lightgray;
`;

const Button=styled.button`
width: max-content;
height: 30px;
border-radius: 5px;
border: none;
background-color: #ff3535da;
color: white;
padding: 5px 10px;
`;

const dummydata=[
    {
        id:"1",
        postedBy:"Owner",
        phoneno:"9979847839",
        email:"Phrhjs@gmail.com",
        fname:"Deepak",
        dateOfupload:"22-06-1990",
        price:"100000",
        appartmentName:"havala",
        propertyType:"independent villa",
        bedroom:"3",
        area:"2000"
    }
];







function Info({showInfo,setShowInfo}) {

    const [buyReason,setBuyReason]=useState()
    const handleBuyer=()=>{
        if (buyReason) {
            const data='Investment';
            return data;
          } else {
            const data='Self-Use';
            return data;
          }
        }
    
    const [buyer, setBuyer] = useState();
    const handleEnquiry = () => {
      if (buyer) {
        const data='Individual';
        return data;
      } else {
       const data='Dealer'; 
        return data;
      }
    };



  return (
    
    <Wrapper>
            {dummydata.map((e)=>
        <Div key={e.id}>
            <div className='df jc'>
                <Heading>You are requesting to view Contact detail</Heading>
                <div onClick={()=>{setShowInfo(!showInfo)}}>❌</div>
            </div>
        <Div1 className='df b'>
            <div style={{width:"50%"}}>
                <div style={{fontWeight:"500"}} className='b'>Posted by {e.postedBy}</div>
                <div className='df'>{e.phoneno}<div style={{backgroundColor:"gray"}} className='Vsep'></div><div>{e.email}</div></div>
                <div style={{fontSize:"15px"}}>{e.fname}</div>
            </div>
            <div style={{width:"50%"}}>
            <div style={{fontWeight:"500"}} className='b'>Posted on : {e.dateOfupload}</div>
            <div className='df'>{e.price}<div style={{backgroundColor:"gray"}} className='Vsep'></div><div>{e.appartmentName}</div></div>
            <div style={{fontSize:"15px"}} className='df'>{e.area} sq.ft<div style={{backgroundColor:"gray"}} className='Vsep'></div><div>{e.bedroom} BHK {e.propertyType}</div></div>
            </div>
        </Div1>
        <Heading>Please fill in your personal details to be shared with {e.postedBy}</Heading>
        <Div1>
            <div style={{width:"50%",height:"max-content"}}>
                <div style={{fontWeight:"500",marginBottom:"20px"}}>Basic Information</div>
                <div className='df b'>
                <div className='jc1'>Your Reason to buy is:</div>
                <div className='df w'>
                  <input  type='radio' name='buyReason' value='true' onChange={(e)=>{setBuyReason(e.target.value)}} onClick={handleBuyer}></input>
                  <div style={{marginLeft:"5px",fontSize:"15px"}}>Investment</div>
                </div>
                <div className='df w'>
                  <input type='radio' name='buyReason' value='false' onChange={(e)=>{setBuyReason(e.target.value)}}></input>
                  <div style={{marginLeft:"5px",fontSize:"15px"}}> Self Use</div>
                </div>
              </div>
                <div className='df  b'>
                <div className='jc1'>Are you a property dealer</div>
                <div className='df w'>
                  <input  type='radio' name='buyer' value='true' onChange={(e)=>{setBuyer(e.target.value)}}  onClick={handleEnquiry}></input>
                  <div style={{marginLeft:"5px",fontSize:"15px"}}>Yes</div>
                </div>
                <div className='df w'>
                  <input type='radio' name='buyer' value='false' onChange={(e)=>{setBuyer(e.target.value)}}></input>
                  <div style={{marginLeft:"5px",fontSize:"15px"}}> No</div>
                </div>
              </div>

              <div style={{color:"gray",fontSize:"14px"}}>Name</div>
              <Input style={{marginBottom:"20px"}} type='text' placeholder='Enter Name'></Input>

              <div style={{color:"gray",fontSize:"14px"}}>Phone No.</div>

              <div style={{marginBottom:"20px" ,width:"100%"}} className='df'>
                  <Select>
                    <option value=''>Select</option>
                    <option value='India'>India</option>
                    <option value='USA'>USA</option>
                    <option value='UK'>UK</option>
                  </Select>
                  <Input style={{width:"75%"}} type='text' placeholder='Enter Phone No.'></Input>
              </div>

              <div style={{color:"gray",fontSize:"14px"}}>Email</div>
              <Input style={{marginBottom:"20px"}} type='text' placeholder='Enter Email'></Input>
               
            </div>

            
              <div>
            <div style={{fontWeight:"500",marginBottom:"20px"}}>Optional Information</div>
            <div className='jc1 b'>When are you planning to buy the property?</div>
            <div className='df b'> 
              <div className='df b'> 
                <input type='radio'></input>
                <div className='ml'>3 Months</div>
             </div>
             <div className='df b'> 
                <input type='radio'></input>
                <div className='ml'>6 Months</div>
             </div>
             <div className='df b'> 
                <input type='radio'></input>
                <div className='ml'>More than 6 Months</div>
             </div>
             </div>
              
              <div style={{marginTop:"70px"}} className='df b'>
                <input style={{height:"18px",width:"18px"}} type='checkbox'></input>
                <div className='ml'>I am interested in Site Visit</div>
              </div>
              <div className='df b'>
                <input style={{height:"18px",width:"18px"}} type='checkbox'></input>
                <div className='ml'>i agree to terms & conditions</div>
              </div>
             
             <Button style={{marginTop:"20px"}}>Submit</Button>
            </div>
            
        </Div1>
        </Div>
        )}
    </Wrapper>

  )
}

export default Info