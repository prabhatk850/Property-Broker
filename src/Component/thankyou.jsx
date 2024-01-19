import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
`;

function Thankyou() {

    const navigate = useNavigate();

    const onTop = () => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }
    useEffect(() => {
        onTop()
    }, [navigate]);

    return (
        <Wrapper>
            <img  src="./Thankyou.png" alt="Thank you" />
        </Wrapper>
    )
}

export default Thankyou