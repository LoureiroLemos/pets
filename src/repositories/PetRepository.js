const db = require("../models/ConnectDatabase");

class PetRepository {
  async findAll() {
    const rows = await db.query(`
        SELECT pets.* FROM pets
        LEFT JOIN categories ON categories.id = pets.category_id
        `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT pets.*, categories.name AS category_name
      FROM pets
      LEFT JOIN categories ON categories.id = pets.category_id
      WHERE pets.id = ?;
      `,
      [id]
    );
    return row;
  }

  async create({ name, color, age, size, status, category_id }) {
    const result = await db.query(
      `
      INSERT INTO pets (name, color, age, size, status, category_id )
      VALUES (?, ?, ?, ?, ?, ?,)
      `,
      [name, color, age, size, status, category_id]
    );

    // Retorna o ID do novo contato inserido e os dados inseridos
    const insertedId = result.insertId;
    return {
      id: insertedId,
      name,
      color,
      age,
      size, 
      status,
      img,
      category_id,
    };
  }

  update() {}

  async delete(id) {
    const deleteItem = await db.query(
      `
        DELETE FROM pets
        WHERE id = ?;
      `,
      [id]
    );

    return deleteItem;
  }
}

module.exports = new PetRepository();