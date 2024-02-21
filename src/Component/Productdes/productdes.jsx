import React , {useEffect, useState} from 'react'
import './pd.css'
import styled from 'styled-components'
import { CiHeart } from "react-icons/ci";
import Property from '../Home/property';
import { useNavigate,useLocation } from 'react-router-dom';
import Info from '../info';
import { getproperty } from '../Services/propertypost';


const Wrapper =styled.div`
margin: 50px;
`;

const Div = styled.div``;

const Div1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0 0 0;
`;

const Bold = styled.div`
font-size: 35px;
font-weight: 800;
`;
const Bold1 = styled.div`
font-weight: 700;
`;


const Button=styled.button`
padding: 5px 10px;
margin: 5px 10px;
border : 1px solid red;
border-radius: 10px;
font-size: 18px;
background-color: red;
color: white;
`;
const Button1=styled.button`
padding: 5px 10px;
margin: 5px 10px;
border : 1px solid red;
border-radius: 5px;
font-size: 18px;
background-color: gray;
color: white;
`;

const Heading=styled.div`
margin-right: 50px;
font-size: 20px;
color: gray;
font-weight: 400;
`;

const Select=styled.select`
height: 42px;
outline : none;
width: 80px;
border: 1px solid lightgray;
background-color: #cee0f0;
border-right-color: #dcc2c291;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
`;

const Div4=styled.div`
width: 260px;
display: flex;
height: 40px;
`;

const MinHeading=styled.div`
font-size: 20px;
font-weight: 500;
color: gray;
margin-left: 10px;
`;

const Heading1=styled.div`
margin-right: 50px;
font-size: 20px;
color: gray;
font-weight: 500;
`;

const Grid=styled.div`
margin-top: 50px;
border: 1px solid lightgray;
border-radius: 15px;
display: grid;
background-color: #f8f2f2;
grid-template-columns: repeat(1, minmax(50%, 1fr));
`;

const Image = styled.div`
height:fixed;
width: 400px;
margin-right: 30px;
padding-bottom: 10px;
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;
`;

const Description=styled.div`
font-size: 17px;
color: gray;
`;

const OwnerDeatils=styled.div`
background-color: aliceblue;
margin: 0px -50px;
padding: 30px 50px;
width:fixed;
color: #aba4a4;
display: flex;

