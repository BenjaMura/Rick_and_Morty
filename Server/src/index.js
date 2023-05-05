const server = require("./app");
const { conn } = require("./db");
const PORT = 3001;

server.listen(PORT, async () => {
  console.log(`Server raised in port: ${PORT}`);
  await conn.sync({ force: true });
});
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
