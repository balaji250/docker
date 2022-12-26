/// <reference types="cypress" />
import AddAssignLabelGridTask from './add-assignee-label-grid-task.js'

class AddTaskGridView {

    addTaskGridView(taskboardData) {


        //Click on the Taskboard Menu
        const taskboardMenu = cy.get('.pb-0 > :nth-child(3) > .mat-icon');
        taskboardMenu.click();

        //enter the taskboard name in the search box.
        const searchTaskboard = cy.get('.form-control');
        searchTaskboard.type(taskboardData.SearchCreatedTaskboard);

        //click the searched taskboard
        const searchedTaskboard = cy.contains('1Yoroflow Bug Tracking');
        searchedTaskboard.click();

        //To check whether the given taskboard name is same as per the given taskboard name
        cy.get('.name-css').should('contain', '1Yoroflow Bug Tracking');


        //click on grid view
        const gridView = cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content');
        gridView.click();

        //Click the Add Task Button
        const addtask = cy.get('#addTask');
        addtask.click();

        //Enter the task Title
        const taskTitleName = cy.get('#taskTitle');
        taskTitleName.type(taskboardData.GridTaskTitle);

        //Enter the Task ID
        const taskIdNumber = cy.get('#TaskID');
        taskIdNumber.type(taskboardData.GridTaskID);

        //Enter the Task Description   
        const taskSummary = cy.get('#Description');

        taskSummary.type(taskboardData.TaskDescription);

        //Click the Create Task Button
        const createTask = cy.get('#create_task');
        createTask.click();

        //Open the Created Task
        const openTask = cy.get('#Todo > .cdk-drag > .hidden-column-css.cell-column-css > [style="width: 100%; height: 100%; flex-direction: row; box-sizing: border-box; display: flex;"] > [style="width: 100%; flex-direction: column; box-sizing: border-box; display: flex;"] > #task_name_0');
        openTask.click();

        //To check whether the given task title is same as per the given task title
        cy.get('.px-2 > :nth-child(1) > .mat-tooltip-trigger').should('contain', 'Task 2');

        // Click the Save and Close Button to Save the Changes Done
        const saveclose = cy.get('.mr-3 > .mat-button-wrapper');
        saveclose.click();

        //adding assignee
        this.addassignlabelgridtask(taskboardData)

    }

    //adding assignee 
    addassignlabelgridtask(taskboardData) {
        const addassignlabelgridtask = new AddAssignLabelGridTask();
        addassignlabelgridtask.addassignlabelgridtask(taskboardData)
    }

}


export default AddTaskGridView;