/// <reference types="cypress" />
import { slowCypressDown } from 'cypress-slow-down'
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

  it('validating the unique field while creating the task', { tags: 'smoke' }, function () {
    const licensePage = new LicensePage();
    const projectPage = new ProjectPage();
    

    cy.wait(1000);
    //Switch To Digital License
    licensePage.projectLicense();
    cy.wait(1000);
    projectPage.checkDuplicateCreatingTask(this.userd)
    
   
    
    
   })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false

  })

})