;import { createTodo } from './todo.js';

function createProjectList() {
    let projectList = [];

    const addProject = function(project) {
        projectList.push(project);
    }
    

    const contains = function(projectName) {
        for(i = 0; i < projectList.length; i++) {
            if(projectList[i].getName() == projectName) {
                return true;
            } else { return false; }
        }
    }

    const getLength = function() {
        return projectList.length;
    }

    const getProjectAt = function(index) {
        return projectList[index]
    }

    return { addProject, contains, getLength, getProjectAt };
}

export{ createProjectList };