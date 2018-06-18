// Запуск скрипта
// node "src/lesson 1/index.js"

var Task = require('./Task.js').Task;
// можно без расширения, node.js автоматически ожидает js
// var Task = require('./Task');
var task1 = new Task("learn npm");
task1.logTitle();

