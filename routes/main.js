const express = require('express');
const taskController = require('../controllers/mainController');
const router = express.Router();

router.get('/', taskController.getMainPage);

router.post('/', taskController.postNewTask);

router.post('/delete', taskController.postDeleteTask);

module.exports = router;


//lisa projektile uus route nimega shoppingList
//lisa projektile ka kontrolleri shoppingList routeri jaoks