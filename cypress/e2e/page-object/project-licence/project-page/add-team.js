/// <reference types="cypress" />

class AddTeam {

    addTeam(projectdata) {

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

       


    }
}


export default AddTeam;