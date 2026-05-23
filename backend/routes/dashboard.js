const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {

    try {

        const tasks = await Task.find();

        const totalTasks = tasks.length;

        const completedTasks = tasks.filter(
            task => task.status === "Completed"
        ).length;

        const pendingTasks = tasks.filter(
            task => task.status === "Pending"
        ).length;

        const overdueTasks = tasks.filter(
            task => new Date(task.dueDate) < new Date() &&
            task.status !== "Completed"
        ).length;

        res.json({
            totalTasks,
            completedTasks,
            pendingTasks,
            overdueTasks
        });

    } catch (error) {
        res.status(500).json(error.message);
    }

});

module.exports = router;