const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text : {
        type : String,
        trim : true,
        required : [true , 'Add Income Or Expense Name']
    },

    amount : {
        type : Number,
        required : [true , 'Add Positive or Negative Number']
    },

    createAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema)