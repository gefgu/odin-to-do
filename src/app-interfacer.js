import appUIProvider from "./app-ui-provider.js";
import appController from "./app-controller.js";

export default (() => {
  const startApp = () => {
    appUIProvider.buildUI(
      appController.getProjectNames,
      appController.addProject,
      appController.editProjectName,
      appController.deleteProject,
      appController.getToDos,
      appController.addToDo,
      appController.removeToDo,
      appController.editToDo,
    );
  };

  return { startApp };
})();
