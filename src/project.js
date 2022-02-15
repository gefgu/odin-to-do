export default function projectFactory(todoList) {
  const getToDos = () => {
    return todoList;
  };
  const addToDo = (newToDo) => {
    todoList.splice(0, 0, newToDo);
  };
  const deleteToDo = (indexOfToDo) => {
    todoList.splice(indexOfToDo, 1);
  };
  return {getToDos, addToDo, deleteToDo}
}
