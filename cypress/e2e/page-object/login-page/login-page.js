// / <reference types="cypress" />

class LoginPage { // Pass URL
    visit() {
        cy.visit(Cypress.env('url'));
    }

    // Enter UserName
    email(value) {

        const userName = cy.get('#username');
        userName.clear();
        userName.type(value);
    }

    // Enter Password
    password(value) {
        const password = cy.get('#password');
        password.clear();
        password.type(value);
        return this;
    }

    // Click on Login Button

    clickLogin() {

        const clickLogin = cy.get('#login');
        clickLogin.click();

    }
    // Click on Logout Button
    logout() {
        const logout = cy.get('.mat-icon');
        logout.click();
    }

}

export default LoginPage
