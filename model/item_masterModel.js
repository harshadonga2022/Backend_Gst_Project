const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const item_masterSchema = new Schema({
  item_name: String,
  item_gst_desc: String,
  item_hsn:{
    type:Number,
    require:true
  },
  gst_rate: {
    type:Number,
    require:true
  },
  item_uqc: String,
  uqc_code:{
    type:String,
    require:true
  },
  category:{
    type:String,
    require:true
  },
  cgst_rate: Number,
  sgst_rate: Number,
  igst_rate: Number,
  user_id :{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user',
},  
},
{ timestamps: true }
);

const ITEM = mongoose.model('item_master', item_masterSchema);

module.exports = ITEM; 