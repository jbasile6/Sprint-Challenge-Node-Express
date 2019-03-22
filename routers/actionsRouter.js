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

//POST new action
router.post('/', (req, res) => {
    Actions.insert(req.body)
        .then( newAction => res.status(200).json(newAction))
        .catch( err => res.status(500).json({ error: 'Error creating new action' }))
})

//PUT update an existing action by id
router.put('/:id', (req, res) => {
    const id = req.params.id;

    Actions.update(id, req.body)
        .then(update => {
            if (!update) {
                res.status(400).json({ error: `Action id ${id} does not exist` })
            } else {
                res.status(200).json({ message: `Action id number ${id} has been updated`  })
            }
        })
        .catch( err => res.status(500).json({ error: 'Error updating action' }))

})


//DELETE action by id
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Actions.remove(id)
        .then( remAction => res.status(200).json({ message: `Action id #${id} has been deleted` }) )
        .catch( err => res.status(500).json({ error: `Error deleting action id #${id}` }))
})



module.exports = router;