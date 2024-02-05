import React,{ useState }  from 'react'
import './product.css'
import styled from 'styled-components'
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Accordion, FormControl } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';






const Wrapper = styled.div`
padding: 10px 20px 10px 20px;
background-color: rgb(225, 225, 225);
border-radius: 10px;
width: 100%;
`;

const Heading = styled.div`
display: flex;
align-items: center;
font-size: 18px;
font-weight: bold 200;
color: red;
`;

const Clear = styled.div`
font-weight: 400;
font-size: 17px;
color: red;
`;

const Div = styled.span`
margin-right: 10px;
width: fit-content;
display: flex;
align-items: center;
padding: 5px 10px;
background-color: #ffffffbd;
border: 1px solid #251313;
border-radius: 20px;
margin: 5px 0;
`;


const SButton1 = styled.div`
font-size: 18px;
font-weight: 300;
display: flex;
width: fit-content;
margin: 5px;
padding: 8px 10px;
border-radius: 20px;
@media(max-width: 768px) {
    font-size: 18px;
}
`;
const Flex=styled.div`
display: flex;
margin: 10px 0 10px 10px;
`;
const Button=styled.input`
height: 20px;
width: 20px;
  border: 4px;
  border-color: gray;
  border-radius: 4px;
  font-size: 17px;
  padding: 0 2px 4px 2px;
  margin-right: 8px;
  &:hover{cursor: pointer;
  }
  `;

