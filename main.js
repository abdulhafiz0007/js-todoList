// Let's bring some of the elements from html file 

const elTodoForm = document.querySelector(".js-todo-form");
const elTodoInput = elTodoForm.querySelector(".js-todo-input");
const elTodoList = document.querySelector(".js-todo-list");
const elTodoTemplate = document.querySelector(".js-todo-template").content;

const todoList = []


function showTask (arr, node) {
    
    node.innerHTML = "";
    
    arr.forEach(function(soloTask, index) {
        
        
        const templateCloneNodes =  elTodoTemplate.cloneNode(true);
        templateCloneNodes.querySelector(".todo-name").textContent = `${index + 1}. ${soloTask.task_name}`;
        templateCloneNodes.querySelector(".js-delete-button").dataset.taskIndex = index
        
        node.appendChild(templateCloneNodes);
        
    });
    
    
};

function addTask (name) {
    
    let task = {
        task_name: name
    }
    
    todoList.push(task)
    
};

elTodoForm.addEventListener("submit", function(evt) {
    
    evt.preventDefault();
    
    const todoInputVal = elTodoInput.value.trim();
    
    addTask(todoInputVal);
    
    showTask(todoList, elTodoList);
    
    elTodoInput.value = "";
    
});

function deleteTask (index) {

    todoList.splice(index , 1);

    showTask(todoList, elTodoList);

}


elTodoList.addEventListener("click", function(evt) {

    if(evt.target.matches(".js-delete-button")) {

        const deleteTaskIndex = Number(evt.target.dataset.taskIndex);

        deleteTask(deleteTaskIndex);
    }

})
