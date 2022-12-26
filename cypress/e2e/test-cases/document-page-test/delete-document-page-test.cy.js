/// <reference types="cypress" />
import {
    slowCypressDown
  } from 'cypress-slow-down'
  slowCypressDown()
  
  import DocumentPage from '../../page-object/document-page/document-page.js'
  import LicensePage from '../../page-object/license-page/license-page.js'
  
  describe('Deleting Document', () => {
    beforeEach('testing', function () {
      cy.fixture(Cypress.env('documentdata')).then((user) => {
        //Valid username and password
        cy.login(user.Email, user.Password)
        this.userd = user;
      })
    })
  
    it('Delete Document', {
      tags: 'smoke'
    }, function () {
      const licensePage = new LicensePage();
      const documentPage = new DocumentPage();
      cy.wait(1000)
  
      //Switch To Digital License
      licensePage.digitalLicense();
      documentPage.deleteDocument(this.userd.DocumentNameToDelete);
      
    })
 
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
  
      // failing the test
      return false;
    })
  
  })