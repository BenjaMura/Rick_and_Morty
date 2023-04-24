/* const http = require('http');
const { getCharById } = require('./controllers/getCharById');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    if (request.url.includes('/rickandmorty/character')) {
        const id = request.url.split('/').at(-1);
        getCharById(response, +id);
    } */
    
    // const { url } = req;
    /* if (request.url.includes('/rickandmorty/character')) {
        const id = request.url.split('/').at(-1);
        const characterFound = data.find((character) => character.id == +id);
        return response
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(characterFound))        
        
        
        // if (character) {
        //     res.writeHead(200, {'Content-Type': 'application/json'});
        //     return res.end(JSON.stringify(character));
        // } else {
        //     res.writeHead(404, {'Content-Type': 'application/json'});
        //     return res.end(JSON.stringify({error: 'Character not found'}))
        // }
    } */
/* }).listen(3001, 'localhost'); */

const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');
const PORT = 3001;

server.use(express.json());
server.use(morgan('dev'));

server.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use('/rickandmorty', router);

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});