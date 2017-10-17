import React, { Component } from 'react';
import axios from 'axios'
import NewBikeForm from './NewBikeForm.jsx'


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
            <div>
                <br/>
                <NewBikeForm
                    createNewBike={this.createNewBike}
                />
                <br/>
                {this.state.bike.map((bikes, index) => {
                    return (
                        <div key={index}>
                            <img src={bikes.img} alt="Bike Pic" />
                            <h1>{bikes.brand}</h1>
                            <h3>{bikes.model}</h3>
                            <h4>{bikes.year}</h4>
                            <button onClick={() => this.deleteBike(bikes._id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default BikePage;