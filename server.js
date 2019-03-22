const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./routers/projectsRouter');
const actionsRouter = require('./routers/actionsRouter');


const server = express();

//Middleware
server.use(express.json());
server.use(helmet());



//routing
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);





server.get('/', (req, res) => {
    res.status(200).json({ greeting: 'BACKEND SPRINT 1 SPRINT CHALLENGE' }) 
})

server.get('/express_backend', (req, res) => {
    res.send({ express: 'EXPRESS IS CONNECTED TO REACT' })
})


module.exports = server;