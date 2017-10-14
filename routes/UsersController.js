const express = require ('express')
const { UserModel} = require ('../db/schema.js')
const router = express.Router()

router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try{
        //Find all users
        const users = await UserModel.find({})
        // Send JSON of all users
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        //Find a user by the route id
        const user = await UserModel.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;