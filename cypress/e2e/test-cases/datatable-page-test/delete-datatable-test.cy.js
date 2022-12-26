/// <reference types="cypress" />
import  { slowCypressDown } from 'cypress-slow-down'

slowCypressDown()


import Datatablepage from '../../page-object/data-table-page/datatable-page'
import DeleteDatatable from '../../page-object/data-table-page/deletedatatable-data'
import LicensePage from '../../page-object/license-page/license-page'


describe('Delete Datatable', () => {
    beforeEach('testing', function () {
      cy.fixture(Cypress.env('datatabledata')).then((user) => {
        //Valid username and password
        cy.login(user.Email, user.Password)
        this.userd = user
      })
    })

    it('Delete Datatable', { tags: 'smoke' }, function () {
        const licensepage = new LicensePage();
        const datatablepage = new Datatablepage();


    //Switch To Digital License
    licensepage.digitalLicense();
    cy.wait(3000);

    //datatablepage.datatable(this.userd.DataTableName,this.userd.Description,this.userd.ColumnName,this.userd.Size,this.userd.DateColumnName,this.userd.Name,this.userd.GroupName);
    //datatablepage.assigneeuser(this.userd.GroupName)
    //datatablepage.exporttable()
    datatablepage.deletetable(this.userd)
})
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from

    // failing the test
    return false

})