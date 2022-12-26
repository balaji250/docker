/// <reference types="cypress" />

class CopyTaskboard {

    copyTaskboard(searchcreatedtaskboard, copytaskboardname, renamestatus, searchcopytaskboard) {

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

        //click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click copy taskboard
        const taskboardSecurity = cy.get('#copy_taskboard > .mat-button-wrapper > div > .font-weight-normal');
        taskboardSecurity.click();

        //Enter the Taskboard Name
        const taskboardName = cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #name');
        taskboardName.type(copytaskboardname);


        //Rename the Existing Column Status
        const renameStatusName = cy.get('#todo');
        renameStatusName.clear();
        renameStatusName.type(renamestatus);


        //Click Next Button to Select the Form
        const nextButton = cy.get('.mat-dialog-actions > #nextBtn');
        nextButton.click();

        //Click Next Button to Enable the Sprint
        const clickNext = cy.get('.mt-3.ng-star-inserted > #nextBtn');
        clickNext.click();

        //Click Save Button to Create Taskboard
        const save = cy.get('#save');
        save.click();
        cy.wait(2000)

        //enter the taskboard name in the search box.
        const searchCreatedTaskboard = cy.get('.form-control');
        searchCreatedTaskboard.clear();
        searchCreatedTaskboard.type(searchcopytaskboard);

        //click the searched taskboard
        const copyTaskboardSearch = cy.contains('Ticket Management');
        copyTaskboardSearch.click();

        // //To check whether the given taskboard name is same as per the given taskboard name
        cy.get('.name-css').should('contain', 'Ticket Management')



    }
}


export default CopyTaskboard;