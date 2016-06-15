var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/auth', router);
};

router.get('/login', function (req, res, next) {
  res.render('auth/login', {
    title: 'Log in',
  });
});
router.get('/signup', function (req, res, next) {
  res.render('auth/signup', {
    title: 'signup',
  });
});
