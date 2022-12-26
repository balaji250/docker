/// <reference types="cypress" />

import AddTaskProject from "./add-task-to-project.js";
import AddPriorityAndDescription from "./add-priority-description.js";
import AddSubtask from "./add-subtask.js";
import AddComment from "./add-comment.js"
import EditProjectConfiguration from "./edit-project-configuration.js"
import AddOwnerAndLauchPermission from "./add-owner-launch-permission.js"
import AddTeam from "./add-team.js"
import RenameColumnname from "./rename-columname.js"
import AddSubstatus from "./add-substatus.js"
import StartandEndDate from './project-start-end-date-setting.js'
import CreateMilestone from './create-milestone'
import CompleteArchiveDeleteTask from './complete-delete-archive-task.js'
import CopyProject from './copy-project.js'

class CreateProjectScratch {

    createProjectFromScratch(projectdata) {
        //Click on the Project Menu
        const projectMenu = cy.get('#menu_1');
        projectMenu.click();

        //Click the "Create New Project" button.
        const newProject = cy.get('#new_task');
        newProject.click();

        // Creating New Taskboard From Scratch
        const createTaskFromScratch = cy.get('#scratch > h2');
        createTaskFromScratch.trigger("click");

        //Enter the Project Name
        const projectName = cy.get('#task_board_name');
        projectName.type(projectdata.ProjectName);

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

        // Add the New Column Status
        const addStatus = cy.get('#Add_new_step');
        addStatus.click();

        // Enter the New Column Status Name
        const newStatusName = cy.get('#progress_1');
        newStatusName.type(projectdata.StatusName);

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
        const selectFormName = cy.contains('Automation Form');
        // const selectformname = cy.get('#pageName_57 > .mat-option-text');
        selectFormName.click();

        // Click Next Button to Enable the Sprint
        const clickNext = cy.get('#nextBtn4');
        clickNext.click();

        // Click Save Button to Create Project
        const save = cy.get('#save');
        save.click();
        

        // Click Skip Button
        const skip = cy.get('#cancelBtn');
        skip.click()

        //click the searched project
        const searchedProject = cy.contains('Worklog Management');
        searchedProject.click();

        // //To check whether the given taskboard name is same as per the given taskboard name
        cy.get('.name-css').should('contain', 'Worklog Management');


        //To check whether the given colum name is same as per the given colum name
        cy.get(':nth-child(2) > .column-card > [fxlayoutalign="start start"] > .column-title').should('contain', 'In Progress');
        cy.get(':nth-child(3) > .column-card > [fxlayoutalign="start start"] > .column-title').should('contain','In Development')


        //Creating the task in Broad View
        this.addTaskProject(projectdata);

        //Adding a Priority and Description, as well as a status, assigned to, label
        this.addPriorityAndDescription(projectdata);

        //Adding the subtask and adding a priority and description, as well as a status, assigned to, and label
        this.addSubtask(projectdata);

        //add comments to parent and subtasks
        this.addComment(projectdata);

        //Edit Project Configuration and enable the sprint
        this.editprojectconfiguration(projectdata);

        //adding owmer and launch permission
        this.addownerandlauchpermission(projectdata);

        //add team and access
        this.addTeam(projectdata);

        //rename column name
        this.renamecolumnname(projectdata);

        //add sub status
        this.addsubstatus(projectdata);

        //project settings
        this.startandenddate(projectdata);

        //Completed/Archived,Deleted Task
        this.completeArchiveDeleteTask(projectdata);

        //Creating Milestone
        this.createMilestone(projectdata);

        //Copy Project
        this.copyProject(projectdata)



    }

    //Creating the task in Broad View
    addTaskProject(projectdata) {
        const addTask = new AddTaskProject();
        addTask.addTaskProject(projectdata);
    }
    //Adding a Priority and Description, as well as a status, assigned to, label
    addPriorityAndDescription(projectdata) {
        const addPriorityDescription = new AddPriorityAndDescription();
        addPriorityDescription.addPriorityAndDescription(projectdata)
    }

    //Adding the subtask and adding a priority and description, as well as a status, assigned to, and label
    addSubtask(projectdata) {
        const addSubtask = new AddSubtask();
        addSubtask.addSubtask(projectdata)
    }

    //add comments to parent and subtasks 
    addComment(projectdata) {
        const addComment = new AddComment();
        addComment.addComment(projectdata);
    }

    //Edit Project Configuration and enable the sprint
    editprojectconfiguration(projectdata) {
        const editprojectconfiguration = new EditProjectConfiguration();
        editprojectconfiguration.editprojectconfiguration(projectdata);
    }

    //adding owmer and launch permission
    addownerandlauchpermission(projectdata) {
        const addownerandlauchpermission = new AddOwnerAndLauchPermission();
        addownerandlauchpermission.addownerandlauchpermission(projectdata);
    }

    //add team and access
    addTeam(projectdata) {
        const addTeam = new AddTeam();
        addTeam.addTeam(projectdata)
    }


    //rename column name
    renamecolumnname(projectdata) {
        const renamecolumnname = new RenameColumnname();
        renamecolumnname.renamecolumnname(projectdata)
    }

    //add sub status
    addsubstatus(projectdata) {
        const addsubstatus = new AddSubstatus();
        addsubstatus.addsubstatus(projectdata);
    }

    //Project Setting
    startandenddate(projectData) {
        const startandenddate = new StartandEndDate();
        startandenddate.startandenddate(projectData)

    }

    //Creating Milestone
    createMilestone(projectData) {
        const createMilestone = new CreateMilestone();
        createMilestone.createMilestone(projectData)

    }

    //Completed/Archived,Deleted Task
    completeArchiveDeleteTask(projectData) {
        const completearchievedelete = new CompleteArchiveDeleteTask();
        completearchievedelete.completeArchiveDeleteTask(projectData);
    }

    //Copy Project
    copyProject(projectData) {
        const copyProject = new CopyProject();
        copyProject.copyProject(projectData);
    }

}

export default CreateProjectScratch;