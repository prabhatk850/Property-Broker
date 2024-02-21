import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { getproperty } from '../Services/propertypost';
import Info from '../info';



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
justify-content: space-between;
min-width: 100%;
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
width: 100%;
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
min-width: 95%;

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

  const convertTodate = () => {
    const timestamp = 1707292284847;
const date = new Date(timestamp);
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
const year = String(date.getFullYear()).slice(-2); // Get last two digits of year
const formattedDate = `${day}/${month}/${year}`;
return formattedDate;
  }

  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    getproperty().then((response) => {
      setPropertyList(response);
      console.log("first",response )
      console.log("second",propertyList)
    });
  }, []);

  const navigate = useNavigate();


  const [show, setShow] = useState(false);
  const handleShow = (id, e) => {
    e.stopPropagation();
    setShow(!show)
    // setShow(prevShow => ({ ...prevShow, [id]: !prevShow[id] }));
  };
  const expend = show ? "expend" : "noexpend";

   
  // const filteredData = [
  //     {id: 1,
  //     appartmentName: "AggarWal Aditya enclave",
  //     location: "Gurgaon",
  //     bedroom: 3,
  //     area: [3000," sq.ft"],
  //     price:"10000000000",
  //     propertyType: "Apartment",
  //     pricePerSqft: 5000,
  //     expectedPrice: 15000000,
  //     bathroom: 2,
  //     profileType:"Owner",
  //     dateOfUpload:"17-01-2000",
  //     propertyAvailable: "Ready to move",
  //     description: "w",
  //     pic: "https://www.w3schools.com/w3images/jeans3.jpg"},

  //     {id: 2,
  //     appartmentName: "Balaji Arcade",
  //     pic: "https://www.w3schools.com/w3images/jeans4.jpg",
  //     location: "Ghaziabad",
  //     bedroom:4,
  //     area: [2500," sq.ft"],
  //     price:"10000000",
  //     propertyType: "Villa",
  //     pricePerSqft: 5000,
  //     expectedPrice: 120000,
  //     bathroom: 2,
  //     profileType:"Dealer",
  //     dateOfUpload: "22-06-2000",
  //     description: "This is a 3 BHK apartment in AggarWal Aditya enclave, Gurgaon. It is a ready to move property. The unit is located on the 5th floor and has a super built-up area of 3000 sq. ft. It has 2 bathroom(s) and 2 balcony(s). The ownership is freehold type and has a super built-up area of 3000 sq. ft. The apartment has vitrified flooring. It is a north-east facing property and overlooks a 30 feet wide road. The apartment is 0-1 year old. The apartment has 1 covered parking. The expected price of this property is 1.5 Cr. The brokerage amount is 1% of the total property price.",
  //     propertyAvailable: "Under Construction"
  //     }
  // ];

  const [showInfo,setShowInfo]=useState(false);
 const handleInfo=(id, e)=>{
  e.stopPropagation();
  setShowInfo(!showInfo) 
};



  return (
    <Wrapper>
       {showInfo && <Info  showInfo= {showInfo} setShowInfo={setShowInfo}/>}
      <Div1>
      <Sidebar/>
      </Div1>
    <InnerContainer>
    <Grid >
          {propertyList.map((e)=>( 
        <Div key={e.id} onClick={()=>navigate("/product-description",{state:{
          "id":e.id,
          "appartmentName":e.appartmentName,
          "price":e.price,
          "pricePerSqft":e.pricePerSqft,  
          "bedroom":e.bedroom,
          "bathroom":e.bathroom, 
          "balcony":e.balcony, 
          "propertyType":e.propertyType,
          "propertyFor":e.propertyFor,  
          "locality":e.locality,
          "location":e.location,
          "area":e.area,
          "expectedPrice":e.expectedPrice,
          "profileType":e.profileType,
          "dateOfUpload":e.dateOfUpload,
          "discription":e.discription,
          "propertyAvailable":e.propertyAvailable,
          "pic":e.pic,
          "taxAndGovtCharges":e.taxAndGovtCharges,
          "totalFloor":e.totalFloor,
          "propertyFloor":e.propertyFloor,
          "facing":e.facing,
          "ownerShip":e.ownerShip,
          "flooring":e.flooring,
          "furishing":e.furishing,
          "closeParking":e.closeParking,
          "openParking":e.openParking,
          "furnishing":e.furnishing,
          "furnishType":e.furnishType,
          "ageOfProperty":e.ageOfProperty,
          "waterSource":e.waterSource,

        }})}>          
        <div>
          <Image style={{backgroundImage: `url(${"https://www.w3schools.com/w3images/jeans3.jpg"})`, backgroundSize:"cover"}}></Image>
        </div>
          <div style={{width:"100%"}}>
          <Heading>{e.appartmentName}, {e.location}</Heading>
          <div className='m b'> {e.bedroom} BHK {e.propertyType} in {e.appartmentName},{e.location}</div>
          
          <div className={show?"dn":"flx"}>
          <div className='m'>
          <Bold> ₹{formatPrice(e.expectedPrice)}</Bold>
          <div> ₹{e.pricePerSqft}/sq.ft</div>
          </div>

          <div className='seperator m'></div> 

          <div className='m'>
            
          <Bold style={{fontSize:"16px"}}> {e.area.type.carpetArea[0]} {e.area.type.carpetArea[1]}</Bold>
          <div> Carpet Area</div>
          </div>
          <div className='seperator m'></div> 

          <div className='m'>
          <Bold style={{fontSize:"16px"}}> {e.bedroom} BHK ( {e.bathroom} Baths)</Bold>
          <div> {e.propertyAvailable}</div>
          </div>
          
          </div>
          <div className={expend} style={{display:"flex",justifyContent:"space-between",marginTop:"10px",padding:"10px",border:"0.5px solid gray",borderRadius:"5px"}}>
          <Description  className={expend} style={{top :"0"}} > {e.discription}  </Description>
          <FaChevronDown style={{display:"flex",alignSelf:"baseline",height:"100%"}} onClick={(e)=>handleShow(e.id,e)} />
          </div>

          <div className='flx1 m'>
          <div><div style={{fontSize:"12px",color:"gray"}}>posted on</div><div style={{fontSize:"18px"}}>{convertTodate(e.dateOfUpload)}</div><Bold>{e.profileType}</Bold></div>
          <div style={{display:"flex"}}>
          <Div2 onClick={(e)=>{handleInfo(e.id,e)}} ><BsFillTelephoneFill style={{padding:"0 5px"}} />Contact</Div2>
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