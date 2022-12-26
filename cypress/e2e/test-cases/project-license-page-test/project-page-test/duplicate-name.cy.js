/// <reference types="cypress" />
import {
  slowCypressDown
} from 'cypress-slow-down'
slowCypressDown()

import ProjectPage from '../../../page-object/project-licence/project-page/project-page.js'
import LicensePage from '../../../page-object/license-page/license-page.js'

describe('Test Suite', () => {
  beforeEach('testing', function () {
    cy.fixture(Cypress.env('projectdata')).then((user) => {
      //Valid username and password
      cy.login(user.Email, user.Password)
      this.userd = user
    })
  })

  it('To check for proper validation, a message is displayed for duplicate project names, column names, sub-status names, and label names.', {
    tags: 'smoke'
  }, function () {
    const licensePage = new LicensePage();
    const projectPage = new ProjectPage();

    cy.wait(1000);
    //Switch To Digital License
    licensePage.projectLicense();
    cy.wait(1000);

    projectPage.createProjectNameWithExistingName(this.userd)
    projectPage.createColumnNameWithExistingName(this.userd)
    projectPage.creatingDuplicateLabel(this.userd)
    projectPage.creatingDuplicateSubStatus(this.userd)


  })
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false

  })

})