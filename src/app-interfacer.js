import appUIProvider from "./app-ui-provider.js";
import appController from "./app-controller.js";

export default (() => {
  const startApp = () => {
    appUIProvider.buildUI(
      appController.getToDos,
      appController.getProjectNames,
      appController.addToDo,
      appController.removeToDo,
      appController.editToDo,
    );
  };

  return { startApp };
})();
