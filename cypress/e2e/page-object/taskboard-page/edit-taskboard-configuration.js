/// <reference types="cypress" />

class EditTaskboardConfiguration {

    edittaskboardconfiguration(taskboardData) {

        //click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click the taskboard configuration menu
        const taskboardConfiguration = cy.get('#taskboard_config > .mat-button-wrapper > div > .font-weight-normal');
        taskboardConfiguration.click();

        //Enter the Description
        const taskboardDescription = cy.get('#description');
        taskboardDescription.clear()
        taskboardDescription.type(taskboardData.EditTaskboardDescription);

        //Click next Button
        const nextButtonpage=cy.get('#nextBtn2');
        nextButtonpage.click();

        //Rename the Existing Column Status
        const renameStatusName = cy.get('#todo');
        renameStatusName.clear();
        renameStatusName.type(taskboardData.RenameColumnName);


        //Click Next Button to Select the Form
        const nextButton = cy.get('#nextBtn3');
        nextButton.click();

        //Click Next Button to Enable the Sprint
        const clickNext = cy.get('#nextBtn4');
        clickNext.click();

        //Enable the sprint
        const enableSprint = cy.get('.mat-slide-toggle-content');
        enableSprint.click();

        //Enter the Sprint Duration
        const sprintDuration = cy.get('#sprintDuration');
        sprintDuration.type(taskboardData.SprintDuration)

        //Save the Sprint
        const saveSprint = cy.get('#save');
        saveSprint.click();

        //Click Save Button to Update Taskboard
        const save = cy.get('#update');
        save.click();
        cy.wait(2000)

        // Click Skip Button
        const skip=cy.get('#cancelBtn');
        skip.click()

        //To check whether the given columnname same as per the given columnname
        cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card > [fxlayoutalign="start start"] > .column-title').should('contain', 'Requirement');

    }

    taskboardname(name) {
        const taskboardName = cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #name');
        taskboardName.type(name);
    }

}

export default EditTaskboardConfiguration;