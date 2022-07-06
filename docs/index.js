const basicInfo = require('./info');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const todos = require('./todo');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...todos
};