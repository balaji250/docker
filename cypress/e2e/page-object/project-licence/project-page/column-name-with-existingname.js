// / <reference types="cypress" />


class CreateColumnNameWithExistingName {

    createColumnNameWithExistingName(projectdata) { // Click on the Taskboard Men

        //Click the "Create New Project" button.
        const newProject = cy.get('#new_task');
        newProject.click();

        // Creating New Taskboard From Scratch
        const createTaskFromScratch = cy.get('#scratch > h2');
        createTaskFromScratch.trigger("click");

        //Enter the Project Name
        const projectName = cy.get('#task_board_name');
        projectName.type(projectdata.NewProjectName);

        // Enter the Description
        const projectDescription = cy.get('#description');
        projectDescription.type(projectdata.ProjectDescription);


        //Click next Button
        const nextButtonpage = cy.get('#nextBtn1');
        nextButtonpage.click();

        // Rename the Existing Column Status
        const renameStatusName = cy.get('#progress_0');
        renameStatusName.clear();
        renameStatusName.type(projectdata.RenameStatus);

        // Add the New Column Status
        const addStatus = cy.get('#Add_new_step');
        addStatus.click();

        // Enter the New Column Status Name
        const newStatusName = cy.get('#progress_1');
        newStatusName.type(projectdata.RenameStatus);

        // Add the New Column Status
        const addStatusClick = cy.get('#Add_new_step');
        addStatusClick.click();

        cy.get('#nameAlreadyExist').should('contain', 'Column Name Already Exist');
        cy.get('#clear').click();

        //click the searched project
        const searchedProject = cy.contains('Worklog Management');
        searchedProject.click();

        //To check whether the given taskboard name is same as per the given taskboard name
        cy.get('.name-css').should('contain', 'Worklog Management');

        //click colum action option
        const clickcolumaction = cy.get('#column_0');
        clickcolumaction.click();

        //click manage sub status option
        const renameColum = cy.get('#renameColumn > .mat-button-wrapper > div > .font-weight-normal');
        renameColum.click();

        //enter columname
        const enterColumname = cy.get('.mat-form-field-infix > #newColumnName');
        enterColumname.type(projectdata.DuplicateColumnName)

        //replace the columnname
        const replaceColumn = cy.get('#replace_column');
        replaceColumn.click();

        //to check the properly displayed validation error that is displayed while creating the Column name as duplicate.
        cy.get('#responseMessage').should('contain', 'Column name duplicated');

        //Close the Pop-up
        cy.get('#rename > .mat-icon').click();

    }

}

export default CreateColumnNameWithExistingName;