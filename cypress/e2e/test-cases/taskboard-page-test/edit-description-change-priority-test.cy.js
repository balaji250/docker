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
  
    it('change the priority, edit the description, change the status and remove the assignee and label. ', {
      tags: 'smoke'
    }, function () {
      const licensepage = new LicensePage();
      const taskboardPage = new TaskboardPage();
      cy.wait(1000);
      //Switch To Digital License
      licensepage.digitalLicense();
      cy.wait(1000);
      taskboardPage.changePriorityDescription(this.userd)
  
    })
  
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
  
      // failing the test
      return false
  
    })
  
  })