const { login } = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById');
const { postFav } = require('../controllers/postFav');
const { deleteFav } = require('../controllers/deleteFav');
const { postUser } = require('../controllers/postUser');
const { getFav } = require('../controllers/getFav');

const express = require('express');
const router = express.Router();

router.get('/character/:id', (request, response) => {
    getCharById (request, response);
}); // O EN UNA LINEA // router.get("/character/:id", getCharById);

router.get('/login', (request, response) => {
    login (request, response);
});

router.post('/login', (request, response) => {
    postUser (request, response);
});

router.get('/fav', (request, response) => {
    getFav (request, response);
});

router.post('/fav', (request, response) => {
    postFav (request, response);
});

router.delete('/fav/:id', (request, response) => {
    deleteFav (request, response);
});

module.exports = router;