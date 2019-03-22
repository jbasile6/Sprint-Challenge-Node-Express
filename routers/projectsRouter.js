const express = require('express');

const Projects = require('../data/helpers/projectModel');

const router = express.Router();



router.get('/', (req, res) => {
    Projects.get()
        .then( data => res.status(200).json(data))
        .catch( err => res.status(500).json({ error: 'There was an error getting the data' }))
})

//GET projects by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.get(id)
        .then( proj => res.status(200).json(proj))
        .catch( err => res.status(500).json({ error: 'There was an error getting this id\'s data' }))
})

//GET actions by project id
router.get('/actions/:id', (req, res) => {
    const id = req.params.id;

    Projects.getProjectActions(id)
        .then( actions => res.status(200).json(actions))
        .catch( err => res.status(500).json({ error: 'Error getting this project\'s actions' }))
})


//POST new project


module.exports = router;