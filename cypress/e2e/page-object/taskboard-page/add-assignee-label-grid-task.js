/// <reference types="cypress" />

class AddAssignLabelGridTask {

    addassignlabelgridtask(taskboardData) {

        //Click the Assignee Grid
        const assigneeGrid = cy.get('#Todo > .cdk-drag > [style="width: 140px; flex-direction: column; box-sizing: border-box; display: flex;"]');
        assigneeGrid.click();

        //Enter the Assignee Name
        const assigneeUserName = cy.get('#mat-chip-list-input-2');
        assigneeUserName.type(taskboardData.AssignedTo);

        //Select the Assignee
        cy.get('.mat-card').contains('Admin').click();

        //Save the Assignee
        const saveAssigne = cy.get('.mr-3 > .mat-button-wrapper');
        saveAssigne.click();

        //To check whether the selected user name is right as per the given user name
        cy.contains('AA').should('be.visible');

    }

    taskboardname(name) {
        const taskboardName = cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #name');
        taskboardName.type(name);


    }

}

export default AddAssignLabelGridTask;