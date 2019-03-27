const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')
const Answer = require('./answer')

const questionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Must filled']
    },
    description: String,
    upvotes: [{ 
        type: Schema.Types.ObjectId,
        ref: User.collection.name
    }],
    downvotes: [{
        type: Schema.Types.ObjectId,
        ref: User.collection.name
    }],
    answer: [{
        type: Schema.Types.ObjectId,
        ref: Answer.collection.name
    }],
    belongsTo: [{
        type: Schema.Types.ObjectId,
        ref: User.collection.name
    }]
})


const Question = mongoose.model('questions', questionSchema)

module.exports = Question