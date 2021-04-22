(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-modal-location-trash-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var form = doc.querySelector('form[name="location_trash"]');
  var submitButton = form.querySelector('button[type="submit"]');
  var allOptions = form.querySelectorAll('.ez-modal__trash-option');
  var confirmCheckbox = form.querySelector('input[name="location_trash[confirm][]"]');

  var enableButton = function enableButton(button) {
    button.disabled = false;
    button.classList.remove('disabled');
  };

  var disableButton = function disableButton(button) {
    button.disabled = true;
    button.classList.add('disabled');
  };

  if (!confirmCheckbox) {
    enableButton(submitButton);
    return;
  }

  var toggleSubmitButton = function toggleSubmitButton() {
    var areAllOptionsChecked = _toConsumableArray(allOptions).every(function (option) {
      var inputs = _toConsumableArray(option.querySelectorAll('input'));

      var isInputChecked = function isInputChecked(input) {
        return input.checked;
      };

      return inputs.length === 0 || inputs.some(isInputChecked);
    });

    areAllOptionsChecked && confirmCheckbox.checked ? enableButton(submitButton) : disableButton(submitButton);
  };

  form.addEventListener('change', toggleSubmitButton, false);
})(window, document);

/***/ }),

/***/ 17:
/*!**********************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_OSS/ibexa-oss/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.js");


/***/ })

},[[17,"runtime"]]]);