const router = require('express').Router();
const { Project } = require('../models');

router.get('/', async (req, res) => {
    const projectData = await Project.findAll();
    const projects = projectData.map((project) => project.get({ plain: true }));
    res.render('homepage', {
        projects
    });
});

router.get('/projects/:id', async (req, res) => {
    const projectData = await Project.findByPk(req.params.id);
    const projects = [ projectData.get({ plain: true }) ];
    res.render('homepage', { projects });
})  

module.exports = router;