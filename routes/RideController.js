const express = require('express')
const router = express.Router({ mergParams: true })
const { UserModel, RideModel } = require('../db/schema')


router.post('/', async (req, res) => {
    
    const newRide = new RideModel()

    const user = await UserModel.findById(req.params.userId)

    user.rides
})