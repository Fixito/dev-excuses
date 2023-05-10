const express = require('express');
const router = express.Router();

const {
  getAllExcuses,
  createExcuse,
  getExcuse
} = require('../controllers/excuses.js');

router.route('/').get(getAllExcuses).post(createExcuse);
router.route('/:id').get(getExcuse);

module.exports = router;
