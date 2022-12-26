/// <reference types="cypress" />
import LoginPage from '../../page-object/login-page/login-page.js'

describe('Login with Invalid Credential', () => {

    beforeEach('Login Page', function () {
        cy.fixture(Cypress.env('logindata')).then((user) => {
            this.userd = user;
        })
    })

    it('Invalid username Valid Password', function () {
        const loginpage = new LoginPage();
        //Pass URL
        loginpage.visit();
        //Enter Invalid UserName
        loginpage.email(this.userd.InvalidEmail);
        //Enter Valid Password
        loginpage.password(this.userd.Password);
        //Click on Logout Button
        loginpage.clickLogin();
        //Assertion ( to check this alert is visible for invalid login credential)
        cy.contains('Invalid Username or Password').should('be.visible');
        cy.log('Invalid username Valid Password');
    })


    it('Valid username Invalid Password', function () {
        const loginpage = new LoginPage();

        //Pass URL
        loginpage.visit();
        //Enter Valid UserName
        loginpage.email(this.userd.Email);
        //Enter InValid UserName
        loginpage.password(this.userd.InvalidPassword);
        //Click on Logout Button
        loginpage.clickLogin();
        //Assertion ( to check this alert is visible for invalid login credential)
        cy.contains('Invalid Username or Password').should('be.visible');
        cy.log('Valid username InValid Password');
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from

        // failing the test

        return false;

    })
})