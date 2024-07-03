
function createProject(name) {
    let name = name;
    let todoList = [];

    const addTodo = function(todo) {
        todoList.push(todo);
    };

    const removeTodo = function(name) {
        for(let i = 0; i < todoList.length; i++) {
            if( todoList[i].title == name) {
                todoList.splice(i,1);
                return;
            }
        }
        alert('There was no todo with name: ' + name);
    }

    const getTodoAt = function(index) {
        return todoList[index];
    }

    const getName = function(index) {
        return name;
    }

    const length = function() {
        return todoList.length;
    }

    return { addTodo, removeTodo, getTodoAt, getName, length };


}


export { createProject };