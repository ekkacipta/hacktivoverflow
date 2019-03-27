const answerController = require('../controllers/answer')
const router = require('express').Router()

router.get('/', answerController.findAll)
router.get('/:id', answerController.findOne)
router.post('/', answerController.create)
router.put('/update/:id', answerController.update)
router.delete('/:question/delete/:id', answerController.delete)
router.put('/upvote/:id', answerController.upvote)
router.put('/downvote/:id', answerController.downvote)

module.exports = router