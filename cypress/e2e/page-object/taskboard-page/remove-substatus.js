/// <reference types="cypress" />

class RemoveSubstatus {

    removesubstatus() {

        //click colum action option
        const clickcolumaction = cy.get('#column_0');
        clickcolumaction.click();

        //click manage sub status option
        const renameColum = cy.get('#addSubStatus > .mat-button-wrapper > div > .font-weight-normal');
        renameColum.click();

        //remove the substatus
        const substatusname = cy.get('#removeSubStatus_0')
        substatusname.click();

        //create substatus
        const createsubstatus = cy.get('#createSubStatus');
        createsubstatus.click();

    }
}
export default RemoveSubstatus;