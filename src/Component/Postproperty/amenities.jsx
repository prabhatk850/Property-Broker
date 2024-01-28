import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import "./ocbc.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { addProperty } from "../Services/propertypost";

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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0 0px 0 50px;
  @media (max-width: 768px) {
    margin: 0 5%;
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
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const Div2 = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button1 = styled.input`
  height: 20px;
  width: 20px;
  background: red;
  border-color: gray;
  border-radius: 4px;
  font-size: 17px;
  padding: 0 2px 4px 2px;
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const Supersub = styled.div`
  font-size: 15px;
  font-weight: 200;
  min-width: 50px;
  color: black;
  padding-bottom: 10px;
  margin-top: 15px;
  @media (max-width: 768px) {
  }
`;

const Button = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: white;
  background-color: red;
  padding: 15px 25px;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    background-color: #fa5050;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SButton1 = styled.div`
  font-size: 18px;
  font-weight: 300;
  display: flex;
  margin: 5px;
  padding: 8px 10px;
  border-radius: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    width: 200px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Div1 = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  height: 35px;
  font-size: 20px;
  padding: 0 10px;
  color: gray;
  border: 1px solid #d9d9d9;
  outline: none;
  width: 25%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Choice = styled.option`
  color: gray;
`;

function Amenities() {
  const location = useLocation();
  const { PreviousData } = location.state;

  const [finalData, setFinalData] = useState(PreviousData);

  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState("gray");

  const updateData = (caseParam, value) => {
    console.log("firstu", caseParam, value);
    switch (caseParam) {
      case "amenities":
        console.log("amenities");
        if (finalData.amenities === undefined) {
          setFinalData({ ...finalData, amenities: [value] });
        } else {
          setFinalData({
            ...finalData,
            amenities: [...finalData.amenities, value],
          });
          console.log("firsttt", finalData.amenities);
        }
        break;

      case "propertyFeatures":
        if (finalData.propertyFeatures === undefined) {
          setFinalData({ ...finalData, propertyFeatures: [value] });
        } else {
          setFinalData({
            ...finalData,
            propertyFeatures: [...finalData.propertyFeatures, value],
          });
          console.log("firsttt", finalData.propertyFeatures);
        }
        console.log("firstu", value);
        break;

      case "societyFeatures":
        if (finalData.societyFeatures === undefined) {
          setFinalData({ ...finalData, societyFeatures: [value] });
        } else {
          setFinalData({
            ...finalData,
            societyFeatures: [...finalData.societyFeatures, value],
          });
          console.log("firsttt", finalData.societyFeatures);
        }
        console.log("firstu", value);
        break;

      case "otherFeatures":
        if (finalData.otherFeatures === undefined) {
          setFinalData({ ...finalData, otherFeatures: [value] });
        } else {
          setFinalData({
            ...finalData,
            otherFeatures: [...finalData.otherFeatures, value],
          });
          console.log("firsttt", finalData.otherFeatures);
        }
        console.log("firstu", value);
        break;

      case "waterSource":
        if (finalData.waterSource === undefined) {
          setFinalData({ ...finalData, waterSource: [value] });
        } else {
          setFinalData({
            ...finalData,
            waterSource: [...finalData.waterSource, value],
          });
          console.log("firsttt", finalData.waterSource);
        }
        console.log("firstu", value);
        break;

      case "overlooking":
        if (finalData.overlooking === undefined) {
          setFinalData({ ...finalData, overlooking: [value] });
        } else {
          setFinalData({
            ...finalData,
            overlooking: [...finalData.overlooking, value],
          });
          console.log("firsttt", finalData.overlooking);
        }
        console.log("firstu", value);
        break;

      case "locationAdvantages":
        if (finalData.locationAdvantages === undefined) {
          setFinalData({ ...finalData, locationAdvantages: [value] });
        } else {
          setFinalData({
            ...finalData,
            locationAdvantages: [...finalData.locationAdvantages, value],
          });
          console.log("firsttt", finalData.locationAdvantages);
        }
        console.log("firstu", value);
        break;
    }
  };

  const handlecolor = (e) => {
    if (color === "gray") {
      setColor("red");
    } else {
      setColor("gray");
    }
    setChecked(!checked);
    const value = e.target.getAttribute("data-value");
    console.log("first2", finalData);
    // checked? setFinalData({...finalData,"amenities":[]}):setFinalData({...finalData,"amenities":[value]})
    updateData("amenities", value);
  };

  const [checked1, setChecked1] = useState(false);
  const [color1, setColor1] = useState("gray");
  const handlecolor1 = (e) => {
    if (color1 === "gray") {
      setColor1("red");
    } else {
      setColor1("gray");
    }
    setChecked1(!checked1);
    const value = e.target.getAttribute("data-value");
    console.log("1", value);
    // setFinalData({...finalData,"amenities":[...finalData.amenities,value]})
    updateData("amenities", value);
  };

  const [checked2, setChecked2] = useState(false);
  const [color2, setColor2] = useState("gray");
  const handlecolor2 = (e) => {
    if (color2 === "gray") {
      setColor2("red");
    } else {
      setColor2("gray");
    }
    setChecked2(!checked2);
    const value = e.target.getAttribute("data-value");
    console.log("3", value);
    // setFinalData({...finalData,"amenities":[...finalData.amenities,value]})
    updateData("amenities", value);
  };

  const [checked3, setChecked3] = useState(false);
  const [color3, setColor3] = useState("gray");
  const handlecolor3 = (e) => {
    if (color3 === "gray") {
      setColor3("red");
    } else {
      setColor3("gray");
    }
    setChecked3(!checked3);
    const value = e.target.getAttribute("data-value");
    // setFinalData({...finalData,"amenities":[...finalData.amenities,value]})
    console.log("4", finalData);
    updateData("amenities", value);
  };

  const [checked4, setChecked4] = useState(false);
  const [color4, setColor4] = useState("gray");
  const handlecolor4 = (e) => {
    if (color4 === "gray") {
      setColor4("red");
    } else {
      setColor4("gray");
    }
    setChecked4(!checked4);
    const value = e.target.getAttribute("data-value");
    // setFinalData({...finalData,"amenities":[...finalData.amenities,value]})
    updateData("amenities", value);
  };

  const [checked5, setChecked5] = useState(false);
  const [color5, setColor5] = useState("gray");
  const handlecolor5 = (e) => {
    if (color5 === "gray") {
      setColor5("red");
    } else {
      setColor5("gray");
    }
    setChecked5(!checked5);
    const value = e.target.getAttribute("data-value");
    // setFinalData({...finalData,"amenities":[...finalData.amenities,value]})
    updateData("amenities", value);
  };

  const [checked6, setChecked6] = useState(false);
  const [color6, setColor6] = useState("gray");
  const handlecolor6 = (e) => {
    if (color6 === "gray") {
      setColor6("red");
    } else {
      setColor6("gray");
    }
    setChecked6(!checked6);
    const value = e.target.getAttribute("data-value");
    // setFinalData({...finalData,"amenities":[...finalData.amenities,value]})
    updateData("amenities", value);
    console.log("firstfin", finalData);
  };

  const [checked7, setChecked7] = useState(false);
  const [color7, setColor7] = useState("gray");
  const handlecolor7 = (e) => {
    setChecked7(!checked7);
    const value = e.target.getAttribute("data-value");
    checked
      ? setFinalData({ ...finalData, propertyFeatures: [] })
      : setFinalData({ ...finalData, propertyFeatures: [value] });

    if (color7 === "gray") {
      setColor7("red");
    } else {
      setColor7("gray");
    }
  };

  const [checked8, setChecked8] = useState(false);
  const [color8, setColor8] = useState("gray");
  const handlecolor8 = (e) => {
    setChecked8(!checked8);
    const value = e.target.getAttribute("data-value");
    setFinalData({
      ...finalData,
      propertyFeatures: [...finalData.propertyFeatures, value],
    });

    if (color8 === "gray") {
      setColor8("red");
    } else {
      setColor8("gray");
    }
  };

  const [checked9, setChecked9] = useState(false);
  const [color9, setColor9] = useState("gray");
  const handlecolor9 = (e) => {
    setChecked9(!checked9);
    const value = e.target.getAttribute("data-value");
    updateData("propertyFeatures", value);
    console.log("9", finalData);

    if (color9 === "gray") {
      setColor9("red");
    } else {
      setColor9("gray");
    }
  };

  const [checked10, setChecked10] = useState(false);
  const [color10, setColor10] = useState("gray");
  const handlecolor10 = (e) => {
    setChecked10(!checked10);
    const value = e.target.getAttribute("data-value");
    updateData("propertyFeatures", value);
    if (color10 === "gray") {
      setColor10("red");
    } else {
      setColor10("gray");
    }
  };

  const [checked11, setChecked11] = useState(false);
  const [color11, setColor11] = useState("gray");
  const handlecolor11 = (e) => {
    setChecked11(!checked11);
    const value = e.target.getAttribute("data-value");
    updateData("propertyFeatures", value);
    if (color11 === "gray") {
      setColor11("red");
    } else {
      setColor11("gray");
    }
  };

  const [checked12, setChecked12] = useState(false);
  const [color12, setColor12] = useState("gray");
  const handlecolor12 = (e) => {
    setChecked12(!checked12);
    const value = e.target.getAttribute("data-value");
    updateData("propertyFeatures", value);
    if (color12 === "gray") {
      setColor12("red");
    } else {
      setColor12("gray");
    }
  };

  const [checked13, setChecked13] = useState(false);
  const [color13, setColor13] = useState("gray");
  const handlecolor13 = (e) => {
    setChecked13(!checked13);
    const value = e.target.getAttribute("data-value");
    updateData("propertyFeatures", value);

    if (color13 === "gray") {
      setColor13("red");
    } else {
      setColor13("gray");
    }
  };

  const [checked14, setChecked14] = useState(false);
  const [color14, setColor14] = useState("gray");
  const handlecolor14 = (e) => {
    if (color14 === "gray") {
      setColor14("red");
    } else {
      setColor14("gray");
    }
    setChecked14(!checked14);
    const value = e.target.getAttribute("data-value");
    updateData("propertyFeatures", value);
  };

  const [checked15, setChecked15] = useState(false);
  const [color15, setColor15] = useState("gray");
  const handlecolor15 = (e) => {
    if (color15 === "gray") {
      setColor15("red");
    } else {
      setColor15("gray");
    }
    setChecked15(!checked15);
    const value = e.target.getAttribute("data-value");
    updateData("societyFeatures", value);
    // checked? setFinalData({...finalData,"societyFeatures":[]}):setFinalData({...finalData,"societyFeatures":[value]})
  };

  const [checked16, setChecked16] = useState(false);
  const [color16, setColor16] = useState("gray");
  const handlecolor16 = (e) => {
    if (color16 === "gray") {
      setColor16("red");
    } else {
      setColor16("gray");
    }
    setChecked16(!checked16);
    const value = e.target.getAttribute("data-value");
    updateData("societyFeatures", value);
  };

  const [checked17, setChecked17] = useState(false);
  const [color17, setColor17] = useState("gray");
  const handlecolor17 = (e) => {
    if (color17 === "gray") {
      setColor17("red");
    } else {
      setColor17("gray");
    }
    setChecked17(!checked17);
    const value = e.target.getAttribute("data-value");
    updateData("societyFeatures", value);
  };

  const [checked18, setChecked18] = useState(false);
  const [color18, setColor18] = useState("gray");
  const handlecolor18 = (e) => {
    if (color18 === "gray") {
      setColor18("red");
    } else {
      setColor18("gray");
    }
    setChecked18(!checked18);
    const value = e.target.getAttribute("data-value");
    updateData("societyFeatures", value);
  };

  const [checked19, setChecked19] = useState(false);
  const [color19, setColor19] = useState("gray");
  const handlecolor19 = (e) => {
    if (color19 === "gray") {
      setColor19("red");
    } else {
      setColor19("gray");
    }
    setChecked19(!checked19);
    const value = e.target.getAttribute("data-value");
    updateData("otherFeatures", value);
  };

  const [checked20, setChecked20] = useState(false);
  const [color20, setColor20] = useState("gray");
  const handlecolor20 = (e) => {
    if (color20 === "gray") {
      setColor20("red");
    } else {
      setColor20("gray");
    }
    setChecked20(!checked20);
    const value = e.target.getAttribute("data-value");
    updateData("otherFeatures", value);
  };

  const [checked21, setChecked21] = useState(false);
  const [color21, setColor21] = useState("gray");
  const handlecolor21 = (e) => {
    if (color21 === "gray") {
      setColor21("red");
    } else {
      setColor21("gray");
    }
    setChecked21(!checked21);
    const value = e.target.getAttribute("data-value");
    updateData("otherFeatures", value);
  };

  const [checked22, setChecked22] = useState(false);
  const [color22, setColor22] = useState("gray");
  const handlecolor22 = (e) => {
    if (color22 === "gray") {
      setColor22("red");
    } else {
      setColor22("gray");
    }
    setChecked22(!checked22);
    const value = e.target.getAttribute("data-value");
    updateData("otherFeatures", value);
  };

  const [checked23, setChecked23] = useState(false);
  const [color23, setColor23] = useState("gray");
  const handlecolor23 = (e) => {
    if (color23 === "gray") {
      setColor23("red");
    } else {
      setColor23("gray");
    }
    setChecked23(!checked23);
    const value = e.target.getAttribute("data-value");
    updateData("waterSource", value);
    // checked? setFinalData({...finalData,"waterSource":[]}):setFinalData({...finalData,"waterSource":[value]})
  };

  const [checked24, setChecked24] = useState(false);
  const [color24, setColor24] = useState("gray");
  const handlecolor24 = (e) => {
    if (color24 === "gray") {
      setColor24("red");
    } else {
      setColor24("gray");
    }
    setChecked24(!checked24);
    const value = e.target.getAttribute("data-value");
    updateData("waterSource", value);
  };

  const [checked25, setChecked25] = useState(false);
  const [color25, setColor25] = useState("gray");
  const handlecolor25 = (e) => {
    if (color25 === "gray") {
      setColor25("red");
    } else {
      setColor25("gray");
    }
    setChecked25(!checked25);
    const value = e.target.getAttribute("data-value");
    updateData("waterSource", value);
  };

  const [checked26, setChecked26] = useState(false);
  const [color26, setColor26] = useState("gray");
  const handlecolor26 = (e) => {
    if (color26 === "gray") {
      setColor26("red");
    } else {
      setColor26("gray");
    }
    setChecked26(!checked26);
    const value = e.target.getAttribute("data-value");
    updateData("overlooking", value);

    // checked? setFinalData({...finalData,"overlooking":[]}):setFinalData({...finalData,"overlooking":[value]})
  };

  const [checked27, setChecked27] = useState(false);
  const [color27, setColor27] = useState("gray");
  const handlecolor27 = (e) => {
    if (color27 === "gray") {
      setColor27("red");
    } else {
      setColor27("gray");
    }
    setChecked27(!checked27);
    const value = e.target.getAttribute("data-value");
    updateData("overlooking", value);
  };

  const [checked28, setChecked28] = useState(false);
  const [color28, setColor28] = useState("gray");
  const handlecolor28 = (e) => {
    if (color28 === "gray") {
      setColor28("red");
    } else {
      setColor28("gray");
    }
    setChecked28(!checked28);
    const value = e.target.getAttribute("data-value");
    updateData("overlooking", value);
  };

  const [checked29, setChecked29] = useState(false);
  const [color29, setColor29] = useState("gray");

  const handlecolor29 = (e) => {
    if (color29 === "gray") {
      setColor29("red");
    } else {
      setColor29("gray");
    }
    setChecked29(!checked29);
    const value = e.target.getAttribute("data-value");
    updateData("overlooking", value);
  };

  const [facings, setFacings] = useState("gray");
  const [facings1, setFacings1] = useState("gray");
  const [facings2, setFacings2] = useState("gray");
  const [facings3, setFacings3] = useState("gray");
  const [facings4, setFacings4] = useState("gray");
  const [facings5, setFacings5] = useState("gray");
  const [facings6, setFacings6] = useState("gray");
  const [facings7, setFacings7] = useState("gray");

  const handlepropertyface = (e) => {
    if (facings === "gray") {
      setFacings("red");
      setFacings1("gray");
      setFacings2("gray");
      setFacings3("gray");
      setFacings4("gray");
      setFacings5("gray");
      setFacings6("gray");
      setFacings7("gray");
    }
    const value = e.target.getAttribute("data-value");
    setFinalData({ ...finalData, facing: value });
    console.log("first", finalData);
  };

  const handlepropertyface1 = (e) => {
    if (facings1 === "gray") {
      setFacings1("red");
      setFacings("gray");
      setFacings2("gray");
      setFacings3("gray");
      setFacings4("gray");
      setFacings5("gray");
      setFacings6("gray");
      setFacings7("gray");
    }
    const value = e.target.getAttribute("data-value");
    setFinalData({ ...finalData, facing: value });
  };

  const handlepropertyface2 = (e) => {
    if (facings2 === "gray") {
      setFacings2("red");
      setFacings1("gray");
      setFacings("gray");
      setFacings3("gray");
      setFacings4("gray");
      setFacings5("gray");
      setFacings6("gray");
      setFacings7("gray");
    }
    const value = e.target.getAttribute("data-value");
    setFinalData({ ...finalData, facing: value });
  };

  const handlepropertyface3 = (e) => {
    if (facings3 === "gray") {
      setFacings3("red");
      setFacings1("gray");
      setFacings2("gray");
      setFacings("gray");
      setFacings4("gray");
      setFacings5("gray");
      setFacings6("gray");
      setFacings7("gray");
    }
    const value = e.target.getAttribute("data-value");
    setFinalData({ ...finalData, facing: value });
  };

  const handlepropertyface4 = (e) => {
    if (facings4 === "gray") {
      setFacings4("red");
      setFacings1("gray");
      setFacings2("gray");
      setFacings3("gray");
      setFacings("gray");
      setFacings5("gray");
      setFacings6("gray");
      setFacings7("gray");
    }
    const value = e.target.getAttribute("data-value");
    setFinalData({ ...finalData, facing: value });
  };

  const handlepropertyface5 = (e) => {
    if (facings5 === "gray") {
      setFacings5("red");
      setFacings1("gray");
      setFacings2("gray");
      setFacings3("gray");
      setFacings4("gray");
      setFacings("gray");
      setFacings6("gray");
      setFacings7("gray");
    }
    const value = e.target.getAttribute("data-value");
    setFinalData({ ...finalData, facing: value });
  };

  const handlepropertyface6 = (e) => {
    if (facings6 === "gray") {
      setFacings6("red");
      setFacings1("gray");
      setFacings2("gray");
      setFacings3("gray");
      setFacings4("gray");
      setFacings5("gray");
      setFacings("gray");
      setFacings7("gray");
    }
    const value = e.target.getAttribute("data-value");
    setFinalData({ ...finalData, facing: value });
  };

  const handlepropertyface7 = (e) => {
    if (facings7 === "gray") {
      setFacings7("red");
      setFacings1("gray");
      setFacings2("gray");
      setFacings3("gray");
      setFacings4("gray");
      setFacings5("gray");
      setFacings6("gray");
      setFacings("gray");
    }
    const value = e.target.getAttribute("data-value");
    setFinalData({ ...finalData, facing: value });
  };

  const [color30, setColor30] = useState("gray");
  const [color31, setColor31] = useState("gray");
  const [color32, setColor32] = useState("gray");
  const [color33, setColor33] = useState("gray");
  const [color34, setColor34] = useState("gray");

  const [checked30, setChecked30] = useState(false);
  const [checked31, setChecked31] = useState(false);
  const [checked32, setChecked32] = useState(false);
  const [checked33, setChecked33] = useState(false);
  const [checked34, setChecked34] = useState(false);

  const handlecolor30 = (e) => {
    if (color30 === "gray") {
      setColor30("red");
    } else {
      setColor30("gray");
    }
    setChecked30(!checked30);
    const value = e.target.getAttribute("data-value");
    updateData("locationAdvantages", value);
  };

  const handlecolor31 = (e) => {
    if (color31 === "gray") {
      setColor31("red");
    } else {
      setColor31("gray");
    }
    setChecked31(!checked31);
    const value = e.target.getAttribute("data-value");
    updateData("locationAdvantages", value);
  };

  const handlecolor32 = (e) => {
    if (color32 === "gray") {
      setColor32("red");
    } else {
      setColor32("gray");
    }
    setChecked32(!checked32);
    const value = e.target.getAttribute("data-value");
    updateData("locationAdvantages", value);
  };

  const handlecolor33 = (e) => {
    if (color33 === "gray") {
      setColor33("red");
    } else {
      setColor33("gray");
    }
    setChecked33(!checked33);
    const value = e.target.getAttribute("data-value");
    updateData("locationAdvantages", value);
  };

  const handlecolor34 = (e) => {
    if (color34 === "gray") {
      setColor34("red");
    } else {
      setColor34("gray");
    }
    setChecked34(!checked34);
    const value = e.target.getAttribute("data-value");
    updateData("locationAdvantages", value);
  };

  const [checked35, setChecked35] = useState(false);
  const handlecheckbox = () => {
    setChecked35(!checked35);
    setFinalData((prevFinalData) => ({
      ...prevFinalData,
      otherPropertyFeatures: Array.isArray(prevFinalData.otherPropertyFeatures)
        ? [...prevFinalData.otherPropertyFeatures, { gatedSociety: checked35 }]
        : [{ gatedSociety: checked35 }],
    }));
  };

  const [checked36, setChecked36] = useState(false);
  const handlecheckbox1 = () => {
    setChecked36(!checked36);
    setFinalData((prevFinalData) => ({
      ...prevFinalData,
      otherPropertyFeatures: Array.isArray(prevFinalData.otherPropertyFeatures)
        ? [
            ...prevFinalData.otherPropertyFeatures,
            { cornerProperty: checked36 },
          ]
        : [{ cornerProperty: checked36 }],
    }));
  };

  const [checked37, setChecked37] = useState(false);
  const handlecheckbox2 = () => {
    setChecked37(!checked37);
    setFinalData((prevFinalData) => ({
      ...prevFinalData,
      otherPropertyFeatures: Array.isArray(prevFinalData.otherPropertyFeatures)
        ? [...prevFinalData.otherPropertyFeatures, { petFriendly: checked37 }]
        : [{ petFriendly: checked37 }],
    }));
  };

  const [checked38, setChecked38] = useState(false);
  const handlecheckbox3 = () => {
    setChecked38(!checked38);

    setFinalData((prevFinalData) => ({
      ...prevFinalData,
      otherPropertyFeatures: Array.isArray(prevFinalData.otherPropertyFeatures)
        ? [
            ...prevFinalData.otherPropertyFeatures,
            { wheelChairFriendly: checked38 },
          ]
        : [{ wheelChairFriendly: checked38 }],
    }));
  };

  const navigate = useNavigate();

  const handlePostproperty=(data)=>{
    addProperty(data).then((res)=>{
        console.log("result",res);
    }
    ).catch((err)=>{
        console.log(err);
    })
    navigate("/thankyou")
}

  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [navigate]);

  return (
    <Wrapper>
      <Div2>
        <Sidebar />
      </Div2>
      <Content>
        <Back
          onClick={() => {
            navigate("/addproperty/propertyprofile");
          }}
        >
          {" "}
          <FaArrowLeftLong
            style={{ marginRight: "5px", fontSize: "15px" }}
          />{" "}
          Back
        </Back>
        <div className="heading">Add Amenities/Unique features</div>
        <div className="subheading"> Amenities</div>
        <Flex>
          <div className="od">
            <SButton1
              className={color}
              data-value={"Maintainance Staff"}
              onClick={handlecolor}
            >
              {checked ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Maintainance Staff"}
              onClick={handlecolor} style={{ padding: "0 0 0 7px" }}>Maintainance Staff</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color1}
              data-value={"Water Storage"}
              onClick={handlecolor1}
            >
              {checked1 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Water Storage"}
              onClick={handlecolor1} style={{ padding: "0 0 0 7px" }}>Water Storage</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color4}
              data-value={"Piped Gas"}
              onClick={handlecolor4}
            >
              {checked4 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Piped Gas"}
              onClick={handlecolor4} style={{ padding: "0 0 0 7px" }}>Piped Gas</div>
            </SButton1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <SButton1
              className={color2}
              data-value="Waste Disposal"
              onClick={handlecolor2}
            >
              {checked2 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value="Waste Disposal"
              onClick={handlecolor2} style={{ padding: "0 0 0 7px" }}>Waste Disposal</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color3}
              data-value="Rain water harvesting"
              onClick={handlecolor3}
            >
              {checked3 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value="Rain water harvesting"
              onClick={handlecolor3} style={{ padding: "0 0 0 7px" }}>Rain water harvesting</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color5}
              data-value="Visitor Parking"
              onClick={handlecolor5}
            >
              {checked5 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value="Visitor Parking"
              onClick={handlecolor5} style={{ padding: "0 0 0 7px" }}>Visitor Parking</div>
            </SButton1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <SButton1
              className={color6}
              data-value="Park"
              onClick={handlecolor6}
            >
              {checked6 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value="Park"
              onClick={handlecolor6} style={{ padding: "0 0 0 7px" }}>Park</div>
            </SButton1>
          </div>
        </Flex>

        <div className="subheading">Property Features</div>
        <Flex>
          <div className="od">
            <SButton1
              className={color7}
              data-value={"High Ceilling Height"}
              onClick={handlecolor7}
            >
              {checked7 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"High Ceilling Height"}
              onClick={handlecolor7} style={{ padding: "0 0 0 7px" }}>High Ceilling Height</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color8}
              data-value={"False Seeling Light"}
              onClick={handlecolor8}
            >
              {checked8 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"False Seeling Light"}
              onClick={handlecolor8} style={{ padding: "0 0 0 7px" }}>False Seeling Light</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color9}
              data-value={"Internet wifi connectivity"}
              onClick={handlecolor9}
            >
              {checked9 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Internet wifi connectivity"}
              onClick={handlecolor9} style={{ padding: "0 0 0 7px" }}>
                Internet wifi connectivity
              </div>
            </SButton1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <SButton1
              className={color10}
              data-value={"Centrally Air Conditioned"}
              onClick={handlecolor10}
            >
              {checked10 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Centrally Air Conditioned"}
              onClick={handlecolor10} style={{ padding: "0 0 0 7px" }}>
                Centrally Air Conditioned
              </div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color11}
              data-value={"Security/Fire alarm"}
              onClick={handlecolor11}
            >
              {checked11 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Security/Fire alarm"}
              onClick={handlecolor11} style={{ padding: "0 0 0 7px" }}>Security/Fire alarm</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color12}
              data-value={"Private Garden/Terrace"}
              onClick={handlecolor12}
            >
              {checked12 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Private Garden/Terrace"}
              onClick={handlecolor12} style={{ padding: "0 0 0 7px" }}>
                Private Garden/ Terrace
              </div>
            </SButton1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <SButton1
              className={color13}
              data-value={"Specious Interior"}
              onClick={handlecolor13}
            >
              {checked13 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Specious Interior"}
              onClick={handlecolor13} style={{ padding: "0 0 0 7px" }}>Specious Interior</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color14}
              data-value={"Recently Renovated"}
              onClick={handlecolor14}
            >
              {checked14 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Recently Renovated"}
              onClick={handlecolor14} style={{ padding: "0 0 0 7px" }}>Recently renovated</div>
            </SButton1>
          </div>
        </Flex>

        <div className="subheading">Society/Building Feature</div>
        <Flex>
          <div className="od">
            <SButton1
              className={color15}
              data-value={"Fitness Center/Gym"}
              onClick={handlecolor15}
            >
              {checked15 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Fitness Center/Gym"}
              onClick={handlecolor15} style={{ padding: "0 0 0 7px" }}>Fitness Center/Gym</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color16}
              data-value={"Swimming Pool"}
              onClick={handlecolor16}
            >
              {checked16 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Swimming Pool"}
              onClick={handlecolor16} style={{ padding: "0 0 0 7px" }}>Swimming Pool</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color17}
              data-value={"Club House"}
              onClick={handlecolor17}
            >
              {checked17 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Club House"}
              onClick={handlecolor17} style={{ padding: "0 0 0 7px" }}>Club House</div>
            </SButton1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <SButton1
              className={color18}
              data-value={"Lifts"}
              onClick={handlecolor18}
            >
              {checked18 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Lifts"}
              onClick={handlecolor18} style={{ padding: "0 0 0 7px" }}>Lifts</div>
            </SButton1>
          </div>
        </Flex>

        <div className="subheading">Other Features</div>
        <Flex>
          <div className="od">
            <SButton1
              className={color19}
              data-value={"Seperate entry for servant room"}
              onClick={handlecolor19}
            >
              {checked19 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Seperate entry for servant room"}
              onClick={handlecolor19} style={{ padding: "0 0 0 7px" }}>
                Seperate entry for servant room
              </div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color20}
              data-value={"No open drainage around"}
              onClick={handlecolor20}
            >
              {checked20 ? <div> ✔️ </div> : <div>➕</div>}{" "}
              <div  data-value={"No open drainage around"}
              onClick={handlecolor20} 
              style={{ padding: "0 0 0 7px" }}>
                No open drainage around
              </div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color21}
              data-value={"Bank Attached Property"}
              onClick={handlecolor21}
            >
              {checked21 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Bank Attached Property"}
              onClick={handlecolor21} style={{ padding: "0 0 0 7px" }}>Bank Attached Property</div>
            </SButton1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <SButton1
              className={color22}
              data-value={"Low density property"}
              onClick={handlecolor22}
            >
              {checked22 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Low density property"}
              onClick={handlecolor22} style={{ padding: "0 0 0 7px" }}>Low density property</div>
            </SButton1>
          </div>
        </Flex>

        <div className="subheading">Water Source</div>
        <Flex>
          <div className="od">
            <SButton1
              className={color23}
              data-value={"Muncipal corporation"}
              onClick={handlecolor23}
            >
              {checked23 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div  data-value={"Muncipal corporation"}
              onClick={handlecolor23} style={{ padding: "0 0 0 7px" }}>Muncipal corporation</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color24}
              data-value={"Borewell/Tank"}
              onClick={handlecolor24}
            >
              {checked24 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Borewell/Tank"}
              onClick={handlecolor24} style={{ padding: "0 0 0 7px" }}>Borewell/Tank</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color25}
              data-value={"24*7 Water"}
              onClick={handlecolor25}
            >
              {checked25 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"24*7 Water"}
              onClick={handlecolor25} style={{ padding: "0 0 0 7px" }}>24*7 Water</div>
            </SButton1>
          </div>
        </Flex>

        <div className="subheading">Overlooking</div>
        <Flex>
          <div className="od">
            <SButton1
              className={color26}
              data-value={"Garden/Park"}
              onClick={handlecolor26}
            >
              {checked26 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Garden/Park"}
              onClick={handlecolor26} style={{ padding: "0 0 0 7px" }}>Garden/Park</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color27}
              data-value={"Pool"}
              onClick={handlecolor27}
            >
              {checked27 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Pool"}
              onClick={handlecolor27} style={{ padding: "0 0 0 7px" }}>Pool</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color28}
              data-value={"Club"}
              onClick={handlecolor28}
            >
              {checked28 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Club"}
              onClick={handlecolor28} style={{ padding: "0 0 0 7px" }}>Club</div>
            </SButton1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <SButton1
              className={color29}
              data-value={"Main road"}
              onClick={handlecolor29}
            >
              {checked29 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div
                data-value={"Main road"}
                onClick={handlecolor29}
                style={{ padding: "0 0 0 7px" }}
              >
                Main road
              </div>
            </SButton1>
          </div>
        </Flex>

        <div className="subheading">Other Features</div>
        <div style={{ display: "Flex", minWidth: "33%", margin: "15px 0 0 0" }}>
          <Button1
            type="checkbox"
            onClick={handlecheckbox}
            style={{ height: "20px", width: "20px" }}
          ></Button1>
          <Supersub
            style={{
              fontSize: "18px",
              marginRight: "20px",
              padding: "0 10px",
              margin: "0",
            }}
          >
            In a gated Society
          </Supersub>
        </div>
        <div style={{ display: "Flex", minWidth: "33%", margin: "15px 0 0 0" }}>
          <Button1
            type="checkbox"
            onClick={handlecheckbox1}
            style={{ height: "20px", width: "20px" }}
          ></Button1>
          <Supersub
            style={{
              fontSize: "18px",
              marginRight: "20px",
              padding: "0 10px",
              margin: "0",
            }}
          >
            Corner Property
          </Supersub>
        </div>
        <div style={{ display: "Flex", minWidth: "33%", margin: "15px 0 0 0" }}>
          <Button1
            type="checkbox"
            onClick={handlecheckbox2}
            style={{ height: "20px", width: "20px" }}
          ></Button1>
          <Supersub
            style={{
              fontSize: "18px",
              marginRight: "20px",
              padding: "0 10px",
              margin: "0",
            }}
          >
            Pet Friendly
          </Supersub>
        </div>
        <div style={{ display: "Flex", minWidth: "33%", margin: "15px 0 0 0" }}>
          <Button1
            type="checkbox"
            onClick={handlecheckbox3}
            style={{ height: "20px", width: "20px" }}
          ></Button1>
          <Supersub
            style={{
              fontSize: "18px",
              marginRight: "20px",
              padding: "0 10px",
              margin: "0",
            }}
          >
            Wheelchair Friendly
          </Supersub>
        </div>

        <div className="subheading">Property facing</div>
        <Flex>
          <div className="od">
            <Div1
              style={{ width: "150px" }}
              className={facings}
              data-value={"North"}
              onClick={(e) => handlepropertyface(e)}
            >
              North
            </Div1>
          </div>
          <div className="od">
            <Div1
              style={{ width: "150px" }}
              className={facings1}
              data-value={"South"}
              onClick={(e) => handlepropertyface1(e)}
            >
              South
            </Div1>
          </div>
          <div className="od">
            <Div1
              style={{ width: "150px" }}
              className={facings2}
              data-value={"East"}
              onClick={(e) => handlepropertyface2(e)}
            >
              East
            </Div1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <Div1
              style={{ width: "150px" }}
              className={facings3}
              data-value={"West"}
              onClick={(e) => handlepropertyface3(e)}
            >
              West
            </Div1>
          </div>
          <div className="od">
            <Div1
              style={{ width: "150px" }}
              className={facings4}
              data-value={"North-East"}
              onClick={(e) => handlepropertyface4(e)}
            >
              North-East
            </Div1>
          </div>
          <div className="od">
            <Div1
              style={{ width: "150px" }}
              className={facings5}
              data-value={"South-East"}
              onClick={(e) => handlepropertyface5(e)}
            >
              South-East
            </Div1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <Div1
              style={{ width: "150px" }}
              className={facings6}
              data-value={"North-West"}
              onClick={(e) => handlepropertyface6(e)}
            >
              North-West
            </Div1>
          </div>
          <div className="od">
            <Div1
              style={{ width: "150px" }}
              className={facings7}
              data-value={"South-West"}
              onClick={(e) => handlepropertyface7(e)}
            >
              South-West
            </Div1>
          </div>
        </Flex>

        <div className="subheading">Flooring type</div>
        <Select
          onChange={(e) => {
            setFinalData({ ...finalData, flooring: e.target.value });
          }}
        >
          <Choice selected disabled>
            Select
          </Choice>
          <Choice>Marble</Choice>
          <Choice>Concrete</Choice>
          <Choice>Granite</Choice>
          <Choice>Ceramic</Choice>
        </Select>

        <div className="subheading">Location Advantage</div>
        <Flex>
          <div className="od">
            <SButton1
              className={color30}
              data-value={"Close to Metro"}
              onClick={handlecolor30}
            >
              {checked30 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Close to Metro"}
              onClick={handlecolor30} style={{ padding: "0 0 0 7px" }}>Close to Metro</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color31}
              data-value={"Close to School"}
              onClick={handlecolor31}
            >
              {checked31 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Close to School"}
              onClick={handlecolor31} style={{ padding: "0 0 0 7px" }}>Close to School</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color32}
              data-value={"Close to Hospital"}
              onClick={handlecolor32}
            >
              {checked32 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Close to Hospital"}
              onClick={handlecolor32} style={{ padding: "0 0 0 7px" }}>Close to Hospital</div>
            </SButton1>
          </div>
        </Flex>
        <Flex>
          <div className="od">
            <SButton1
              className={color33}
              data-value={"Close to Market"}
              onClick={handlecolor33}
            >
              {checked33 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div data-value={"Close to Market"}
              onClick={handlecolor33} style={{ padding: "0 0 0 7px" }}>Close to Market</div>
            </SButton1>
          </div>
          <div className="od">
            <SButton1
              className={color34}
              data-value={"Close to Railway Station"}
              onClick={handlecolor34}
            >
              {checked34 ? <div>✔️ </div> : <div>➕</div>}{" "}
              <div
                data-value={"Close to Railway Station"}
                onClick={handlecolor34}
                style={{ padding: "0 0 0 7px" }}
              ></div>
              Close to Railway Station
            </SButton1>
          </div>
        </Flex>

        <div style={{ marginTop: "50px", marginBottom: "40px" }}>
          <Button
            onClick={(e)=>handlePostproperty(finalData)}>
            Post Property
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}



export default Amenities;
