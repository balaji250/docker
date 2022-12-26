// / <reference types="cypress" />


class CreatingDuplicateSubStatus {

    creatingDuplicateSubStatus(projectdata) { 

       //click colum action option
       const clickcolumaction = cy.get('#column_0');
       clickcolumaction.click();

       //click manage sub status option
       const renameColum = cy.get('#addSubStatus > .mat-button-wrapper > div > .font-weight-normal');
       renameColum.click();

       //Click on add sub status
       const addSubStatus = cy.get('#addSubStatus > .mat-button-wrapper');
       addSubStatus.click();

       //enter the sub status name
       const substatusname = cy.get('#subStatusName_1');
       substatusname.type(projectdata.SubStatusName);

       //Click on add sub status
       const addSubStatusButton = cy.get('#addSubStatus > .mat-button-wrapper');
       addSubStatusButton.click();

       cy.contains('Sub Status Name is already exist');

       //Close the Sub Status Pop-up
       cy.get('#closeSubStatus').click();



    }

}

export default CreatingDuplicateSubStatus;