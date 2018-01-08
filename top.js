console.log('evaluating top module');

exports = module.exports = {
  methodOfTop,
};

exports.subModule = require('./sub');

function methodOfTop() {

}
