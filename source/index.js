import YAML from 'yamljs';

const config = YAML.load('./.eslintrc.yml');
console.log(config);

const base_config = {
  rules: {
    'no-console': 2,
  },
};

module.exports = base_config;
