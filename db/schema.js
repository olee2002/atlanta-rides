const mongoose = require('mongoose')

const BikeSchema = mongoose.Schema({

    brand: {
        type: String,
        default: 'Brand',
    },
    model: {
        type: String,
        default: 'Model'
    },
    year: {
        type: Number,
    },
    img: {
        type: String,
        
    }
})

const RideSchema = mongoose.Schema({
    name: {
        type: String,
        
    },
    location: {
        type: String,
    },
    distance: {
        type: Number,
    },
    time: {
        type: Number,
    },
    difficulty: {
        type: String,
    },
    rating: {
        type: Number,
    },
})

const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    img: {
        type: String
    },
    bio: {
        type: String
    },
    ride: [RideSchema],
    bike: [BikeSchema]
})

const BikeModel = mongoose.model('Bike', BikeSchema)
const RideModel = mongoose.model('Ride', RideSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    BikeModel, RideModel, UserModel 
}