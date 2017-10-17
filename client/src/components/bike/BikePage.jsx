import React, { Component } from 'react';
import axios from 'axios'


class BikePage extends Component {
    state = {
        bike: []
    }

    componentWillMount() {
        this.getBikeInfo()
    }

    getBikeInfo = async (bikeId) => {
        try{
            const { userId } = this.props
            const res = await axios.get(`/api/users/${userId}/bike`)
            console.log(res.data)
            this.setState({ bike: res.data })
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                {this.state.bike.map((bikes, index) => {
                    return (
                        <div key={index}>
                            <h1>{bikes.brand}</h1>
                            <h3>{bikes.model}</h3>
                            <h4>{bikes.year}</h4>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default BikePage;