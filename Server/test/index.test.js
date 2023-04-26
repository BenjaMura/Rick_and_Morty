const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 1990,
    name: 'Benjamin Muratore',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
        name: 'Earth (C-137)'
    },
    image: 'image.jpg'
};

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await request.get('/rickandmorty/character/1').expect(200);
            
            // OTRA FORMA
            // const response = await request.get('/rickandmorty/character/1');
            // expect(response.statusCode).toBe(200)

        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',
        async () => {
            const response = await request.get('/rickandmorty/character/1');
            
            // FORMA FÁCIL PERO NO DESEADA POR TANTOS EXPECTS
            // expect(response.body).toHaveProperty("id")
            // expect(response.body).toHaveProperty("name")
            // expect(response.body).toHaveProperty("species")
            // expect(response.body).toHaveProperty("gender")
            // expect(response.body).toHaveProperty("status")
            // expect(response.body).toHaveProperty("origin")
            // expect(response.body).toHaveProperty("image")
            
            // OTRA FORMA
            // const obj = {id, name, species, gender, status, origin, image}
            // for (const prop in obj) {
            //     expect(response.body).toHaveProperty(prop)
            // }

            // OTRA FORMA SIN CHARACTER FUERA DEL DESCRIBE
            // const props = [
            //     'id',
            //     'name',
            //     'species',
            //     'gender',
            //     'status',
            //     'origin',
            //     'image'
            // ];
            // props.forEach(prop => {
            //     expect(response.body).toHaveProperty(prop);
            // });

            for (const prop in character) {
                expect(response.body).toHaveProperty(prop);
            };
        });
        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/3209j');
            expect(response.statusCode).toBe(500);
        });
    });
    describe("GET /rickandmorty/login", () => {
        it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=benjaminmuratore1@gmail.com&password=asd123');
            const access = { access: true };
            expect(response.body).toEqual(access);
        });
        it("Responde con un objeto con la propiedad access en false si la información del usuario no es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=benjaminmuratore@mail.com&password=as23');
            const access = { access: false };
            expect(response.body).toEqual(access);
        });
    });
    describe("POST /rickandmorty/fav", () => {
        it("Debe agregar el personaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav')
            .send(character);
            expect(response.body).toContainEqual(character);
        });
        it("Debe agregar el personaje en favoritos sin eliminar los existentes", async () => {
            character.id = 1010;
            character.name = 'FT 37a';
            const response = await request.post('/rickandmorty/fav')
            .send(character);
            expect(response.body.length).toBe(2);
        });
    });
    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID consultado no existe, debería retornar un arreglo con todos los favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/2')
            expect(response.body.length).toBe(2);
        });
        it("Si el ID consultado existe, debería eliminarlo de favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/1010')
            expect(response.body.length).toBe(1);
        });    
    });
});