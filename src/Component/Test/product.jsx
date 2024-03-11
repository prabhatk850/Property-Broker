// import styled from 'styled-components'
// import React ,{useState,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { gettest } from '../Services/propertypost';


// const Container = styled.div`
// width: 100%;
// padding-top: 50px;
// `;

// const Wrapper = styled.div`
// padding: 30px;
// display: grid;
// grid-template-columns: repeat(4, minmax(0px, 1fr));
// grid-gap: 20px;
// `;


// const Div = styled.div`
// padding:30px 0 30px 0;
// border-radius: 10px;
// border: 2px solid gray;
// box-shadow: 1px 0 10px 0 rgba(11, 7, 7, 0.1);

// `;

// const Grid = styled.div`

// `;

// const Img = styled.img`
// width:100px;
// height:100px;
// `;

// const Button = styled.button`
// `;

// const Title = styled.div`
// display: flex;
// justify-content: center;
// `;

// const Price = styled.div`
// display: flex;
// justify-content: center;
// `;

// const FilterDiv = styled.div`
// border: 1px solid gray;
// padding: 10px 20px;
// margin: 0 10px;
// border-radius: 5px;
// `;



// function Product() {

//     const navigate = useNavigate()

// const [testdata, setTestdata] = useState([]);

//   useEffect(() => {
//     gettest().then((response) => {
//       setTestdata(response);
//       console.log("first",response )
//     });
//   }, []);

//     // const dummyData = [
//     //     {"id": 4,
//     //     "title": "Mens Casual Slim Fit",
//     //     "price": 15.99,
//     //     "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     //     "category": "men's clothing",
//     //     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     //     "rating": {
//     //         "rate": 2.1,
//     //         "count": 430
//     //     }},
//     //     {
//     //         "id": 3,
//     //         "title": "Mens Cotton Jacket",
//     //         "price": 55.99,
//     //         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     //         "category": "men's clothing",
//     //         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     //         "rating": {
//     //             "rate": 4.7,
//     //             "count": 500
//     //         }
//     //     },
//     //     {
//     //         "id": 2,
//     //         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     //         "price": 22.3,
//     //         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     //         "category": "men's clothing",
//     //         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     //         "rating": {
//     //             "rate": 4.1,
//     //             "count": 259
//     //         }
//     //     },
//     // ]

//   return (
// <Container>
//       <div className='df center'>
//         <FilterDiv>All</FilterDiv>
//         <FilterDiv>Men&apos;s</FilterDiv>
//         <FilterDiv>Women&apos;s</FilterDiv>
//         <FilterDiv>Jewelerys</FilterDiv>
//         <FilterDiv>Electronics</FilterDiv>
//       </div>
//     <Wrapper>
      
//         {testdata.map((e)=>
//         <Grid onClick={()=>{navigate("/test1",{state:{
//             "id":e.id,
//             "title":e.title,
//             "price":e.price,
//             "description":e.description,
//             "category":e.category,
//             "image":e.image, "rating":e.rating
//         }})}} key={testdata.id}>
//             <Div>
//                <div className='df center'> <Img src={e.image} alt='Product Img'></Img></div>
//                 <Title>{e.title}</Title>
//                 <Price>${e.price}</Price>
//                 <div className='df center'> <Button>Buy Now</Button></div>
//             </Div>
//         </Grid>
//         )}
//     </Wrapper>
//     </Container>
//   )
// }

// export default Product