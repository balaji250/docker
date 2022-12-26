/// <reference types="cypress" />

class CheckDuplicateCreatingTask {

    checkDuplicateCreatingTask(projectdata) {

        //Click the "Create New Project" button.
        const Project = cy.get('#menu_1')
        Project.click();

        cy.get('#search').type(projectdata.SearchProject)
        cy.contains("Worklog Management").click();

        //click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click the taskboard configuration menu
        const taskboardConfiguration = cy.get(':nth-child(2) > .mat-button-wrapper > div > .font-weight-normal');
        taskboardConfiguration.click();

        //Click next Button
        const nextButtonpage = cy.get('#nextBtn2');
        nextButtonpage.click();

        //Click Next Button to Select the Form
        const nextButton = cy.get('#nextBtn3');
        nextButton.click();

        //Enable the unique field
        const uniqueFields = cy.get('.mat-checkbox-inner-container');
        uniqueFields.click();

        //Click the UniqueFields Dropdown
        const uniqueDropdown = cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
        uniqueDropdown.click();

        //Click the Dropdown Value
        const uniqueValue = cy.get('#mat-option-5 > .mat-option-text');
        uniqueValue.click();

        cy.get('.cdk-overlay-transparent-backdrop').click(-50, -50, {
            force: true
        });

        //Click Next Button to Enable the Sprint
        const clickNext = cy.get('#nextBtn4');
        clickNext.click();

        //Click the Update Icon
        const updateIcon = cy.get('#update');
        updateIcon.click();

        //Click the SkipIcon
        const skipIcon = cy.get('#cancelBtn');
        skipIcon.click();

        // Click the Add Task Button
        const addTask = cy.get('.mat-button-wrapper');
        addTask.click();

        // Enter the task Title
        const taskTitleName = cy.get('#taskTitle');
        taskTitleName.type(projectdata.TaskTitle);

        // Enter the Task ID
        const taskIdNumber = cy.get('#TaskID');
        taskIdNumber.type(projectdata.UniqueTaskId);

        // Enter the Task Description
        const taskSummary = cy.get('#Description');
        taskSummary.type(projectdata.TaskDescription);

        // Click the Create Task Button
        const createTask = cy.get('#create_task');
        createTask.click();

        // Click the Add Task Button
        const addTask2 = cy.get('#add_task');
        addTask2.click();

        // Enter the task Title
        const taskTitleName2 = cy.get('#taskTitle');
        taskTitleName2.type(projectdata.TaskTitle);

        // Enter the Task ID
        const taskIdNumber2 = cy.get('#TaskID');
        taskIdNumber2.type(projectdata.UniqueTaskId);

        // Enter the Task Description
        const taskSummary2 = cy.get('#Description');

        taskSummary2.type(projectdata.TaskDescription);

        // Click the Create Task Button
        const createTask2 = cy.get('#create_task');
        createTask2.click();

        //to check the properly displayed validation error that is displayed while creating the duplicate task.
        cy.contains("We found the following duplicate tasks.").click();

        //Click Yes Button
        cy.get('#btnYes').click();

         //click action button
         const clickAction2 = cy.get('#taskboard_menu');
         clickAction2.click();
 
         //click the taskboard configuration menu
         const taskboardConfiguration2 = cy.get(':nth-child(2) > .mat-button-wrapper > div > .font-weight-normal');
         taskboardConfiguration2.click();
 
         //Click next Button
         const nextButtonpage2 = cy.get('#nextBtn2');
         nextButtonpage2.click();
 
         //Click Next Button to Select the Form
         const nextButton2 = cy.get('#nextBtn3');
         nextButton2.click();
 
         //Diaable the unique field
         const uniqueFields2 = cy.get('.mat-checkbox-inner-container');
         uniqueFields2.click();
 
 
         //Click Next Button to Enable the Sprint
         const clickNext2 = cy.get('#nextBtn4');
         clickNext2.click();
 
         //Click the Update Icon
         const updateIcon2 = cy.get('#update');
         updateIcon2.click();
 
         //Click the SkipIcon
         const skipIcon2 = cy.get('#cancelBtn');
         skipIcon2.click();


    }

}

export default CheckDuplicateCreatingTask;