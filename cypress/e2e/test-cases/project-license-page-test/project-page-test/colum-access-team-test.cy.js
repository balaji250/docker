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
  
    it('Create the task board, add the task, and assign the board to a team. create a new column, then move the task to this column. Only team members can see the count in this column. ',  {
      tags: 'smoke', 
    }, function () {
      const licensePage = new LicensePage();
      const projectPage = new ProjectPage();
      //Switch To Digital License
      licensePage.projectLicense();
      projectPage.columnAccessTeam(this.userd)
  
  
    })

    it('Delete the Project', {
      tags: 'smoke'
    }, function () {
      const licensePage = new LicensePage();
      const projectPage = new ProjectPage();
      //Switch To Digital License
      licensePage.projectLicense();
      projectPage.deleteColumAccessTeamProject(this.userd);
    
  
  
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
  
      // failing the test
      return false
  
    })
  
  })