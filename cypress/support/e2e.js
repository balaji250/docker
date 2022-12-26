import './commands'
import 'cypress-file-upload';   
require('cypress-grep')()
module.exports = (on, config) => {
    // optional: register cypress-grep plugin code
    require('cypress-grep/src/plugin')(config)
    cy.viewport(1536,960)
  }



// Import commands.js using ES2015 syntax:


// Alternatively you can use CommonJS syntax:
// require('./commands')
