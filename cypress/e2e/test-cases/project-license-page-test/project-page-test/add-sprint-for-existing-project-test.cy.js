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
  
    it('Enabling sprint for already existing project', {
      tags: 'regression'
    }, function () {
        const licensePage = new LicensePage();
        const projectPage = new ProjectPage();
      
      //Switch To Digital License
      licensePage.projectLicense();
      
      projectPage.addSprintForExistingProject(this.userd);
  
    })
  
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
  
      // failing the test
      return false
  
    })
  
  })