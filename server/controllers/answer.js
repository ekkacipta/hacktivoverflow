const Answer = require('../models/answer')
const jwtConvert = require('../helpers/jwtConvert')
const User = require('../models/user')
const Questions = require('../models/question')


class AnswerController {
    static findAll(req, res) {
        Answer
            .find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static findOne(req, res) {
        Answer
            .findOne({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static create(req, res) {
        let decoded = jwtConvert.verify(req.headers.token)
        let new_answer = {
            title: req.body.title,
            description: req.body.description,
            belongsTo: decoded.id
        }
        Answer
            .create(new_answer)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static update(req, res) {
        Answer
            .findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: req.body
            })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => [
                res.status(400).json(err)
            ])
    }

    static async delete(req, res) {
        try {
            await Answer.findOneAndDelete({ _id: req.params.id })
            let data = await Questions.findOneAndUpdate({ _id: req.params.question}, { $pull: { answer: req.params.id}}, { new:true })
            res.status(200).json({
                message: 'Berhasil',
                data
            })
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static upvote(req, res) {
        let decoded = jwtConvert.verify(req.headers.token)
        Answer
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
        Answer
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
}

module.exports = AnswerController