import React, { Component } from 'react';
//import RideList from './RideList'
import axios from 'axios'
import NewRideForm from './NewRideForm.jsx'
import styled from 'styled-components'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


const RideContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const RideInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
    padding: 5% 15%
`;

const RideForm = styled.div`
    width: 30%;
    padding: 5% 10% 5% 0%;
`;
const DeleteButton = styled.div`
    display: flex;
    justify-content: flex-end
`;


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
            //console.log(res)
            this.setState({ ride: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    createNewRide = async (newRide) => {
        //console.log(this.props)
        const { userId } = this.props
        const res = await axios.post(`/api/users/${userId}/ride`, {
            ride: newRide
        })
        this.setState({ ride: res.data.ride })
    }

    deleteRide = async (rideId) => {
        const { userId } = this.props
        const res = await axios.delete(`/api/users/${userId}/ride/${rideId}`)
        console.log(res.data)
        this.setState({ ride: res.data.ride })
    }


    render() {
        return (
            <RideContainer>

                <RideInfo>
                    {this.state.ride.map((rides, index) => {
                        return (

                            <Card>
                                <DeleteButton>
                                    <button onClick={() => this.deleteRide(rides._id)}>Delete</button>
                                </DeleteButton>
                                <br/>
                                <div key={index}>
                                    <CardHeader
                                        title={rides.name}
                                        titleStyle={{
                                            'fontSize': '30px', 'fontWeight': 'bold'
                                        }}
                                        subtitle={rides.location}
                                    />
                                    <h3>Rating:{rides.rating} out of 5</h3>
                                    <h5>Difficulty: {rides.difficulty}</h5>
                                    <h5>Distance: {rides.distance}</h5>
                                    <h5>My time: {rides.time} minutes</h5>
                                </div>
                            </Card>

                        )
                    })}

                </RideInfo>

                <RideForm>
                    <NewRideForm
                        createNewRide={this.createNewRide}
                    />
                </RideForm>

            </RideContainer>

        );
    }
}

export default RidePage;