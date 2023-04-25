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

const getCharById = async (request, response) => {
    try {
        const { id } = request.params;
        const { data } = await axios(`${URL}/${id}`)
        if (!data.name) throw new Error (`Faltan datos del personaje con ID: ${id}`);
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
        };
        return response.status(200).json(character);
        // return response.status(404).send('Not found');
    } catch (error) {
        return error.message.includes('ID')
        ? response.status(404).send(error.message)
        : response.status(500).send(error.response.data.error);
    };
};

module.exports = {
    getCharById
};