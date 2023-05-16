const express = require('express');
const router = express.Router();
const {registerUser, authUser} = require('../controllers/userControllers')
//router.route help in chaining the route
// same func can be written as 
//router.post('/',registerUser)
router.route('/').post(registerUser).get((req,res)=>{res.send("hiiii")});
router.route('/login').post(authUser)


module.exports = router;
 