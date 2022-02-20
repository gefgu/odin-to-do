import todoFactory from "./todo-factory.js";
import projectFactory from "./project-factory.js";

export default (() => {
  let projects = {
    inbox: projectFactory("inbox"),
    home: projectFactory("home"),
  };
  projects.inbox.addToDo(todoFactory("First Todo", "Info", "Tomorrow", "A"));
  projects.home.addToDo(todoFactory("Home To-Do", "Info", "Next Week", "A"));

  const getProjectNames = () => {
    return Object.keys(projects);
  };

  const addProject = (projectName) => {
    projects[projectName] = projectFactory(projectName);
  };

  const editProjectName = (oldProjectName, newProjectName) => {
    projects[newProjectName] = projects[oldProjectName];
    delete projects[oldProjectName];
  };

  const deleteProject = (projectName) => {
    delete projects[projectName];
  };

  const getToDos = (projectName) => {
    return projects[projectName].getToDos();
  };

  const addToDo = (projectName, title, description, dueDate, priority) => {
    projects[projectName]
      .getToDos()
      .splice(0, 0, todoFactory(title, description, dueDate, priority));
  };

  const removeToDo = (projectName, index) => {
    projects[projectName].getToDos().splice(index, 1);
  };

  const editToDo = (
    projectName,
    index,
    title,
    description,
    dueDate,
    priority
  ) => {
    projects[projectName]
      .getToDos()
      .splice(index, 1, todoFactory(title, description, dueDate, priority));
  };

  return {
    getProjectNames,
    addProject,
    editProjectName,
    deleteProject,
    getToDos,
    addToDo,
    removeToDo,
    editToDo,
  };
})();
