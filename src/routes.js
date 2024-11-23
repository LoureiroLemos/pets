const { Router } = require("express");
const PetController = require("./controllers/PetController");

const routes = Router();

routes.get("/", PetController.index);
routes.get('/animals', PetController.index);
routes.post('/animals', PetController.store);

// routes.get("/contacts/:id", PetController.show);
// routes.post("/contacts", PetController.store);
// routes.put("/contacts/:id", PetController.update);
// routes.delete("/contacts/:id", PetController.delete);

//rota "/users" - TIPO POST
// routes.post("/users", (request, response) => {
//   console.log(request.body);
//   response.json({ message: "Rota /users METODO POST" });
// });

module.exports = routes;