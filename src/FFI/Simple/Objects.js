'use strict';

function typeOf(v) { return typeof v; }
function instanceOf(obj, thing) { return obj instanceof thing; }
function isIn(prop,obj) { return prop in obj; }
function keys(obj) { return Object.keys(obj); };
function hasOwnProperty(prop, obj) { return obj.hasOwnProperty(prop); }
function getProperty(prop, obj) { return obj[prop]; }
function setProperty(prop, obj, value) {
  obj[prop] = value;
  return obj;
}
function defineProperty(prop, obj, value) {
  Object.defineProperty(obj, prop, {value: value, writable: false});
  return obj;
}
function removeProperty(prop, obj) { delete obj[prop]; return obj; }
exports._typeof = typeOf;
exports._instanceof = instanceOf;
exports._isIn = isIn;
exports._keys = keys;
exports._hasOwnProperty = hasOwnProperty;
exports._getProperty = getProperty;
exports._setProperty = setProperty;
exports._defineProperty = defineProperty;
exports._removeProperty = removeProperty;
