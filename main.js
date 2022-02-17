/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app-controller.js":
/*!*******************************!*\
  !*** ./src/app-controller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-factory.js */ "./src/todo-factory.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  let tasks = [(0,_todo_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])("First Todo", "Info", "Tomorrow", "A")];

  const getToDos = () => {
    return tasks;
  };

  const addToDo = (title, description, dueDate, priority) => {
    tasks.splice(0, 0, (0,_todo_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority));
  };

  return { getToDos, addToDo };
})());


/***/ }),

/***/ "./src/app-interfacer.js":
/*!*******************************!*\
  !*** ./src/app-interfacer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_ui_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-ui-provider.js */ "./src/app-ui-provider.js");
/* harmony import */ var _app_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-controller.js */ "./src/app-controller.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const startApp = () => {
    _app_ui_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildUI(_app_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].getToDos, _app_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToDo);
  };

  return { startApp };
})());


/***/ }),

/***/ "./src/app-ui-provider.js":
/*!********************************!*\
  !*** ./src/app-ui-provider.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const page = document.querySelector("body");
  let getToDosFunction = null;
  let addToDoFunction = null;

  const makeHeading = () => {
    const heading = document.createElement("h1");
    heading.textContent = "To Do App";
    page.appendChild(heading);
  };
  const showToDos = () => {
    const className = "to-do-list";
    const oldContainer = page.querySelector(`.${className}`);
    if (oldContainer) {
      oldContainer.remove();
    }

    const container = document.createElement("div");
    container.classList.add(className);
    getToDosFunction().forEach((toDo) => {
      const toDoElement = document.createElement("p");
      toDoElement.textContent = toDo.title;
      container.appendChild(toDoElement);
    });
    page.appendChild(container);
  };
  const addToDoButton = () => {
    const button = document.createElement("button");
    button.textContent = "Add ToDo";
    button.addEventListener("click", () => {
      addToDoFunction("Adding Task", "", "", "");
      showToDos();
    });
    page.appendChild(button);
  };
  const buildUI = (getFunction, addFunction) => {
    getToDosFunction = getFunction;
    addToDoFunction = addFunction;
    makeHeading();
    addToDoButton();
    showToDos();
  };
  return { buildUI };
})());


/***/ }),

/***/ "./src/todo-factory.js":
/*!*****************************!*\
  !*** ./src/todo-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoFactory)
/* harmony export */ });
function todoFactory(title, description, dueDate, priority) {
  return { title, description, dueDate, priority };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_interfacer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-interfacer.js */ "./src/app-interfacer.js");
// Information Holders: Store info and provide it. Also has functions to change it.
// Todo factory function.
// Projects factory function.

// appController - controls the application logic.
// appUIProvider - controls the UI.
// appInterfacer - controls calls between appController and appUIProvider.



