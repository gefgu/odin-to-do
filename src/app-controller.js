import todoFactory from "./todo-factory.js";
import projectFactory from "./project-factory.js";

export default (() => {
  let projects = { inbox: projectFactory("inbox") };
  projects.inbox.addToDo(todoFactory("First Todo", "Info", "Tomorrow", "A"));

  const getToDos = (projectName) => {
    return projects[projectName].getToDos();
  };

  const addToDo = (projectName, title, description, dueDate, priority) => {
    projects[projectName].getToDos().splice(
      0,
      0,
      todoFactory(title, description, dueDate, priority)
    );
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

  return { getToDos, addToDo, removeToDo, editToDo };
})();
