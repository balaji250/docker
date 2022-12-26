/// <reference types="cypress" />

class AddSubtask {

    addSubtask(projectdata) {

        //Open the Created Task
        const openTask = cy.get('#openTask');
        openTask.click();

        cy.wait(1000)

        //Click Add Subtask Menu
        const subTaskMenu = cy.get('#catagory_1 > .mat-button-wrapper > [fxlayoutalign="space-between center"] > [fxlayout="row"] > span');
        subTaskMenu.click();

        //Click Add Subtask Button
        const addSubtaskButton = cy.get('.category-label-css > .mat-icon');
        addSubtaskButton.click();

        //Enter the Subtask Name
        const subTaskName = cy.get('#taskNameBorder');
        subTaskName.type(projectdata.SubTaskName)

        //Click Save Button
        const saveSubtask = cy.get('div.ng-dirty > .mat-icon');
        saveSubtask.click();


        //Open Subtask
        const openSubtask = cy.get('#viewSubtask');
        openSubtask.click();

        //Click Add Description Edit Icon
        const editIcon = cy.get('.border-bottom > .mat-tooltip-trigger');
        editIcon.click();

        //Enter the Description
        const enterDescription = cy.get('.ql-editor');
        enterDescription.type(projectdata.SubTaskDescription);

        //Save the Description
        const saveDescription = cy.get('#save');
        saveDescription.click();

        //To check whether the given description is same as per the given description
        cy.get('.description-class > p').should('contain', 'Gantt Chart Filter is not working');

        //Click Add Priority Flag Icon
        const clickFlagIcon = cy.get('.mat-menu-trigger > .flag-css');
        clickFlagIcon.click();

        //Click the Urgent Status
        cy.get('#priority_option_0').click();

        //click the Status
        const clickStatus = cy.get('.status-box');
        clickStatus.click();

        //Click the Progress Status
        cy.get('.mat-menu-content').contains('Progress').click();

        //Click Assign to Icon
        const clickAssignTo = cy.get('.mt-2 > span.ng-star-inserted > .mat-tooltip-trigger');
        clickAssignTo.click();

        //Enter the Assignee Name
        const assigneeUserName = cy.get('.mat-chip-list-wrapper > #search');
        assigneeUserName.type(projectdata.AssignedTo);

        //Select the Assignee
        cy.get('#selectAssign').contains('Admin Admin').click();

        //Save the Assignee
        const saveAssigne = cy.get('#Confirm');
        saveAssigne.click();

        //To check whether the selected user name is right as per the given user name
        cy.contains('AA').should('be.visible');

        //Click Add Label Icon
        const addLabel = cy.get('.fs_12 > span.ng-star-inserted > .mat-icon');
        addLabel.click();

        //Click Add New Label Button
        const addNewLabel = cy.get('#addLabel > .mat-button-wrapper');
        addNewLabel.click();

        //Enter the Label Name
        const labelName = cy.get('#create_new');
        labelName.type(projectdata.SubTaskLabelName);

        //Click Create Label
        const createLabel = cy.get('#createLabel');
        createLabel.click();

        //Select the Created Label
        cy.get('#labelButton_1 > .row > .col-md-10').contains('Bug').click();

        //Close the Label PopUp
        const closeLabel = cy.get('#label_close');
        closeLabel.click();

        //To check whether the selected user name is right as per the given user name
        cy.get('.label-scroll > .row').should('contain', 'Bug');


        //To check whether the selected label is right as per the given label
        cy.get('.label-scroll > .row').should('contain', 'Bug');

        //To check whether the selected status is right as per the given status
        cy.get('.status-box').should('contain', 'Progress');


        // Click the Save and Close Button to Save the Changes Done
        const saveandcloseall = cy.get('.row > .mat-focus-indicator');
        saveandcloseall.click();



    }
}
export default AddSubtask;