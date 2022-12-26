/// <reference types="cypress" />
import {
    slowCypressDown
} from 'cypress-slow-down'
slowCypressDown()


import YorodeskPage from '../../page-object/yorodesk-License/yoro-desk-page.js'
import LicensePage from '../../page-object/license-page/license-page.js'



describe('Goto Board', () => {
    beforeEach('testing', function () {

        cy.fixture(Cypress.env('yorodeskdata')).then((user) => {
            //Valid username and password
            cy.login(user.Email, user.Password);
            this.userd = user;
        })
    })

it('Goto Board', { tags: 'smoke' }, function () {
    const licensepage = new LicensePage();
    const yorodeskPage=new YorodeskPage();
    
    //Switch To Yorodesk License
    licensepage.yorodeskLicense();
    cy.wait(3000);
    //yorodeskPage.gotoBoard(this.userd.SearchName,this.userd.Subject,this.userd.Description)
    yorodeskPage.openTicket(this.userd)

})

})


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from

        // failing the test
        return false

    })

    