`;

const Input=styled.input`
width: 250px;
height: 40px;
border-radius: 5px;
outline: none;
background-color: #cee0f0;
border: 1px solid lightgray;
padding: 0 5px;
`;
const Input1=styled.input`
width:100%;
height: 40px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
outline: none;
background-color: #cee0f0;
border: 1px solid lightgray;
padding: 0 5px;
`;
const Input2=styled.input`
width:250px;
height: 150px;
border-radius: 5px;
outline: none;
border: 1px solid lightgray;
background-color: aliceblue;
padding: 5px;
`;


function Productdes() {

  const formatPrice = (expectedPrice) => {
    if(expectedPrice<1e7){
      expectedPrice=expectedPrice.toFixed(2)/1e5 + " Lakhs";
    }
    else if(expectedPrice>1e7 && expectedPrice<1e9){  
      expectedPrice=expectedPrice.toFixed(2)/1e7 + " Cr";
    }
    return expectedPrice;
  }

  const convertTodate = () => {
    const timestamp = 1707292284847;
const date = new Date(timestamp);
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
const year = String(date.getFullYear()).slice(-2); // Get last two digits of year
const formattedDate = `${day}/${month}/${year}`;
return formattedDate;
  }

  // const dummydata=[
  //   {id: 1,
  //     dateOfUpload: '2021-08-20',
  //     propertyAvailable: 'Ready to move',
  //     expectedPrice: '1.5 Cr',
  //     pricePerSqft: '10,000',
  //     bedroom: 3,
  //     bathroom: 2,
  //     balcony: 2,
  //     propertyType: 'Apartment',
  //     propertyFor: 'Sale',
  //     appartmentName: 'Sai Residency',
  //     locality: 'Kondapur',
  //     location: 'Hyderabad',
  //     taxAndGovtCharges:'true',
  //     priceNegotiable:'true',
  //     propertyFloor: 3,
  //     totalFloor: 5,
  //     facing: 'East',
  //     ownerShip: 'Freehold',
  //     ageOfProperty: '5-10 years',
  //     flooring: 'Vitrified',
  //     furnishing: 'Semi-Furnished',
  //     closedParking: '1',
  //     waterSource: 'Borewell/Tank',
  //     discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta eget mauris at facilisis. Ut arcu nisi, vestibulum non turpis id, suscipit ornare leo. Etiam elementum leo eros, vitae lacinia nibh ornare quis. Duis vel varius ante, vel cursus arcu. Aliquam sodales cursus ipsum ut sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi auctor, leo at consequat convallis, ante augue congue arcu, finibus finibus nunc lacus eu risus. Vestibulum dapibus eros commodo ante consectetur, eu aliquam felis sollicitudin. Donec facilisis massa mi, nec aliquet urna condimentum eu. Proin id nulla nec neque aliquet congue non id nunc. Integer eu purus fermentum, condimentum felis eu, sagittis elit. Sed hendrerit sapien nec metus commodo ornare vitae fermentum libero. Morbi convallis odio sed risus iaculis scelerisque. Etiam pellentesque facilisis odio, at pharetra tortor pharetra vitae. Quisque elementum placerat metus non dictum. Vivamus quis mauris eget elit lobortis porttitor at et velit. Nulla pellentesque nulla eu cursus blandit. Integer ut efficitur odio. Quisque in justo efficitur mauris laoreet iaculis vitae ac tortor. Curabitur venenatis nibh sed turpis lobortis facilisis. Nam volutpat varius nisi non pretium. Suspendisse in dui ornare, maximus purus vel, sollicitudin velit. Pellentesque sed urna finibus, consectetur urna quis, consequat elit. Nullam et dui lobortis, pretium augue id, feugiat ligula. Aenean non urna ex. Nam tristique justo odio, ac interdum massa pulvinar sed. Phasellus in ipsum at odio elementum mattis. Vestibulum sed turpis et erat ullamcorper porta sit amet vitae leo. Nullam consectetur in lectus sed suscipit. Pellentesque fermentum ac quam a fermentum. Mauris blandit tincidunt nibh condimentum porttitor. Nunc dui arcu, elementum a orci et, venenatis vestibulum augue. Praesent placerat risus sit amet dolor pulvinar ullamcorper.  Pellentesque nunc orci, condimentum ac consequat sit amet, posuere ac velit. Nulla molestie diam et tellus porta aliquet. Proin gravida porttitor mi, nec auctor nibh ultricies ut. Maecenas non finibus purus. Pellentesque quis viverra mi. Morbi at scelerisque risus. Sed sit amet velit hendrerit, convallis metus id, facilisis sapien. Curabitur id neque sed enim commodo hendrerit at sed metus. Vivamus ligula est, eleifend nec placerat at, posuere et dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque rutrum arcu faucibus laoreet.Morbi augue tellus, posuere quis ex ac, porta rutrum arcu. Phasellus nec pulvinar sapien, sit amet accumsan erat. Donec a velit eget libero laoreet sodales quis eget nisl. Pellentesque vehicula dolor sapien, in pulvinar metus porttitor nec. Cras hendrerit, lorem at lobortis porta, erat diam semper lacus, vitae sagittis libero lacus non nibh. Sed blandit finibus purus, sed elementum neque pretium finibus. Nullam malesuada arcu at ligula rhoncus ullamcorper. Sed est magna, luctus eu nisi ac, condimentum vestibulum turpis. Pellentesque a consectetur libero. Aliquam erat volutpat. Curabitur maximus nibh id nisi egestas eleifend. Nam tempus metus quis augue efficitur, quis lobortis erat tempus. Phasellus sodales eleifend accumsan.',
  //     pic: 'https://www.w3schools.com/w3images/jeans3.jpg',
  //     area: 1500,
  //     amenities: ["Park", "Piped gas"],
  //     propertyFeatures: ["Recently Renovate", "Private garden", "False seeling Light"],
  //     societyFeatures: ["Gym", "Swimming Pool"],
  //     otherFeatures: ["Low Density property", "Seperate Entry for servent"],
  //     overlooking: ["Garden", "pool"],
  //     otherPropertyFeatures: [
  //       { "Pet Friendly": true },
  //       { "corner Property": true }
  //     ],
  //     locationAdvantages: "Near Metro",
  //     furnishType: [
  //       { "Light": "2" },
  //       { "Tv": "5" },
  //       { "Fan": "3" },
  //       { "Wardrobe": "2" },
  //       { "Bed": "2" },
  //     ],
  //     postedBy: "Owner",
  //     profilePicture: "https://www.w3schools.com/w3images/jeans3.jpg",
  //     firstName: "Rajesh",
  //   },

  // ];

const [propertyDes, setPropertyDes] = useState([]);

useEffect(() => {
  window.scrollTo(0, 0);
  getproperty().then((data) => {
  setPropertyDes(data);
  console.log("first",data)
  });
},[]);

const handlegovtcharges=(e)=>{
  if(e.taxAndGovtCharges==='true'){
    const govtcharges= " + Govt Charges"; 
    return govtcharges;
  }else{
    const govtcharges= "";
    return govtcharges;
  }
}
const handlenegotiable=(e)=>{
  if(e.priceNegotiable==='true'){
    const negotiable= "Negotiable"; 
    return negotiable;
  }else{
    const negotiable= "Non-Negotiable";
    return negotiable;
  }
}

const handleallinclusive=(e)=>{
  if(e.allInclusivePrice==='true'){
    const allinclusive= "All Inclusive"; 
    return allinclusive;
  }
  else{
    const allinclusive= "";
    return allinclusive;
  }
}

function FurnishTypeList({ data }) {
  return (
    <ul>
      {data.furnishType.map((item, index) => {
        const key = Object.keys(item)[0];
        return <div className='ft' key={index}>{`${key}: ${item[key]}`}</div>;
      })}
    </ul>
  );
}

const [buyer, setBuyer] = useState(true);
const [buyReason, setBuyReason] = useState(true);

const handleBuyer = () => {
  if (buyReason) {
    const data='Investment';
    return data;
  } else {
    const data='Self-Use';
    return data;
  }
};

const handleEnquiry = () => {
  if (buyer) {
    const data='Individual';
    return data;
  } else {
   const data='Dealer'; 
    return data;
  }
};

const [show, setShow] = useState(true);
  const handleShow = (id, e) => {
    e.stopPropagation();
    setShow(!show)
    // setShow(prevShow => ({ ...prevShow, [id]: !prevShow[id] }));
  };
  const expend = show ? "More" : "Less";


 const navigate=useNavigate();


 const [showInfo,setShowInfo]=useState(false);
 const handleInfo=()=>{
  setShowInfo(!showInfo) 
};
const { state } = useLocation();
const {id,dateOfUpload,propertyAvailable,expectedPrice,pricePerSqft,bedroom,bathroom,propertyType,propertyFor,appartmentName,locality,location,postedBy,pic,balcony,propertyFloor,totalFloor,facing,ageOfProperty,ownerShip,flooring,furnishing,closedParking,waterSource,discription,furnishType,profilePicture, firstName}=state

  return (
    <Wrapper>
      {showInfo && <Info  showInfo= {showInfo} setShowInfo={setShowInfo}/>}
     
      {propertyDes.map((e) =>(
        <Div key={id}>
          
      <div style={{margin:"30px 100px 30px 0",display:"flex",justifyContent:"end"}}>Posted on {convertTodate(dateOfUpload)}<div className='Vsep'></div><div>{propertyAvailable}</div></div>
        
          <div className='df jc'>
          <div className='df'>
            <Bold className='df'>
             <div style={{fontSize:"25px",lineHeight:"50px"}}>₹</div>{formatPrice(expectedPrice)} 
            </Bold>
              <div style={{color:"gray",fontSize:"20px",display:"flex",lineHeight:"50px"}}>&nbsp; @ {pricePerSqft} Per Sq.ft</div>
            <div style={{height:"100px",lineHeight:"50px"}} className='Vsep'></div>
          <div style={{color:"gray"}}>
              <Bold style={{fontWeight:"200"}}>{bedroom}BHK&nbsp;{bathroom}Baths</Bold>
              <div className='m'>{propertyType} for {propertyFor}</div>
              <div className='m'>in {appartmentName},&nbsp;{locality},&nbsp;{location}</div>
          </div>
          </div>

          <div className='dg'>
            <Button onClick={handleInfo}>
              contact {postedBy}
            </Button>
            <Button style={{backgroundColor:"white",color:"red",display:"flex",alignItems:"center"}}>
            <CiHeart style={{height:"20px",width:"20px",marginRight:"5px"}} /> Short List
            </Button>
          </div>
        </div>
        <div style={{marginTop:"50px"}} className='df'>
          <Heading>Overview</Heading>
          <Heading>{postedBy} Details</Heading>
          <Heading>Recomendstion</Heading>
        </div>
          <div className='seperetor m'></div>
        
        <Grid>
        <div className='df'>
          <Image style={{backgroundImage: `url(${pic})`, backgroundSize:"cover"}}></Image>
          <div style={{width:"50%",margin:"20px"}}>
            <div className='df b'>
            <div style={{width:"50%"}}>
            {/* <Heading> Area</Heading>
            <div>Super Built-up Area:&nbsp;{area.type.superBuiltupArea[0]} {area.type.superBuiltupArea[1]}</div>
            <div>Carpet Area:&nbsp;{area.type.carpetArea[0]} {area.type.carpetArea[1]}</div> */}
            </div>
            <div>
              <Heading>Configuration</Heading>
              <div>{bedroom} Bedrooms, {bathroom} Bathrooms, {balcony} balconies</div>
            </div>
            </div>
            <div className='seperetor m b'></div>

            <div className='df b'>
            <div style={{width:"50%"}}>
            <Heading> Price</Heading>
            <div>{formatPrice(expectedPrice)}{handlegovtcharges(e)} {handleallinclusive(e)}</div>
            <div>@ {pricePerSqft} per Sq.ft. ({handlenegotiable(e)}) </div>
            </div>
            <div>
              <Heading>Address</Heading>
              <div>{appartmentName}</div>
              <div>{locality}, {location}</div>
            </div>
            </div>
            <div className='seperetor m b'></div>

            <div className='df b'>
            <div style={{width:"50%"}}>
            <Heading> Floor Number</Heading>
            <div>{propertyFloor} of {totalFloor} Floor</div>
            </div>
            <div>
              <Heading>Facing</Heading>
              <div>{facing}</div>
            </div>
            </div>
            <div className='seperetor m b'></div>

            <div style={{width:"50%"}}>
              <Heading>Property Age</Heading>
              <div>{ageOfProperty}</div>
            </div>

          </div>
        </div>
        </Grid>
        <div style={{marginTop:"50px"}} className='seperetor b'></div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <div className='df mr b'><div>Property Ownership: &nbsp;</div><Bold1>{ownerShip}</Bold1></div>
          <div className='df mr b'><div>Flooring: &nbsp;</div><Bold1>{flooring}</Bold1></div>
          <div className='df mr b'><div>Furnishing: &nbsp;</div><Bold1>{furnishing}</Bold1></div>
          <div className='df mr b'><div>Parking: &nbsp;</div><Bold1>{closedParking} Covered</Bold1></div>
          <div className='df mr b'><div>Water Source: &nbsp;</div><Bold1>{waterSource}</Bold1></div>
        </div>
        <div className='seperetor b'></div>    
        <Heading1 className='b'>Property Description</Heading1>
        <Description className={expend}>{discription}</Description>
        <div style={{fontWeight:"500",marginTop:"10px",fontSize:"15px"}} onClick={(e)=>handleShow(e.id,e)}> View {expend}</div>
        <div style={{marginTop:"30px"}} className='seperetor b'></div> 
        <Heading1 className='b'>{furnishing}</Heading1>
        <div>{furnishType && <FurnishTypeList data={e} />}</div>
          <div style={{marginTop:"30px"}} className='seperetor b'></div>
          <OwnerDeatils>
            <div style={{width:"50%"}}>
            <Heading className='b'>{postedBy} Details</Heading>
            <div className='df'>
              <img style={{height:"200px",width:"170px",borderRadius:"10px",marginRight:"30px"}} src={profilePicture} alt='Profile Picture'></img>
              <div style={{height:"150px"}} className='df fd jc'>
                <div>
                <MinHeading>{firstName}</MinHeading>   
                <div style={{marginLeft:"10px"}}>{postedBy}</div>
                </div>
                <Button1 onClick={handleInfo}>View Phone No.</Button1>
              </div>
            </div>
            <div style={{marginTop:"10px"}} className='df'>
            <MinHeading>Localities: </MinHeading>
            <div style={{lineHeight:"27px",marginLeft:"10px"}} >{locality}</div>
            </div>
            </div>
    {/* flex */}
            <div style={{width:"40%"}}>
              <Heading className='b'>Send enquiry to {postedBy}</Heading>
              <div className='df width20 b'>
                <div className='jc1'>You are :</div>
                <div className='df w'>
                  <input type='radio' name='buyer' onClick={handleEnquiry} value='true' onChange={(e)=>{setBuyer(e.target.value)}}></input>
                  <div style={{marginLeft:"5px"}}>Individual</div>
                </div>
                <div className='df w'>
                  <input type='radio' onClick={handleEnquiry} name='buyer' value='false' onChange={(e)=>{setBuyer(e.target.value)}}></input>
                  <div style={{marginLeft:"5px"}}> Dealer</div>
                </div>
              </div>

              <div className='df width20 b'>
                <div className='jc1'>Your Reason to buy is :</div>
                <div className='df w'>
                  <input  type='radio' name='buyer' onClick={handleBuyer} value='true' onChange={(e)=>{setBuyReason(e.target.value)}}></input>
                  <div style={{marginLeft:"5px"}}>Investment</div>
                </div>
                <div className='df w'>
                  <input type='radio' name='buyer' value='false' onChange={(e)=>{setBuyReason(e.target.value)}}></input>
                  <div style={{marginLeft:"5px"}}> Self Use</div>
                </div>
              </div>
            
            <div className='df'>
              <div className='b' style={{display:"block"}}>
                <Input className='b' type='text' placeholder='Enter your Name' ></Input>
                <Input className='b' type='text' placeholder='Enter Email'></Input>
                <Div4 className='b'>
                  <Select>
                    <option value=''>Select</option>
                    <option value='India'>India</option>
                    <option value='USA'>USA</option>
                    <option value='UK'>UK</option>
                  </Select>
                  <Input1 type='text' placeholder='Enter Phone No.'></Input1>
                </Div4>
              </div>
              <div>
                <div>
                  <Input2 type='text' placeholder='Enter your Message'></Input2>
                </div>
              </div>
            </div>
            <Button>Send Enquiry</Button>
            </div>
          </OwnerDeatils>
          <div style={{marginTop:"30px"}} className='seperetor b'></div> 
          <Heading>Recommended Properties</Heading>
      <Div1 style={{width:"85%",marginLeft:"7%"}} onClick={() => { navigate("/product-description") }}>
        <Property/> 
      </Div1>

        </Div>
))}
    </Wrapper>
  )
}

export default Productdes