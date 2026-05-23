const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/create', async (req, res) => {

    try {

        const project = new Project(req.body);

        await project.save();

        res.json({
            message: "Project created",
            project
        });

    } catch (error) {
        res.status(500).json(error.message);
    }

});

router.get('/all', async (req, res) => {

    const projects = await Project.find().populate('createdBy');

    res.json(projects);

});

module.exports = router;