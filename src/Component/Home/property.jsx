import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FaRegStar } from "react-icons/fa";


const Wrapper = styled.div`

`;

const Main = styled.div`
margin: 0 11px;

`;

const Text1 = styled.div`
color:black;
font-size: 23px;
padding-bottom: 5px;
font-weight: 500;
`;
const Text = styled.div`
color:black;
font-size: 18px;
padding-bottom: 5px;
`;
const Image = styled.img`
`;
const Container = styled.div``;
const Container2 = styled.div`
display: flex;
justify-content: space-between;
`;

const Star = styled(FaRegStar)`
height: 30px;
width: 30px;
position: relative;
top: 10px;
right: 40px;
`;




function Property(props) {

    const properties = [
    { img: "./logo.png", Text: "3BHK/3Baths", Subtext: "In Defence Colony",Postedby:"Posted by Owner", Cost: "₹ 6.5cr" },
    { img: "./logo.png", Text: "2BHK/1Baths", Subtext: "In Greater Kailash",Postedby:"Posted by Owner", Cost: "9.8cr" },
    { img: "./logo.png", Text: "2BHK/2Baths", Subtext: "In Rajendra Nagar",Postedby:"Posted by Dealer", Cost: "2.8cr" },
    { img: "./logo.png", Text: "3BHK/2Baths", Subtext: "In Shalimar Garden",Postedby:"Posted by Broker", Cost: "1.8cr" },
    { img: "./logo.png", Text: "4BHK/3Baths", Subtext: "In Noida Sec-62",Postedby:"Posted by Owner", Cost: "4cr" },
    { img: "./logo.png", Text: "5BHK/4Baths", Subtext: "In Gurugram CyberHub",Postedby:"Posted by Broker", Cost: "14cr" },
    { img: "./logo.png", Text: "1BHK/1Baths", Subtext: "In Tilaknagar",Postedby:"Posted by Owner", Cost: "1cr" },
    
  ];

    const navigate = useNavigate();
    return (
      <div style={{display:"flex",margin:"20px 0",overflowX:"scroll"}}>
      { properties.map((e,key) => (
        <Main key={key} onClick={() => { navigate("/product-description") }}>
        <div style={{display:"flex"}}>
        <Image src={e.img}></Image>
        <Star/>
        </div>
        <Wrapper>
          <Container>
            <Text1>{e.Text}</Text1>
            <Text style={{ color: "gray" }}>{e.Subtext}</Text>
          </Container>
          <Container2>
            <Text style={{ fontWeight: "500" }}>{e.Postedby}</Text>
            <Text style={{ fontWeight: "500",marginRight:"30px" }}>{e.Cost}</Text>
          </Container2>
        </Wrapper>
      </Main>
      )
      )}
      </div>
    );
  }

export default Property