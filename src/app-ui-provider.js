export default (() => {
  const page = document.querySelector("body");

  const makeHeading = () => {
    const heading = document.createElement("h1");
    heading.textContent = "To Do App";
    page.appendChild(heading);
  };
  const showToDos = (getToDosFunction) => {
    const container = document.createElement("div");
    getToDosFunction().forEach((toDo) => {
      const toDoElement = document.createElement("p");
      toDoElement.textContent = toDo.title;
      container.appendChild(toDoElement);
    });
    page.appendChild(container);
  };
  const buildUI = (getToDosFunction) => {
    makeHeading();
    showToDos(getToDosFunction);
  };
  return { buildUI };
})();
