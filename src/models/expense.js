const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    description: {
        type: String,
        required: false,
        max: 255,
        min: 6
    },
    amount: {
        type: Number,
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    expense_type: {
        type: String,
        enum: ['personal', 'group'],
        required: true
    },
    status: {
        type: String,
        required: true
    },
    group_id: {
        type: Schema.Types.ObjectId, ref: 'Group'
    },
    division_type: {
        type: String,
        enum: ['Percentage', 'Absolute', 'Equal']
    }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;