_app_interfacer_js__WEBPACK_IMPORTED_MODULE_0__["default"].startApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDLGlFQUFlO0FBQ2YsZUFBZSw0REFBVzs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDREQUFXO0FBQ2xDOztBQUVBLFdBQVc7QUFDWCxDQUFDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkNEM7QUFDRDs7QUFFaEQsaUVBQWU7QUFDZjtBQUNBLElBQUksbUVBQXFCLENBQUMsbUVBQXNCLEVBQUUsa0VBQXFCO0FBQ3ZFOztBQUVBLFdBQVc7QUFDWCxDQUFDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEwsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsVUFBVTtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUMsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ1U7QUFDZixXQUFXO0FBQ1g7Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZ0Q7O0FBRWhELG1FQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvYXBwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9hcHAtaW50ZXJmYWNlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2FwcC11aS1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3RvZG8tZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kb0ZhY3RvcnkgZnJvbSBcIi4vdG9kby1mYWN0b3J5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGxldCB0YXNrcyA9IFt0b2RvRmFjdG9yeShcIkZpcnN0IFRvZG9cIiwgXCJJbmZvXCIsIFwiVG9tb3Jyb3dcIiwgXCJBXCIpXTtcblxuICBjb25zdCBnZXRUb0RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgdGFza3Muc3BsaWNlKDAsIDAsIHRvZG9GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRUb0RvcywgYWRkVG9EbyB9O1xufSkoKTtcbiIsImltcG9ydCBhcHBVSVByb3ZpZGVyIGZyb20gXCIuL2FwcC11aS1wcm92aWRlci5qc1wiO1xuaW1wb3J0IGFwcENvbnRyb2xsZXIgZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3Qgc3RhcnRBcHAgPSAoKSA9PiB7XG4gICAgYXBwVUlQcm92aWRlci5idWlsZFVJKGFwcENvbnRyb2xsZXIuZ2V0VG9Eb3MsIGFwcENvbnRyb2xsZXIuYWRkVG9Ebyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc3RhcnRBcHAgfTtcbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGxldCBnZXRUb0Rvc0Z1bmN0aW9uID0gbnVsbDtcbiAgbGV0IGFkZFRvRG9GdW5jdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgbWFrZUhlYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUbyBEbyBBcHBcIjtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICB9O1xuICBjb25zdCBzaG93VG9Eb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gXCJ0by1kby1saXN0XCI7XG4gICAgY29uc3Qgb2xkQ29udGFpbmVyID0gcGFnZS5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gICAgaWYgKG9sZENvbnRhaW5lcikge1xuICAgICAgb2xkQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBnZXRUb0Rvc0Z1bmN0aW9uKCkuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgY29uc3QgdG9Eb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRvRG9FbGVtZW50LnRleHRDb250ZW50ID0gdG9Eby50aXRsZTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRWxlbWVudCk7XG4gICAgfSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9O1xuICBjb25zdCBhZGRUb0RvQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkVG9Eb0Z1bmN0aW9uKFwiQWRkaW5nIFRhc2tcIiwgXCJcIiwgXCJcIiwgXCJcIik7XG4gICAgICBzaG93VG9Eb3MoKTtcbiAgICB9KTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG4gIGNvbnN0IGJ1aWxkVUkgPSAoZ2V0RnVuY3Rpb24sIGFkZEZ1bmN0aW9uKSA9PiB7XG4gICAgZ2V0VG9Eb3NGdW5jdGlvbiA9IGdldEZ1bmN0aW9uO1xuICAgIGFkZFRvRG9GdW5jdGlvbiA9IGFkZEZ1bmN0aW9uO1xuICAgIG1ha2VIZWFkaW5nKCk7XG4gICAgYWRkVG9Eb0J1dHRvbigpO1xuICAgIHNob3dUb0RvcygpO1xuICB9O1xuICByZXR1cm4geyBidWlsZFVJIH07XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEluZm9ybWF0aW9uIEhvbGRlcnM6IFN0b3JlIGluZm8gYW5kIHByb3ZpZGUgaXQuIEFsc28gaGFzIGZ1bmN0aW9ucyB0byBjaGFuZ2UgaXQuXG4vLyBUb2RvIGZhY3RvcnkgZnVuY3Rpb24uXG4vLyBQcm9qZWN0cyBmYWN0b3J5IGZ1bmN0aW9uLlxuXG4vLyBhcHBDb250cm9sbGVyIC0gY29udHJvbHMgdGhlIGFwcGxpY2F0aW9uIGxvZ2ljLlxuLy8gYXBwVUlQcm92aWRlciAtIGNvbnRyb2xzIHRoZSBVSS5cbi8vIGFwcEludGVyZmFjZXIgLSBjb250cm9scyBjYWxscyBiZXR3ZWVuIGFwcENvbnRyb2xsZXIgYW5kIGFwcFVJUHJvdmlkZXIuXG5cbmltcG9ydCBhcHBJbnRlcmZhY2VyIGZyb20gXCIuL2FwcC1pbnRlcmZhY2VyLmpzXCI7XG5cbmFwcEludGVyZmFjZXIuc3RhcnRBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==