const express = require('express');
const helmet = require('helmet');


const server = express();

//Middleware
server.use(express.json());
server.use(helmet());


//routing





server.get('/', (req, res) => {
    res.status(200).json({ greeting: 'BACKEND SPRINT 1 SPRINT CHALLENGE' }) 
})


module.exports = server;