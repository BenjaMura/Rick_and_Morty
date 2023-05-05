const { login } = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById');
const { postFav } = require('../controllers/postFav');
const { deleteFav } = require('../controllers/deleteFav');
const { postUser } = require('../controllers/postUser');

const express = require('express');
const router = express.Router();
// O EN UNA LINEA // const router = Router();

router.get('/character/:id', (request, response) => {
    getCharById (request, response);
}); // O EN UNA LINEA // router.get("/character/:id", getCharById);

router.get('/login', (request, response) => {
    login (request, response);
});

router.post('/login', (request, response) => {
    postUser (request, response);
});

router.post('/fav', (request, response) => {
    postFav (request, response);
});

router.delete('/fav/:id', (request, response) => {
    deleteFav (request, response);
});

module.exports = router;