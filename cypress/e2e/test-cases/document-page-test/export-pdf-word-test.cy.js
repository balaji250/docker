/// <reference types="cypress" />
import {
    slowCypressDown
  } from 'cypress-slow-down'
  slowCypressDown()
  
  import DocumentPage from '../../page-object/document-page/document-page.js'
  import LicensePage from '../../page-object/license-page/license-page.js'
  
  describe('Export PDF Document', () => {
    beforeEach('testing', function () {
      cy.fixture(Cypress.env('documentdata')).then((user) => {
        //Valid username and password
        cy.login(user.Email, user.Password)
        this.userd = user;
      })
    })
  
    it('Exporting PDF and Word Document', {
      tags: 'smoke'
    }, function () {
      const licensePage = new LicensePage();
      const documentPage = new DocumentPage();
      cy.wait(1000)
  
      //Switch To Digital License
      licensePage.digitalLicense();
      documentPage.exportPDFWord(this.userd.DocumentName);
    
      
    })
  //  it.only('should return the report and verify the data in it', function () {
  //   cy.wait(8000)
  //    cy.readFile('C:\Users\SowmiGunasekaran\Downloads\Customer Requirement1.pdf').should('contain', "Customer Requirement");
  // });
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
  
      // failing the test
      return false;
    })
  
  })