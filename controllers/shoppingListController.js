let shoppingItemList = [];

exports.getShoppingListPage = (req, res) => {
    let title = "My Shopping List";
    res.render('shoppingList.ejs', {title: title, myToDo: shoppingItemList});
}

exports.postNewItem = (req, res) => {
    let userTask = req.body.newTask;
    shoppingItemList.push(userTask);
    res.redirect('/shoppingList');
}

exports.postDeleteItem = (req, res) => {
    let itemToDelete = req.body.checkbox;
    for(let i = 0; i < shoppingItemList.length; i++){
        if(shoppingItemList[i] === itemToDelete){
            shoppingItemList.splice(i, 1);
            break;
        }
    }
    res.redirect('/shoppingList');
}