/// <reference types="cypress" />

class CreateMilestone {

    createMilestone(projectdata) {

        //click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click Project Milestone
        const projectMecurity = cy.get('#taskboard_milestone > .mat-button-wrapper > div > .font-weight-normal');
        projectMecurity.click();

        //Click the Add MilestoneIcon
        const addIcon = cy.get('.right-container > .mat-tooltip-trigger');
        addIcon.click();

        //Enter the Milestone Name
        const currentDate = cy.get('#projectName');
        currentDate.type(projectdata.MilestoneName);

        //Click the Start Calendar
        cy.get('[style="margin-right: 10px; flex-direction: column; box-sizing: border-box; display: flex;"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator').click();
        const startDate = cy.get(':nth-child(1) > [data-mat-col="1"] > .mat-calendar-body-cell')
        startDate.click();

        //Click the End Calendar
        cy.get('[style="flex-direction: column; box-sizing: border-box; display: flex;"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon > path').click();
        const endDate = cy.get(':nth-child(2) > [data-mat-col="5"] > .mat-calendar-body-cell');
        endDate.click();

        //Enter the Milestone Description
        const mileStoneDescription = cy.get('#description');
        mileStoneDescription.type(projectdata.MilestoneDescription);

        //Click the Save Button
        const SaveButton = cy.get('#submit');
        SaveButton.click();


        //Close the Pop-Up
        cy.get('#clear').click();



        // Click the Add Task Button
        const addTask = cy.get('.mat-button-wrapper');
        addTask.first().click();

        // Enter the task Title
        const taskTitleName = cy.get('#taskTitle');
        taskTitleName.type(projectdata.MileStoneTaskTitle);

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
        cy.get('.px-2 > :nth-child(1) > .mat-tooltip-trigger').should('contain', 'Task 2');

        //Click Add Milestone Option
        const addMilestone = cy.get(':nth-child(5) > .fs_12 > span > .mat-icon');
        addMilestone.click();

        //Click Select Milestone Drop Down
        const milestoneDropDown = cy.get('#milestone > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
        milestoneDropDown.click();

        //Select the Milestone
        const selectMilestone = cy.get('.mat-option-text')
        selectMilestone.click();

        //Save the Milestone
        const saveMilestone = cy.get('#save');
        saveMilestone.click();

        //Click Overall Save Button
        cy.get('.mr-3 > .mat-button-wrapper').click();
    }

}

export default CreateMilestone;