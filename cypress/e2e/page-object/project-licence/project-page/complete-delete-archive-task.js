/// <reference types="cypress" />
class CompleteArchiveDeleteTask {

    completeArchiveDeleteTask(projectdata) {

        // Click the Add Task Button
        const addTaskComplete = cy.get('.mat-button-wrapper');
        addTaskComplete.first().click();

        // Enter the task Title
        const taskTitleNameComplete = cy.get('#taskTitle');
        taskTitleNameComplete.type(projectdata.CompletedTaskTitle);

        // Enter the Task ID
        const taskIdNumberComplete = cy.get('#TaskID');
        taskIdNumberComplete.type(projectdata.TaskId);

        // Enter the Task Description
        const taskSummaryComplete = cy.get('#Description');
        taskSummaryComplete.type(projectdata.TaskDescription);

        // Click the Create Task Button
        const createTaskComplete = cy.get('#create_task');
        createTaskComplete.click();

        // Click the Add Task Button
        const addTaskArchived = cy.get('.mat-button-wrapper');
        addTaskArchived.first().click();

        // Enter the task Title
        const taskTitleNameArchived = cy.get('#taskTitle');
        taskTitleNameArchived.type(projectdata.ArchivedTaskTitle);

        // Enter the Task ID
        const taskIdNumberArchived = cy.get('#TaskID');
        taskIdNumberArchived.type(projectdata.TaskId);

        // Enter the Task Description
        const taskSummaryArchived = cy.get('#Description');
        taskSummaryArchived.type(projectdata.TaskDescription);

        // Click the Create Task Button
        const createTaskArchived = cy.get('#create_task');
        createTaskArchived.first().click();

        // Click the Add Task Button
        const addTaskDelete = cy.get('#add_task');
        addTaskDelete.click();

        // Enter the task Title
        const taskTitleNameDelete = cy.get('#taskTitle');
        taskTitleNameDelete.type(projectdata.DeletedTaskTitle);

        // Enter the Task ID
        const taskIdNumberDelete = cy.get('#TaskID');
        taskIdNumberDelete.type(projectdata.TaskId);

        // Enter the Task Description
        const taskSummaryDelete = cy.get('#Description');
        taskSummaryDelete.type(projectdata.TaskDescription);

        // Click the Create Task Button
        const createTaskDelete = cy.get('#create_task');
        createTaskDelete.click();

        //Open the Task 
        cy.contains("CompletedTaskTitle").click();


        //Check given task title is correct as per given
        cy.get('.px-2 > :nth-child(1) > .mat-tooltip-trigger').should('contain', 'CompletedTaskTitle');

        //Check Status Icon
        cy.get('#status_chip').click();

        //Click the Done Status
        cy.get('.mat-menu-content').contains('Done').click();

        //Save and Close the Pop-up
        cy.get('.row > .mr-3').click();

        //Click Task Action Icon
        cy.get(':nth-child(2) > .cdk-drag > #openTask > .mat-card-content > [fxlayoutalign="space-between start"] > [fxlayout="row"] > #taskboard_menu0').click();

        //Check the Archive Option
        cy.get(':nth-child(1) > .mat-button-wrapper > div').click();

        //Click Yes in the Pop-up
        cy.get('#btnYes').click();

        cy.get('#responseMessage').should('contain', 'Task Archived successfully');

        //Click Task Action Icon
        cy.get(':nth-child(1) > .cdk-drag > #openTask > .mat-card-content > [fxlayoutalign="space-between start"] > [fxlayout="row"] > #taskboard_menu0').click();

        //Click the Delete Option
        cy.get(':nth-child(2) > .mat-button-wrapper > div').click();

        //Click Yes in the Pop-up
        cy.get('#btnYes').click();

        cy.get('#responseMessage').should('contain', 'Task deleted successfully');

        //Click the Overall Action Option
        cy.get('#taskboard_menu').click();

        //Click the Completed/Archive/Delete Menu
        cy.get('.fs_12 > .font-weight-normal').click();

        //Examine the completed task in the completed menu. 
        cy.get('.mat-row > .cdk-column-task_id').should('contain', 'WOR-002');

        //Click the Archived Menu
        cy.get('.col-md-8 > :nth-child(3)').click();

        //Examine the Archived task in the Archived menu
        cy.get('.mat-row > .cdk-column-task_id').should('contain', 'WOR-003');

        //Click unarchived Option in the Pop-Up
        cy.get('#unarchive_ArchivedTaskTitle').click();

        //Click Yes Option in the Pop-up
        cy.get('#btnYes').click();

        cy.get('#responseMessage').should('contain', 'Task Unarchived successfully');

        //Click the Delete Icon
        cy.get('.col-md-8 > :nth-child(2)').click();

        //Examine the deleted task in the deleted menu
        cy.get('.mat-row > .cdk-column-task_id').should('contain', 'WOR-004');

        //Click the Undeleted Button
        cy.get('#unarchive_DeletedTaskTitle').click();

        //Click Yes Option in the Pop-up
        cy.get('#btnYes > .mat-button-wrapper').click();

        cy.get('#responseMessage').should('contain', 'Task undeleted successfully');

        //Click the Back to Project Option
        cy.get('[type="button"]').click();

        //To check unarchived,undeleted task are shown in the board
        cy.contains("ArchivedTaskTitle");
        cy.contains("DeletedTaskTitle");


    }

}
export default CompleteArchiveDeleteTask;