const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')

const answerSchema = new Schema({
    title: String,
    description: String,
    upvotes: [{ 
        type: Schema.Types.ObjectId,
        ref: User.collection.name
    }],
    downvotes: [{
        type: Schema.Types.ObjectId,
        ref: User.collection.name
    }],
    belongsTo: {
        type: Schema.Types.ObjectId,
        ref: User.collection.name
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: User.collection.name
    }
})

const Answer = mongoose.model('answers', answerSchema)

module.exports = Answer