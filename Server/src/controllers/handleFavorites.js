let myFavorites = [];

const postFav = (request, response) => {
    try {
        const character = request.body;
        const characterFound = myFavorites
        .find(favorite => favorite.id === character.id);
        if (characterFound) throw Error('El personaje ya existe en favoritos');
        myFavorites.push(character);
        return response.status(200).json(myFavorites);
    } catch (error) {
        return response.status(404).send(error.message);
    };
};

const deleteFav = (request, response) => {
    const { id } = request.params;
    myFavorites = myFavorites
    .filter((favorite) => favorite.id !== +id);
    return response.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
};