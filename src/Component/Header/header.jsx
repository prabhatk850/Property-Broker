import React,{useState} from 'react'
import styled from 'styled-components'
import { FaHouseChimney, FaUserNinja } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'
import SignUp from '../Auth/signup';




const Wrapper = styled.div`
width: 96%;
padding: 1% 2% ;
display: flex;
justify-content: space-between; 
background-color: #F5F5F5;
box-shadow: 5px 1px 5px 5px #E0E0E0;
`;
const Logo= styled(FaHouseChimney)`
width: 60px;
height: 60px;
color: red;
@media (max-width: 767px) {
  width: 40px;
  height: 40px;

}
`;
const Login = styled(FaUserNinja)`
  width: 30px;
  height: 30px;
  color: red;
@media (max-width: 767px) {
display: none;
}
`;
const Menu = styled(TiThMenu)`
  width: 25px;
  height: 25px;
  color: red;
@media (min-width: 767px) {
  display: none;
} 
`;

const Name= styled.div`
font-size: 35px;
font-weight: 800;
color: black;
@media (max-width: 767px) {
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Owner= styled.div`
font-size: 15px;
height: 20px;
background-color: red;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px 15px;
color: white;
font-weight: bold;
margin-right: 70px;
box-shadow: 1px 1px 10px 1px #e6e6e6;
&:hover{
  cursor: pointer;
  background-color: #ff4d4f;

}
@media (max-width: 767px) {
  font-size: 10px;
  padding: 5px 10px;
  margin-right: 20px;

}
`;

const User= styled.div`
  display: none;
  border-radius: 15px;
  position: absolute;
  background-color: white;
  z-index: 1;
  color: black;
  right: 30px;
  padding: 20px;
  margin-top:10px ;
  box-shadow: 1px 1px 10px 1px #e6e6e6;
`;

const Heading= styled.div`
font-size: 25px;
font-weight: bold;
color: red;
padding-bottom: 10px;
&:hover{
  cursor: pointer;
  color: #ff9999;
}
`;

const SubHeading= styled.div`
font-size: 18px;
padding-top: 10px;
color: gray;
&:hover{
  cursor: pointer;
  color: black;
}
`;

const Div= styled.div`
padding:10px 0;
margin-right: 50px; 
&:hover{
  cursor: pointer;
  ${User}{
    display: block;
    opacity: 1;
  }
}
@media (max-width: 767px) {
  display: none;
}
`;





function Header() {


  const [showSignUp, setShowSignUp] = useState(false);
const handleSignUp = () => {
  setShowSignUp(!showSignUp);
}

  const navigate = useNavigate();

  return (
    <Wrapper>
       {showSignUp && <SignUp  showSignUp= {showSignUp} setShowSignUp={setShowSignUp}/>}
      <div onClick={()=>{navigate("/")}} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Logo />
      <Name>Property Broker</Name>
      </div>
      <div style={{display:"flex",alignItems:"center"}}>
        <Owner onClick={()=>{navigate("/addproperty")}}>
          Post Property
        </Owner>
        <Div>
        <Login/>
        <User>
          <Heading onClick={(e)=>{handleSignUp()}}>Login / Register</Heading>
          <SubHeading onClick={()=>{navigate("/profile")}} >Modify Profile</SubHeading>
          <SubHeading onClick={()=>{navigate("/shortlist")}}>Shortlisted</SubHeading>
          <SubHeading onClick={()=>{navigate('/wishlist')}}>Wishlist</SubHeading>
          <SubHeading onClick={()=>{navigate("/enquiry")}}>My Enquiries</SubHeading>
          <SubHeading onClick={()=>{navigate("/")}}>Logout</SubHeading>
        </User>
        </Div>

        <Menu/>
      </div>
    </Wrapper>
  )
}

export default Header