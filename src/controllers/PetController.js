const PetRepository = require("../repositories/PetRepository");

class PetController {
  async index(request, response) {
    // Listar todos os registros
    const pet = await PetRepository.findAll();
    response.json(pet);
  }

  

  async store(request, response) {
    const { name, color, age, size, status, category_id } = request.body;

    // Definindo regra de que nome é obrigatório
    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const pet = await PetRepository.create({
      name,
      color: color || null, //definindo null se for ausente ou invalido
      age: age || null, //definindo null se for ausente ou invalido
      size,
      status: status || 'disponível', 
      category_id, //definindo null se for ausente ou invalido
    });
    response.status(201).json(pet);
  }

  

  
}
module.exports = new PetController();