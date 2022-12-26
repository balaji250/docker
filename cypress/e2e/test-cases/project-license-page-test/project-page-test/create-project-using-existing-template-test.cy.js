/// <reference types="cypress" />
import {
    slowCypressDown
  } from 'cypress-slow-down'
  slowCypressDown()
  
  import ProjectPage from '../../../page-object/project-licence/project-page/project-page.js'
  import LicensePage from '../../../page-object/license-page/license-page.js'
  
  describe('Creating a Project with Already Existing Template', () => {
    beforeEach('testing', function () {
  
      cy.fixture(Cypress.env('projectdata')).then((user) => {
        //Valid username and password
        cy.login(user.Email, user.Password);
        this.userd = user;
      })
    })
  
    it('Creating project with Existing Template', {
      tags: 'smoke'
    }, function () {
      const licensePage = new LicensePage();
      const projectPage = new ProjectPage();
  
      //Switch To Yoroproject License
      licensePage.projectLicense();

      //Creating a Project with Already Existing Template
      projectPage.createProjectExistingTemplate(this.userd);
  
      })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
  
      // failing the test
      return false;
  
    })
  
  })