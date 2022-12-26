

/// <reference types="cypress" />
import {
  slowCypressDown
} from 'cypress-slow-down'
slowCypressDown()

import ApplicationPage from '../../page-object/application-page/application-page.js'
import LicensePage from '../../page-object/license-page/license-page.js'

describe('Launching Workflow application', () => {
  beforeEach('testing', function () {
    cy.fixture(Cypress.env('applicationdata')).then((user) => {
      //Valid username and password
      cy.login(user.Email, user.Password)
      this.userd = user;
    })
  })

  it('Launch Workflow', {
    tags: 'smoke'
  }, function () {
    const licensePage = new LicensePage();
    const applicationPage= new ApplicationPage();
    
     //Switch To Digital License
     licensePage.digitalLicense();
     applicationPage.launchWorkflow(this.userd.WorkflowName,this.userd.EnterName);
    
     })


  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false;
  })

})
