/// <reference types="cypress" />

import AddTaskProject from "./add-task-to-project.js";


class ColumnAccessTeam {

    columnAccessTeam(projectdata) {
        //Click on the Project Menu
        const projectMenu = cy.get('#menu_1');
        projectMenu.click();

        cy.wait(1000)

        //Click the "Create New Project" button.
        const newProject = cy.get('#new_task');
        newProject.click();

        // Creating New Taskboard From Scratch
        const createTaskFromScratch = cy.get('#scratch > h2');
        createTaskFromScratch.trigger("click");

        //Enter the Project Name
        const projectName = cy.get('#task_board_name');
        projectName.type(projectdata.ProjectColumName);

        // Enter the Description
        const projectDescription = cy.get('#description');
        projectDescription.type(projectdata.ProjectDescription);


        //Click next Button
        const nextButtonpage = cy.get('#nextBtn1');
        nextButtonpage.click();

        // Rename the Existing Column Status
        const renameStatusName = cy.get('#progress_0');
        renameStatusName.clear();
        renameStatusName.type(projectdata.RenameStatus);


        // Click Next Button to Select the Form
        const secondnextButton = cy.get('#nextBtn3');
        secondnextButton.click();

        // Click the Create/Select Drop Down
        const selectFromDropdown = cy.get('.mat-button-toggle-label-content > .mat-icon');
        selectFromDropdown.click();

        // Select the Existing Form Option in the Drop Down
        const selectExistingForm = cy.get('#selectExistForm');
        selectExistingForm.click();

        // Click the Select Existing Form from Drop Down
        const selectExistingFormDropdown = cy.get('#mat-select-value-3');
        selectExistingFormDropdown.dblclick();
        const down = cy.get('#formId > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
        down.click();

        // Selecting Specific Form
        const selectFormName = cy.contains('0Yoroflow Bug Report Form');
        // const selectformname = cy.get('#pageName_57 > .mat-option-text');
        selectFormName.click();

        // Click Next Button to Enable the Sprint
        const clickNext = cy.get('#nextBtn4');
        clickNext.click();

        // Click Save Button to Create Project
        const save = cy.get('#save');
        save.click();
        cy.wait(2000)

        // Click Skip Button
        const skip = cy.get('#cancelBtn');
        skip.click()

        //To check whether the given taskboard name is same as per the given project name
        cy.get('.name-css').should('contain', 'ColumTeamTest');

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

        //click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click taskboard security
        const taskboardSecurity = cy.get('#taskboard_security > .mat-button-wrapper > div > .font-weight-normal');
        taskboardSecurity.click();

        //Enter the team
        const teamName = cy.get('.mat-form-field-infix');
        teamName.type(projectdata.TeamName);

        //Select the owner.
        cy.contains('Automation Project').click();

        //enable the read access
        const enableRead = cy.get('#readAllowed0 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb');
        enableRead.click();

        //enable update access
        const enableUpdate = cy.get('#updateAllowed0 > .mat-slide-toggle-label > .mat-slide-toggle-bar');
        enableUpdate.click();

        //enable delete access
        const enableDelete = cy.get('#deleteAllowed_0 > .mat-slide-toggle-label > .mat-slide-toggle-bar');
        enableDelete.click();

        //click next button
        const buttonNext = cy.get('#btnSave');
        buttonNext.click();

        //save the permisson
        const savePermission = cy.get('#Save_Permission > .mat-button-wrapper');
        savePermission.click();

        //click action button
        const clickAction2 = cy.get('#taskboard_menu');
        clickAction2.click();

        //click the taskboard configuration menu
        const taskboardConfiguration = cy.get(':nth-child(2) > .mat-button-wrapper > div > .font-weight-normal');
        taskboardConfiguration.click();

        //Click next Button
        const clicknextButtonpage = cy.get('#nextBtn2');
        clicknextButtonpage.click();

        // Add the New Column Status
        const addStatus = cy.get('#Add_new_step');
        addStatus.click();

        // Enter the New Column Status Name
        const newStatusName = cy.get('#progress_2');
        newStatusName.type(projectdata.StatusName);

        // Click Next Button to Select the Form
        const nextButton = cy.get('#nextBtn3');
        nextButton.click();

        //Click Next Button to Enable the Sprint
        const fourthclickNext = cy.get('#nextBtn4');
        fourthclickNext.click();

        //Click Save Button to Update Taskboard
        const update = cy.get('#update');
        update.click();
        cy.wait(2000);

        //Cancel the Pop-up
        cy.get('#cancelBtn').click();
        cy.wait(2000);

        //Open the Created Task
        const openTask = cy.get('#openTask');
        openTask.click();

        // To check whether the given task title is same as per the given task title
        cy.get('.px-2 > :nth-child(1) > .mat-tooltip-trigger').should('contain', 'Task 1');

        cy.get('.taskId_badge_css').should('contain', 'COL-001');

        //click the Status
        const clickStatus = cy.get('.status-box');
        clickStatus.click();

        //Click the In Progress Status
        cy.get('.mat-menu-content').contains('In Development').click();

        // Click the Save and Close Button to Save the Changes Done
        const saveclose = cy.get('.mr-3 > .mat-button-wrapper');
        saveclose.click();

        cy.get('#openUser').click();

        cy.get('#logout > .user_setting_text_css').click();

        cy.get('.mat-dialog-actions > #logout').click();


        //Enter the Team UserName
        const teamUserName = cy.get('#username');
        teamUserName.type(projectdata.TeamUserName);

        //Enter the Password
        const teamUserPassword = cy.get('#password');
        teamUserPassword.type(projectdata.TeamPassword);

        //Click Login Buttoon
        const loginButton=cy.get('#login');
        loginButton.click();

        cy.wait(3000);

        //Click on the Project Menu
        const projectMenuTeamUser = cy.get('#menu_1');
        projectMenuTeamUser.click();

        //Search Project
         const searchProject=cy.get('#search');
         searchProject.type(projectdata.SearchTeamUserProject)

         cy.contains("ColumTeamTest").click();

         cy.get(':nth-child(3) > .column-card > [fxlayoutalign="start start"] > .column-title').should('contain', 'In Development');

         cy.contains('Task 1')

         cy.get('#openUser').click();

        cy.get('#logout > .user_setting_text_css').click();

        cy.get('.mat-dialog-actions > #logout').click();











    }

    //Creating the task in Broad View
    addTaskProject(projectdata) {
        const addTask = new AddTaskProject();
        addTask.addTaskProject(projectdata);
    }


}

export default ColumnAccessTeam;