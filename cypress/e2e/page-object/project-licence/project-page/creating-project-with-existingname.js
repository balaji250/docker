// / <reference types="cypress" />


class CreateProjectNameWithExistingName {

    createProjectNameWithExistingName(projectdata) { 
        //Click on the Project Menu
        const projectMenu = cy.get('#menu_1');
        projectMenu.click();

        cy.wait(1000)

        //Click the "Create New Project" button.
        const newProject = cy.get('#new_task');
        newProject.click();

        // Creating New Taskboard From Scratch
        const createTaskFromScratch = cy.get('#scratch > h2');
        createTaskFromScratch.trigger("click");

        //Enter the Project Name
        const projectName = cy.get('#task_board_name');
        projectName.type(projectdata.ProjectName);

        const projectDescription = cy.get('#description')
        projectDescription.click();

        //to check the properly displayed validation error that is displayed while creating the project name as duplicate.
        cy.get('#nameAlreadyExist').should('contain', 'Project Name is Already Exist');

        cy.get('#clear').click();

    }

}

export default CreateProjectNameWithExistingName;