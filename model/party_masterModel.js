const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gstRegex =  /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/; 

const partySchema = new Schema({
  party_name: String,
  mobile_no: Number,
  category: String,
 
  gst_no: {
    type: String,
    unique: true,
    require:true,
    validate: {
      validator: function (numb) {
        return gstRegex.test(numb);
      },
      message: 'Invalid GST number format'
    },
  },
  address: String,
  city: String,
  state:  {
    type: String,
    require:true
    },
   // Populate : get user model data//
  user_id :{
          type: mongoose.Schema.Types.ObjectId,
          ref:'user',
    },  

},
{
    timestamps: true
});

partySchema.set('strictPopulate', false);
const PARTY = mongoose.model('party', partySchema);

module.exports = PARTY; 