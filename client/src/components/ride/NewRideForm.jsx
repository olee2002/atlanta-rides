import React, { Component } from 'react';
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton';


const Input = styled.input`
border: none;
border-bottom: thin solid black;
background-color: initial;
font-size: 15px;
`;

const H1 = styled.h1`
color: white;

`;

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
        updateRide[attribute] = event.target.value

        this.setState({ newRide: updateRide })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.createNewRide(this.state.newRide)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                <H1>Add Ride</H1>
                    <div>
                        <Input
                            placeholder="Name of route/trail"
                            onChange={this.handleChange} name="name"
                            type="text"
                            value={this.state.newRide.name}
                        />
                    </div>
                    <br />
                    <div>
                        <Input
                            placeholder="Location"
                            onChange={this.handleChange} name="location"
                            type="text"
                            value={this.state.newRide.location}
                        />
                    </div>
                    <br />
                    <div>
                        <Input
                            placeholder="Rating e.g. 1-5"
                            onChange={this.handleChange} name="rating"
                            type="text" value={this.state.newRide.rating}

                        />
                    </div>
                    <br />
                    <div>
                        <Input
                            placeholder="difficulty e.g. beginner"
                            onChange={this.handleChange} name="difficulty"
                            type="text" value={this.state.newRide.difficulty} />
                    </div>
                    <br />
                    <div>
                        <Input
                            placeholder="Distance in miles"
                            onChange={this.handleChange} name="distance"
                            type="text" value={this.state.newRide.distance} />
                    </div>
                    <br />
                    <div>
                        <Input
                            placeholder="Time in mins"
                            onChange={this.handleChange} name="time"
                            type="text" value={this.state.newRide.time} />
                    </div>
                    <br />
                    <div>
                        <RaisedButton 
                            type="submit" 
                            label="Submit" 
                            primary={true}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default NewRideForm;