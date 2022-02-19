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
  let toDos = [(0,_todo_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])("First Todo", "Info", "Tomorrow", "A")];

  const getToDos = () => {
    return toDos;
  };

  const addToDo = (title, description, dueDate, priority) => {
    toDos.splice(0, 0, (0,_todo_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority));
  };

  const removeToDo = (index) => {
    toDos.splice(index, 1);
  }

  return { getToDos, addToDo, removeToDo };
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
    _app_ui_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildUI(_app_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].getToDos, _app_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToDo, _app_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeToDo);
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
  let removeToDoFunction = null;

  const makeHeading = () => {
    const heading = document.createElement("h1");
    heading.textContent = "To Do App";
    page.appendChild(heading);
  };

  const createToDoElement = (toDo, index, container) => {
    const toDoContainer = document.createElement("div");

    Object.keys(toDo).forEach(propertyName => {
      const element = document.createElement("p");
      element.textContent = toDo[propertyName];
      toDoContainer.appendChild(element);
    });

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
    getToDosFunction().forEach((toDo, index) =>
      createToDoElement(toDo, index, container)
    );
    page.appendChild(container);
  };
  const addToDoButton = () => {
    const button = document.createElement("button");
    button.textContent = "Add ToDo";
    button.addEventListener("click", () => {
      addToDoFunction("Adding Task", "Info", "Tomorrow", "A");
      showToDos();
    });
    return button;
  };
  const removeToDoButton = (index) => {
    const button = document.createElement("button");
    button.textContent = "Remove ToDo";
    button.addEventListener("click", () => {
      removeToDoFunction(index);
      showToDos();
    });
    return button;
  };
  const buildUI = (getFunction, addFunction, removeFunction) => {
    getToDosFunction = getFunction;
    addToDoFunction = addFunction;
    removeToDoFunction = removeFunction;
    makeHeading();
    page.appendChild(addToDoButton());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDLGlFQUFlO0FBQ2YsZUFBZSw0REFBVzs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDREQUFXO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQyxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEI0QztBQUNEOztBQUVoRCxpRUFBZTtBQUNmO0FBQ0EsSUFBSSxtRUFBcUIsQ0FBQyxtRUFBc0IsRUFBRSxrRUFBcUIsRUFBRSxxRUFBd0I7QUFDakc7O0FBRUEsV0FBVztBQUNYLENBQUMsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNUTCxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUMsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqRVU7QUFDZixXQUFXO0FBQ1g7Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZ0Q7O0FBRWhELG1FQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvYXBwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9hcHAtaW50ZXJmYWNlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2FwcC11aS1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3RvZG8tZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kb0ZhY3RvcnkgZnJvbSBcIi4vdG9kby1mYWN0b3J5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGxldCB0b0RvcyA9IFt0b2RvRmFjdG9yeShcIkZpcnN0IFRvZG9cIiwgXCJJbmZvXCIsIFwiVG9tb3Jyb3dcIiwgXCJBXCIpXTtcblxuICBjb25zdCBnZXRUb0RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9Eb3M7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgdG9Eb3Muc3BsaWNlKDAsIDAsIHRvZG9GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUb0RvID0gKGluZGV4KSA9PiB7XG4gICAgdG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybiB7IGdldFRvRG9zLCBhZGRUb0RvLCByZW1vdmVUb0RvIH07XG59KSgpO1xuIiwiaW1wb3J0IGFwcFVJUHJvdmlkZXIgZnJvbSBcIi4vYXBwLXVpLXByb3ZpZGVyLmpzXCI7XG5pbXBvcnQgYXBwQ29udHJvbGxlciBmcm9tIFwiLi9hcHAtY29udHJvbGxlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBzdGFydEFwcCA9ICgpID0+IHtcbiAgICBhcHBVSVByb3ZpZGVyLmJ1aWxkVUkoYXBwQ29udHJvbGxlci5nZXRUb0RvcywgYXBwQ29udHJvbGxlci5hZGRUb0RvLCBhcHBDb250cm9sbGVyLnJlbW92ZVRvRG8pO1xuICB9O1xuXG4gIHJldHVybiB7IHN0YXJ0QXBwIH07XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBsZXQgZ2V0VG9Eb3NGdW5jdGlvbiA9IG51bGw7XG4gIGxldCBhZGRUb0RvRnVuY3Rpb24gPSBudWxsO1xuICBsZXQgcmVtb3ZlVG9Eb0Z1bmN0aW9uID0gbnVsbDtcblxuICBjb25zdCBtYWtlSGVhZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvIERvIEFwcFwiO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9Eb0VsZW1lbnQgPSAodG9EbywgaW5kZXgsIGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgT2JqZWN0LmtleXModG9EbykuZm9yRWFjaChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRvRG9bcHJvcGVydHlOYW1lXTtcbiAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZVRvRG9CdXR0b24oaW5kZXgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcik7XG4gIH07XG4gIGNvbnN0IHNob3dUb0RvcyA9ICgpID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBcInRvLWRvLWxpc3RcIjtcbiAgICBjb25zdCBvbGRDb250YWluZXIgPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgICBpZiAob2xkQ29udGFpbmVyKSB7XG4gICAgICBvbGRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGdldFRvRG9zRnVuY3Rpb24oKS5mb3JFYWNoKCh0b0RvLCBpbmRleCkgPT5cbiAgICAgIGNyZWF0ZVRvRG9FbGVtZW50KHRvRG8sIGluZGV4LCBjb250YWluZXIpXG4gICAgKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH07XG4gIGNvbnN0IGFkZFRvRG9CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRUb0RvRnVuY3Rpb24oXCJBZGRpbmcgVGFza1wiLCBcIkluZm9cIiwgXCJUb21vcnJvd1wiLCBcIkFcIik7XG4gICAgICBzaG93VG9Eb3MoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuICBjb25zdCByZW1vdmVUb0RvQnV0dG9uID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlJlbW92ZSBUb0RvXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZW1vdmVUb0RvRnVuY3Rpb24oaW5kZXgpO1xuICAgICAgc2hvd1RvRG9zKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcbiAgY29uc3QgYnVpbGRVSSA9IChnZXRGdW5jdGlvbiwgYWRkRnVuY3Rpb24sIHJlbW92ZUZ1bmN0aW9uKSA9PiB7XG4gICAgZ2V0VG9Eb3NGdW5jdGlvbiA9IGdldEZ1bmN0aW9uO1xuICAgIGFkZFRvRG9GdW5jdGlvbiA9IGFkZEZ1bmN0aW9uO1xuICAgIHJlbW92ZVRvRG9GdW5jdGlvbiA9IHJlbW92ZUZ1bmN0aW9uO1xuICAgIG1ha2VIZWFkaW5nKCk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChhZGRUb0RvQnV0dG9uKCkpO1xuICAgIHNob3dUb0RvcygpO1xuICB9O1xuICByZXR1cm4geyBidWlsZFVJIH07XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEluZm9ybWF0aW9uIEhvbGRlcnM6IFN0b3JlIGluZm8gYW5kIHByb3ZpZGUgaXQuIEFsc28gaGFzIGZ1bmN0aW9ucyB0byBjaGFuZ2UgaXQuXG4vLyBUb2RvIGZhY3RvcnkgZnVuY3Rpb24uXG4vLyBQcm9qZWN0cyBmYWN0b3J5IGZ1bmN0aW9uLlxuXG4vLyBhcHBDb250cm9sbGVyIC0gY29udHJvbHMgdGhlIGFwcGxpY2F0aW9uIGxvZ2ljLlxuLy8gYXBwVUlQcm92aWRlciAtIGNvbnRyb2xzIHRoZSBVSS5cbi8vIGFwcEludGVyZmFjZXIgLSBjb250cm9scyBjYWxscyBiZXR3ZWVuIGFwcENvbnRyb2xsZXIgYW5kIGFwcFVJUHJvdmlkZXIuXG5cbmltcG9ydCBhcHBJbnRlcmZhY2VyIGZyb20gXCIuL2FwcC1pbnRlcmZhY2VyLmpzXCI7XG5cbmFwcEludGVyZmFjZXIuc3RhcnRBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==