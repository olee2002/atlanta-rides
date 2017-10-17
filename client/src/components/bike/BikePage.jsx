import React, { Component } from 'react';
import axios from 'axios'


class BikePage extends Component {
    state = {
        bike: []
    }

    componentWillMount() {
        this.getBikeInfo()
    }

    getBikeInfo = async () => {
        try{
            const { userId } = this.props
            const res = await axios.get(`api/users/${userId}/bike`)
            this.setState({ bike: res.data })
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <h1>Bike Page</h1>
            </div>
        );
    }
}

export default BikePage;