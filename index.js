TASKLIST_LCL_STRG_NAME='tasklist'



tasksDB = {}
var contador = 0
,   select_opt = 0;

function taskCreationAction(){
    console.log('sheesh')
}

function addTask(){
    var title = document.getElementById('task-title').value,
    description = document.getElementById('task-description').value;  
 
    console.log(title + ' ' + description);

}


lastHightlight = Null
function highlightTasks(param){
    var container = document.getElementById('tasks-viewer')
    if (lastHightlight == param){}
    
    container.querySelector(":nth-child("+param+")")
}

function GetSavedTaskList(){
    tasksDB = localStorage.getItem(TASKLIST_LCL_STRG_NAME);
}

function saveTaskList(){
    localStorage.setItem(TASKLIST_LCL_STRG_NAME, JSON.stringify(tasksDB));
}

window.onload = function() {
GetSavedTaskList();
document.getElementById('styled-odd-btn').addEventListener('click', function () {highlightTasks('odd');});
document.getElementById('styled-even-btn').addEventListener('click', function () {highlightTasks('even');});
};