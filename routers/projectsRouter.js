const express = require('express');

const Projects = require('../data/helpers/projectModel');

const router = express.Router();



router.get('/', (req, res) => {
    Projects.get()
        .then( data => res.status(200).json(data))
        .catch( err => res.status(500).json({ error: 'There was an error getting the data' }))
})


module.exports = router;