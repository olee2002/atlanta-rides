import React, { Component } from 'react';
import axios from 'axios'
import NewBikeForm from './NewBikeForm.jsx'
import styled from 'styled-components'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const BikeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const BikeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
    padding: 5% 15% 5% 2%
`;

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const BikeForm = styled.div`
width: 30%;
padding: 5% 10% 5% 0%;
`;

const Image = styled.img`
    border-radius: 15px;
    height: 33vh;
    width: 25vw;
    box-shadow: 2px 2px 5px black,
`;

class BikePage extends Component {
    state = {
        bike: []
    }

    componentWillMount() {
        this.getBikeInfo()
    }

    getBikeInfo = async (bikeId) => {
        try {
            const { userId } = this.props
            const res = await axios.get(`/api/users/${userId}/bike`)
            this.setState({ bike: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    createNewBike = async (newBike) => {
        const { userId } = this.props
        const res = await axios.post(`/api/users/${userId}/bike`, {
            bike: newBike
        })
        this.setState({ bike: res.data.bike })
    }

    deleteBike = async (bikeId) => {
        const { userId } = this.props
        const res = await axios.delete(`/api/users/${userId}/bike/${bikeId}`)
        this.setState({ bike: res.data.bike })
    }

    render() {
        return (
            <BikeContainer>
                <BikeInfo>
                    {this.state.bike.map((bikes, index) => {
                        return (
                            <Card
                                zDepth={4}
                            >
                                <Header>
                                    <CardHeader
                                        title={bikes.brand}
                                        titleStyle={{
                                            'fontSize': '30px',
                                            'fontWeight': 'bold'
                                        }}
                                        subtitle={bikes.model}
                                    />
                                    <div>
                                        <RaisedButton
                                            onClick={() => this.deleteBike(bikes._id)}
                                            label="Delete"
                                            secondary={true}
                                        />
                                    </div>
                                </Header>


                                <CardContent key={index}>
                                    <Image src={bikes.img} alt="Bike Pic" />
                                    <h4>{bikes.year}</h4>
                                </CardContent>
                            </Card>
                        )
                    })}
                </BikeInfo>

                <BikeForm>
                    <NewBikeForm
                        createNewBike={this.createNewBike}
                    />
                </BikeForm>
            </BikeContainer>
        );
    }
}

export default BikePage;