import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton';

const Input = styled.input`
    border: none;
    border-bottom: thin solid white;
    background-color: initial;
    font-size: 20px
`;

const H1 = styled.h1`
    border-bottom: thin solid black;
    display: flex;
    justify-content: center;
`;

class SignUpForm extends Component {
    state = {
        newUser: {
            name: '',
            img: '',
            bio: ''
        },
        redirectToUserProfile: false,
        newUserId: ''
    }
    

    //Is called every time a user makes an input event
    handleChange = (event) => {
        // this grabs the name attribute from the input field
        const attribute = event.target.name
        // Clone thiss this.state.newUser
        const updateUser = {...this.state.newUser}

        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }

    handleSubmit = async (event) => {
    //Stop the form from reloading page
    event.preventDefault()
    
    //Next create post route to post to our API and create a new User
    const res = await axios.post('/api/users', {
        'user': this.state.newUser
    })

    //When post is complete we want to set the state to trigger the redirect
    //and add the newUser's id to the state so we can change the route
    this.setState({redirectToUserProfile: true, newUserId: res.data._id})
    }

    render() {
        //If post is successful
        if (this.state.redirectToUserProfile) {
            return <Redirect to={`/users/${this.state.newUserId}`} />
        }
        
        return (
            <div>
                <H1>Sign-Up</H1>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <br/>
                    <Input
                        placeholder="Name"
                        onChange={this.handleChange} name="name"
                        type="text" value={this.state.newUser.name}
                    />
                </div>
                <br/>
                <div>
                    <br/>
                    <Input 
                        placeholder="Image e.g. image url"
                        onChange={this.handleChange} name="img"
                        type="text" value={this.state.newUser.img}
                    />
                </div>
                <br/>
                
                <FlatButton 
                    label="Submit"
                    type="submit"
                    labelStyle={{
                        "fontSize": "30x"
                    }}
                    hoverColor="white"
                />
                </form> 
            </div>
        );
    }
}

export default SignUpForm;


