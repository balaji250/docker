/// <reference types="cypress" />
import {
  slowCypressDown
} from 'cypress-slow-down'
slowCypressDown()

import TaskboardPage from '../../page-object/taskboard-page/taskboard-page.js'
import LicensePage from '../../page-object/license-page/license-page.js'

describe('Test Suite', () => {
  beforeEach('testing', function () {
    cy.fixture(Cypress.env('taskboarddata')).then((user) => {
      //cy.fixture(Cypress.env("india")).then((user) => {

      //Valid username and password
      cy.login(user.Email, user.Password);
      this.userd = user;

    })

  })

  it('Creating Taskboard with Existing Name', function () {
    const licensepage = new LicensePage();
    const taskboardpage = new TaskboardPage();

    //Switch To Digital License
    licensepage.digitalLicense();
    taskboardpage.createExistingTemplateTaskboard(this.userd.TaskboardName);
    cy.get('#nameAlreadyExist').should('contain', 'Taskboard Name is Already Exist');
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test

    return false;

  })

})