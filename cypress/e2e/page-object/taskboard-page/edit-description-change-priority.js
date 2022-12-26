/// <reference types="cypress" />
import RemoveSubstatus from "./remove-substatus.js"
import RemoveOwnerAndLauchPermission from "./remove-owner-lauch-permission.js"
class ChangePriorityAndDescription {

    changePriorityAndDescription(taskboardData) {

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

        //Open the Created Task
        const openTask = cy.get('#openTask');
        openTask.click();

        //To check whether the given task title is same as per the given task title
        cy.get('.px-2 > :nth-child(1) > .mat-tooltip-trigger').should('contain', 'Task 1');

        cy.log('Edit Description')

        //Click Add Description Edit Icon
        const editIcon = cy.get('.border-bottom > .mat-tooltip-trigger');
        editIcon.click();

        //Enter the Description
        const enterDescription = cy.get('.ql-editor');
        enterDescription.clear();
        enterDescription.type(taskboardData.EditDescription);

        //Save the Description
        const saveDescription = cy.get('#save');
        saveDescription.click();

        //To check whether the given description is same as per the given description
        cy.get('.description-class > p').should('contain', 'this task contains the defect of taskboardmodule');

        cy.log('Change Priority')

        //Click Add Priority Flag Icon
        const clickFlagIcon = cy.get('app-priority > .mat-menu-trigger');
        clickFlagIcon.click();

        //Click the High Priority
        cy.contains('High').click();

        //click the Status
        const clickStatus = cy.get('.status-box');
        clickStatus.click();

        //Click the Development Status
        cy.get('.mat-menu-content').contains('Development').click();

        cy.log('Remove Label')

        //Click Remove Label Icon
        const removeLabel = cy.get('.row > span.ng-star-inserted > .mat-tooltip-trigger');
        removeLabel.click();

        cy.log('Remove Assignee')

        //Click Assign to Icon
        const clickAssignTo = cy.get(':nth-child(2) > .row > .fa-solid');
        clickAssignTo.click();

        //Remove the Assignee
        cy.get('.mat-chip > .mat-icon').click();

        //Save the Assignee
        const saveAssigne = cy.get('#Confirm');
        saveAssigne.click();

        //remove sub status
        this.removeownerandlauchpermission();
        
        //remove owmer and launch permission
        this.removesubstatus();

    }

    //remove sub status
    removesubstatus(taskboardData) {
        const removesubstatus = new RemoveSubstatus();
        removesubstatus.removesubstatus(taskboardData);
    }


    //remove owmer and launch permission
    removeownerandlauchpermission(taskboardData) {
        const removeownerandlauchpermission = new RemoveOwnerAndLauchPermission();
        removeownerandlauchpermission.removeownerandlauchpermission(taskboardData);

    }
}
export default ChangePriorityAndDescription;