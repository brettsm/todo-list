function createProjectList() {
    let projectList = [];

    const addProject = function(project) {
        projectList.push(project);
    }

    const contains = function(projectName) {
        for(i = 0; i < projectList.length; i++) {
            if(projectList[i].name() == projectName) {
                return true;
            } else { return false; }
        }
    }

    return { addProject, contains };
}

export{ createProjectList };