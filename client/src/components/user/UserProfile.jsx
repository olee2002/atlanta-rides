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
    height: 30vh;
    width: 20vw;
`;

const RideBikeButton = styled.div`
    display: flex;
    justify-content: center;
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
            <div>

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
                    <h1>{this.state.user.name}'s Profile</h1>
                </ProfileName>

                <ProfileContent>
                    <Image src={this.state.user.img} alt="Profile Pic" />
                    <div>
                        <h1>Bio</h1>
                        <textarea onBlur={this.updateBio} onChange={this.handleChange} name="bio" value={this.state.user.bio} />
                    </div>
                </ProfileContent>
                <RideBikeButton>
                    {
                        this.state.isRides ? <button onClick={this.toggleIsRide} >Bikes</button>
                            :
                            <button onClick={this.toggleIsRide} >Rides</button>
                    }
                </RideBikeButton>

                {this.state.isRides ? <RidePage userId={this.props.match.params.userId} />
                    :
                    <BikePage userId={this.props.match.params.userId} />}

            </div>

        )
    }
}

export default UserProfile;