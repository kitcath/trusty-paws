import React from 'react';
import styled from 'styled-components';
import image from '../../images/picture.png';
import title from '../../images/Title.png'
import { useHistory, Link  } from 'react-router-dom';

const Section = styled.section
`
    background: url(${image}) top;
    background-filter: blur(20px);
    background-opacity: 0.5;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;
const Container = styled.div
`
    color: #fff;
    padding:5rem;
    margin-left:35rem;
    border-radius: 10px;
    

    h1 {
        font-size: clamp(2rem, 8vw, 5rem);
        margin-bottom: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-transform: uppercase;
    }

    p {
        font-size: 10px;
        margin-bottom:1rem;
        transform: translate(150px, -60px);
        font-family: 'Montserrat', sans-serif;
        font-weight: 50;40px, 
    }

    button{
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        margin-bottom: 0.8rem 2rem;
        color: #fff;
        background: rgb(250,99,99);
        border:none;
        border-radius:4px;
        transform: translate(-70px, -70px);
        width:100px;
        cursor:pointer;
        outline: none;
        margin-top: 0.2rem;
        margin-left: 14rem;
        margin-right: 12rem;
    }
`;

function Landing() {

    const history = useHistory();
        return ( 
            <>
            <Section>
                <Container>
                    <img src={title} alt="title"/>
                    <button onClick={() => history.push('/login')}>Sign In</button>
                    <span>
                        <p><Link to="signup"> Create Account </Link> </p>
                    </span>
                </Container>
             </Section>
             </>
        )
    
}

export default Landing

