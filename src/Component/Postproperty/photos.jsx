import React,{useEffect} from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDropzone } from 'react-dropzone';
import { FcStackOfPhotos } from "react-icons/fc";


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

const Div = styled.div`
margin: 10px;
border-radius: 5px;
padding: 30px 10px;
border: 1px dashed red;
display: flex;
justify-content: center;
align-items: center;
background-color: aliceblue;
`;

const Div2 = styled.div`
@media (max-width: 768px) {
    display: none;
}
`;

const Button = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 25%;
border-radius:5px;
margin-top: 15px;
margin-bottom: 15px;
padding: 10px 10px;
border: 2px solid red;
background-color: rgb(216, 163, 163);
@media (max-width: 768px) {
    width: 80%;
    font-size: 13px;
    margin-left: 0;

}
`;

const Button1 = styled.span`
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

const Logo = styled(FcStackOfPhotos)`
margin-left: 45%;
`;


const Subheading = styled.div`
display: flex;
justify-content: center;
font-size: 14px;
font-weight: 700;
color: red;
padding-bottom: 10px;
padding-top: 10px;
`;

const DragDrop = styled.div`
width: 70%;
@media (max-width:768px){
  width: 100%;
}
`;

function Photos() {

  const { getRootProps, getInputProps } = useDropzone();
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
        <Back onClick={()=>{navigate("/addproperty/propertyprofile")}}> <FaArrowLeftLong style={{marginRight:"5px", fontSize:"15px"}}/> Back</Back>
        <div className='heading'>Add photos of your property</div>
        <div className='subheading'>Upload form Desktop</div>
        <DragDrop {...getRootProps()}>
      <Div> 
        <div>
        <Logo style={{height:"40px",width:"40px"}}/>
          <Subheading>+Add Atleast 5 Photos</Subheading>
        <input {...getInputProps()} />Drag and drop files here or click to browse.
        <Button>Upload Photos Now</Button>
        </div>
      </Div>
        </DragDrop>
    <div style={{marginTop:"50px",marginBottom:"40px"}}>
    <Button1 onClick={()=>{navigate("/addproperty/price")}}>Continue</Button1>
    </div>
       
        </Content>
    </Wrapper>
  )
}

export default Photos