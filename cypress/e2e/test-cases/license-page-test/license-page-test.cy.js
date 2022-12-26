/// <reference types="cypress" />

import LicensePage from '../../page-object/license-page/license-page.js'

describe('Switching License', () => {
  beforeEach('Login Page', function () {
    cy.fixture(Cypress.env('logindata')).then((user) => {

      //Valid username and password
      cy.login(user.Email, user.Password);
      this.userd = user;
    })
  })

  it('Switching License', function () {

    const licensepage = new LicensePage();
    //Switch To Digital License
    licensepage.digitalLicense();

  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test

    return false;

  })

})