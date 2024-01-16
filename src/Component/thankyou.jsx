import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

function Thankyou() {
    setTimeout(() => {window.location.href = "/"}, 3000); 
  
    return (
        <Wrapper>
            <img  src="./Thankyou.png" alt="Thank you" />
        </Wrapper>
    )
}

export default Thankyou