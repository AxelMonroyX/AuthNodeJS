var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/user', router);
};

router.get('/:user_id', function (req, res, next) {

  res.status(500).json({
    error: 'User with the ID '+req.params.user_id+' not found'
  });
});

router.post('/', function (req, res, next) {
  res.json(null);
  res.json({
    user: 'tobi'
  });
  res.status(500).json({
    error: 'message'
  });
});
