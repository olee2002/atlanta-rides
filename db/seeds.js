require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { BikeModel, RideModel, UserModel } = require('./schema')

const area51 = new RideModel({
    name: 'Area-51',
    location: 'Canton, Ga',
    distance: 4.2,
    time: 22,
    difficulty: 'Advanced',
    rating: 4
})

const novarra = new BikeModel({
    brand: "Novarra",
    model: "Ponderosa",
    year: 2015,
    img: ""
})

const blake = new UserModel({
    name: "Blake",
    img: "https://i.imgur.com/b6zEZlet.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Turpis cursus in hac habitasse platea dictumst quisque. Varius morbi enim nunc faucibus a pellentesque sit. Magna eget est lorem ipsum dolor sit amet consectetur. Risus commodo viverra maecenas accumsan lacus vel facilisis. Velit sed ullamcorper morbi tincidunt ornare. Sodales neque sodales ut etiam sit amet nisl purus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pretium fusce id velit ut. Justo laoreet sit amet cursus sit amet dictum sit. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Quis enim lobortis scelerisque fermentum dui faucibus in. Adipiscing at in tellus integer feugiat scelerisque varius. Dui id ornare arcu odio ut sem. Amet nulla facilisi morbi tempus iaculis urna. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Mauris ultrices eros in cursus turpis massa.",
    ride: [area51, {}],
    bike: [novarra, {}]
})

UserModel.remove({})
    .then(() => blake.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
    .catch((err) => console.log(err))