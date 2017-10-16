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
            console.log(res)
            this.setState({user: res.data})
            console.log("user info function working")
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <div>
                <Link to={'/'}> Home </Link>
                <Link to={'/users'}> Back to Users </Link>
                <h1>{this.state.user.name}'s Profile</h1>
                <a href="">{this.state.user.img}</a>
                <div>
                    <h1>Bio</h1>
                    <p>{this.state.user.bio}</p>
                </div>
            </div>
        )
    }
}

export default UserProfile;