const data = require('../data.json');

const fs = require('fs');
const path = require('path');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dbPath = path.join(__dirname, 'db.json');
const adapter = new FileSync(dbPath);
const db = low(adapter);

// Vérifie si la base de données est vide, sinon l'initialise
if (!fs.existsSync(dbPath) || db.isEmpty().value()) {
  db.defaults(data).write();
}

module.exports = db;
