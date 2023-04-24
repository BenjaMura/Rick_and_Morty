/* const axios = require('axios');

const getCharById = (response, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(value => value.data)
    .then(({ name, gender, species, origin, image, status }) => {
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        return response
                .writeHead(200, {'Content-type': 'application/json'})
                .end(JSON.stringify(character))
    })
    .catch(error => {
        return response
                .writeHead(500, {'Context-type': 'application/json'})
                .end(error.message)
    })
}

module.exports = {
    getCharById
}; */

const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = (request, response) => {
    const { id } = request.params;
    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({ 
        status,
        name,
        species,
        origin,
        image, 
        gender }) => {
        if (name) {
            const character = {
                id,
                status,
                name,
                species,
                origin,
                image,
                gender,
            }
            return response.status(200).json(character)
        }
        return response.status(404).send('Not found');
    })
    .catch(error => response.status(500).send(error.message))
};

module.exports = {
    getCharById
};