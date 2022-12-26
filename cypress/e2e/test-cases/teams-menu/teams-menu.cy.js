/// <reference types="cypress" />
import {
    slowCypressDown
  } from 'cypress-slow-down'
  slowCypressDown()
  
  import TeamsmenuPage from '../../page-object/teams-page/create-team-page.js'
  import LicensePage from '../../page-object/license-page/license-page.js'

  
  describe('Creating New Team', () => {
    beforeEach('testing', function () {
      cy.fixture(Cypress.env('teamsdata')).then((user) => {
        //Valid username and password
        cy.login(user.Email, user.Password)
        this.userd = user;
      })
    })
    it('Creating New Team', {
        tags: 'smoke'
      }, function () {
        const licensePage = new LicensePage();
        const teamsmenuPage = new TeamsmenuPage();
        cy.wait(1000)
    
        //Switch To Digital License
        licensePage.digitalLicense();
        teamsmenuPage.teams(this.userd);
      })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
    
        // failing the test
        return false;
      })
    
    })