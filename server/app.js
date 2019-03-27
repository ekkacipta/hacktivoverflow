require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/user')
const questionRouter = require('./routes/question')
const answerRouter = require('./routes/answer')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb://localhost:27017/hacktivOverflow', { useNewUrlParser: true })

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/users', userRouter)
app.use('/questions', questionRouter)
app.use('/answers', answerRouter)

app.listen(3000, function () {
    console.log('Listen to port 3000')
})