const express = require('express')
const router = express.Router({ mergeParams: true })
const { UserModel } = require('../db/schema.js')



// Get Route
router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try {
        //Find all users
        const users = await UserModel.find({})
        // Send JSON of all users
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

//Create new user
router.post('/', async (req, res) => {
    try{
    const newUser = new UserModel(req.body.user)

    const saved = await newUser.save()
    res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//UPDATE ROUTE
router.patch('/:id', async (req, res) => {
    try {
        //Get the values to th updated bio
        const updatedBio = req.body.bio
        //Find the User
        const user = await UserModel.findById(req.params.userId)
        //Grab the bio from the user
        const bio = user.bio.id(req.params.id)
        //Update the bio with the values coming in from req.body
        bio = updatedBio
        //Save the user object
        const saved = await user.save()
        //Send the updated user
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//Show Route
router.get('/:id', async (req, res) => {
    try {
        //Find a user by the route id
        const user = await UserModel.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
})



module.exports = router;