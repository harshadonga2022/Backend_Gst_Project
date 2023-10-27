const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const gst_salesSchema = new Schema({
    party_master:
    {
        type: Schema.Types.ObjectId,
        ref: 'party',
        required: true
    },
    invoice_number: {
        type: String,
        unique: true,
        require: true
    },
    invoice_date:
    {
        type: Date,
        require: true
    },
    f_year: String,
    challan_no: Number,
    items:
        [
            {
                item: {
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
                },
                quantity: Number,
            }
        ],
    sub_total: Number,
    discount_rate: Number,
    discount_amount: Number,
    taxable_value: Number,
    cgst_amount: Number,
    sgst_amount: Number,
    igst_amount: Number,
    round_off: Number,
    invoice_value: Number,
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
  },  

},
    { timestamps: true }
);

const GST_SALES = mongoose.model('gst_sales', gst_salesSchema);

module.exports = GST_SALES; 