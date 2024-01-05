import React from 'react'
import styled from 'styled-components'
import { FaFacebookSquare,FaInstagram,FaTwitter,FaYoutube,FaLinkedin } from "react-icons/fa";

const Wrapper = styled.div`
width: 100%;
margin-bottom: 30px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #E0E0E0;
  margin: 0 20%;
`;
const Flex1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20%;
`;

const Div = styled.div`
  margin: 20px 2%;
  font-size: 20px;
  
`;
const Div1 = styled.div`
  margin: 20px 2%;
  font-size: 30px;
  color: black;
`;

const Img = styled.img`
height: 153px;
width: 145px;
margin-right:10px ;
`;
const Img1 = styled.img`
height: 100px;
width: 150px;
`;


function Footer() {
  return (
    <Wrapper>
      <div style={{border:"0.5px solid #E0E0E0",width:"100%"}}></div>
      <Flex>
      <Div>About Us</Div>
      <Div>Terms and Conditions</Div>
      <Div>Privacy Policy</Div>
      <Div>Help</Div>
      <Div>Testimonnial</Div>
      <Div>FAQs</Div>
      </Flex>
      <Flex1>
      <Img src='./Playstore.png'></Img>
      <Img1 src='./Applestore.png'></Img1>
      
      </Flex1>
      <Flex1>
        <Div1><FaFacebookSquare /></Div1>
        <Div1><FaInstagram /></Div1>
        <Div1><FaTwitter /></Div1>
        <Div1><FaYoutube /></Div1>
        <Div1><FaLinkedin/></Div1>
      </Flex1>
      <Flex1 style={{color:"black"}}>All Rights Reserved @2024</Flex1>

    </Wrapper>
  )
}

export default Footer