/// <reference types="cypress" />
import AddTaskBroadView from "../taskboard-page/add-task-board-view.js";
import AddPriorityAndDescription from "./add-priority-description-view.js";
import AddSubtask from "./add-subtask.js";
import AddComment from "./add-comment-parent-subtask.js"
import EditTaskboardConfiguration from "./edit-taskboard-configuration.js"
import AddOwnerAndLauchPermission from "./add-owner-launch-permission.js"
import AddTeam from "./add-team-access.js"
import RenameColumnname from "./rename-columnname.js"
import AddSubstatus from "./add-substatus.js"
import CreateEventAutomation from "./create-event-automation.js"
import AddSprint from "./add-sprint.js";

class CreateTaskboardScratch {

    createTaskboardFromScratch(taskboardData) {
        //Click on the Taskboard Menu
        const taskboardMenu = cy.get('.pb-0 > :nth-child(3) > .mat-icon');
        taskboardMenu.click();

        //Click the "Create New Taskboard" button.
        const newTaskboard = cy.get('#new_task');
        newTaskboard.click();

        // Creating New Taskboard From Scratch
        const createTaskFromScratch = cy.get('#scratch > h2');
        createTaskFromScratch.trigger("click");

        //Enter the Taskboard Name
        const taskboardName = cy.get('#task_board_name');
        taskboardName.type(taskboardData.ScracthTaskboardName);

        // Enter the Description
        const taskboardDescription = cy.get('#description');
        taskboardDescription.type(taskboardData.TaskboardDescription);


        //Click next Button
        const nextButtonpage = cy.get('#nextBtn1');
        nextButtonpage.click();

        // Rename the Existing Column Status
        const renameStatusName = cy.get('#progress_0');
        renameStatusName.clear();
        renameStatusName.type(taskboardData.RenameStatus);

        // Add the New Column Status
        const addStatus = cy.get('#Add_new_step');
        addStatus.click();

        // Enter the New Column Status Name
        const newStatusName = cy.get('#progress_1');
        newStatusName.type(taskboardData.StatusName);

        // Click Next Button to Select the Form
        const nextButton = cy.get('#nextBtn3');
        nextButton.click();

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

        // Click Save Button to Create Taskboard
        const save = cy.get('#save');
        save.click();
        cy.wait(2000)

        // Click Skip Button
        const skip = cy.get('#cancelBtn');
        skip.click()



        // //enter the taskboard name in the search box.
        // const searchTaskboard = cy.get('#search');
        // searchTaskboard.type(taskboardData.SearchCreatedTaskboard);

        //click the searched taskboard
        const searchedTaskboard = cy.contains('1Yoroflow Bug Tracking');
        searchedTaskboard.click();

        // //To check whether the given taskboard name is same as per the given taskboard name
        cy.get('.name-css').should('contain', '1Yoroflow Bug Tracking')

        cy.wait(2000);

        //Creating the task in Broad View
        this.addTaskBroadView(taskboardData);

        //Adding a Priority and Description, as well as a status, assigned to, label
        this.addPriorityAndDescription(taskboardData);

        //Adding the subtask and adding a priority and description, as well as a status, assigned to, and label
        this.addSubtask(taskboardData);

        //add comments to parent and subtasks
        this.addComment(taskboardData);

        //Edit Taskboard Configuration and enable the sprint
        this.edittaskboardconfiguration(taskboardData);

        //adding owmer and launch permission
        this.addownerandlauchpermission(taskboardData);

        //add team and access
        this.addTeam(taskboardData);

        //rename column name
        this.renamecolumnname(taskboardData);

        //add sub status
        this.addsubstatus(taskboardData);

        //add sprint
        this.addSprint(taskboardData);


        //Create Event Automation Scenario
        this.createEventAutomation(taskboardData);




    }

    //Creating the task in Broad View
    addTaskBroadView(taskboardData) {
        const addTask = new AddTaskBroadView();
        addTask.addTaskBroadView(taskboardData);
    }

    //Adding a Priority and Description, as well as a status, assigned to, label
    addPriorityAndDescription(taskboardData) {
        const addPriorityDescription = new AddPriorityAndDescription();
        addPriorityDescription.addPriorityAndDescription(taskboardData)
    }

    //Adding the subtask and adding a priority and description, as well as a status, assigned to, and label
    addSubtask(taskboardData) {
        const addSubtask = new AddSubtask();
        addSubtask.addSubtask(taskboardData)
    }

    //add comments to parent and subtasks 
    addComment(taskboardData) {
        const addComment = new AddComment();
        addComment.addComment(taskboardData);
    }

    //Edit Taskboard Configuration and enable the sprint
    edittaskboardconfiguration(taskboardData) {
        const edittaskboardconfiguration = new EditTaskboardConfiguration();
        edittaskboardconfiguration.edittaskboardconfiguration(taskboardData);
    }

    //adding owmer and launch permission
    addownerandlauchpermission(taskboardData) {
        const addownerandlauchpermission = new AddOwnerAndLauchPermission();
        addownerandlauchpermission.addownerandlauchpermission(taskboardData);
    }

    //add team and access
    addTeam(taskboardData) {
        const addTeam = new AddTeam();
        addTeam.addTeam(taskboardData)
    }

    //rename column name
    renamecolumnname(taskboardData) {
        const renamecolumnname = new RenameColumnname();
        renamecolumnname.renamecolumnname(taskboardData)
    }

    //add sub status
    addsubstatus(taskboardData) {
        const addsubstatus = new AddSubstatus();
        addsubstatus.addsubstatus(taskboardData);
    }

    //add sprint
    addSprint(taskboardData) {
        const addSprint = new AddSprint();
        addSprint.addSprint(taskboardData)
    }

    //Create Event Automation Scenario
    createEventAutomation(taskboardData) {
        const createEventAutomation = new CreateEventAutomation();
        createEventAutomation.createEventAutomation(taskboardData)
    }


}

export default CreateTaskboardScratch;