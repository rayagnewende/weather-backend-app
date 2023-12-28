var express = require('express');
var router = express.Router();
const User = require("../models/users"); 
const { checkIfEmailExist } = require('../modules/checkIfEmailExist'); 
const { checkIfUserExist}   = require('../modules/checkIfUserExist'); 
const { checkBody } = require('../modules/checkBody');

router.post('/signup', (req, res) => {
    const { name, email, password} = req.body ; 
    
    User.find()
        .then( users => {

            if(checkBody(email, password))
            {
                res.json({ result:false, error:'Missing or empty fields' }); 
            }
            else if( checkIfEmailExist(email, users))
            {
                res.json({ result: false, error: 'User already exists' })
            }
            else {
                const newUser = new User({
                    name,
                    email,
                    password
                }); 

                newUser.save(); 
                res.json({ result:true}); 
            }
       
        });
}); 


 

router.post('/signin', (req, res) => {
    const { email, password} = req.body ; 


    User.find()
    .then( users => {

        if(checkBody(email, password))
        {
            res.json({ result:false, error:'Missing or empty fields' }); 
        }
        else if(!checkIfUserExist(email, password, users))
        {
            res.json({result: false, error: 'User not found' }); 
        }
        else {
            res.json({ result:true}); 
        }
   
    });

    
})

module.exports = router;
