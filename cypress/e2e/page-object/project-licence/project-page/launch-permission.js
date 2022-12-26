/// <reference types="cypress" />

class LaunchPermission {

    launchPermission(projectdata) {

        //Check Project is Available in My Project Page
        cy.contains('Launch Permission Automation');

        //Create the TASK
        cy.get('#task_1').click();

        // Enter the task Title
        const taskTitleName = cy.get('#taskTitle');
        taskTitleName.type(projectdata.OwnerTaskTitle);

        // Enter the Task ID
        const taskIdNumber = cy.get('#TaskID');
        taskIdNumber.type(projectdata.TaskId);

        // Enter the Task Description
        const taskSummary = cy.get('#Description');
        taskSummary.type(projectdata.TaskDescription);

        // Click the Create Task Button
        const createTask = cy.get('#create_task');
        createTask.click();

        //Click My submitted Menu
        cy.get('#tabChange_1 > .tab-label-css').click();

        cy.contains('Task 3');

        //Open the Task
        const openTask = cy.get(':nth-child(2) > .cdk-column-action > #openTask');
        openTask.click();

        //Verify the Task Title
        cy.contains('Task 3');


        //Cancel Popup
        const cancelPopup = cy.get('#cancel > .mat-button-wrapper');
        cancelPopup.click();


    }



}
export default LaunchPermission;