const Question = require('../models/question')
const jwtConvert = require('../helpers/jwtConvert')

class QuestionController {
    static findAll(req, res) {
        Question
            .find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static findOne(req, res) { 
        Question
            .findOne({ _id: req.params.id })
            .populate('answer')
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static create(req, res) {
        Question
            .create(req.body)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static update(req, res) {
        Question
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
        Question
            .findByIdAndDelete({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static upvote(req, res) {
        let decoded = jwtConvert.verify(req.headers.token)
        Question
            .findById({
                _id: req.params.id
            })
            .then(async (data) => {
                if(data.upvotes.indexOf(decoded.id) == -1){
                    data.downvotes.splice(data.downvotes[data.downvotes[decoded.id]], 1)
                    data.upvotes.push(decoded.id)
                }
                res.status(200).json(await data.save())
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static downvote(req, res) {
        let decoded = jwtConvert.verify(req.headers.token)
        Question
            .findById({
                _id: req.params.id
            })
            .then(async (data) => {
                if(data.downvotes.indexOf(decoded.id) == -1){
                    data.upvotes.splice(data.upvotes[data.upvotes[decoded.id]], 1)
                    data.downvotes.push(decoded.id)
                }
                res.status(200).json(await data.save())
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static postAnswer(req, res) {
        Question
            .findById({
                _id: req.params.id
            })
            .then(async (data) => {
                data.answer.push(req.body.data._id)
                await data.save()
                res.status(200).json(req.body.data)
                
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}

module.exports = QuestionController