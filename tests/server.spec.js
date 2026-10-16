const request = require("supertest");
const server = require("../index");



/*Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido
es un arreglo con por lo menos 1 objeto.*/
describe("GET", () => {
    it("GET /cafes", async () => {
        const response = await request(server).get("/cafes");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
/*Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que
no existe. */
describe("DELETE", () => {
    it("DELETE /cafes/:id", async () => {
        const response = await request(server)
            .delete("/cafes/99")
            .set("Authorization", "token-de-prueba");

        expect(response.statusCode).toBe(404);
    });
});
/*Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201. */
describe("POST", () => {
    it("POST /cafes", async () => {
        const response = await request(server).post("/cafes").send({
            id: 5,
            nombre: "Café de prueba"
        });
        expect(response.statusCode).toBe(201);

    });
});
/*Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un
café enviando un id en los parámetros que sea diferente al id dentro del payload.
(3 Puntos)*/
describe("PUT", () => {
    it("PUT /cafes/:id", async () => {
        const response = await request(server)
            .put("/cafes/1")
            .send({
                id: 2,
                nombre: "Café actualizado"
            });

        expect(response.statusCode).toBe(400);
    });
});
