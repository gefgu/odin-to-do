export default (() => {
  const page = document.querySelector("body");
  let getToDosFromProject = null;
  let addToDoFunction = null;
  let removeToDoFunction = null;
  let editToDoFunction = null;
  let getProjectNamesFunction = null;
  let currentProject = "inbox";

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
    getToDosFromProject().forEach((toDo, index) =>
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
    const toDos = getToDosFromProject();
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

  const createChangeProjectElements = () => {
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = "Choose Project:";
    const select = document.createElement("select");
    getProjectNamesFunction().forEach((projectName) => {
      const option = document.createElement("option");
      option.value = projectName;
      option.textContent = projectName;
      select.appendChild(option);
    });
    select.addEventListener("change", (event) => {
      currentProject = event.target.value;
      createPageElements();
    })
    select.value = currentProject;
    container.appendChild(label);
    container.appendChild(select);
    return container;
  };

  const cleanPage = () => {
    page.textContent = "";
  };

  const createPageElements = () => {
    cleanPage();
    makeHeading();
    page.appendChild(addToDoButton());
    page.appendChild(createChangeProjectElements());
    showToDos();
  };

  const buildUI = (
    getToDoFunction,
    getProjectNames,
    addFunction,
    removeFunction,
    editFunction
  ) => {
    getToDosFromProject = () => {
      return getToDoFunction(currentProject);
    };
    getProjectNamesFunction = getProjectNames;
    addToDoFunction = (title, description, dueDate, priority) => {
      addFunction(currentProject, title, description, dueDate, priority);
    };
    removeToDoFunction = (index) => {
      removeFunction(currentProject, index);
    };
    editToDoFunction = (index, title, description, dueDate, priority) => {
      editFunction(
        currentProject,
        index,
        title,
        description,
        dueDate,
        priority
      );
    };

    createPageElements();
  };
  return { buildUI };
})();
