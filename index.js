// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const server = require('./server');

//const port = process.env.PORT || 4000;
//const greeting = process.env.GREETING;

server.listen(4000, () => {
    console.log(`\n* Server Running on http://localhost:4000 *\n`);
})