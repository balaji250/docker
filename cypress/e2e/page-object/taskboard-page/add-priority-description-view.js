/// <reference types="cypress" />
class AddPriorityAndDescription {

    addPriorityAndDescription(taskboardData) {

        //Open the Created Task
        const openTask = cy.get('#openTask');
        openTask.click();

        //To check whether the given task title is same as per the given task title
        cy.get('.px-2 > :nth-child(1) > .mat-tooltip-trigger').should('contain', 'Task 1');

        cy.log('Add Description');

        //Click Add Description Edit Icon
        const editIcon = cy.get('#edit');
        editIcon.click();

        //Enter the Description
        const enterDescription = cy.get('.ql-editor');
        enterDescription.type(taskboardData.DefectDescription);

        //Save the Description
        const saveDescription = cy.get('#save');
        saveDescription.click();

        //To check whether the given description is same as per the given description
        cy.get('.description-class > p').should('contain', 'this task contains the defect of taskboard menu');

        cy.log('Add Priority');

        //Click Add Priority Flag Icon
        const clickFlagIcon = cy.get('.mat-menu-trigger > .flag-css');
        clickFlagIcon.click();

        //Click the Urgent Status
        cy.contains('Urgent').click();

        //click the Status
        const clickStatus = cy.get('.status-box');
        clickStatus.click();

        //Click the In Progress Status
        cy.get('.mat-menu-content').contains('In Progress').click();

        //Click Assign to Icon
        const clickAssignTo = cy.get('.mt-2 > span.ng-star-inserted > .mat-tooltip-trigger');
        clickAssignTo.click();

        //Enter the Assignee Name
        const assigneeUserName = cy.get('.mat-chip-list-wrapper > #search');
        assigneeUserName.type(taskboardData.AssignedTo);

        //Select the Assignee
        cy.get('#selectAssign').contains('Admin').click();

        //Save the Assignee
        const saveAssigne = cy.get('#Confirm');
        saveAssigne.click();

        //To check whether the selected user name is right as per the given user name
        cy.contains('AA').should('be.visible');

        //Click Add Label Icon
        const addLabel = cy.get('.fs_12 > span.ng-star-inserted > .mat-icon');
        addLabel.click();

        //Click Add New Label Button
        const addNewLabel = cy.get('#addLabel');
        addNewLabel.click();

        //Enter the Label Name
        const labelName = cy.get('#create_new');
        labelName.type(taskboardData.LabelName);

        //Click Create Label
        const createLabel = cy.get('#createLabel');
        createLabel.click();

        //Select the Created Label
        cy.get('#labelButton_0 > .row').contains('Defect').click();

        //Close the Label PopUp
        const closeLabel = cy.get('#label_close');
        closeLabel.click();

        //To check whether the selected label is right as per the given label
        cy.get('.label-scroll > .row').should('contain', 'Defect');

        // Click the Save and Close Button to Save the Changes Done
        const saveclose = cy.get('.mr-3 > .mat-button-wrapper');
        saveclose.click();

    }

}
export default AddPriorityAndDescription;