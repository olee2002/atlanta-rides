import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';


const Body = styled.div`
    height: 100%;
    width: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    background-color: #333f4b;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 100px;
`;

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const Header = styled.h1`
    color: white;
    font-size: 6vh;
    border-bottom: thin solid white;
`;

const A = styled.a`
    text-decoration: none;
    color: black;
    font-size: 4vh;
    &:hover{
        border-bottom: thin solid white;
        color: white;
        font-size: 4.5vh;
        tex-shadow: 1px 1px 0px #212121;
        z-index: 3;
    }
`;

const Names = styled.div`
    display: flex;
    justify-content: center
`;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(89, 110, 130, 0.6);
    border-radius: 10px;
    width:  300px;
    height: 300px;
`;


class LoginPage extends Component {

    state = {
        users: []
    }

    // Call the getAllUsers method as soon as the component is created
    componentWillMount() {
        this.getAllUsers()
    }

    //Using axios to get all the users
    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
            //console.log('test try')
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <Body>
                <NavBar>
                    <FlatButton
                        href="/"
                        label="Home"
                        primary={true}
                        icon={<ActionHome />}
                    />
                </NavBar>

                <ContentContainer>
                    <div>
                        <Header>Select a User</Header>

                        {this.state.users.map(user => {
                            return (
                                <Names key={user._id}>
                                    <A href={`/users/${user._id}`}>{user.name} </A>
                                </Names>

                            )
                        })}
                    </div>
                    <SignUpContainer>
                        <SignUpForm />
                    </SignUpContainer>
                </ContentContainer>
            </Body>
        );
    }
}

export default LoginPage;