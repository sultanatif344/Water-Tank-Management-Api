const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
router.post('/signup', (req, res, next) => {
    console.log('coming here')
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail exists'
                })
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        console.log('completed')
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.userName,
                            email: req.body.email,
                            passowrd: hash,
                            userType: req.body.userType,
                            authorizations: {
                                waterLevel: req.body.waterLevel,
                                waterStatus: req.body.waterStatus,
                                addATank: req.body.addATank,
                                tankList: req.body.tankList,
                                motorStatus: req.body.motorStatus,
                                adminPanel: req.body.adminPanel
                            }
                        })
                        User.create(user).then(result => {
                            res.status(200).json({
                                message: 'User Created'
                            })
                        });
                    }
                })
            }
        })
        .catch(err => console.log(err))
});

module.exports = router;