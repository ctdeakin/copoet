const express = require('express');
const poemsRouter = express.Router();
const {getPoemsByUserId, postPoemByUserId} = require('../database');


module.exports = poemsRouter;

poemsRouter.get('/', async (req, res, next) => {
  try {
    const poems = await getPoemsByUserId(1)
    res.send({poems})
  } catch (error) {
    next(error);
  }
});

poemsRouter.post('/', async (req, res, next) => {
 try {const poem = {
    title: req.body.title,
    lines: req.body.poem}
  const response = await postPoemByUserId(1, poem)
  if(response){
    res.status(200).send(response)
  }} catch(error){
    next(error)
  }
})