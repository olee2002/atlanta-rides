import React, { Component } from 'react';
import RideList from './RideList'
import axios from 'axios'

class RidePage extends Component {
    state = {
        ride: []
    }

    componentWillMount() {
        this.getRideInfo()
    }

    getRideInfo = async () => {
        try {
            
            const { userId } = this.props
            const res = await axios.get(`/api/users/${userId}/ride`)
            console.log(res)
            this.setState({ ride: res.data })
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <div>

                {this.state.ride.map((rides, index) => {
                    return (
                        <div key={index}>
                            <h1>{rides.name}</h1>
                            <h3>Location:{rides.location}</h3>
                            <h3>Rating:{rides.rating} out of 5</h3>
                            <h5>Difficulty: {rides.difficulty}</h5>
                            <h5>Distance: {rides.distance}</h5>
                            <h5>My time: {rides.time} minutes</h5>
                        </div>
                    )
                })}

            </div>

        );
    }
}

export default RidePage;