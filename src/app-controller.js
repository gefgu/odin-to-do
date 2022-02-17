import todoFactory from "./todo-factory.js";

export default (() => {
  let tasks = [todoFactory("First Todo", "Info", "Tomorrow", "A")];

  const getToDos = () => {
    return tasks;
  };

  const addToDo = (title, description, dueDate, priority) => {
    tasks.splice(0, 0, todoFactory(title, description, dueDate, priority));
  };

  const removeToDo = (index) => {
    tasks.splice(index, 1);
  }

  return { getToDos, addToDo };
})();
