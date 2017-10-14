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

module.exports = router;