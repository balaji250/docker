import 'cypress-file-upload';

Cypress.Commands.add('login', (email, password) => {

    cy.visit(Cypress.env('url'))
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('#login').click()



})

// Cypress.Commands.add('licence', (email, password) => {

//     cy.visit('https://india.yoroflow.com/login')
//     cy.get('#username').type(email)
//     cy.get('#password').type(password)
//     cy.get('#login').click()
//     cy.get('#license_1').click()
//     cy.get('#btnYes > .mat-button-wrapper').click()

// })