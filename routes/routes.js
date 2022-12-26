var express = require('express');
var router = express.Router();

router.get('/api/v1/getAllTasks', require('../controllers/tasks').getAllTasks)
router.post('/api/v1/post_data', require('../controllers/tasks').postSingleTask)
router.get('/api/v1/getSingletask/:id', require('../controllers/tasks').getSingleTask)
router.put('/api/v1/updateTasks', require('../controllers/tasks').updateTasks)
router.delete('/api/v1/deleteTask', require('../controllers/tasks').deleteTask)


module.exports = router
