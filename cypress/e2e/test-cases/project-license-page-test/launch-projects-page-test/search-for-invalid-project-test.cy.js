/// <reference types="cypress" />
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

import SearchForInvalidProjectPage from '../../../page-object/project-licence/launch-projects/search-for-invalid-project-name.js'
import LicensePage from '../../../page-object/license-page/license-page.js'



describe('Invalid Project name', () => {
  beforeEach('Search for invalid project', function () {
    cy.fixture(Cypress.env('applicationdata')).then((user) => {
      //Valid username and password
      cy.login(user.Email, user.Password)
      this.userd = user
    })
  })

  it('validating invalid project name', { tags: 'smoke' }, function () {
    const licensePage = new LicensePage();
    const projectsPage = new SearchForInvalidProjectPage();
    

      //Switch To Digital License
    licensePage.projectLicense();
    cy.wait(1000);
    projectsPage.searchForInvalidProject(this.userd.InvalidProjectName,this.userd.ProjectTitleName, this.userd.EnterName);
    
   
    
    
   })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false

  })

})