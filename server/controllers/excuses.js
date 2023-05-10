const { StatusCodes } = require('http-status-codes');

const getAllExcuses = async (req, res) => {
  res.status(StatusCodes.OK).send('get excuses');
};

const createExcuse = async (req, res) => {
  res.status(StatusCodes.CREATED).send('create an excuse');
};

const getExcuse = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(StatusCodes.OK).send('get an excuse');
};

module.exports = { getAllExcuses, createExcuse, getExcuse };
