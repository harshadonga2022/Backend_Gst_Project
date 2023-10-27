const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    
    challan_no:String,
    design_no:String,
    item_name: String,
    item_gst_desc: String,
    item_hsn_sac:{
      type:Number,
      require:true
    },
    item_category:String,
    uqc_code:{
      type:String,
      require:true
    },
    gst_rate:Number,
    quantity:Number,
    unit_price:Number,
    item_total:Number,
    discount:Number,
    item_taxable_value:{
      type:Number,
      require:true,
    },
    item_igst_rate:Number,
    item_igst_amount:Number,
    item_sgst_rate:Number,
    item_sgst_amount:Number,
    item_cgst_rate:Number,
    item_cgst_amount:Number,
  // item_master_id :{
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref:'user',
  //   },

  // item_name: String,
  // item_gst_desc: String,
  // item_hsn:{
  //   type:Number,
  //   require:true
  // },
  // gst_rate: {
  //   type:Number,
  //   require:true
  // },
  // item_uqc: String,
  // uqc_code:{
  //   type:String,
  //   require:true
  // },
  // category:{
  //   type:String,
  //   require:true
  // },
  // cgst_rate: Number,
  // sgst_rate: Number,
  // igst_rate: Number,
  user_id :{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user',
  },  
  },
  { timestamps: true }
);

const BILL_ITEMS = mongoose.model('bill_items', itemSchema);

module.exports = BILL_ITEMS; 