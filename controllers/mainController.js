const date = require('../getDate.js');

let toDoList = [];

exports.getMainPage = (req, res) => {
    let today = date.getTodayDateLong();
    res.render('index.ejs', {date: today, myToDo: toDoList});
}

exports.postNewTask = (req, res) => {
    let userTask = req.body.newTask;
    toDoList.push(userTask);
    res.redirect('/');
}

exports.postDeleteTask = (req, res) => {
    let itemToDelete = req.body.checkbox;
    for(let i = 0; i < toDoList.length; i++){
        if(toDoList[i] === itemToDelete){
            toDoList.splice(i, 1);
            break;
        }
    }
    res.redirect('/');
}

// väljastame objekti koos html-ga, võib shoppinglisti ja taski kirjutada ühtemoodi
// index ja shoppinglist teha ühte ejs faili, kasutades if tingimust, et kumba esitatakse.