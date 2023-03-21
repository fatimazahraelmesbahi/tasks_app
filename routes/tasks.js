const express = require("express");
const router = express.Router();
let database = [];

router.post('/', (req, res) => {
  let donnees = req.body;
  console.log(donnees)
  database.push(donnees);
  res.send('data add with succes ');
});
 router.get('/', (req, res) => {
    res.send(database);
  });
  router.get('/:limit', (req, res) => {
    let limit = req.params.limit;
    let limitedData = database.slice(0, limit);
    res.send(limitedData);
  });
  
  router.delete('/:id', (req, res) => {
    let id = req.params.id;
    database.splice(id, 1);
    res.send('deleted with succes.');
  });
  router.put('/:id', (req, res) => {
    let id = req.params.id;
    let donneesMisesAJour = req.body;
    database[id] = donneesMisesAJour;
    res.send('updated with succes.');
  });

module.exports = router