const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first()
    .then(user => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
}

function findSteps(id) {
  return db("schemes as s")
    .innerJoin("steps as e", "s.id", "e.scheme_id")
    .select("e.id", "s.scheme_name", "e.step_number", "e.instructions")
    .orderBy("e.step_number")
    .where({ scheme_id: id });
}

async function add(scheme) {
  const [id] = await db("schemes").insert(scheme);
  return findById(id);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
