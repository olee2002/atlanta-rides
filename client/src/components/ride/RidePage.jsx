import React, { Component } from 'react';
//import RideList from './RideList'
import axios from 'axios'
import NewRideForm from './NewRideForm.jsx'
import styled from 'styled-components'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


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
    padding: 5% 15% 5% 2%
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const RideForm = styled.div`
    width: 30%;
    padding: 5% 10% 5% 0%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const H3 = styled.h3`
    border-bottom: thin solid black;
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
                            <Card
                                zDepth={4}
                            >
                                <Header>
                                    <CardHeader
                                        title={rides.name}
                                        titleStyle={{
                                            'fontSize': '30px',
                                            'fontWeight': 'bold'
                                        }}
                                        subtitle={rides.location}
                                    />
                                    <div>
                                        <RaisedButton
                                            onClick={() => this.deleteRide(rides._id)}
                                            label="Delete"
                                            secondary={true}
                                        />
                                    </div>
                                </Header>

                                <CardContent key={index}>
                                    <div>
                                        <H3>Rating</H3>
                                        <p>{rides.rating} out of 5</p>
                                        <H3>Difficulty </H3>
                                        <p>{rides.difficulty}</p>
                                    </div>
                                    <div>
                                        <H3>Distance </H3>
                                        <p>{rides.distance} miles</p>
                                        <H3>My time </H3>
                                        <p>{rides.time} minutes</p>
                                    </div>
                                </CardContent>

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