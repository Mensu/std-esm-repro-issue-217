console.log('evaluating sub module');
const topModule = require('./top');

module.exports = {
  methodOfSub,
};

function methodOfSub() {
  // using topModule.methodOfTop
}
