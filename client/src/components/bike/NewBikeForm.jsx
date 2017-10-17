import React, { Component } from 'react';


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
                    <div>
                        <label htmlFor="brand">Brand</label>
                        <input 
                            onChange={this.handleChange} name="brand"
                            type="text" 
                            value={this.state.newBike.brand}
                        />
                    </div>
                    <div>
                        <label htmlFor="model">Model</label>
                        <input 
                            onChange={this.handleChange} name="model"
                            type="text" 
                            value={this.state.newBike.model}
                        />
                    </div>
                    <div>
                        <label htmlFor="year">Year</label>
                        <input 
                            onChange={this.handleChange} name="year"
                            type="text" 
                            value={this.state.newBike.year}
                        />
                    </div>
                    <div>
                        <label htmlFor="img">Image</label>
                        <input 
                            onChange={this.handleChange} name="img"
                            type="text" 
                            value={this.state.newBike.img}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewBikeForm;