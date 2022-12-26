/// <reference types="cypress" />
import {
    slowCypressDown
  } from 'cypress-slow-down'
  slowCypressDown()
  
  import CreateWorkflow from '../../page-object/workflow_india/create-workflow.js'
  import LicensePage from '../../page-object/license-page/license-page.js'
  
  describe('Creating workflow from scratch', () => {
    beforeEach('testing', function () {
      cy.fixture(Cypress.env('workflowData')).then((user) => {
        //Valid username and password
        cy.login(user.Email, user.Password)
        this.userd = user;
      })
    })
  
    it('Creating Workflow from scratch', {
      tags: 'smoke'
    }, function () {
      const licensePage = new LicensePage();
      const createWorkflow= new CreateWorkflow();
      cy.wait(1000)
  
      //Switch To Digital License
      licensePage.digitalLicense();
      createWorkflow.createWorkflow(this.userd.WorkflowName);
    })
    
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
  
      // failing the test
      return false;
    })
  
  })
