import React from 'react'
import './pd.css'
import styled from 'styled-components'
import { CiHeart } from "react-icons/ci";

const Wrapper =styled.div`
margin: 50px;
`;

const Div = styled.div``;

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

const Heading=styled.div`
margin-right: 50px;
font-size: 20px;
color: gray;
font-weight: 400;
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
height: 200px;
width: 100%;
`;


function Productdes() {

  const dummydata=[
    {id: 1,
      dateOfUpload: '2021-08-20',
      propertyAvailable: 'Ready to move',
      expectedPrice: '1.5 Cr',
      pricePerSqft: '10,000',
      bedroom: 3,
      bathroom: 2,
      balcony: 2,
      propertyType: 'Apartment',
      propertyFor: 'Sale',
      appartmentName: 'Sai Residency',
      locality: 'Kondapur',
      location: 'Hyderabad',
      taxAndGovtCharges:'true',
      priceNegotiable:'true',
      propertyFloor: 3,
      totalFloor: 5,
      facing: 'East',
      ownerShip: 'Freehold',
      ageOfProperty: '5-10 years',
      flooring: 'Vitrified',
      furnishing: 'Semi-Furnished',
      closedParking: '1',
      waterSource: 'Borewell/Tank',
      discription:'rexytcyvubinmopkpjiuytruyrsxdtucfyvtubihjo',
      pic: 'https://www.w3schools.com/w3images/jeans3.jpg',
      area: 1500,
      amenities: ["Park", "Piped gas"],
      propertyFeatures: ["Recently Renovate", "Private garden", "False seeling Light"],
      societyFeatures: ["Gym", "Swimming Pool"],
      otherFeatures: ["Low Density property", "Seperate Entry for servent"],
      overlooking: ["Garden", "pool"],
      otherPropertyFeatures: [
        { "Pet Friendly": true },
        { "corner Property": true }
      ],
      locationAdvantages: "Near Metro",
      furnishType: [
        { "Light": "2" },
        { "Tv": "5" },
        { "Fan": "3" },
        { "Wardrobe": "2" },
        { "Bed": "2" },
      ],
      postedBy: "Owner",
    }

  ];
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



  return (
    <Wrapper>
     
      {dummydata.map((e) =>(
        <Div key={e.id}>
          
      <div style={{margin:"30px 100px 30px 0",display:"flex",justifyContent:"end"}}>Posted on {e.dateOfUpload}<div className='Vsep'></div><div>{e.propertyAvailable}</div></div>
        
          <div className='df jc'>
          <div className='df'>
            <Bold className='df'>
             <div style={{fontSize:"25px",lineHeight:"50px"}}>₹</div>{e.expectedPrice} 
            </Bold>
              <div style={{color:"gray",fontSize:"20px",display:"flex",lineHeight:"50px"}}>&nbsp; @ {e.pricePerSqft} Per Sq.ft</div>
            <div style={{height:"100px",lineHeight:"50px"}} className='Vsep'></div>
          <div style={{color:"gray"}}>
              <Bold style={{fontWeight:"200"}}>{e.bedroom}BHK&nbsp;{e.bathroom}Baths</Bold>
              <div className='m'>{e.propertyType} for {e.propertyFor}</div>
              <div className='m'>in {e.appartmentName},&nbsp;{e.locality},&nbsp;{e.location}</div>
          </div>
          </div>

          <div className='dg'>
            <Button>
              contact {e.postedBy}
            </Button>
            <Button style={{backgroundColor:"white",color:"red",display:"flex",alignItems:"center"}}>
            <CiHeart style={{height:"20px",width:"20px",marginRight:"5px"}} /> Short List
            </Button>
          </div>
        </div>
        <div style={{marginTop:"50px"}} className='df'>
          <Heading>Overview</Heading>
          <Heading>{e.postedBy} Details</Heading>
          <Heading>Recomendstion</Heading>
        </div>
          <div className='seperetor m'></div>
        
        <Grid>
        <div className='df'>
          <Image style={{backgroundImage: `url(${e.pic})`, backgroundSize:"cover"}}></Image>
          <div style={{width:"50%",margin:"20px"}}>
            <div className='df b'>
            <div style={{width:"50%"}}>
            <Heading> Area</Heading>
            <div>Super Built-up Area:&nbsp;{e.area} sq.ft</div>
            <div>Carpet Area:&nbsp;{e.area} sq.ft</div>
            </div>
            <div>
              <Heading>Configuration</Heading>
              <div>{e.bedroom} Bedrooms, {e.bathroom} Bathrooms, {e.balcony} balconies</div>
            </div>
            </div>
            <div className='seperetor m b'></div>

            <div className='df b'>
            <div style={{width:"50%"}}>
            <Heading> Price</Heading>
            <div>{e.expectedPrice}{handlegovtcharges(e)} {handleallinclusive(e)}</div>
            <div>@ {e.pricePerSqft} per Sq.ft. ({handlenegotiable(e)}) </div>
            </div>
            <div>
              <Heading>Address</Heading>
              <div>{e.appartmentName}</div>
              <div>{e.locality}, {e.location}</div>
            </div>
            </div>
            <div className='seperetor m b'></div>

            <div className='df b'>
            <div style={{width:"50%"}}>
            <Heading> Floor Number</Heading>
            <div>{e.propertyFloor} of {e.totalFloor} Floor</div>
            </div>
            <div>
              <Heading>Facing</Heading>
              <div>{e.facing}</div>
            </div>
            </div>
            <div className='seperetor m b'></div>

            <div style={{width:"50%"}}>
              <Heading>Property Age</Heading>
              <div>{e.ageOfProperty}</div>
            </div>

          </div>
        </div>
        </Grid>
        <div style={{marginTop:"50px"}} className='seperetor b'></div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <div className='df mr b'><div>Property Ownership: &nbsp;</div><Bold1>{e.ownerShip}</Bold1></div>
          <div className='df mr b'><div>Flooring: &nbsp;</div><Bold1>{e.flooring}</Bold1></div>
          <div className='df mr b'><div>Furnishing: &nbsp;</div><Bold1>{e.furnishing}</Bold1></div>
          <div className='df mr b'><div>Parking: &nbsp;</div><Bold1>{e.closedParking}&nbsp; Covered</Bold1></div>
          <div className='df mr b'><div>Water Source: &nbsp;</div><Bold1>{e.waterSource}</Bold1></div>
        </div>
        <div className='seperetor b'></div>
        <Heading1 className='b'>Property Description</Heading1>
        <Description>{e.discription}</Description>
        <div style={{marginTop:"30px"}} className='seperetor b'></div> 
        <Heading1 className='b'>{e.furnishing}</Heading1>
        <div>{e.furnishType && <FurnishTypeList data={e} />}</div>
          <div style={{marginTop:"30px"}} className='seperetor b'></div>
          <OwnerDeatils>
            <Heading className='b'>{e.postedBy} Details</Heading>
            <div>
              <img style={{height:"200px",width:"200px"}} src='' alt='Profile Picture'></img>
            </div>
          </OwnerDeatils>
          <div style={{marginTop:"30px"}} className='seperetor b'></div> 


        </Div>
))}
    </Wrapper>
  )
}

export default Productdes