export default function sidebar() {

const [value2, setValue2] = useState([1e5, 1e8]);

const handleChange2 = (event, newValue) => {
    setValue2(newValue); // newValue is an array of two numbers
  }; 

// Function to format the value for display
const formatValue = (value) => {
    if (value >= 1e7) {
        return (value / 1e7).toFixed(2) + ' Crore';
    } else if (value >= 1e5) {
        return (value / 1e5).toFixed(2) + ' Lakh';
    } else {
        return value.toString();
    }
};

// Use formatValue when displaying the value

console.log("format",formatValue(value2));


const [checked3, setChecked3] = useState(false);
const handleChange3 = (event) => {
    setChecked3(!checked3);
    setSelectedFilter([...selectedFilter,"Flat/Appartment"]);
};
const buttonClass3 = checked3 ? 'bt' : 'bf';

const [checked4, setChecked4] = useState(false);
const handleChange4 = (event) => {
    setChecked4(!checked4);
    setSelectedFilter([...selectedFilter,"Indepedent Floor"]);
}
const buttonClass4 = checked4 ? 'bt' : 'bf';

const [checked5, setChecked5] = useState(false);
const handleChange5 = (event) => {
    setChecked5(!checked5);
    setSelectedFilter([...selectedFilter,"Independent House"]);
}
const buttonClass5 = checked5 ? 'bt' : 'bf';

const [checked6, setChecked6] = useState(false);
const handleChange6 = (event) => {
    setChecked6(!checked6);
    setSelectedFilter([...selectedFilter,"Farm House"]);
}
const buttonClass6 = checked6 ? 'bt' : 'bf';

const [checked7, setChecked7] = useState(false);
const handleChange7 = (event) => {
    setChecked7(!checked7);
    setSelectedFilter([...selectedFilter,"Other"]);
}
const buttonClass7 = checked7 ? 'bt' : 'bf';


const [checked8, setChecked8] = useState(false);
const handleChange8 = (event) => {
    setChecked8(!checked8);
    setSelectedFilter([...selectedFilter,"1 BHk/1 RK"]);
}
const buttonClass8 = checked8 ? 'bt' : 'bf';

const [checked9, setChecked9] = useState(false);

const handleChange9 = (event) => {
    setChecked9(!checked9);
    setSelectedFilter([...selectedFilter,"2BHK"]);
}
const buttonClass9 = checked9 ? 'bt' : 'bf';

const [checked10, setChecked10] = useState(false);
const handleChange10 = (event) => {
    setChecked10(!checked10);
    setSelectedFilter([...selectedFilter,"3BHK"]);
}
const buttonClass10 = checked10 ? 'bt' : 'bf';

const [checked11, setChecked11] = useState(false);
const handleChange11 = (event) => {
    setChecked11(!checked11);
    setSelectedFilter([...selectedFilter,"4BHK"]);
}
const buttonClass11 = checked11 ? 'bt' : 'bf';

const [checked12, setChecked12] = useState(false);
const handleChange12 = (event) => {
    setChecked12(!checked12);
    setSelectedFilter([...selectedFilter,"4+BHK"]);
}
const buttonClass12 = checked12 ? 'bt' : 'bf';


const [checked13, setChecked13] = useState(false);
const handleChange13 = (event) => {
    setChecked13(!checked13);
    setSelectedFilter([...selectedFilter,"New Launch"]);
}
const buttonClass13 = checked13 ? 'bt' : 'bf';


const [checked14, setChecked14] = useState(false);
const handleChange14 = (event) => {
    setChecked14(!checked14);
    setSelectedFilter([...selectedFilter,"Under Construction"]);
}
const buttonClass14 = checked14 ? 'bt' : 'bf';


const [checked15, setChecked15] = useState(false);
const handleChange15 = (event) => {
    setChecked15(!checked15);
    setSelectedFilter([...selectedFilter,"Ready to move"]);
}
const buttonClass15 = checked15 ? 'bt' : 'bf';


const [checked16, setChecked16] = useState(false);

const handleChange16 = (event) => {
    setChecked16(!checked16);
    setSelectedFilter([...selectedFilter,"Owner"]);
}
const buttonClass16 = checked16 ? 'bt' : 'bf';


const [checked17, setChecked17] = useState(false);
const handleChange17 = (event) => {
    setChecked17(!checked17);
    setSelectedFilter([...selectedFilter,"Builder"]);
}
const buttonClass17 = checked17 ? 'bt' : 'bf';


const [checked18, setChecked18] = useState(false);
const handleChange18 = (event) => {
    setChecked18(!checked18);
    setSelectedFilter([...selectedFilter,"Dealer"]);
}
const buttonClass18 = checked18 ? 'bt' : 'bf';


const [checked19, setChecked19] = useState(false);
const handleChange19 = (event) => {
    setChecked19(!checked19);
    setSelectedFilter([...selectedFilter,"Featured Dealer"]);
}
const buttonClass19 = checked19 ? 'bt' : 'bf';


const [value3, setValue3] = useState([0, 4000]);

const handleSlider2 = (event, newValue) => {
    setValue3(newValue); // newValue is an array of two numbers
  }

const [checked20, setChecked20] = useState(false);
const handleChange20 = (event) => {
    setChecked20(!checked20);
    setSelectedFilter([...selectedFilter,"Parking"]);
}
const buttonClass20 = checked20 ? 'bt' : 'bf';

const [checked21, setChecked21] = useState(false);
const handleChange21 = (event) => {
    setChecked21(!checked21);
    setSelectedFilter([...selectedFilter,"Park"]);
}
const buttonClass21 = checked21 ? 'bt' : 'bf';

const [checked22, setChecked22] = useState(false);

const handleChange22 = (event) => { 
    setChecked22(!checked22);
    setSelectedFilter([...selectedFilter,"Gas Piped Line"]);
}
const buttonClass22 = checked22 ? 'bt' : 'bf';

const [checked23, setChecked23] = useState(false);
const handleChange23 = (event) => {
    setChecked23(!checked23);
    setSelectedFilter([...selectedFilter,"Power Backup"]);
}
const buttonClass23 = checked23 ? 'bt' : 'bf';

const [checked24, setChecked24] = useState(false);
const handleChange24 = (event) => {
    setChecked24(!checked24);
    setSelectedFilter([...selectedFilter,"Lift"]);
}
const buttonClass24 = checked24 ? 'bt' : 'bf';

const [checked25, setChecked25] = useState(false);
const handleChange25 = (event) => {
    setChecked25(!checked25);
    setSelectedFilter([...selectedFilter,"Gym"]);
}
const buttonClass25 = checked25 ? 'bt' : 'bf';

const [checked26, setChecked26] = useState(false);
const handleChange26 = (event) => {
    setChecked26(!checked26);
    setSelectedFilter([...selectedFilter,"Swimming Pool"]);
}
const buttonClass26 = checked26 ? 'bt' : 'bf';

const [checked27, setChecked27] = useState(false);
const handleChange27 = (event) => {
    setChecked27(!checked27);
    setSelectedFilter([...selectedFilter,"Club Room"]);
}
const buttonClass27 = checked27 ? 'bt' : 'bf';


const [checked28, setChecked28] = useState(false);
const handleChange28 = (event) => {
    setChecked28(!checked28);
    setSelectedFilter([...selectedFilter,"Furnished"]);
}
const buttonClass28 = checked28 ? 'bt' : 'bf';

const [checked29, setChecked29] = useState(false);
const handleChange29 = (event) => {
    setChecked29(!checked29);
    setSelectedFilter([...selectedFilter,"Semi-Furnished"]);
}
const buttonClass29 = checked29 ? 'bt' : 'bf';

const [checked30, setChecked30] = useState(false);
const handleChange30 = (event) => {
    setChecked30(!checked30);
    setSelectedFilter([...selectedFilter,"Un-Furnished"]);
}
const buttonClass30 = checked30 ? 'bt' : 'bf';

const [selectedFilter,setSelectedFilter]=useState([]);


const removeItem = (e) => {
        const itemtoremove = e.target.getAttribute('data-value');
        console.log("first",itemtoremove);
        setSelectedFilter(selectedFilter.filter(item => item !== itemtoremove));
}



  return (
    <Wrapper>
        <div className='sb height'>
        <Heading>Applied Filter</Heading>
        <Clear>Clear All</Clear>
        </div>
        {selectedFilter.map((item) => (
        <Div key={item.id}>{item} <div data-value={item} onClick={(e)=>removeItem(e)}>❌</div></Div>
        ))}

        <div className='sb height' > 
        <Heading>Property with Photos</Heading>
        <Switch inputProps={{ 'aria-label': 'controlled' }}color='warning'/>
        </div>

        <div className='height'> 

       
        <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%",marginBottom:"10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Heading>Budget</Heading>
        </AccordionSummary>
        <AccordionDetails>
        
          <Slider
        getAriaLabel={() => 'Maximum distance shift xl'}
        value={value2}
        min={1e5}
        max={1e8}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        valueLabelFormat={formatValue}
        disableSwap
        />
        <div className='sb'>
        <FormControl style={{ marginRight:"5px",minWidth: "100px" }}>
        <InputLabel id="demo-simple-helper-label">Min Budget</InputLabel>
        <Select
        style={{ width: "100px",height:"40px" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Min Budget"
          backgroundColor='red'
        //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5*1e5}>5-10 Lakh</MenuItem>
          <MenuItem value={10*1e5}>10-20 Lakhs</MenuItem>
          <MenuItem value={20*1e5}>20-30 Lakhs</MenuItem>
          <MenuItem value={30*1e5}>30-40 Lakhs</MenuItem>
            <MenuItem value={40*1e5}>40-50 Lakhs</MenuItem>
            <MenuItem value={50*1e5}>50-60 Lakhs</MenuItem>
            <MenuItem value={60*1e5}>60-70 Lakhs</MenuItem>
            <MenuItem value={70*1e5}>70-80 Lakhs</MenuItem>
            <MenuItem value={80*1e5}>80-90 Lakhs</MenuItem>
            <MenuItem value={90*1e5}>90-100 Lakhs</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={{ minWidth: "100px" }}>
        <InputLabel id="demo-simple-helper-label">Max Budget</InputLabel>
        <Select
        style={{ width: "100px",height:"40px" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Max Budget"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10*1e5}>10-20 Lakhs</MenuItem>
          <MenuItem value={20*1e5}>20-30 Lakhs</MenuItem>
          <MenuItem value={30*1e5}>30-40 Lakhs</MenuItem>
            <MenuItem value={40*1e5}>40-50 Lakhs</MenuItem>
            <MenuItem value={50*1e5}>50-60 Lakhs</MenuItem>
            <MenuItem value={60*1e5}>60-70 Lakhs</MenuItem>
            <MenuItem value={70*1e5}>70-80 Lakhs</MenuItem>
            <MenuItem value={80*1e5}>80-90 Lakhs</MenuItem>
            <MenuItem value={90*1e5}>90-100 Lakhs</MenuItem>
        </Select>
      </FormControl>
      </div>
         
        </AccordionDetails>
      </Accordion>
        </div>

<div className='seperetor'></div>
        <div className='height'> 
        <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Heading>Type of Property</Heading>
        </AccordionSummary>
        <div className='od' >
            <SButton1 className={buttonClass3} onClick={handleChange3}>{checked3?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange3} style={{padding:"0 0 0 7px"}}>Flat/Appartment</div></SButton1>
            </div>
            <div className='od' >
            <SButton1 className={buttonClass4} onClick={handleChange4}>{checked4?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange4} style={{padding:"0 0 0 7px"}}>Indepedent Floor</div></SButton1>
            </div>
            <div className='od' >
            <SButton1 className={buttonClass5} onClick={handleChange5}>{checked5?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange5} style={{padding:"0 0 0 7px"}}>Independent House</div></SButton1>
            </div>
            <div className='od' >
            <SButton1 className={buttonClass6} onClick={handleChange6}>{checked6?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange6} style={{padding:"0 0 0 7px"}}>Farm House</div></SButton1>
            </div>
            <div className='od' >
            <SButton1 className={buttonClass7} onClick={handleChange7}>{checked7?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange7} style={{padding:"0 0 0 7px"}}>Other</div></SButton1>
            </div>
         
      </Accordion>
    </div>

    <div className='seperetor'></div>
    <div className='height'> 
    <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%"}}>

    <AccordionSummary   
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Heading>No. of Bedroom</Heading>
            </AccordionSummary>
            <div className='flex'>
            <div className='od' >
        <SButton1 className={buttonClass8} onClick={handleChange8}>{checked8?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange8} style={{padding:"0 0 0 7px"}}>1 BHk/1 RK</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass9} onClick={handleChange9}>{checked9?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange9} style={{padding:"0 0 0 7px"}}>2BHK</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass10} onClick={handleChange10}>{checked10?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange10} style={{padding:"0 0 0 7px"}}>3BHK</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass11} onClick={handleChange11}>{checked11?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange11} style={{padding:"0 0 0 7px"}}>4BHK</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass12} onClick={handleChange12}>{checked12?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange12} style={{padding:"0 0 0 7px"}}>4+BHK</div></SButton1>
        </div>
        </div>
    </Accordion>
    </div>

    <div className='seperetor'></div>
    <div className='height'> 
    <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%"}}>

    <AccordionSummary   
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Heading>Construction Status</Heading>
            </AccordionSummary>
            <div className='flex'>
            <div className='od' >
        <SButton1 className={buttonClass13} onClick={handleChange13}>{checked13?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange13} style={{padding:"0 0 0 7px"}}>New Launch</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass14} onClick={handleChange14}>{checked14?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange14} style={{padding:"0 0 0 7px"}}>Under Construction</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass15} onClick={handleChange15}>{checked15?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange15} style={{padding:"0 0 0 7px"}}>Ready to move</div></SButton1>
        </div>
        </div>
    </Accordion>
    </div>

    <div className='seperetor'></div>
    <div className='height'> 
    <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%"}}>

    <AccordionSummary   
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Heading>Posted By</Heading>
            </AccordionSummary>
            <div className='flex'>
            <div className='od' >
        <SButton1 className={buttonClass16} onClick={handleChange16}>{checked16?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange16} style={{padding:"0 0 0 7px"}}>Owner</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass17} onClick={handleChange17}>{checked17?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange17} style={{padding:"0 0 0 7px"}}>Builder</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass18} onClick={handleChange18}>{checked18?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange18} style={{padding:"0 0 0 7px"}}>Dealer</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass19} onClick={handleChange19}>{checked19?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange19} style={{padding:"0 0 0 7px"}}>Featured Dealer</div></SButton1>
        </div>
        </div>
    </Accordion>
    </div>



    <div className='seperetor'></div>

    <div className='height'> 

       
        <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%",marginBottom:"10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Heading>Area</Heading>
        </AccordionSummary>

        <AccordionDetails>
        
          <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value3}
        min={0}
        max={4000}
        onChange={handleSlider2}
        valueLabelDisplay="auto"
        // valueLabelFormat={formatValue}
        disableSwap
        />

        <div className='sb'>
        <FormControl style={{ marginRight:"5px",marginBottom:"10px",minWidth: "100px" }}>
        <InputLabel id="demo-simple-helper-label">Min Area</InputLabel>
        <Select
        style={{ width: "100px",height:"40px" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Min Area"
          backgroundColor='red'
        //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={300}>300</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={700}>700</MenuItem>
            <MenuItem value={900}>900</MenuItem>
            <MenuItem value={1200}>1200</MenuItem>
            <MenuItem value={1500}>1500</MenuItem>
            <MenuItem value={1800}>1800</MenuItem>
            <MenuItem value={2200}>2200</MenuItem>
            <MenuItem value={2600}>2600</MenuItem>
            <MenuItem value={3000}>3000</MenuItem>
            <MenuItem value={3500}>3500</MenuItem>
            <MenuItem value={4000}>4000</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={{ minWidth: "100px" }}>
        <InputLabel id="demo-simple-helper-label">Max Area</InputLabel>
        <Select
        style={{ width: "100px",height:"40px" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Max Area"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={100}>200</MenuItem>
          <MenuItem value={300}>300</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={700}>700</MenuItem>
            <MenuItem value={900}>900</MenuItem>
            <MenuItem value={1200}>1200</MenuItem>
            <MenuItem value={1500}>1500</MenuItem>
            <MenuItem value={1800}>1800</MenuItem>
            <MenuItem value={2200}>2200</MenuItem>
            <MenuItem value={2600}>2600</MenuItem>
            <MenuItem value={3000}>3000</MenuItem>
            <MenuItem value={3500}>3500</MenuItem>
            <MenuItem value={4000}>4000</MenuItem>
        </Select>
      </FormControl>
      </div>
         
        </AccordionDetails>
      </Accordion>
        </div>


        <div className='seperetor'></div>
        <div className='height'>
        <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Heading>Localities</Heading>
        </AccordionSummary>
        <Flex> <Button type='checkbox'></Button> Sahibabd</Flex>
          <Flex> <Button type='checkbox'></Button> Indirapuram</Flex>
          <Flex> <Button type='checkbox'></Button> Vasundhara</Flex>
          <Flex> <Button type='checkbox'></Button> Raj Nagar Extension</Flex>
          <Flex> <Button type='checkbox'></Button> Hardcoded!!!</Flex>
        
    </Accordion>
    </div>

    <div className='seperetor'></div>
    <div className='height'> 
    <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%"}}>

    <AccordionSummary   
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Heading>Amenities</Heading>
            </AccordionSummary>
            <div className='flex'>
            <div className='od' >
        <SButton1 className={buttonClass20} onClick={handleChange20}>{checked20?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange20} style={{padding:"0 0 0 7px"}}>Parking</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass21} onClick={handleChange21}>{checked21?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange21} style={{padding:"0 0 0 7px"}}>Park</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass22} onClick={handleChange22}>{checked22?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange22} style={{padding:"0 0 0 7px"}}>Gas Piped Line</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass23} onClick={handleChange23}>{checked23?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange23} style={{padding:"0 0 0 7px"}}>Power Backup</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass24} onClick={handleChange24}>{checked24?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange24} style={{padding:"0 0 0 7px"}}>Lift</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass25} onClick={handleChange25}>{checked25?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange25} style={{padding:"0 0 0 7px"}}>Gym</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass26} onClick={handleChange26}>{checked26?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange26} style={{padding:"0 0 0 7px"}}>Swimming Pool</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass27} onClick={handleChange27}>{checked27?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange27} style={{padding:"0 0 0 7px"}}>Club Room</div></SButton1>
        </div>
        </div>

    </Accordion>
    </div>

    <div className='seperetor'></div>
    <div className='height'> 
    <Accordion style={{backgroundColor:"rgb(225, 225, 225)",boxShadow:"none",width:"100%"}}>

    <AccordionSummary   
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Heading>Furnishing Status</Heading>
            </AccordionSummary>
            <div className='flex'>
            <div className='od' >
        <SButton1 className={buttonClass28} onClick={handleChange28}>{checked28?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange28} style={{padding:"0 0 0 7px"}}>Furnished</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass29} onClick={handleChange29}>{checked29?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange29} style={{padding:"0 0 0 7px"}}>Semi-Furnished</div></SButton1>
        </div>
        <div className='od' >
        <SButton1 className={buttonClass30} onClick={handleChange30}>{checked30?<div>✔️ </div>:<div>➕</div>} <div onClick={handleChange30} style={{padding:"0 0 0 7px"}}>Un-Furnished</div></SButton1>
        </div>
        </div>
    </Accordion>
    </div>


    </Wrapper>
  )
}

