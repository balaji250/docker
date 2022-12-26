/// <reference types="cypress" />
import {
  slowCypressDown
} from 'cypress-slow-down'
slowCypressDown()

import DashboardPage from '../../page-object/dashboard-page/dashboard-page.js'
import LicensePage from '../../page-object/license-page/license-page.js'

describe('Existing Dashboard', () => {
  beforeEach('testing', function () {
    cy.fixture(Cypress.env('dashboarddata')).then((user) => {
      //Valid username and password
      cy.login(user.Email, user.Password)
      this.userd = user;
    })
  })
  it('Existing Dashboard', {
    tags: 'smoke'
  }, function () {

    const licensePage = new LicensePage();
    const dashboardPage = new DashboardPage();
    cy.wait(1000)

    //Switch To Digital License
    licensePage.digitalLicense();
    dashboardPage.existingDashboard(this.userd);
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false;
  })

})