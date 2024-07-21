const express = require('express');
const router = express.Router();
const { getTasks, getOneTask, createOneTask, updateOneTask, deleteOneTask } = require('./../controllers/taskController');

router.get('/', getTasks);
router.get('/:id', getOneTask);
router.post('/', createOneTask);
router.put('/:id', updateOneTask);
router.delete('/:id', deleteOneTask);

module.exports = router;