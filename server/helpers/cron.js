const cron = require('node-cron')
const User = require('../models/user')
const kue = require('kue')
const queue = kue.createQueue()
const mailer = require('./mailer')

module.exports = function schedule() {
  cron.schedule('* 10 * * Sunday', () => {
    User
      .find({})
      .then(response => {
        console.log(response)
        response.forEach(e => {
          let text = `
                        Happy Sunday, ${e.name} wish you have a good day and make your day
                        `
          let email = e.email
          
          queue.create('email', {
            email,
            text
          }).save()
        })
      })
      .catch(err => {
        console.log(err);
      })

    queue.process('email', function (job, done) {
      mailer(job.data.email, job.data.text)
      done()
    })
  })
}