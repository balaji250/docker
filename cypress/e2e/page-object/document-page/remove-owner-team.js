// / <reference types="cypress" />
class RemoveOwnerTeam {
    removeOwnerTeam(editdocumentname) {

        
        //Click on the Add Permission button.
        const addPermission = cy.get('.flag-css');
        addPermission.click();

        // Click on the document owner edit icon.
        const documentOwnerEditIcon = cy.get('#add');
        documentOwnerEditIcon.click();

        // Enter the Remove Owner
        const ownerName = cy.get('.mat-chip-list-wrapper > :nth-child(2) > .mat-icon');
        ownerName.click();

        // Click on overall save button
        const ownerSave = cy.get('.owner-list-css > :nth-child(1) > :nth-child(2) > .row > .mr-3');
        ownerSave.click();

        // Click on the Add team icon.
        const teamIcon = cy.get('.px-0 > .row > #read > .flag-css');
        teamIcon.click();

        //Remove Team
        const removeTeam=cy.get('#mat-chip-list-5 > .mat-chip-list-wrapper > .mat-chip > #cancel');
        removeTeam.click();

        // Save the Team
        const teamName = cy.get('#team-list > :nth-child(1) > :nth-child(2) > .row > #save')
        teamName.click();

        // Close the document security pop-up
        const popupClose = cy.get('#clear');
        popupClose.click();
    }

}
export default RemoveOwnerTeam;
