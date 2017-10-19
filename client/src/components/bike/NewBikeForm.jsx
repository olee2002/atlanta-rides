import React, { Component } from 'react';
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton';

const Input = styled.input`
    border: none;
    border-bottom: thin solid black;
    background-color: initial;
`;


class NewBikeForm extends Component {
    state = {
        newBike: {
            brand: '',
            model: '',
            year: '',
            img: ''
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name 
        const updateBike = {...this.state.newBike}
        updateBike[attribute] = event.target.value
        
        this.setState({ newBike: updateBike })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.createNewBike(this.state.newBike)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Add Bike</h1>
                    <div>
                        <Input 
                            onChange={this.handleChange} name="brand"
                            type="text" 
                            placeholder="Brand"
                            value={this.state.newBike.brand}
                        />
                    </div>
                    <br/>
                    <div>
                        <Input 
                            placeholder="Model"
                            onChange={this.handleChange} name="model"
                            type="text" 
                            value={this.state.newBike.model}
                        />
                    </div>
                    <br/>
                    <div>
                        <Input 
                            placeholder="Year"
                            onChange={this.handleChange} name="year"
                            type="text" 
                            value={this.state.newBike.year}
                        />
                    </div>
                    <br/>
                    <div>
                        <Input 
                            placeholder="image url"
                            onChange={this.handleChange} name="img"
                            type="text" 
                            value={this.state.newBike.img}
                        />
                    </div>
                    <br/>
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

export default NewBikeForm;