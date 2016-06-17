var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');



module.exports = function (app) {
  app.use('/api/user', router);
};

router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(users);
  });



});

router.get('/:user_id', function (req, res, next) {

  res.status(500).json({
    error: 'User with the ID ' + req.params.user_id + ' not found'
  });
});

router.post('/', function (req, res, next) {

  if (req.body.password === req.body.password_confirmed) {
    var newUser = new User({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: 1
    });
    console.log("not saved");
    newUser.save(function (err, userregistered) {
      if (err) return res.send(500, err.message);
        res.status(200).json({
          success: true
        }, userregistered);
      }

    );
    console.log("saved");





  } else {
    res.json({
      success: false,
      error: 'Confirme your password please'
    });
  }

});
