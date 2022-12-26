/// <reference types="cypress" />

class RenameColumnname {

    renamecolumnname(taskboardData) {

        //click colum action option
        const clickcolumaction = cy.get('#column_0');
        clickcolumaction.click();

        //click rename colum option
        const renameColum = cy.get('#renameColumn > .mat-button-wrapper > div > .font-weight-normal');
        renameColum.click();

        //enter columname
        const enterColumname = cy.get('.mat-form-field-infix > #newColumnName');
        enterColumname.type(taskboardData.ColumnName)

        //replace the columnname
        const replaceColumn = cy.get('[fxlayoutalign="end"] > .mat-primary');
        renameColum.click();


        //To check whether the given columnname same as per the given columnname
        cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card > [fxlayoutalign="start start"] > .column-title').should('contain', 'Todo');


    }
}
export default RenameColumnname;