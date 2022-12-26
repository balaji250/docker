/// <reference types="cypress" />

class AddSubstatus {

    addsubstatus(projectdata) {

        //click colum action option
        const clickcolumaction = cy.get('#column_0');
        clickcolumaction.click();

        //click manage sub status option
        const renameColum = cy.get('#addSubStatus > .mat-button-wrapper > div > .font-weight-normal');
        renameColum.click();

        //enter the sub status name
        const substatusname = cy.get('#subStatusName_0');
        substatusname.type(projectdata.SubStatusName);

        //create substatus
        const createsubstatus = cy.get('#createSubStatus');
        createsubstatus.click();

        //To check whether the given substatus name is same as per the given substatus name
        cy.get('.subStatus_header_css').should('contain', 'Deal');


    }
}


export default AddSubstatus;