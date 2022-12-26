/// <reference types="cypress" />

class DeleteColumAccessTeamProject {

    deleteColumAccessTeamProject(projectdata) {

        //Click on the Project Menu
        const projectMenu = cy.get('#menu_1');
        projectMenu.click();

        //Search the Project
        const searchProject = cy.get('#search');
        searchProject.type(projectdata.SearchTeamUserProject);

        //Open the Project
        cy.contains('ColumTeamTest').click();

        //Click Action Button
        cy.get('#taskboard_menu').click();

        //Click Delete Button
        cy.get('#delete_taskboard > .mat-button-wrapper > div').click();

        //Click Yes in the Pop up
        cy.get('#btnYes').click();

        

      
       

      
    }



}
export default DeleteColumAccessTeamProject;