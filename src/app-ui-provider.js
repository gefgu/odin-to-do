export default (() => {
  const page = document.querySelector("body");
  let getToDosFromProject = null;
  let addToDoFunction = null;
  let removeToDoFunction = null;
  let editToDoFunction = null;
  let getProjectNamesFunction = null;
  let addProjectFunction = null;
  let editProjectNameFunction = null;
  let deleteProjectFunction = null;
  let currentProject = null;

  const makeHeading = () => {
    const container = document.createElement("div");
    container.classList.add("heading");
    const heading = document.createElement("h1");
    heading.textContent = currentProject.toUpperCase();
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

  const createDeleteProjectButton = () => {
    const button = document.createElement("button");
    button.textContent = `Delete '${currentProject}' project`;
    button.addEventListener("click", () => {
      deleteProjectFunction(currentProject);
      currentProject = getProjectNamesFunction()[0];
      createPageElements();
    });
    return button;
  };

  const createEditProjectButton = () => {
    const button = document.createElement("button");
    button.textContent = `Edit '${currentProject}' project name`;
    button.addEventListener("click", () => {
      const newName = prompt("New Name:", currentProject);
      editProjectNameFunction(currentProject, newName);
      currentProject = newName;
      createPageElements();
    });
    return button;
  };

  const createAddProjectButton = () => {
    const button = document.createElement("button");
    button.textContent = "Add Project";
    button.addEventListener("click", () => {
      const name = prompt("Name");
      addProjectFunction(name);
      currentProject = name;
      createPageElements();
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
    });
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
    page.appendChild(createAddProjectButton());
    page.appendChild(createEditProjectButton());
    page.appendChild(createDeleteProjectButton());
    page.appendChild(createChangeProjectElements());
    page.appendChild(addToDoButton());
    showToDos();
  };

  const buildUI = (
    getProjectNames,
    addProject,
    editProject,
    deleteProject,
    getToDoFunction,
    addFunction,
    removeFunction,
    editFunction
  ) => {
    getProjectNamesFunction = getProjectNames;
    addProjectFunction = addProject;
    editProjectNameFunction = editProject;
    deleteProjectFunction = deleteProject;
    getToDosFromProject = () => {
      return getToDoFunction(currentProject);
    };
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
    currentProject = getProjectNamesFunction()[0];

    createPageElements();
  };
  return { buildUI };
})();
