const express = require('express');

const Actions = require('../data/helpers/actionModel');

const router = express.Router();



router.get('/', (req, res) => {
    Actions.get()
        .then( data => res.status(200).json(data))
        .catch( err => res.status(500).json({ error: 'There was an error getting the data' }))
})


module.exports = router;