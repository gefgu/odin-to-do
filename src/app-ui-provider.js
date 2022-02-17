export default (() => {
  const page = document.querySelector("body");
  let getToDosFunction = null;
  let addToDoFunction = null;

  const makeHeading = () => {
    const heading = document.createElement("h1");
    heading.textContent = "To Do App";
    page.appendChild(heading);
  };
  const showToDos = () => {
    const className = "to-do-list";
    const oldContainer = page.querySelector(`.${className}`);
    if (oldContainer) {
      oldContainer.remove();
    }

    const container = document.createElement("div");
    container.classList.add(className);
    getToDosFunction().forEach((toDo) => {
      const toDoElement = document.createElement("p");
      toDoElement.textContent = toDo.title;
      container.appendChild(toDoElement);
    });
    page.appendChild(container);
  };
  const addToDoButton = () => {
    const button = document.createElement("button");
    button.textContent = "Add ToDo";
    button.addEventListener("click", () => {
      addToDoFunction("Adding Task", "", "", "");
      showToDos();
    });
    page.appendChild(button);
  };
  const buildUI = (getFunction, addFunction) => {
    getToDosFunction = getFunction;
    addToDoFunction = addFunction;
    makeHeading();
    addToDoButton();
    showToDos();
  };
  return { buildUI };
})();
