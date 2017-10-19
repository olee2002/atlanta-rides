import React, { Component } from 'react'
//import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RidePage from '../ride/RidePage'
import BikePage from '../bike/BikePage'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


//Pulled background div from stack Overflow
const Body = styled.div`
    min-height: 100%;
    min-width: 1024px;
    /* Set up proportionate scaling */
    width: 100%;
    height: auto;
    /* Set up positioning */
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #333f4b;
`;

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const ProfileName = styled.div`
    display: flex;
    justify-content: center;
    margin: 0px, 50px;
`;

const ProfileContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Image = styled.img`
    border-radius: 15px;
    height: 33vh;
    width: 25vw;
    box-shadow: 1px 1px 5px black;
`;

const RideBikeButton = styled.div`
    display: flex;
    justify-content: center;
`;

const BioBox = styled.textarea`
    display: inline-block;
    width: 400px;
    min-height: 200px;
    border: none;
    font-size: 15px
`;

const H1 = styled.h1`
    color: white;
    font-size: 5vw
`;

class UserProfile extends Component {

    state = {
        user: {},
        isRides: false,
    }

    componentWillMount() {
        this.getUserInfo()
    }



    getUserInfo = async () => {
        try {
            const { userId } = this.props.match.params

            const res = await axios.get(`/api/users/${userId}`)
            this.setState({ user: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    toggleIsRide = () => {
        this.setState({
            isRides: !this.state.isRides,

        })
    }


    handleChange = (event) => {
        //console.log(event)
        //Grabs the input by name
        const attribute = event.target.name
        //Clone the user
        const clonedUser = { ...this.state.user }
        //
        clonedUser[attribute] = event.target.value
        //
        this.setState({ user: clonedUser })
    }


    updateBio = async () => {
        //Talks to the app.js and grabs the userId off the URL
        const { userId } = this.props.match.params
        //
        const res = await axios.patch(`/api/users/${userId}`, {
            //Payload object
            user: this.state.user
        })
        this.setState({ user: res.data })
    }


    render() {
        if (this.state.isRides) {
            document.getElementsByClassName("toggle").innerHTML = 'Bikes';

        }

        console.log(this.state.isRides)
        return (
            <Body>

                <NavBar>
                    <FlatButton
                        href="/"
                        label="Home"
                        primary={true}
                        icon={<ActionHome />}
                    />
                    <FlatButton
                        href={'/users'}
                        label="Back to Users"
                        primary={true}

                    />
                </NavBar>

                <ProfileName>
                    <H1>{this.state.user.name}'s Profile</H1>
                </ProfileName>
                <br />
                <br />
                <br />
                <ProfileContent>
                    <Image src={this.state.user.img} alt="Profile Pic" />
                    <div>
                        <Card
                            zDepth={2}
                        >
                            <CardHeader 
                                title="Bio"
                                titleStyle={{
                                    'fontSize': '30px',
                                    'fontWeight': 'bold',
                                }}
                                titleColor="grey"
                            />
                            <BioBox 
                                onBlur={this.updateBio} 
                                onChange={this.handleChange} 
                                name="bio" 
                                value={this.state.user.bio}
                             />
                        </Card>
                    </div>
                    
                </ProfileContent>
                <br/>
                <RideBikeButton>
                    {
                        this.state.isRides ? <RaisedButton
                            onClick={this.toggleIsRide}
                            label="Bikes"
                            zDepth={4}
                        />
                            :
                            <RaisedButton
                                onClick={this.toggleIsRide}
                                label="Rides"
                                zDepth={4}
                            />
                    }
                </RideBikeButton>

                {this.state.isRides ? <RidePage userId={this.props.match.params.userId} />
                    :
                    <BikePage userId={this.props.match.params.userId} />}

            </Body>

        )
    }
}

export default UserProfile;