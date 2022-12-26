/// <reference types="cypress" />
import {slowCypressDown} from 'cypress-slow-down'
slowCypressDown()

import AdministrationPage from '../../page-object/administration-page/administration-page.js'
import LicensePage from '../../page-object/license-page/license-page.js'

describe('Inviting User', () => {
    beforeEach('testing', function () {
        cy.fixture(Cypress.env('inviteuserdata')).then((user) => {
            cy.login(user.Email, user.Password)
            this.userd = user;
        })
    })

    it('Inviting User', {tags: 'smoke'},function () {
        const licensePage = new LicensePage();
        const Admin = new AdministrationPage();
        cy.wait(1000)

        // Switch To Digital License
        licensePage.digitalLicense();
         Admin.inviteduser(this.userd);

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from

        // failing the test
        return false;
    })

})
