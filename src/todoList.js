//Module for creating a list that keeps track of all of the todos that are created

function createTodoList() {
    let todoList = [];

    const getTodo = function(index) {
        return todoList[index];
    }

    const addTodo = function(todo) {
        todoList.push(todo);
    }

    const length = function() {
        return todoList.length;
    }

   return { getTodo, addTodo, length };
}
export { createTodoList };