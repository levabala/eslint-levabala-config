import YAML from 'yamljs';

const config = YAML.load(`${__dirname}/../.eslintrc.yml`);

module.exports = config;
