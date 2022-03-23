//commonjs. every file is module (by default)
//modules - Encapsulated Code (only share minimum)

const fullName = require('./names');
const printOnScreen = require('./modules');
const data = require('./objects');

require('./mind');
// console.log(data);
// printOnScreen(fullName.name1);
// printOnScreen(fullName.lastName);

