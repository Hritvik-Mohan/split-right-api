const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    participants: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    created_by: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Group', GroupSchema);