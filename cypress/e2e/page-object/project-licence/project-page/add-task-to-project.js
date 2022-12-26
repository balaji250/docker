// / <reference types="cypress" />

class AddTaskProject {

    addTaskProject(projectdata) {

        //To check whether the given taskboard name is same as per the given project name
        cy.get('.name-css').should('contain', 'Worklog Management');

        // Click the Add Task Button
        const addTask = cy.get('.mat-button-wrapper');
        addTask.click();

        // Enter the task Title
        const taskTitleName = cy.get('#taskTitle');
        taskTitleName.type(projectdata.TaskTitle);

        // Enter the Task ID
        const taskIdNumber = cy.get('#TaskID');
        taskIdNumber.type(projectdata.TaskId);

        // Enter the Task Description
        const taskSummary = cy.get('#Description');

        taskSummary.type(projectdata.TaskDescription);

        // Click the Create Task Button
        const createTask = cy.get('#create_task');
        createTask.click();

        //Open the Created Task
        const openTask = cy.get('#openTask');
        openTask.click();

        // To check whether the given task title is same as per the given task title
        cy.get('.px-2 > :nth-child(1) > .mat-tooltip-trigger').should('contain', 'Task 1');

        cy.get('.taskId_badge_css').should('contain', 'WOR-001');

        cy.contains('100');


    }

}
export default AddTaskProject;