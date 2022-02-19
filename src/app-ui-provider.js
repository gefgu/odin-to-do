export default (() => {
  const page = document.querySelector("body");
  let getToDosFunction = null;
  let addToDoFunction = null;
  let removeToDoFunction = null;

  const makeHeading = () => {
    const heading = document.createElement("h1");
    heading.textContent = "Inbox";
    page.appendChild(heading);
  };

  const createToDoElement = (toDo, index, container) => {
    const toDoContainer = document.createElement("div");

    Object.keys(toDo).forEach(propertyName => {
      const element = document.createElement("p");
      element.textContent = toDo[propertyName];
      toDoContainer.appendChild(element);
    });

    toDoContainer.appendChild(removeToDoButton(index));
    container.appendChild(toDoContainer);
  };
  const showToDos = () => {
    const className = "to-do-list";
    const oldContainer = page.querySelector(`.${className}`);
    if (oldContainer) {
      oldContainer.remove();
    }

    const container = document.createElement("div");
    container.classList.add(className);
    getToDosFunction().forEach((toDo, index) =>
      createToDoElement(toDo, index, container)
    );
    page.appendChild(container);
  };
  const addToDoButton = () => {
    const button = document.createElement("button");
    button.textContent = "Add ToDo";
    button.addEventListener("click", () => {
      addToDoFunction("Adding Task", "Info", "Tomorrow", "A");
      showToDos();
    });
    return button;
  };
  const removeToDoButton = (index) => {
    const button = document.createElement("button");
    button.textContent = "Remove ToDo";
    button.addEventListener("click", () => {
      removeToDoFunction(index);
      showToDos();
    });
    return button;
  };
  const buildUI = (getFunction, addFunction, removeFunction) => {
    getToDosFunction = getFunction;
    addToDoFunction = addFunction;
    removeToDoFunction = removeFunction;
    makeHeading();
    page.appendChild(addToDoButton());
    showToDos();
  };
  return { buildUI };
})();
