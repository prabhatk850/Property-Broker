import React,{useState} from 'react'
import styled from 'styled-components'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';



const Wrapper = styled.div`
z-index: 10;
position: fixed;
backdrop-filter:blur(10px);
background-color: rgba(102, 101, 101, 0.9);
top: 0;
left: 0;
width: 100%;
min-height:100% ;
height: auto;
opacity: 0.9;
display: flex;
align-items: center;
justify-content: center;
`;

const InnerContainer = styled.div`
border-radius: 10px;
width: 35%;
opacity: 1;
z-index: 2;
background-color: white;
padding: 50px;
`;

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;

const HeaderText = styled.h2`
color: red;
font-weight: 500;
`;

const FormContainer = styled.div`
flex-direction: column;
display: flex;
`;

const Input = styled.input`
margin: 10px 0;
height: 40px;
border: none;
outline: 1px solid #ccc;
border-radius: 5px;
padding: 5px 10px;
`;

const Button = styled.button`
width: max-content;
padding: 10px 20px;
background-color: red;
border: none;
border-radius: 5px;
margin-top: 20px;
font-size: 16px;
color: white;
`;

const FooterContainer = styled.div`
margin:20px 0 0 0;
display: flex;
align-items: center;
justify-content: center;
`;

const FooterText = styled.p`

`;

const FooterLink = styled.a`
text-decoration: underline;
`;

const FancyButton = styled.div`
  margin-bottom: 30px;
  padding-top: 15px;
  border-radius: 5px;
  border: none;
  outline: 1px solid #ccc;
  color: black;
  width: 100%;
  cursor: pointer;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Facebook = styled(BsFacebook)`
margin-right: 5px;

`;
const Google = styled(FcGoogle)`
margin-right: 5px;
`;



function Signup({showSignUp,setShowSignUp}) {

const [showLogin, setShowLogin] = useState(true)
const handleLogin =()=>{
  setShowLogin(!showLogin)
}
  return (
    <Wrapper>
     
     {showLogin ? 
      <InnerContainer>
          <HeaderContainer>
            <HeaderText>Sign Up Now!</HeaderText>
            <div onClick={()=>{setShowSignUp(!showSignUp)}}>❌</div>
          </HeaderContainer>
          <FormContainer>
            <Input type="text" placeholder="Full Name"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <div className='df center'><Button>Sign Up</Button></div>
          </FormContainer>
          <div className='seperetor b m'></div>
          <FancyButton><Google/>Continue with Google</FancyButton>
            <FancyButton><Facebook/>Continue with Facebook</FancyButton>
          <FooterContainer>
            <FooterText>Already have an account? <FooterLink onClick={handleLogin}>Login</FooterLink></FooterText>
          </FooterContainer>
        </InnerContainer>
        
        :
        
        <InnerContainer>
          <HeaderContainer>
            <HeaderText>Welcome Back! LogIn</HeaderText>
            <div onClick={()=>{setShowSignUp(!showSignUp)}}>❌</div>
          </HeaderContainer>
          <FormContainer>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <div className='df center'><Button>LogIn</Button></div>
          </FormContainer>
          <div className='seperetor b m'></div>
          <FancyButton><Google/>Continue with Google</FancyButton>
            <FancyButton><Facebook/>Continue with Facebook</FancyButton>
          <FooterContainer>
            <FooterText>Create New Account <FooterLink onClick={handleLogin}>SignUp</FooterLink></FooterText>
          </FooterContainer>
        </InnerContainer>}
       
    </Wrapper>
  )
}

export default Signup