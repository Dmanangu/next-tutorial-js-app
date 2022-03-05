"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postToJSON = postToJSON;
exports.firestore = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/auth");

require("firebase/compat/firestore");

require("firebase/compat/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firebaseConfig = {
  apiKey: "AIzaSyDFKcsc3QdJo0dZV2ZNt004SMz1-FDr80E",
  authDomain: "next-tutorial-bdb91.firebaseapp.com",
  projectId: "next-tutorial-bdb91",
  storageBucket: "next-tutorial-bdb91.appspot.com",
  messagingSenderId: "770928635205",
  appId: "1:770928635205:web:912ad2660419eed441e22c"
};

if (!_app["default"].apps.length) {
  _app["default"].initializeApp(firebaseConfig);
}

var firestore = _app["default"].firestore();
/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */


exports.firestore = firestore;

function postToJSON(doc) {
  var data = doc.data();
  return _objectSpread({}, data);
}