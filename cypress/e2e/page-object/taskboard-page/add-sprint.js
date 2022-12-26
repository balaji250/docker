/// <reference types="cypress" />

class AddSprint {

    addSprint(taskboardData) {


        //click sprint action
        const sprintAction=cy.get('.active_li > .sprint_setting_icon > .mat-icon');
        sprintAction.click();

        //click add new sprint
        cy.contains('Add new sprint').click();

        //click the date
        const date=cy.get('#mat-date-range-input-0');
        date.type(taskboardData.SprintDate)

        //enter the sprint count
        const sprintCount=cy.get('#sprintCounts');
        sprintCount.clear();
        sprintCount.type(taskboardData.SprintCount)

        //create the sprint
        const createSprint=cy.get('#save');
        createSprint.click();


    } 

}


export default AddSprint;