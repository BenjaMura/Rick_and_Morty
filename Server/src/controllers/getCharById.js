const axios = require('axios');

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
};