import { allProjectList } from './index.js';


function createProject(name) {

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

    const getTitle = function(index) {
        return todoList[index].getTitle(index);
    }

    const getName = function() {
        return name;
    }

    const length = function() {
        return todoList.length;
    }

    const contains = function(todoTitle) {
        for(i = 0; i < projectList.length; i++) {
            if(todoList[i].name() == todoTitle) {
                return true;
            } else { return false; }
        }
    }

    return { addTodo, removeTodo, getTodoAt, getName, length, contains, getName };


}


export { createProject };