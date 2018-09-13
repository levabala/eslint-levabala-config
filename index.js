'use strict';

var _yamljs = require('yamljs');

var _yamljs2 = _interopRequireDefault(_yamljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _yamljs2.default.load('./.eslintrc.yml');
console.log(config);

var base_config = {
  rules: {
    'no-console': 2
  }
};

module.exports = base_config;