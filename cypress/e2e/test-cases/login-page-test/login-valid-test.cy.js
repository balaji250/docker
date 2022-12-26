/// <reference types="cypress" />
import LoginPage from '../../page-object/login-page/login-page.js'

describe('Login with Valid Credential', () => {

    beforeEach('Login Page', function () {
        cy.fixture(Cypress.env('logindata')).then((user) => {
            this.userd = user;
        })

    })

    it('Succesful Login', { tags: 'smoke' }, function () {
        const loginpage = new LoginPage();

        //Pass URL
        loginpage.visit();
        //Enter UserName
        loginpage.email(this.userd.Email);
        //Enter Password
        loginpage.password(this.userd.Password);
        //Click on Login Button
        loginpage.clickLogin();
        //Assertion (on succesful login check whether this label is visible)
        cy.contains('Grow Your Business').should('be.visible');
        cy.log('Successfully login');
        //Click on Logout Button
        loginpage.logout();

    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from

        // failing the test
        return false;

    })
})