let myToDoList = new ToDoList();

function Task(taskToDo){
    this.taskToDo = taskToDo;
    this.toDoId = 0;
}

function ToDoList(){
    this.taskLists = {};
    this.toDoId = 0;
}

ToDoList.prototype.addTask = function(task){
    console.log('got here');
    console.log(task);
    console.log(task.toDoId);
    task.toDoId = this.assignId();
    this.taskLists[task.id] = task;
}

ToDoList.prototype.assignId = function(){
    this.toDoId += 1;
    return this.toDoId;
}

ToDoList.prototype.removeTask = function(id){
    this.addtask[id] = -1;
}  

ToDoList.prototype.addNewList = function(passedInTask){ 
    let newList = document.createElement("li");
    newList.setAttribute("id", passedInTask.toDoId); 
    myToDoList.addTask(passedInTask);
    newList.innerText = "task: " + passedInTask.taskToDo;
    document.getElementById("ulList").append(newList);
    
}

function removeTaskFromList(passedInId){
    document.getElementById(passedInId).remove();
}



window.addEventListener("load", function(){
    document.getElementById("toDoListInput").addEventListener("submit", onSubmit);
});

function onSubmit(event){ 
    event.preventDefault();
    let tempTask = new Task(document.getElementById("listNameId").value);

    console.log(document.getElementById("listNameId").value);
    myToDoList.addTask(tempTask);
    myToDoList.addNewList(tempTask); //take in task 


}
