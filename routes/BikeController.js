const express = require('express')
const router = express.Router({ mergeParams: true })
const { UserModel, BikeModel } = require('../db/schema')


//Index Route
router.get('/', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        const bike = user.bike
        res.json(bike)
    } catch (err) {
        res.send(err)
    }
})


router.post('/', async (req, res) => {
    try {
        const newBike = new BikeModel(req.body.bike)

        const user = await UserModel.findById(req.params.id)

        user.bike.push(newBike)

        const saved = await user.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})


router.delete('/:bikeId', async (req, res) => {
    try {
        console.log('route hit')
        const user = await UserModel.findById(req.params.id)
        console.log(req.params.bikeId)
        user.bike.id(req.params.bikeId).remove()
        const saved = await user.save()
        console.log(saved)
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;