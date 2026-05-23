const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/create', async (req, res) => {

    try {

        const task = new Task(req.body);

        await task.save();

        res.json({
            message: "Task created",
            task
        });

    } catch (error) {
        res.status(500).json(error.message);
    }

});

router.get('/all', async (req, res) => {

    const tasks = await Task.find()
        .populate('assignedTo')
        .populate('projectId');

    res.json(tasks);

});
router.put('/update/:id', async (req, res) => {

    try {

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedTask);

    } catch (error) {
        res.status(500).json(error.message);
    }

});
router.delete('/delete/:id', async (req, res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);

        res.json({
            message: 'Task deleted'
        });

    } catch (error) {

        res.status(500).json(error.message);

    }

});

module.exports = router;