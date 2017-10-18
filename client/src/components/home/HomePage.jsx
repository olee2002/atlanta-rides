import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// const MainContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     width: 100%;
//     height: 100%;
//     align-self: flex-start;
    
// `;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start;
    z-index: 0;
    height: 50vh
`;

const Logo = styled.h1 `
    margin: 0px;
    
    
    font-size: 10vw
`;

const A = styled.a `
    text-decoration: none;
    color: white;
`;



class HomePage extends Component {
    render() {
        return (
            <div className="img">
                    <Title>
                        <Logo><A href="/users">Atlanta Rides</A></Logo>
                        
                    </Title>
            </div>
        );
    }
}

export default HomePage;