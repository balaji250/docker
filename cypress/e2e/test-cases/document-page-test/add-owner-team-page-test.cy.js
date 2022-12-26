// / <reference types="cypress" />
import {slowCypressDown} from 'cypress-slow-down'
slowCypressDown()


import LicensePage from '../../page-object/license-page/license-page.js'
import teamsmenupage from '../../page-object/teams-page/teams_menu.js'

describe('Creating New Document', () => {
    beforeEach('testing', function () {
        cy.fixture(Cypress.env('teamsdata')).then((user) => { 
            // Valid username and password
            cy.login(user.Email, user.Password)
            this.userd = user;
        })
    })

    it('Adding Owner and Team', {
        tags: 'smoke'
    }, function () {
        const licensePage = new LicensePage();
        const teamsmenupage = new teamsmenupage();
        cy.wait(1000)

        // Switch To Digital License
        licensePage.digitalLicense();
        teamsmenupage.teams(this.userd.teamname,this.userd.description)

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from

        // failing the test
        return false;
    })

})
