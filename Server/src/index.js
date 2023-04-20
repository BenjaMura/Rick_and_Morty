const http = require('http');
const data = require('./utils/data');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // const { url } = req;
    if (request.url.includes('/rickandmorty/character')) {
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
    }
}).listen(3001/* , 'localhost' */);