const express = require('express');

const Actions = require('../data/helpers/actionModel');

const router = express.Router();



router.get('/', (req, res) => {
    Actions.get()
        .then( data => res.status(200).json(data))
        .catch( err => res.status(500).json({ error: 'There was an error getting the data' }))
})

//GET actions by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    Actions.get(id)
        .then( action => res.status(200).json(action))
        .catch( err => res.status(500).json({ error: 'There was an error getting this id\'s action' }))
})



module.exports = router;