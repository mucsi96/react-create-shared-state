'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createSharedState = createSharedState;

var _react = require('react');

function createSharedState(initialState) {
  const listeners = [];
  return () => {
    const [value, setValue] = (0, _react.useState)(initialState);
    (0, _react.useEffect)(() => {
      listeners.forEach(listener => listener !== setValue && listener(value));
    }, [value]);
    (0, _react.useEffect)(() => {
      listeners.push(setValue);
      return () => {
        const index = listeners.findIndex(listener => listener === setValue);
        listeners.splice(index, 1);
      };
    }, []);
    return [value, setValue];
  };
}
