import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start;
    z-index: 2;
    
`;

const Logo = styled.h1 `
    margin: 0px;
    font-size: 10vw;
`;

const A = styled.a `
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px 5px #212121,
                 2px 2px 5px #212121,
                 3px 3px 5px #212121,
                 4px 4px 5px #212121;
    z-index: auto;
    &:hover {
        text-shadow: none;
    }
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