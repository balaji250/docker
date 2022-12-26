/// <reference types="cypress" />
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

import ProjectPage from '../../../page-object/project-licence/project-page/project-page.js'
import LicensePage from '../../../page-object/license-page/license-page.js'




describe('Test Suite', () => {
  beforeEach('testing', function () {
    cy.fixture(Cypress.env('projectdata')).then((user) => {
      //Valid username and password
      cy.login(user.OwnerEmail, user.OwnerPassword)
      this.userd = user
    })
  })

  it('Creating Project from Scratch', { tags: 'smoke' }, function () {
    const licensePage = new LicensePage();
    const projectPage = new ProjectPage();
    

    projectPage.launchPermission(this.userd)
    projectPage.ownerPermission(this.userd)
    
    
    
   })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false

  })

})