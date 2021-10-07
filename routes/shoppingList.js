const express = require('express');
const taskController = require('../controllers/shoppingListController');
const router = express.Router();

router.get('/shoppingList', taskController.getShoppingListPage);

router.post('/shoppingList', taskController.postNewItem);

router.post('/deleteItem', taskController.postDeleteItem);

module.exports = router;