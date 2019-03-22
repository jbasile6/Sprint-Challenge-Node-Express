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


module.exports = router;