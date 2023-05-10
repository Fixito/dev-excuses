const { StatusCodes } = require('http-status-codes');
const db = require('../db');
const { sortByHttpCode } = require('../utils');

const getAllExcuses = async (_req, res) => {
  // récupère la liste des excuses dans db.json
  const excuses = db.get('excuses').value();
  res.status(StatusCodes.OK).json({ length: excuses.length, excuses });
};

const createExcuse = async (req, res) => {
  const { tag, message } = req.body;

  if (!tag || !message) {
    throw new Error('Veuillez remplir tous les champs');
  }

  const excuses = db.get('excuses').value();
  const lastHttpCode = sortByHttpCode(excuses).at(-1).http_code;
  const newExcuse = { id: lastHttpCode + 1, tag, message };

  // ajoute une excuse dans la db.json
  db.get('excuses').push(newExcuse).write();

  res.status(StatusCodes.CREATED).send({ excuse: newExcuse });
};

const getExcuse = async (req, res) => {
  const { id } = req.params;
  // récupère l'excuse avec l'id correspondant dans db.json
  const excuse = db.get('excuses').find({ http_code: Number(id) });

  if (!excuse) {
    throw new Error(`Pas d'excuse avec le http-code : ${id}`);
  }

  res.status(StatusCodes.OK).send({ excuse });
};

module.exports = { getAllExcuses, createExcuse, getExcuse };
