const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');
const db = require('../db');
const { sortByHttpCode } = require('../utils');

const getAllExcuses = async (_req, res) => {
  const excuses = db.get('excuses').value();
  res.status(StatusCodes.OK).json({ nbHits: excuses.length, excuses });
};

const createExcuse = async (req, res) => {
  const { tag, message } = req.body;

  if (!tag || !message) {
    throw new BadRequestError('Veuillez remplir tous les champs');
  }

  const excuses = db.get('excuses').value();
  const lastHttpCode = sortByHttpCode(excuses).at(-1).http_code;
  const newExcuse = { http_code: lastHttpCode + 1, tag, message };

  db.get('excuses').push(newExcuse).write();

  res.status(StatusCodes.CREATED).send({ excuse: newExcuse });
};

const getExcuse = async (req, res) => {
  const { id } = req.params;
  const excuse = db
    .get('excuses')
    .find({ http_code: Number(id) })
    .value();

  if (!excuse) {
    throw new NotFoundError(`Pas d'excuse avec le http-code : ${id}`);
  }

  res.status(StatusCodes.OK).send({ excuse });
};

const getRandomExcuse = async (_req, res) => {
  const randomIndex = Math.floor(
    Math.random() * db.get('excuses').value().length
  );
  const excuse = db.get('excuses').value()[randomIndex];

  res.status(StatusCodes.OK).send({ excuse });
};

module.exports = { getAllExcuses, createExcuse, getExcuse, getRandomExcuse };
