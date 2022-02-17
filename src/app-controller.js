import todoFactory from "./todo-factory.js";

export default (() => {
  let toDos = [todoFactory("First Todo", "Info", "Tomorrow", "A")];

  const getToDos = () => {
    return toDos;
  };

  const addToDo = (title, description, dueDate, priority) => {
    toDos.splice(0, 0, todoFactory(title, description, dueDate, priority));
  };

  const removeToDo = (index) => {
    toDos.splice(index, 1);
  }

  return { getToDos, addToDo, removeToDo };
})();
