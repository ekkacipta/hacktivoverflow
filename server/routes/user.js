const userController = require('../controllers/user')
const router = require('express').Router()

router.get('/', userController.findAll)
router.get('/:id', userController.findOne)
router.post('/', userController.register)
router.post('/login', userController.login)
router.put('/update/:id', userController.update)
router.delete('/delete/:id', userController.delete)

module.exports = router