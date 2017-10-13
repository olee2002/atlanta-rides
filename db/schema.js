const mongoose = require('mongoose')

const BikeSchema = mongoose.Schema({

    brand: {
        type: String,
        default: 'Brand',
        required: true
    },
    model: {
        type: String,
        required: true,
        default: 'Model'
    },
    year: {
        type: Number,
        default: Date.now
    },
    use: {
        type: String,
        default: "e.g.Mountain Bike"
    },
    img: {
        type: String,
        default: "Enter url"
    }
})

const RideSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
        default: 'e.g: beginner'
    },
    rating: {
        type: Number,
        required: true,
        default: 'e.g: 1-5'
    }
})

const UserSchema = mongoose.Schema({
    name: {
        type: Number,
        required: true,
    },
    image: {
        type: String
    },
    bio: {
        type: String
    },
    rides: [RideSchema],
    bikes: [BikeSchema]
})

const BikeModel = mongoose.model('Bike', BikeSchema)
const RideModel = mongoose.model('Ride', RideSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    BikeModel: BikeModel,
    RideModel: RideModel,
    UserModel: UserModel
}