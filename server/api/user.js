const router = require('express').Router()

const {addTask,getAll,updateTask, deleteTask } = require('../controllers/user.controller')


router.get('/tasks',getAll)
router.post('/task/add',addTask)
router.put('/task/update/:id',updateTask)
router.delete('/task/delete/:id',deleteTask)
module.exports = router
