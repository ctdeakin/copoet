const express = require('express');
const poemsRouter = express.Router();
const getPoemsByUserId = require('../database');


module.exports = poemsRouter;

poemsRouter.get('/', async (req, res, next) => {
  try {
    const poems = await getPoemsByUserId()
    res.send({poems})
  } catch (error) {
    next(error);
  }
});
