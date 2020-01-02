'use strict';

module.exports = function modify(config) {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    "react": "preact/compat",
    "react-dom/test-utils": "preact/test-utils",
    "react-dom": "preact/compat",
  });

  return config;
};
