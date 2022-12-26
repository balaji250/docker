/// <reference types="cypress" />
import DisableSprint from "./disable-sprint-for-existing-sprint";

class AddSprint {

    addSprintForExistingProject(projectData) {

        //click Project menu
        const projectMenu = cy.get('#menu_1');
        projectMenu.click();
        //click search box
        cy.get('#search').type(projectData.SearchProjectName);

        //click search icon
        cy.get('.input-suffix > .mat-icon').click();

         //To check whether the given project name is correct
         cy.contains('projectsprint').should('be.visible');

        //click searched project name
        cy.get('.li-css').click();

        //click action button
        cy.get('#taskboard_menu').click();

        //click configuration menu
        cy.get(':nth-child(2) > .mat-button-wrapper > div').click();

        //click next button in configuration popup
        cy.get('#nextBtn2').click();

        //click next button in status configuration popup
        cy.get('#nextBtn3').click();

        //click next button in configuration popup
        cy.get('#nextBtn4').click();

        //Enable sprint button
        cy.get('.mat-slide-toggle-bar').click();

        //Click save button in sprint settings popup
        cy.get('#save').click();

        //Click update project
        cy.get('#update').click();

        //Click skip button in project popup
        cy.get('#cancelBtn').click();


        //click sprint action
        const sprintAction = cy.get('.active_li > .sprint_setting_icon > .mat-icon');
        sprintAction.click();

        //click add new sprint
        cy.contains('Add New Sprint').click();

        //click calender icon
        cy.get('.mat-datepicker-toggle > .mat-focus-indicator').click();

        //click the date
        cy.get(':nth-child(4) > [data-mat-col="3"] > .mat-calendar-body-cell').click();

        //create the sprint
        const createSprint = cy.get('#save');
        createSprint.click();

        //click the task
        cy.get('.mat-card-content').click();

        //click the sprint icon
        cy.get(':nth-child(4) > .fs_12 > span > .mat-icon').click();

        //click the existing sprint option
        cy.contains('Which sprint you want to add selected tasks?').should('be.visible');
        cy.get('[fxlayout="row"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        

        //click the first sprint from the dropdown
        cy.get('#sprint_0 > .mat-option-text').click();

        //Click on Add to sprint Button
        cy.get('#save').click();

        //click on overall save & close button
        cy.get('.row > .mr-3').click();

        //click on the task 
        cy.get('.mat-card-content').click();

       //check whether sprint is added
        cy.contains('Sprint 1 (Dec/20 - Jan/02)').should('be.visible');
        
// //Click on disable sprint option
//         this.disableSprintForExistingProject();
    }

      //Disabling Sprint for already Existing project
      disableSprintForExistingProject(){
        const disableSprint = new DisableSprint();
        disableSprint.disableSprintForExistingProject();
    }

}


export default AddSprint;