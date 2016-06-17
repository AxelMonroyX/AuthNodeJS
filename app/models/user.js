var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true
  }
});

UserSchema.virtual('date')
  .get(function () {
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);
