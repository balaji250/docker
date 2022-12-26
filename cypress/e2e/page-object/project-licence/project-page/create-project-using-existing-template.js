// / <reference types="cypress" />
import DeleteParticularProject from "./delete-particular-project";

class CreateProjectExistingTemplate {

    createProjectExistingTemplate(projectData) {


        // Click on the Project Menu
        const projectMenu = cy.get('#menu_1');
        projectMenu.click();

        // Click the "create new taskboard" button.
        const newProject = cy.get('#new_task');
        newProject.click();

        // Select the Existing Template.
        const selectTemplate = cy.get('#template_0_1 > h3');
        selectTemplate.click();

        // Enter the Project Name
        const projectName = cy.get('#task_board_name')
        projectName.type(projectData.ExistingProjectTemplate);

        // click Next Button
        const nextButton = cy.get('#nextBtn1');
        nextButton.click();

        //    //Check whether column name is correct
        //    cy.contains('Current Openings').should('be.visible');
        //    //cy.get('#progress_bar_0 > .mat-form-field-wrapper > .mat-form-field-flex').should('have.value', 'Current Openings');

        // click Next Button
        const nextButtonCreateProject = cy.get('#nextBtn3');
        nextButtonCreateProject.click();
        //Check whether generated task id is already exist
        cy.contains(' Generated Task Id is Already Exist ').should('be.visible');

        const generateTaskId = cy.get('#generatedTaskId');
        generateTaskId.clear();
        generateTaskId.type(projectData.GeneratedTaskId);

        //click enable sprint button
        const enableSprint = cy.get('.mat-slide-toggle-bar');
        enableSprint.dblclick();

        // Save Added Sprint
        const saveSprint = cy.get('[fxlayoutalign="end"] > #save');
        saveSprint.click();

        //click task title
        const taskTitle = cy.get('#mat-select-value-1');
        taskTitle.click();
        cy.get('#mat-option-2').click();

        // Project Overall Save Button
        const saveButton = cy.get('#save');
        saveButton.click();

        //check whether created successfully message is displayed
        cy.contains(' Project Created Successfully ').should('be.visible');

        //click setup button to enable security
        const setupButton = cy.get('#cdk-step-content-0-2 > :nth-child(1) > [fxlayout="row"] > .mat-primary');
        setupButton.click();

        //cy.get('.mat-error ng-tns-c105-2382 ng-star-inserted').should('be.empty');

        //click on edit icon in owner/Manager menu
        cy.get('#ownersEdit').click();
        //click on search box
        cy.get('.mat-form-field-infix > #search').type(projectData.OwnerName);
        //click on search icon
        cy.get('.mat-form-field-suffix > .mat-icon').click();

        //click on searched owner/manager name
        //Select the owner.
        cy.contains('sowmi yoroproject').click();

        //click on confirm button in project manager/owner popup
        cy.get('#Confirm').click();
        //To check whether the selected owner's name is right as per the given owner's name
        cy.contains('SY').should('be.visible');

        //Click Launch Permission Edit Icon

        const launchPermissionEdit = cy.get('#launch_edit');
        launchPermissionEdit.click();

        //Click the Select User Dropdown
        // const selectUser = cy.get('#mat-select-value-43 > .mat-select-placeholder');
        const selectUser = cy.get('#allowUsersList');
        selectUser.click();
        //Select the user.
        cy.contains('Admin Admin').click();

        //Click the Background of the pop-up
        cy.get('.cdk-overlay-transparent-backdrop').click();


        const selectTeam = cy.get('#allowTeamsList');
        selectTeam.click();
        //Select team
        cy.contains('sowmiprojectteam').click();

        //Click the Background of the pop-up
        cy.get('.cdk-overlay-transparent-backdrop').click();

        //enable the project users
        const projectuser = cy.get('#allowTaskboardUser > .mat-checkbox-layout > .mat-checkbox-label');
        projectuser.click();

        //enable project Temas
        const projectTeams = cy.get('#allowTaskboardTeams > .mat-checkbox-layout > .mat-checkbox-label');
        projectTeams.click();

        //save the permission
        const savePermission = cy.get('form.ng-valid > [fxlayoutalign="end end"] > .mat-primary');
        savePermission.click();

        //To check whether the selected project user is shown
        cy.contains('Project Users').should('be.visible');
        cy.contains('AA').should('be.visible');


        //To check whether the selected projectteam is shown
        cy.contains('Project Teams').should('be.visible');
        cy.contains('ST').should('be.visible');
        //Click team menu to add team
        const teamMenu = cy.get('#teamNameInput > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex');
        teamMenu.click();
        teamMenu.type(projectData.TeamNameForExistingTemplate);

        //Select the owner.
        cy.contains('sowmiprojectteam').click();

        //enable read access
        const enableRead = cy.get('#readAllowed0 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb');
        enableRead.click();

        //enable update access
        const enableUpdate = cy.get('#updateAllowed0 > .mat-slide-toggle-label > .mat-slide-toggle-bar');
        enableUpdate.click();

        //enable delete access
        const enableDelete = cy.get('#deleteAllowed_0 > .mat-slide-toggle-label > .mat-slide-toggle-bar');
        enableDelete.click();

        //click next button
        const next = cy.get('#btnSave');
        next.click();

        //save the permisson
        const save = cy.get('#Save_Permission > .mat-button-wrapper');
        save.click();
        //close the pop-up
        const close = cy.get('#clear');
        close.click();
        //Delete a particular project
        this.deleteParticularProject(projectData);

    }

    deleteParticularProject(projectData) {
        const deleteProject = new DeleteParticularProject();
        deleteProject.deleteParticularProject(projectData);

    }
}

export default CreateProjectExistingTemplate;
