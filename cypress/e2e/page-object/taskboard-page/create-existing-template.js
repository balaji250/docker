// / <reference types="cypress" />


class CreateExistingTemplate {

    createExistingTemplateTaskboard(existingTaskboardName) { // Click on the Taskboard Menu
        const taskboardMenu = cy.get('.pb-0 > :nth-child(3) > .mat-icon');
        taskboardMenu.click();

        // Click the "create new taskboard" button.
        const newTaskboard = cy.get('#new_task');
        newTaskboard.click();

        // Select the Existing Template.
        const selectTemplate = cy.get('#template_0_0 > h3');
        selectTemplate.click();

        // Enter the Taskboard Name
        const taskboardName = cy.get('#taskboard_name');
        taskboardName.type(existingTaskboardName);

        // Enable the Sprint Option
        const enableSprint = cy.get('#mat-slide-toggle-2 > .mat-slide-toggle-label > .mat-slide-toggle-bar');
        enableSprint.click();

        // Save Added Sprint
        cy.get('form.ng-pristine > [fxlayoutalign="end"] > #save').click();

        // Taskboard Overall Save Button
        const saveButton = cy.get('.mat-dialog-content > .mt-3 > .mat-primary > .mat-button-wrapper');
        saveButton.click();

    }

}

export default CreateExistingTemplate;
