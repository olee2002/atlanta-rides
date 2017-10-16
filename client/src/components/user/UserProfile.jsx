import React, { Component } from 'react'
//import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'


class UserProfile extends Component {

    state = {
        user: {}
    }

    componentWillMount() {
        this.getUserInfo()
    }

    getUserInfo = async () => {
        try {
            const { userId } = this.props.match.params

            const res = await axios.get(`/api/users/${userId}`)
            this.setState({user: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    toggleIsRide = () => {
        this.setState({isRide: !this.state.isRide})
    }
 

    handleChange = (event) => {
        console.log(event)
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
        console.log(res.data)
        this.setState({ user: res.data })
    }

    render() {
        return (
            <div>
                <Link to={'/'}> Home </Link>
                <Link to={'/users'}> Back to Users </Link>
                <h1>{this.state.user.name}'s Profile</h1>
                <img src={this.state.user.img} alt="Profile Pic"/>
                <div>
                    <h1>Bio</h1>
                    <textarea onBlur={this.updateBio} onChange={this.handleChange} name="bio" value={this.state.user.bio} />
                </div>
            </div>
        )
    }
}

export default UserProfile;