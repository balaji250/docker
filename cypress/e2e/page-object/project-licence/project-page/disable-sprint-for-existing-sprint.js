/// <reference types="cypress" />

class DisableSprint {

    disableSprintForExistingProject() {
        //Click on Project menu
        cy.get('#taskboard_menu').click();

        //To check whether the given project name is correct

        cy.contains('projectsprint').should('be.visible');

        //click configuration menu
        cy.get(':nth-child(2) > .mat-button-wrapper > div').click();

        //click next button in configuration popup
        cy.get('#nextBtn2').click();

        //click next button in status configuration popup
        cy.get('#nextBtn3').click();

        //click next button in configuration popup
        cy.get('#nextBtn4').click();

        //Enable sprint button
        cy.get('.mat-slide-toggle-bar').click();

        //Click update project
        cy.get('#update').click();

        //click skip button 
        cy.get('#cancelBtn').click();

    }
}
export default DisableSprint;