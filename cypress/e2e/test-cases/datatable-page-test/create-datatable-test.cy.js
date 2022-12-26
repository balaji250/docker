/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown()

import Datatablepage from '../../page-object/data-table-page/datatable-page.js'
import LicensePage from '../../page-object/license-page/license-page'

describe('Creating New datatble', () => {
  beforeEach('testing', function () {
    cy.fixture(Cypress.env('datatabledata')).then((user) => {
      //Valid username and password
      cy.login(user.Email, user.Password)
      this.userd = user
    })
  })


  it('Creating New Datatable', { tags: 'smoke' }, function () {
    const licensepage = new LicensePage();
    const datatablepage = new Datatablepage();


    //Switch To Digital License
    licensepage.digitalLicense();
    cy.wait(3000);

    datatablepage.createDatatable(this.userd);

  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from

  // failing the test
  return false

})