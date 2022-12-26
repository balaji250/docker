/// <reference types="cypress" />
import  { slowCypressDown } from 'cypress-slow-down'

slowCypressDown()


import Datatablepage from '../../page-object/data-table-page/datatable-page'
import LicensePage from '../../page-object/license-page/license-page'


describe('Search dataTable', () => {
    beforeEach('testing', function () {
      cy.fixture('india-data/datatable-data.json').then((user) => {
        //Valid username and password
        cy.login(user.Email, user.Password)
        this.userd = user
      })
    })

    it('Export a Datatable', { tags: 'smoke' }, function () {
        const licensepage = new LicensePage();
        const datatablepage = new Datatablepage();


    //Switch To Digital License
    licensepage.digitalLicense();
    cy.wait(3000);

    //datatablepage.datatable(this.userd.DataTableName,this.userd.Description,this.userd.ColumnName,this.userd.Size,this.userd.DateColumnName,this.userd.Name,this.userd.GroupName);
    //datatablepage.assigneeuser(this.userd.GroupName)
    //datatablepage.exporttable()
    datatablepage.serachupdatedatatable(this.userd)
})
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false

})