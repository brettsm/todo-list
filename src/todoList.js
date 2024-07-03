//Module for creating a list that keeps track of all of the todos that are created

function createTodoList() {
    let todoList = [];

    const getTodo = function(index) {
        return todoList[index];
    }

    const addTodo = function(todo) {
        todoList.push(todo);
    }

    const getLength = function() {
        return todoList.length;
    }

    const getTitleAt = function(index) {
        return todoList[index].title;
    }

    const getProjectAt = function(index) {
        return todoList[index].project;
    }

   return { getTodo, addTodo, getLength, getTitleAt, getProjectAt };
}
export { createTodoList };