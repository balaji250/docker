/// <reference types="cypress" />

class ProjectListView {

    projectListView(projectdata) {

        //Click the "Create New Project" button.
        const Project = cy.get('#menu_1')
        Project.click();

        cy.get('#search').type(projectdata.SearchProject)
        cy.contains("Worklog Management").click();

        //Click list View
        cy.get('#view_2').click();

        // //Click New Task Button
        // cy.get('.mat-focus-indicator').click();


        // // Enter the task Title
        // const taskTitleName = cy.get('#taskTitle');
        // taskTitleName.type(projectdata.TaskTitle);

        // // Enter the Task ID
        // const taskIdNumber = cy.get('#TaskID');
        // taskIdNumber.type(projectdata.TaskId);

        // // Enter the Task Description
        // const taskSummary = cy.get('#Description');

        // taskSummary.type(projectdata.TaskDescription);

        // // Click the Create Task Button
        // const createTask = cy.get('#create_task');
        // createTask.click();

        //Click the Bulk Select
        cy.get(':nth-child(2) > .header-css > tr.ng-tns-c568-451 > [style="flex-direction: row; box-sizing: border-box; display: flex;"] > .select_td').click();

        //Click the Action DropDown
        cy.get('.px-3 > :nth-child(1) > .mat-menu-trigger > .mat-icon').click();

        //Click the Associate Label
        cy.get(':nth-child(3) > .mat-button-wrapper > div > .font-weight-normal').click();

        //Select the Label
        cy.get('#labelButton_0 > .row > .col-md-10').click();

        //Close the Label Pop-Up
        cy.get('#label_close').click();

        //Click the Action DropDown
        cy.get('.px-3 > :nth-child(1) > .mat-menu-trigger > .mat-icon').click();

        //Click the Assignee Option
        cy.get(':nth-child(4) > .mat-button-wrapper > div > .font-weight-normal').click();

        //Enter the Assignee Name
        const assigneeUserName = cy.get('#search_user');
        assigneeUserName.type(projectdata.AssignedTo);

        //Select the Assignee
        cy.get('#user_select0').contains('Admin').click();

        //Save the Assignee
        const saveAssigne = cy.get(':nth-child(2) > .row > .mr-3');
        saveAssigne.click();

        //To check whether the selected user name is right as per the given user name
        cy.contains('AA').should('be.visible');

        //Click the Action DropDown
        cy.get('.px-3 > :nth-child(1) > .mat-menu-trigger > .mat-icon').click();

        //Click Associate Milestone
        cy.get(':nth-child(5) > .mat-button-wrapper > div > .font-weight-normal').click();

        //Click Select Milestone Drop Down
        const milestoneDropDown = cy.get('.mat-select-arrow');
        milestoneDropDown.click();

        //Select the Milestone
        const selectMilestone = cy.get('.mat-option-text')
        selectMilestone.click();

        //Save the Milestone
        const saveMilestone = cy.get('#save');
        saveMilestone.click();


        //Click the Action DropDown
        cy.get('.px-3 > :nth-child(1) > .mat-menu-trigger > .mat-icon').click();

        //Click Add Sprint
        cy.get(':nth-child(1) > .mat-button-wrapper > div').click();

        //Click Add Sprint Button
        cy.get('#create_sprint > .mat-button-wrapper').click();





    }

}

export default ProjectListView;