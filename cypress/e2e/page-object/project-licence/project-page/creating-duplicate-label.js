// / <reference types="cypress" />


class CreatingDuplicateLabel {

    creatingDuplicateLabel(projectdata) {

        //Open the Task
        const openTask = cy.get('#Deal-Todo > :nth-child(1) > .cdk-drag > #openTask > .mat-card-content')
        openTask.click();

        //Click Add Label Icon
        const addLabel = cy.get('.fs_12 > span.ng-star-inserted > .mat-icon');
        addLabel.click();

        //Click Add New Label Button
        const addNewLabel = cy.get('#addLabel');
        addNewLabel.click();

        //Enter the Label Name
        const labelName = cy.get('#create_new');
        labelName.type(projectdata.LabelName);

        cy.get('.label_yscroll').click();


        //to check the properly displayed validation error that is displayed while creating the label name as duplicate.
        cy.contains('Label is already exist')

        //Close the Label Pop-Up
        cy.get('#label_close').click();

        //Cancel the Task Pop-up
        cy.get('#cancel').click();



    }

}

export default CreatingDuplicateLabel;