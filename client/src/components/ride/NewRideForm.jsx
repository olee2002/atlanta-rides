import React, { Component } from 'react';
import axios from 'axios'
//import { Redirect } from 'react-router-dom'

class NewRideForm extends Component {
    state = {
        newRide: {
            name: '',
            location: '',
            rating: '',
            difficulty: '',
            distance: '',
            time: ''
        },
        newRideId: ''
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateRide = { ...this.state.newRide }
        updateRide[attribute] = { ...this.state.newRide }

        this.setState({ newRide: updateRide })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const res = await axios.post('/api/users', {
            'user': this.state.newRide
        })

        this.setState({ newRideId: res.data_id })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="name">Name of Ride</label>
                        <input
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.newRide.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input
                            onChange={this.handleChange} name="location"
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating</label>
                        <input
                            onChange={this.handleChange} name="rating"
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="difficulty">Difficulty</label>
                        <input
                            onChange={this.handleChange} name="difficulty"
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="distance">Distance</label>
                        <input
                            onChange={this.handleChange} name="distance"
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input
                            onChange={this.handleChange} name="time"
                            type="text" />
                    </div>
                </form>
            </div>
        );
    }
}

export default NewRideForm;