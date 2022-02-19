export default (() => {
  const page = document.querySelector("body");
  let getToDosFunction = null;
  let addToDoFunction = null;
  let removeToDoFunction = null;
  let editToDoFunction = null;

  const makeHeading = () => {
    const container = document.createElement("div");
    container.classList.add("heading");
    const heading = document.createElement("h1");
    heading.textContent = "Inbox";
    container.appendChild(heading);
    page.appendChild(container);
  };

  const createToDoElement = (toDo, index, container) => {
    const toDoContainer = document.createElement("div");

    Object.keys(toDo).forEach((propertyName) => {
      const element = document.createElement("p");
      element.textContent = toDo[propertyName];
      toDoContainer.appendChild(element);
    });

    toDoContainer.appendChild(editToDoButton(index));
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
      const title = prompt("Title:");
      const description = prompt("Description:");
      const dueDate = prompt("Due Date:");
      const priority = prompt("Priority:");
      addToDoFunction(title, description, dueDate, priority);
      showToDos();
    });
    return button;
  };
  const editToDoButton = (index) => {
    const toDos = getToDosFunction();
    const button = document.createElement("button");
    button.textContent = "Edit";
    button.addEventListener("click", () => {
      const title = prompt("Title:", toDos[index].title);
      const description = prompt("Description:", toDos[index].description);
      const dueDate = prompt("Due Date:", toDos[index].dueDate);
      const priority = prompt("Priority:", toDos[index].priority);
      editToDoFunction(index, title, description, dueDate, priority);
      showToDos();
    });
    return button;
  };
  const removeToDoButton = (index) => {
    const button = document.createElement("button");
    button.textContent = "Remove To-Do";
    button.addEventListener("click", () => {
      removeToDoFunction(index);
      showToDos();
    });
    return button;
  };
  const buildUI = (getFunction, addFunction, removeFunction, editFunction) => {
    getToDosFunction = getFunction;
    addToDoFunction = addFunction;
    removeToDoFunction = removeFunction;
    editToDoFunction = editFunction;
    makeHeading();
    page.appendChild(addToDoButton());
    showToDos();
  };
  return { buildUI };
})();
