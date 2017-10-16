import React, { Component } from 'react';
import RideList from './RideList'
import axios from 'axios'

class RidePage extends Component {
    render() {
        return (
            <div>
                <RideList />
            </div>
        );
    }
}

export default RidePage;