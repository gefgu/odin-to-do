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

  const createHeading = () => {
    const container = document.createElement("div");
    container.classList.add("heading");
    const heading = document.createElement("h1");
    heading.textContent = currentProject.toUpperCase();
    container.appendChild(heading);
    return container;
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

  const createToDosElements = () => {
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
    return container;
  };

  const createAddToDoButton = () => {
    const button = document.createElement("button");
    button.textContent = "Add ToDo";
    button.addEventListener("click", () => {
      const title = prompt("Title:");
      const description = prompt("Description:");
      const dueDate = prompt("Due Date:");
      const priority = prompt("Priority:");
      addToDoFunction(title, description, dueDate, priority);
      refreshPageElements();
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
      refreshPageElements();
    });
    return button;
  };

  const removeToDoButton = (index) => {
    const button = document.createElement("button");
    button.textContent = "Remove To-Do";
    button.addEventListener("click", () => {
      removeToDoFunction(index);
      refreshPageElements();
    });
    return button;
  };

  const createDeleteProjectButton = () => {
    const button = document.createElement("button");
    button.textContent = `Delete '${currentProject}' project`;
    button.addEventListener("click", () => {
      deleteProjectFunction(currentProject);
      currentProject = getProjectNamesFunction()[0];
      refreshPageElements();
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
      refreshPageElements();
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
      refreshPageElements();
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
      refreshPageElements();
    });
    select.value = currentProject;
    container.appendChild(label);
    container.appendChild(select);
    return container;
  };

  const createSideBar = () => {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.appendChild(createAddProjectButton());
    sidebar.appendChild(createEditProjectButton());
    sidebar.appendChild(createDeleteProjectButton());
    sidebar.appendChild(createChangeProjectElements());
    return sidebar;
  };

  const mainContent = () => {
    const content = document.createElement("div");
    content.classList.add("content");
    content.appendChild(createHeading());
    content.appendChild(createAddToDoButton());
    content.appendChild(createToDosElements());
    return content;
  };

  const cleanPage = () => {
    page.textContent = "";
  };

  const refreshPageElements = () => {
    cleanPage();
    page.appendChild(createSideBar());
    page.appendChild(mainContent());
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

    refreshPageElements();
  };
  return { buildUI };
})();
