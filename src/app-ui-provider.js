import deleteIcon from "./delete.svg";
import editIcon from "./edit.svg";

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
    heading.textContent = currentProject;
    heading.classList.add("project-name");
    container.appendChild(heading);
    return container;
  };

  const removeToDoForm = () => {
    document.querySelector(".to-do-form").remove();
  }

  const buildToDoForm = () => {
    const form = document.createElement("form");
    form.classList.add("to-do-form");

    const exitButton = document.createElement("div");
    exitButton.classList.add("exit");
    exitButton.addEventListener("click", removeToDoForm);
    exitButton.textContent = "X";

    const heading = document.createElement("h3");
    heading.textContent = "To-Do Form";

    const titleArea = createFormInputArea("title", "text", "To-Do Title");
    const descriptionArea = createFormInputArea(
      "description",
      "text",
      "Add Description..."
    );
    const dateArea = createFormInputArea("dueDate", "date");
    const priorityArea = createFormInputArea("priority", "text", "Priority...");

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    submitButton.id = "submit";

    form.append(
      exitButton,
      heading,
      titleArea,
      descriptionArea,
      dateArea,
      priorityArea,
      submitButton
    );
    page.appendChild(form);
  };

  const createFormInputArea = (id, type, placeholder) => {
    const wrapper = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = `${id}:`;
    const input = document.createElement("input");
    input.type = type;
    input.name = id;
    input.id = id;
    if (placeholder) {
      input.placeholder = placeholder;
    }
    input.required = true;
    wrapper.append(label, input);
    return wrapper;
  };

  const createToDoElement = (toDo, index, container) => {
    const toDoContainer = document.createElement("div");

    const element = document.createElement("p");
    element.textContent = toDo["title"];
    element.classList.add("to-do-title");
    toDoContainer.appendChild(element);

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
    button.textContent = "Add To-Do";
    button.addEventListener("click", () => {
      buildToDoForm();
    });
    button.classList.add("create-to-do");
    return button;
  };

  const editToDoButton = (index) => {
    const toDos = getToDosFromProject();
    const button = createEditButton();
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
    const button = createDeleteButton();
    button.addEventListener("click", () => {
      removeToDoFunction(index);
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
    button.classList.add("add-project");
    return button;
  };

  const createEditButton = () => {
    const editButton = document.createElement("button");
    const editImage = new Image();
    editImage.src = editIcon;
    editButton.appendChild(editImage);

    return editButton;
  };

  const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    const deleteImage = new Image();
    deleteImage.src = deleteIcon;
    deleteButton.appendChild(deleteImage);

    return deleteButton;
  };

  const addProjectsListing = () => {
    const projectList = document.createElement("div");
    getProjectNamesFunction().forEach((projectName) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-navigation");

      const name = document.createElement("span");
      name.textContent = projectName;
      projectDiv.addEventListener("click", () => {
        currentProject = projectName;
        refreshPageElements();
      });

      const editButton = createEditButton();
      editButton.addEventListener("click", (e) => {
        const newName = prompt("New Name:", projectName);
        if (newName && newName != projectName) {
          editProjectNameFunction(projectName, newName);
          currentProject = newName;
          refreshPageElements();
          e.stopPropagation();
        }
      });

      const deleteButton = createDeleteButton();
      deleteButton.addEventListener("click", (e) => {
        deleteProjectFunction(projectName);
        currentProject = getProjectNamesFunction()[0];
        refreshPageElements();
        e.stopPropagation();
      });

      projectDiv.append(name, editButton, deleteButton);
      projectList.appendChild(projectDiv);
    });
    return projectList;
  };

  const createSideBar = () => {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.appendChild(addProjectsListing());
    sidebar.appendChild(createAddProjectButton());
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
