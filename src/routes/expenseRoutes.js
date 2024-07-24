const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');


router.post('/expenses', expenseController.createExpense);
router.get('expenses/:id', expenseController.getExpense);
router.put('/expenses/:id', expenseController.updateExpense);
router.delete('/expense/:id', expenseController.deleteExpense);


module.exports = router;