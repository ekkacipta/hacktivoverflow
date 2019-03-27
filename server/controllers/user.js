const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwtConvert = require('../helpers/jwtConvert')
const googleSignin = require('../helpers/googleSignin')

class UserController {
    static findAll(req, res) {
        User
            .find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
    
    static findOne(req, res) {
        User
            .findOne({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static register(req, res) {
        User
            .create(req.body)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static login(req, res) {
        User
            .findOne({
                email: req.body.email
            })
            .then((data) => {
                if(!data){
                    res.status(400).json({
                        message: `Wrong username/password`
                    })
                }
                else {
                    let isValid = bcrypt.compareSync(req.body.password, data.password)
                    if(isValid){
                        let token = jwtConvert.sign({
                            id: data._id,
                            email: data.email
                        })
                        res.status(200).json({token, id:data._id})
                    }
                    else{
                        res.status(400).json({
                            message: `Wrong username/password`
                        })
                    }
                }
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static update(req, res) {
        User
            .findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: req.body
            })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static delete(req, res) {
        User
            .findByIdAndDelete({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}

module.exports = UserController