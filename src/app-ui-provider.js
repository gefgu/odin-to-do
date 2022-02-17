export default (() => {
  const makeHeading = () => {
    const heading = document.createElement("h1");
    heading.textContent = "To Do App";
    document.querySelector("body").appendChild(heading);
  };
  const buildUI = () => {
    makeHeading();
  };
  return { buildUI };
})();
