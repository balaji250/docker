/// <reference types="cypress" />
import {
    slowCypressDown
  } from 'cypress-slow-down'
  slowCypressDown()
  
  import TaskboardPage from '../../page-object/taskboard-page/taskboard-page.js'
  import LicensePage from '../../page-object/license-page/license-page.js'
  
  describe('Test Suite', () => {
    beforeEach('testing', function () {
      cy.fixture(Cypress.env('taskboarddata')).then((user) => {
        //Valid username and password
        cy.login(user.Email, user.Password)
        this.userd = user
      })
    })
  
    it('Creating the task in Grid View', {
      tags: 'regression'
    }, function () {
      const licensepage = new LicensePage();
      const taskboardPage = new TaskboardPage();
      
      //Switch To Digital License
      licensepage.digitalLicense();
      
      taskboardPage.addSprint(this.userd)
  
    })
  
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
  
      // failing the test
      return false
  
    })
  
  })