const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  username: { //Regex in model schema
    type: String,
    required: true,
    unique: true,
    validate:{ 
      validator: function (space) {
      return space.indexOf(' ') === -1;
    },
    message: "Cannot contain spaces!"}
  },
  mobile_no: {
    type: Number,
    required: true,
    validate: {
      validator: function (numb) {
        return numb.toString().length >= 10;
      },
      message: 'Mobile number must be at least 10 digits.'
    },
  },
  password: {
    type: String,
    required: true,
  },

  //__________________________________-
  gst_number: {
    type: String,
  },
  trade_name: {
    type: String,
  },
  owner_name: String,
  email: {
    type: String,
    validator: function (email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    message: 'Invalid email format!'
  },
  address: String

},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
const USER = mongoose.model('user', userSchema); //'user = mongoDB collection name'
module.exports = USER; 