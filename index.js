try {
  var jest = require('jest')
} catch (error) {
  throw Error('(geste) Could not require module "jest". jest needs to be requirable. see https://nodejs.org/dist/latest/docs/api/modules.html#modules_all_together for more information')
}

module.exports = jest
