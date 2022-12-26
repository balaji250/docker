// / <reference types="cypress" />
class AddOwnerTeam {
    addOwnerTeam(documentDetails) {
        
        //Click on the Add Permission button.
        const addPermission = cy.get('.flag-css');
        addPermission.click();

        // Click on the document owner edit icon.
        const documentOwnerEditIcon = cy.get('#add_edit')
        documentOwnerEditIcon.click();

        // Enter the Owner name
        const ownerName = cy.get('.mat-chip-list-wrapper > #search');
        ownerName.type(documentDetails.Owner);

        // Select the given owner name.
        cy.contains('Automation User1').click();

        // Click on overall save button
        const ownerSave = cy.get('.owner-list-css > :nth-child(1) > :nth-child(2) > .row > .mr-3');
        ownerSave.click();

        // Click on the Add team icon.
        const teamIcon = cy.get('.px-0 > .row > #read > .flag-css');
        teamIcon.click();

        // Enter the team name
        const teamName = cy.get('.mat-chip-list-wrapper > #search');
        teamName.type(documentDetails.SearchTeam);

        // Select the given team name.
        cy.contains('Automation Team').click();

        // Click on overall save button
        const teamSave = cy.get('#team-list > :nth-child(1) > :nth-child(2) > .row > #save');
        teamSave.click();

        // Close the document security pop-up
        const popupClose = cy.get('#clear');
        popupClose.click();

        // To check whether the selected owner's name is right as per the given owner's name
        cy.contains('AU').should('be.visible');

        // To check whether the selected team name is right as per the given team name
        cy.contains('A').should('be.visible');


    }

}
export default AddOwnerTeam;
