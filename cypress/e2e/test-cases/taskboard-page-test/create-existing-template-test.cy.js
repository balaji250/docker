/// <reference types="cypress" />
import {
  slowCypressDown
} from 'cypress-slow-down'
slowCypressDown()

import TaskboardPage from '../../page-object/taskboard-page/taskboard-page.js'
import LicensePage from '../../page-object/license-page/license-page.js'

describe('Creating a Taskboard with Already Existing Template', () => {
  beforeEach('testing', function () {

    cy.fixture(Cypress.env('taskboarddata')).then((user) => {
      //Valid username and password
      cy.login(user.Email, user.Password);
      this.userd = user;
    })
  })

  it('Creating Taskboard with Existing Template', {
    tags: 'smoke'
  }, function () {
    const licensePage = new LicensePage();
    const taskboardPage = new TaskboardPage();

    //Switch To Digital License
    licensePage.digitalLicense();
    cy.wait(1000);
    //Creating a Taskboard with Already Existing Template
    taskboardPage.createExistingTemplateTaskboard(this.userd.TaskboardName);


  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false;

  })

})