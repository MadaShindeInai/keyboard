/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ \"./src/js/main.js\");\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// ADD HTML CODE USING JS\nconst main = document.createElement('main');\nmain.classList.add('wrapper');\ndocument.body.append(main);\nconst textarea = document.createElement('textarea');\ntextarea.classList.add('input-display-field');\nmain.prepend(textarea);\nconst keyboardBox = document.createElement('div');\nkeyboardBox.classList.add('keyboard-box');\nmain.append(keyboardBox);\n\nfor (let i = 0; i < 5; i += 1) {\n  const row = document.createElement('div');\n  row.classList.add(`row${i}`);\n  keyboardBox.append(row);\n}\n\nconst addKeys = (row, elem) => document.querySelector(row).append(elem);\n\nconst rowArr = ['.row0', '.row1', '.row2', '.row3'];\n\nfor (let i = 0; i < rowArr.length; i += 1) {\n  for (let j = 0; j < 13; j += 1) {\n    const key = document.createElement('div');\n    key.classList.add('key');\n    addKeys(rowArr[i], key);\n  }\n}\n\nconst rowArr2 = ['.row0', '.row1', '.row1'];\n\nfor (let i = 0; i < rowArr2.length; i += 1) {\n  const key = document.createElement('div');\n  key.classList.add('key');\n  addKeys(rowArr2[i], key);\n}\n\nfor (let i = 0; i < 9; i += 1) {\n  const key = document.createElement('div');\n  key.classList.add('key');\n  document.querySelector('.row4').append(key);\n} // ADD HTML CODE USING JS\n// ARRAYS OF KEYCODES / SPECIAL CLASS NAMES / CHAR CODES\n\n\nconst arrCodeRow0 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace']; // static event.code\n\nconst arrKeyCodeRow0 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8]; // event.keyCode == charCode\n\nconst arrCodeRow1 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete']; // static\n\nconst arrKeyCodeRow1 = [9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46];\nconst arrCodeRow2 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];\nconst arrKeyCodeRow2 = [20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13];\nconst arrCodeRow3 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'ArrowUp', 'ShiftRight'];\nconst arrKeyCodeRow3 = [16, 122, 120, 99, 118, 98, 110, 109, 46, 44, 47, 16];\nconst arrCodeRow4 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];\nconst arrKeyCodeRow4 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];\nconst specialButtonsarr = ['.row0 .key:last-child', '.row1 .key:first-child', '.row1 .key:last-child', '.row2 .key:first-child', '.row2 .key:last-child', '.row3 .key:first-child', '.row3 .key:last-child', '.row3 .key:nth-child(12)'];\nconst specialButtonClass = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ArrowUp'];\nconst specialButtonText = ['Back Space', 'Tab', 'DEL', 'Caps Lock', 'ENTER', 'Shift', 'Shift', '▲']; // ARRAYS OF KEYCODES / SPECIAL CLASS NAMES / CHAR CODES\n// FUNCTION THAT ADD CLASS TO KEYS OF 4 ROW\n\nfor (let i = 0; i < specialButtonsarr.length; i += 1) {\n  document.querySelector(specialButtonsarr[i]).classList.add(specialButtonClass[i]);\n  document.querySelector(specialButtonsarr[i]).insertAdjacentHTML('beforeend', `<span>${specialButtonText[i]}</span>`);\n} // FUNCTION THAT ADD CLASS TO KEYS OF 4 ROW\n// FUNCTION THAT ADD CLASS TO KEYS OF 0-3 ROWS\n\n\nfunction writeDemoClass() {\n  for (let i = 0; i < arrCodeRow0.length - 1; i += 1) {\n    document.querySelectorAll('.row0 .key')[i].classList.add(`${arrCodeRow0[i]}`);\n  }\n\n  for (let i = 1; i < arrCodeRow1.length - 1; i += 1) {\n    document.querySelectorAll('.row1 .key')[i].classList.add(`${arrCodeRow1[i]}`);\n  }\n\n  for (let i = 1; i < arrCodeRow2.length - 1; i += 1) {\n    document.querySelectorAll('.row2 .key')[i].classList.add(`${arrCodeRow2[i]}`);\n  }\n\n  for (let i = 1; i < arrCodeRow3.length - 2; i += 1) {\n    document.querySelectorAll('.row3 .key')[i].classList.add(`${arrCodeRow3[i]}`);\n  }\n\n  for (let i = 0; i < arrCodeRow4.length; i += 1) {\n    document.querySelectorAll('.row4 .key')[i].classList.add(`${arrCodeRow4[i]}`);\n    document.querySelector(`.${arrCodeRow4[i]}`).innerHTML = `<span>${arrKeyCodeRow4[i]}</span>`;\n  }\n}\n\nwriteDemoClass(); // FUNCTION THAT ADD CLASS TO ALL KEYS\n// FINAL ARRAYS OF VALUES\n\nconst keyClass = [...arrCodeRow0.slice(0, arrCodeRow0.length - 1), ...arrCodeRow1.slice(1, arrCodeRow1.length - 1), ...arrCodeRow2.slice(1, arrCodeRow2.length - 1), ...arrCodeRow3.slice(1, arrCodeRow3.length - 2)];\nconst arrKeyCodeUpEng = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124, 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 90, 88, 67, 86, 66, 78, 77, 60, 62, 63];\nconst arrKeyCodeRus = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];\nconst arrKeyCodeUpRus = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44]; // FINAL ARRAYS OF VALUES\n// FUNCTIONS TO SWITCH LANGUAGE\n\nfunction englishLowerCase() {\n  for (let i = 0; i < arrCodeRow0.length - 1; i += 1) {\n    document.querySelector(`.${arrCodeRow0[i]} span`).remove();\n    document.querySelector(`.${arrCodeRow0[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRow0[i])}</span>`;\n  }\n\n  for (let i = 1; i < arrCodeRow1.length - 1; i += 1) {\n    document.querySelector(`.${arrCodeRow1[i]} span`).remove();\n    document.querySelector(`.${arrCodeRow1[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRow1[i])}</span>`;\n  }\n\n  for (let i = 1; i < arrCodeRow2.length - 1; i += 1) {\n    document.querySelector(`.${arrCodeRow2[i]} span`).remove();\n    document.querySelector(`.${arrCodeRow2[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRow2[i])}</span>`;\n  }\n\n  for (let i = 1; i < arrCodeRow3.length - 2; i += 1) {\n    document.querySelector(`.${arrCodeRow3[i]} span`).remove();\n    document.querySelector(`.${arrCodeRow3[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRow3[i])}</span>`;\n  }\n\n  document.querySelector('.keyboard-box').classList.add('engl');\n  document.querySelector('.keyboard-box').classList.remove('rus');\n  document.querySelector('.CapsLock').classList.add('off');\n  document.querySelector('.CapsLock').classList.remove('on');\n  localStorage.setItem('myKey', '1');\n}\n\nfunction englishUpperCase() {\n  for (let i = 0; i < keyClass.length; i += 1) {\n    document.querySelector(`.${keyClass[i]} span`).remove();\n    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeUpEng[i])}</span>`;\n    document.querySelector('.CapsLock').classList.add('on');\n    document.querySelector('.CapsLock').classList.remove('off');\n    localStorage.setItem('myKey', '2');\n  }\n}\n\nfunction rusLowerCase() {\n  for (let i = 0; i < keyClass.length; i += 1) {\n    document.querySelector(`.${keyClass[i]} span`).remove();\n    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRus[i])}</span>`;\n    document.querySelector('.keyboard-box').classList.add('rus');\n    document.querySelector('.keyboard-box').classList.remove('engl');\n    document.querySelector('.CapsLock').classList.add('off');\n    document.querySelector('.CapsLock').classList.remove('on');\n    localStorage.setItem('myKey', '3');\n  }\n}\n\nfunction rusUpperCase() {\n  for (let i = 0; i < keyClass.length; i += 1) {\n    document.querySelector(`.${keyClass[i]} span`).remove();\n    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeUpRus[i])}</span>`;\n    document.querySelector('.CapsLock').classList.add('on');\n    document.querySelector('.CapsLock').classList.remove('off');\n    localStorage.setItem('myKey', '4');\n  }\n} // FUNCTIONS TO SWITCH LANGUAGE\n// DEMO FUNCTIONS TO SET LANGUAGE\n\n\nfunction demoEnglishLowerCase() {\n  for (let i = 0; i < arrCodeRow0.length - 1; i += 1) {\n    document.querySelector(`.${arrCodeRow0[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRow0[i])}</span>`;\n  }\n\n  for (let i = 1; i < arrCodeRow1.length - 1; i += 1) {\n    document.querySelector(`.${arrCodeRow1[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRow1[i])}</span>`;\n  }\n\n  for (let i = 1; i < arrCodeRow2.length - 1; i += 1) {\n    document.querySelector(`.${arrCodeRow2[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRow2[i])}</span>`;\n  }\n\n  for (let i = 1; i < arrCodeRow3.length - 2; i += 1) {\n    document.querySelector(`.${arrCodeRow3[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRow3[i])}</span>`;\n  }\n\n  document.querySelector('.keyboard-box').classList.add('engl');\n  document.querySelector('.CapsLock').classList.add('off');\n  localStorage.setItem('myKey', '1');\n}\n\nfunction demoEnglishUpperCase() {\n  for (let i = 0; i < keyClass.length; i += 1) {\n    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeUpEng[i])}</span>`;\n    document.querySelector('.keyboard-box').classList.add('engl');\n    document.querySelector('.CapsLock').classList.add('on');\n    localStorage.setItem('myKey', '2');\n  }\n}\n\nfunction demoRusLowerCase() {\n  for (let i = 0; i < keyClass.length; i += 1) {\n    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRus[i])}</span>`;\n    document.querySelector('.keyboard-box').classList.add('rus');\n    document.querySelector('.CapsLock').classList.add('off');\n    localStorage.setItem('myKey', '3');\n  }\n}\n\nfunction demoRusUpperCase() {\n  for (let i = 0; i < keyClass.length; i += 1) {\n    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeUpRus[i])}</span>`;\n    document.querySelector('.keyboard-box').classList.add('engl');\n    document.querySelector('.CapsLock').classList.add('on');\n    localStorage.setItem('myKey', '4');\n  }\n} // DEMO FUNCTIONS TO SET LANGUAGE\n// LOAD SAVED LANGUAGE\n\n\nswitch (localStorage.getItem('myKey')) {\n  case '1':\n    demoEnglishLowerCase();\n    break;\n\n  case '2':\n    demoEnglishUpperCase();\n    break;\n\n  case '3':\n    demoRusLowerCase();\n    break;\n\n  case '4':\n    demoRusUpperCase();\n    break;\n\n  default:\n    demoEnglishLowerCase();\n    break;\n} // LOAD SAVED LANGUAGE\n// KEYDOWN EVENTS\n\n\ndocument.addEventListener('keydown', event => {\n  textarea.blur();\n  const engl = document.querySelector('.engl');\n  const rus = document.querySelector('.rus');\n  const off = document.querySelector('.off');\n  const on = document.querySelector('.on');\n  document.querySelector(`.${event.code}`).classList.add('active');\n\n  if (event.ctrlKey && event.altKey) {\n    if (event.repeat) return;\n\n    if (engl) {\n      rusLowerCase();\n    } else if (rus) {\n      englishLowerCase();\n    }\n  } else if (event.key === 'CapsLock') {\n    if (event.repeat) return;\n\n    if (engl) {\n      if (off) {\n        englishUpperCase();\n      } else if (on) {\n        englishLowerCase();\n      }\n    } else if (rus) {\n      if (off) {\n        rusUpperCase();\n      } else if (on) {\n        rusLowerCase();\n      }\n    }\n  } else if (event.key === 'Shift') {\n    if (event.repeat) return;\n\n    if (engl) {\n      if (off) {\n        englishUpperCase();\n      } else if (on) {\n        englishLowerCase();\n      }\n    } else if (rus) {\n      if (off) {\n        rusUpperCase();\n      } else if (on) {\n        rusLowerCase();\n      }\n    }\n  } else if (event.key === 'Tab') {\n    event.preventDefault();\n    const textareaVal = document.querySelector('.input-display-field').value;\n    document.querySelector('.input-display-field').value = `${textareaVal}  `;\n  } else if (event.key === 'Control' || event.key === 'Meta' || event.key === 'Alt' || event.key === 'Delete' || event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {\n    event.preventDefault();\n    const textareaVal = document.querySelector('.input-display-field').value;\n    document.querySelector('.input-display-field').value = `${textareaVal}`;\n  } else if (event.code === 'Space') {\n    event.preventDefault();\n    const textareaVal = document.querySelector('.input-display-field').value;\n    document.querySelector('.input-display-field').value = `${textareaVal} `;\n  } else if (event.code === 'Enter') {\n    const textareaVal = document.querySelector('.input-display-field').value;\n    document.querySelector('.input-display-field').value = `${textareaVal}\\n`;\n  } else if (event.code === 'Backspace') {\n    const textareaVal = document.querySelector('.input-display-field').value;\n    document.querySelector('.input-display-field').value = textareaVal.substr(0, textareaVal.length - 1);\n  } else {\n    const letter = document.querySelector(`.${event.code} span`).innerText;\n    const textareaVal = document.querySelector('.input-display-field').value;\n    document.querySelector('.input-display-field').value = `${textareaVal + letter}`;\n  }\n}); // KEYDOWN EVENTS\n// KEYUP EVENTS\n\ndocument.addEventListener('keyup', event => {\n  const engl = document.querySelector('.engl');\n  const rus = document.querySelector('.rus');\n  const off = document.querySelector('.off');\n  const on = document.querySelector('.on');\n  document.querySelectorAll('.key').forEach(element => {\n    element.classList.remove('active');\n  });\n\n  if (event.ctrlKey && event.altKey) {\n    return;\n  }\n\n  if (event.key === 'CapsLock') {\n    return;\n  }\n\n  if (event.key === 'Shift') {\n    if (engl) {\n      if (off) {\n        englishUpperCase();\n      } else if (on) {\n        englishLowerCase();\n      }\n    } else if (rus) {\n      if (off) {\n        rusUpperCase();\n      } else if (on) {\n        rusLowerCase();\n      }\n    }\n  }\n}); // KEYUP EVENTS\n// CLICK EVENTS\n\ndocument.querySelectorAll('.key').forEach(element => {\n  element.addEventListener('click', event => {\n    const engl = document.querySelector('.engl');\n    const rus = document.querySelector('.rus');\n    const off = document.querySelector('.off');\n    const on = document.querySelector('.on');\n    const CapsLock = document.querySelector('.CapsLock span');\n    const AltLeft = document.querySelector('.AltLeft span');\n    const AltRight = document.querySelector('.AltRight span');\n    const ControlLeft = document.querySelector('.ControlLeft span');\n    const ControlRight = document.querySelector('.ControlRight span');\n    const Win = document.querySelector('.MetaLeft span');\n    const ShiftLeft = document.querySelector('.ShiftLeft span');\n    const ShiftRight = document.querySelector('.ShiftRight span');\n    const Delete = document.querySelector('.Delete span');\n    const arrowRight = document.querySelector('.ArrowRight span');\n    const arrowLeft = document.querySelector('.ArrowLeft span');\n    const arrowDown = document.querySelector('.ArrowDown span');\n    const arrowUp = document.querySelector('.ArrowUp span');\n    const tab = document.querySelector('.Tab span');\n    const enter = document.querySelector('.Enter span');\n    const backspace = document.querySelector('.Backspace span');\n\n    if (event.target === CapsLock) {\n      if (event.repeat) return;\n\n      if (engl) {\n        if (off) {\n          englishUpperCase();\n        } else if (on) {\n          englishLowerCase();\n        }\n      } else if (rus) {\n        if (off) {\n          rusUpperCase();\n        } else if (on) {\n          rusLowerCase();\n        }\n      }\n    } else if (event.target === AltLeft || event.target === AltRight || event.target === ControlLeft || event.target === ControlRight || event.target === Win || event.target === ShiftLeft || event.target === ShiftRight || event.target === Delete || event.target === arrowRight || event.target === arrowLeft || event.target === arrowUp || event.target === arrowDown) {\n      const textareaVal = document.querySelector('.input-display-field').value;\n      document.querySelector('.input-display-field').value = `${textareaVal}`;\n    } else if (event.target === tab) {\n      event.preventDefault();\n      const textareaVal = document.querySelector('.input-display-field').value;\n      document.querySelector('.input-display-field').value = `${textareaVal}  `;\n    } else if (event.target === backspace) {\n      event.preventDefault();\n      const textareaVal = document.querySelector('.input-display-field').value;\n      document.querySelector('.input-display-field').value = textareaVal.substr(0, textareaVal.length - 1);\n    } else if (event.target === enter) {\n      event.preventDefault();\n      const textareaVal = document.querySelector('.input-display-field').value;\n      document.querySelector('.input-display-field').value = `${textareaVal}\\n`;\n    } else {\n      const letter = event.target.closest('span').innerHTML;\n      const textareaVal = document.querySelector('.input-display-field').value;\n      document.querySelector('.input-display-field').value = `${textareaVal + letter}`;\n    }\n  });\n}); // CLICK EVENTS\n// MOUSEDOWN EVENTS\n\ndocument.querySelector('.ShiftLeft').addEventListener('mousedown', () => {\n  const engl = document.querySelector('.engl');\n  const rus = document.querySelector('.rus');\n  const off = document.querySelector('.off');\n  const on = document.querySelector('.on');\n\n  if (engl) {\n    if (off) {\n      englishUpperCase();\n    } else if (on) {\n      englishLowerCase();\n    }\n  } else if (rus) {\n    if (off) {\n      rusUpperCase();\n    } else if (on) {\n      rusLowerCase();\n    }\n  }\n\n  const textareaVal = document.querySelector('.input-display-field').value;\n  document.querySelector('.input-display-field').value = `${textareaVal}`;\n}); // MOUSEDOWN EVENTS\n// MOUSEUP EVENTS\n\ndocument.querySelector('.ShiftLeft').addEventListener('mouseup', () => {\n  const engl = document.querySelector('.engl');\n  const rus = document.querySelector('.rus');\n  const off = document.querySelector('.off');\n  const on = document.querySelector('.on');\n\n  if (engl) {\n    if (off) {\n      englishUpperCase();\n    } else if (on) {\n      writeDemoClass();\n    }\n  } else if (rus) {\n    if (off) {\n      rusUpperCase();\n    } else if (on) {\n      rusLowerCase();\n    }\n  }\n\n  const textareaVal = document.querySelector('.input-display-field').value;\n  document.querySelector('.input-display-field').value = `${textareaVal}`;\n}); // MOUSEUP EVENTS\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });