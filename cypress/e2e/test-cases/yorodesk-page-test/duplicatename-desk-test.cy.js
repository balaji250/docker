/// <reference types="cypress" />
import {
    slowCypressDown
} from 'cypress-slow-down'
slowCypressDown()



import LicensePage from '../../page-object/license-page/license-page.js'
import YorodeskPage from '../../page-object/yorodesk-License/yoro-desk-page.js'


describe('Creating new support board', () => {
    beforeEach('testing', function () {

        cy.fixture(Cypress.env('yorodeskdata')).then((user) => {
            //Valid username and password
            cy.login(user.Email, user.Password);
            this.userd = user;
        })
    })

    it('creating new support board', { tags: 'smoke' }, function () {
        const licensepage = new LicensePage();
        const yorodeskPage=new YorodeskPage();
       
        cy.wait(1000);
        //Switch To Yorodesk License
        licensepage.yorodeskLicense();
        cy.wait(3000);
        yorodeskPage.dupllicatename(this.userd)


    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from

        // failing the test
        return false

    })

})