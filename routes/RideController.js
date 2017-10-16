const express = require('express')
const router = express.Router({ mergeParams: true })
const { UserModel, RideModel } = require('../db/schema')


//Index Route
router.get('/', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        console.log(user)
        const ride = user.ride
        res.json(ride)
    } catch (err) {
        res.send(err)
    }
})


router.post('/', async (req, res) => {
    try {
        const newRide = new RideModel(req.body.ride)

        const user = await UserModel.findById(req.params.id)

        user.ride.push(newRide)

        const saved = await user.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;