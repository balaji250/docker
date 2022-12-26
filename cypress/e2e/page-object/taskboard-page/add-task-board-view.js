// / <reference types="cypress" />

class AddTaskBroadView {

    addTaskBroadView(taskboardData) {

        //To check whether the given taskboard name is same as per the given taskboard name
        cy.get('.name-css').should('contain', '1Yoroflow Bug Tracking');

        // Click the Add Task Button
        const addTask = cy.get('.mat-button-wrapper');
        addTask.click();

        // Enter the task Title
        const taskTitleName = cy.get('#taskTitle');
        taskTitleName.type(taskboardData.TaskTitle);

        // Enter the Task ID
        const taskIdNumber = cy.get('#TaskID');
        taskIdNumber.type(taskboardData.TaskId);

        // Enter the Task Description
        const taskSummary = cy.get('#Description');

        taskSummary.type(taskboardData.TaskDescription);

        // Click the Create Task Button
        const createTask = cy.get('#create_task');
        createTask.click();

        //Open the Created Task
        const openTask = cy.get('#openTask');
        openTask.click();

        // To check whether the given task title is same as per the given task title
        cy.get('.px-2 > :nth-child(1) > .mat-tooltip-trigger').should('contain', 'Task 1');

        // Click the Save and Close Button to Save the Changes Done
        const saveClose = cy.get('.mr-3 > .mat-button-wrapper');
        saveClose.click();


    }

}
export default AddTaskBroadView;