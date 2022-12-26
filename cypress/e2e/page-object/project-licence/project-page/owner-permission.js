/// <reference types="cypress" />

class OwnerPermission {

    ownerPermission(projectdata) {

        //Click on the Project Menu
        const projectMenu = cy.get('#menu_1');
        projectMenu.click();

        //Open the Project
        cy.contains('Owner Permission Automation').click();

        //Check the assigned task is shown
        cy.contains('Task 1').click();

        //To check whether the selected user is right as per the given user
        cy.get('.row > app-assignee > .assignee-task > .mat-tooltip-trigger').should('contain', 'AP')

        //To check whether the selected label is right as per the given label
        cy.get('.label-scroll > .row').should('contain', 'Defect');

        //Check the Save and Close Button
        cy.get('.mr-3 > .mat-button-wrapper').click();

        //Check the assigned task is shown
        cy.contains('Task 2').click();

        //To check whether the selected user is right as per the given user
        cy.get('.row > app-assignee > .assignee-task > .mat-tooltip-trigger').should('contain', 'AP')

        cy.get('.mr-3 > .mat-button-wrapper').click();

        



    }



}
export default OwnerPermission;