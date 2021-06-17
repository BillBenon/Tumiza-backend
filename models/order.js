const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true 
    },
    creator: { 
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: 'User' 
    },
    delivered: {
        type: Boolean,
        default:false,
        required:true
    },
});

module.exports = mongoose.model('Order', placeSchema);