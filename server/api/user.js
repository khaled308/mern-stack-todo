const router = require('express').Router()

const {addTask,getAll,updateTask } = require('../controllers/user.controller')


router.get('/tasks',getAll)
router.post('/task',addTask)
router.put('/task/:id',updateTask)

module.exports = router
