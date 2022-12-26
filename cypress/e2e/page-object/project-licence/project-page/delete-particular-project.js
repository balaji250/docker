// / <reference types="cypress" />


class DeleteParticularProject {

    deleteParticularProject(projectdata) { 
        // //Click on the Project Menu
        // const projectMenu = cy.get('#menu_1');
        // projectMenu.click();

        //enter the project name in the search box.
        const searchProject = cy.get('#search');
        searchProject.type(projectdata.SearchCreatedProject);

        //click the searched project
        const searchedProject = cy.contains('Recruitment Tracking');
        searchedProject.click();


        //To check whether the given project name is same as per the given project name
        cy.get('.name-css').should('contain', 'Recruitment Tracking');

        //  //To Check whether te given column name is same as per the column name given in the template 
        //  cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card').should('contain','Current Openings');


        //Select the menu to delete 
        const listMenu = cy.get('#taskboard_menu');
        listMenu.click();

        //click delete option to delete the particular project
        const deleteOption = cy.get('#delete_taskboard > .mat-button-wrapper > div');
        deleteOption.click();

        //To check whether the given project name is same as per the given project name
        cy.get('.mat-dialog-content').should('contain', 'Recruitment Tracking');


        //click yes delete button in delete popup
        const deleteButton = cy.get('#btnYes');
        deleteButton.click();

    }

}

export default DeleteParticularProject;