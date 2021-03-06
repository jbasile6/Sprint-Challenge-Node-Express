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
router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then( newProj => res.status(200).json(newProj))
        .catch( err => res.status(500).json({ error: 'Error creating new project' }))
})

//PUT update an existing project by id
router.put('/:id', (req, res) => {
    const id = req.params.id;

    Projects.update(id, req.body)
        .then(update => {
            if (!update) {
                res.status(400).json({ error: 'Project id does not exist' })
            } else {
                res.status(200).json({ message: `Project id number ${id} has been updated`  })
            }
        })
        .catch( err => res.status(500).json({ error: 'Error updating project' }))

})


//DELETE project by id
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Projects.remove(id)
        .then( remProj => res.status(200).json({ message: `Project id #${id} has been deleted` }) )
        .catch( err => res.status(500).json({ error: `Error deleting project id #${id}` }))
})


module.exports = router;