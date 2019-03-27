const questionController = require('../controllers/question')
const router = require('express').Router()

router.get('/', questionController.findAll)
router.get('/:id', questionController.findOne)
router.post('/', questionController.create)
router.put('/update/:id', questionController.update)
router.put('/postAnswer/:id', questionController.postAnswer)
router.delete('/delete/:id', questionController.delete)
router.put('/upvote/:id', questionController.upvote)
router.put('/downvote/:id', questionController.downvote)

module.exports = router