import React, {useState} from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';



const Wrapper = styled.div`
display: flex;
margin: 50px 7% 50px;
width: 85%;
`;

const Div1 = styled.div`
width: 20%;
@media (max-width: 1024px) {
    width: 30%;
}
@media (max-width: 768px) {
    display: none;
}
`;

const Div = styled.div`
margin: 10px;
padding: 20px;
display: flex;
border-radius: 10px;
border  : 1px solid #f1f1f1;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Div2 = styled.div`
margin: 10px;
padding: 7px 10px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-weight: 500;
border-radius: 10px;
border  : 1px solid #f1f1f1;
background-color:red;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Grid=styled.div`
display: grid;
grid-template-columns: repeat(1, minmax(50%, 1fr));
`;

const InnerContainer = styled.div`
margin-left: 80px;
`;

const Image = styled.div`
height:300px;
width: 300px;
margin-right: 30px;
padding-bottom: 10px;
border-radius: 10px;
`;
const Heading = styled.div`
display: flex;
align-items: center;
font-size: 18px;
font-weight:  500;
margin-bottom: 10px;
`;

const Bold = styled.div`
font-size: 20px;
font-weight: 600;
`;

const Description = styled.div`
color: gray;
width:95%;

`;

const formatPrice = (expectedPrice) => {
  if(expectedPrice<1e7){
    expectedPrice=expectedPrice.toFixed(2)/1e5 + " Lakhs";
  }
  else if(expectedPrice>1e7 && expectedPrice<1e9){  
    expectedPrice=expectedPrice.toFixed(2)/1e7 + " Cr";
  }
  return expectedPrice;
}



function Product() {

  const navigate = useNavigate();


  const [show, setShow] = useState(false);
  const handleShow = (id, e) => {
    e.stopPropagation();
    setShow(!show)
    // setShow(prevShow => ({ ...prevShow, [id]: !prevShow[id] }));
  };
  const expend = show ? "expend" : "noexpend";

   
  const filteredData = [
      {id: 1,
      appartmentName: "AggarWal Aditya enclave",
      location: "Gurgaon",
      bedroom: 3,
      area: [3000," sq.ft"],
      price:"10000000000",
      propertyType: "Apartment",
      pricePerSqft: 5000,
      expectedPrice: 15000000,
      bathroom: 2,
      profileType:"Owner",
      dateOfUpload:"17-01-2000",
      propertyAvailable: "Ready to move",
      description: "This is a 3 BHK apartment in AggarWal Aditya enclave, Gurgaon. It is a ready to move property. The unit is located on the 5th floor and has a super built-up area of 3000 sq. ft. It has 2 bathroom(s) and 2 balcony(s). The ownership is freehold type and has a super built-up area of 3000 sq. ft. The apartment has vitrified flooring. It is a north-east facing property and overlooks a 30 feet wide road. The apartment is 0-1 year old. The apartment has 1 covered parking. The expected price of this property is 1.5 Cr. The brokerage amount is 1% of the total property price.",
      pic: "https://www.w3schools.com/w3images/jeans3.jpg"},

      {id: 2,
      appartmentName: "Balaji Arcade",
      pic: "https://www.w3schools.com/w3images/jeans4.jpg",
      location: "Ghaziabad",
      bedroom:4,
      area: [2500," sq.ft"],
      price:"10000000",
      propertyType: "Villa",
      pricePerSqft: 5000,
      expectedPrice: 120000,
      bathroom: 2,
      profileType:"Dealer",
      dateOfUpload: "22-06-2000",
      description: "This is a 3 BHK apartment in AggarWal Aditya enclave, Gurgaon. It is a ready to move property. The unit is located on the 5th floor and has a super built-up area of 3000 sq. ft. It has 2 bathroom(s) and 2 balcony(s). The ownership is freehold type and has a super built-up area of 3000 sq. ft. The apartment has vitrified flooring. It is a north-east facing property and overlooks a 30 feet wide road. The apartment is 0-1 year old. The apartment has 1 covered parking. The expected price of this property is 1.5 Cr. The brokerage amount is 1% of the total property price.",
      propertyAvailable: "Under Construction"
      }
  ];

  return (
    <Wrapper>
      <Div1>
      <Sidebar/>
      </Div1>
    <InnerContainer>
    <Grid >
          {filteredData.map((e)=>( 
        <Div key={e.id} onClick={()=>navigate("/product-description")}  >          
        <div>
          <Image style={{backgroundImage: `url(${e.pic})`, backgroundSize:"cover"}}></Image>
        </div>
          <div>
          <Heading>{e.appartmentName}, {e.location}</Heading>
          <div className='m'> {e.bedroom} BHK {e.propertyType} in {e.appartmentName},{e.location}</div>
          
          <div className={show?"dn":"flx"}>
          <div className='m'>
          <Bold> ₹{formatPrice(e.expectedPrice)}</Bold>
          <div> ₹{e.pricePerSqft}/sq.ft</div>
          </div>

          <div className='seperator m'></div> 

          <div className='m'>
          <Bold style={{fontSize:"16px"}}> {e.area}</Bold>
          <div> Carpet Area</div>
          </div>
          <div className='seperator m'></div> 

          <div className='m'>
          <Bold style={{fontSize:"16px"}}> {e.bedroom} BHK ( {e.bathroom} Baths)</Bold>
          <div> {e.propertyAvailable}</div>
          </div>
          
          </div>
          <div className={expend} style={{display:"flex",justifyContent:"space-between",marginTop:"10px",padding:"10px",border:"0.5px solid gray",borderRadius:"5px"}}>
          <Description  className={expend} style={{top :"0"}} > {e.description}  </Description>
          <FaChevronDown style={{display:"flex",alignSelf:"baseline",height:"100%"}} onClick={(e)=>handleShow(e.id,e)} />
          </div>

          <div className='flx1 m'>
          <div><div style={{fontSize:"12px",color:"gray"}}>posted on</div><div style={{fontSize:"15px"}}>{e.dateOfUpload}</div><Bold>{e.profileType}</Bold></div>
          <div style={{display:"flex"}}>
          <Div2 ><BsFillTelephoneFill style={{padding:"0 5px"}} />Contact</Div2>
          </div>
          </div>
          


          </div>
        </Div>
        ))}
         </Grid> 
    </InnerContainer>
    </Wrapper>
  )
}

export default Product