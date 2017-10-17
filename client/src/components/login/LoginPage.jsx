import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from './SignUpForm'

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
            <div>
                <Link to={'/'}> Home </Link>
                <SignUpForm />

                <h1>Select a User</h1>

                {this.state.users.map(user => {
                    return (
                        <div key={user._id}>
                            <Link to={`/users/${user._id}`}>{user.name} </Link>
                        </div>

                    )
                })}

            </div>
        );
    }
}

export default LoginPage;