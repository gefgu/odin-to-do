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
    _app_ui_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildUI(_app_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].getToDos);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDLGlFQUFlO0FBQ2YsZUFBZSw0REFBVzs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDREQUFXO0FBQ2xDOztBQUVBLFdBQVc7QUFDWCxDQUFDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkNEM7QUFDRDs7QUFFaEQsaUVBQWU7QUFDZjtBQUNBLElBQUksbUVBQXFCLENBQUMsbUVBQXNCO0FBQ2hEOztBQUVBLFdBQVc7QUFDWCxDQUFDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEwsaUVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJVO0FBQ2YsV0FBVztBQUNYOzs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWdEOztBQUVoRCxtRUFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2FwcC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvYXBwLWludGVyZmFjZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9hcHAtdWktcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy90b2RvLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gXCIuL3RvZG8tZmFjdG9yeS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBsZXQgdGFza3MgPSBbdG9kb0ZhY3RvcnkoXCJGaXJzdCBUb2RvXCIsIFwiSW5mb1wiLCBcIlRvbW9ycm93XCIsIFwiQVwiKV07XG5cbiAgY29uc3QgZ2V0VG9Eb3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHRhc2tzLnNwbGljZSgwLCAwLCB0b2RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VG9Eb3MsIGFkZFRvRG8gfTtcbn0pKCk7XG4iLCJpbXBvcnQgYXBwVUlQcm92aWRlciBmcm9tIFwiLi9hcHAtdWktcHJvdmlkZXIuanNcIjtcbmltcG9ydCBhcHBDb250cm9sbGVyIGZyb20gXCIuL2FwcC1jb250cm9sbGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IHN0YXJ0QXBwID0gKCkgPT4ge1xuICAgIGFwcFVJUHJvdmlkZXIuYnVpbGRVSShhcHBDb250cm9sbGVyLmdldFRvRG9zKTtcbiAgfTtcblxuICByZXR1cm4geyBzdGFydEFwcCB9O1xufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBjb25zdCBtYWtlSGVhZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvIERvIEFwcFwiO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIH07XG4gIGNvbnN0IHNob3dUb0RvcyA9IChnZXRUb0Rvc0Z1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnZXRUb0Rvc0Z1bmN0aW9uKCkuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgY29uc3QgdG9Eb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRvRG9FbGVtZW50LnRleHRDb250ZW50ID0gdG9Eby50aXRsZTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRWxlbWVudCk7XG4gICAgfSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9O1xuICBjb25zdCBidWlsZFVJID0gKGdldFRvRG9zRnVuY3Rpb24pID0+IHtcbiAgICBtYWtlSGVhZGluZygpO1xuICAgIHNob3dUb0RvcyhnZXRUb0Rvc0Z1bmN0aW9uKTtcbiAgfTtcbiAgcmV0dXJuIHsgYnVpbGRVSSB9O1xufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBJbmZvcm1hdGlvbiBIb2xkZXJzOiBTdG9yZSBpbmZvIGFuZCBwcm92aWRlIGl0LiBBbHNvIGhhcyBmdW5jdGlvbnMgdG8gY2hhbmdlIGl0LlxuLy8gVG9kbyBmYWN0b3J5IGZ1bmN0aW9uLlxuLy8gUHJvamVjdHMgZmFjdG9yeSBmdW5jdGlvbi5cblxuLy8gYXBwQ29udHJvbGxlciAtIGNvbnRyb2xzIHRoZSBhcHBsaWNhdGlvbiBsb2dpYy5cbi8vIGFwcFVJUHJvdmlkZXIgLSBjb250cm9scyB0aGUgVUkuXG4vLyBhcHBJbnRlcmZhY2VyIC0gY29udHJvbHMgY2FsbHMgYmV0d2VlbiBhcHBDb250cm9sbGVyIGFuZCBhcHBVSVByb3ZpZGVyLlxuXG5pbXBvcnQgYXBwSW50ZXJmYWNlciBmcm9tIFwiLi9hcHAtaW50ZXJmYWNlci5qc1wiO1xuXG5hcHBJbnRlcmZhY2VyLnN0YXJ0QXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=