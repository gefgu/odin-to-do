import appUIProvider from "./app-ui-provider.js";
import appController from "./app-controller.js";

export default (() => {
  const startApp = () => {
    appUIProvider.buildUI(appController.getToDos, appController.addToDo);
  };

  return { startApp };
})();
