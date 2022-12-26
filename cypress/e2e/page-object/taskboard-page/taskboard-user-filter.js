/// <reference types="cypress" />

class UserFilter {

    userFilter(searchcreatedtaskboard,assigneename) {

        //Click on the Taskboard Menu
        const taskboardMenu = cy.get('.pb-0 > :nth-child(3) > .mat-icon');
        taskboardMenu.click();
        //enter the taskboard name in the search box.
        const searchTaskboard = cy.get('.form-control');
        searchTaskboard.type(searchcreatedtaskboard);

        //click the searched taskboard
        const searchedTaskboard = cy.contains('1Yoroflow Bug Tracking');
        searchedTaskboard.click();


        //To check whether the given taskboard name is same as per the given taskboard name
        cy.get('.name-css').should('contain', '1Yoroflow Bug Tracking');

        //Open the Created Task
        const openTask =cy.get('#openTask');
        openTask.click();

        //Click Assign to Icon
        const clickAssignTo = cy.get(':nth-child(2) > .text-black > span.ng-star-inserted > .mat-tooltip-trigger');
        clickAssignTo.click();

        //Enter the Assignee Name
        const assigneeUserName = cy.get('#mat-chip-list-input-0');
        assigneeUserName.type(assigneename);

        //Select the Assignee
        cy.get('#selectAssign').contains('Automation User1').click();

        //Save the Assignee
        const saveAssigne = cy.get('#Confirm');
        saveAssigne.click();

        //To check whether the selected user name is right as per the given user name
        cy.contains('AU').should('be.visible');

        // // Click the Save and Close Button to Save the Changes Done
        // const saveclose = cy.get('.mr-3 > .mat-button-wrapper');
        // saveclose.click();

        //Click the User Filter
        const clickUserFilter=cy.get('[aria-haspopup="menu"][aria-describedby="cdk-describedby-message-hgf-1-27"]');
        clickUserFilter.click();

        //Click the User
        cy.contains('Automation User1').click();



        

    }
}


export default UserFilter;