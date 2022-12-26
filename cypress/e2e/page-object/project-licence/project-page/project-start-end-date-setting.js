/// <reference types="cypress" />

class StartandEndDate {

    startandenddate(projectdata) {

        //click action button
        const clickAction = cy.get('#taskboard_menu');
        clickAction.click();

        //click Project security
        const projectSecurity = cy.get(':nth-child(4) > .mat-button-wrapper > div > .font-weight-normal');
        projectSecurity.click();

        //Click the Start Calendar
        const startCalendar = cy.get('[style="margin-right: 10px; flex-direction: column; box-sizing: border-box; display: flex;"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon > path')
        startCalendar.click();

        //Click the Current Day
        const currentDate = cy.get(':nth-child(1) > [data-mat-col="0"] > .mat-calendar-body-cell')
        currentDate.click();

        //Click the End Calendar
        const endCalendar = cy.get('[style="flex-direction: column; box-sizing: border-box; display: flex;"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon > path');
        endCalendar.click();

        //Click the End Date
        const endDate = cy.get(':nth-child(5) > [data-mat-col="5"] > .mat-calendar-body-cell');
        endDate.click();

        //Enter the Total Budget
        const totalBudget = cy.get('#formId');
        totalBudget.clear();
        totalBudget.type(projectdata.TotalBudget);

        //Enter the MaximumBudget
        const adminMaximumBudget = cy.get('#cell_0 > :nth-child(3) > span > [fxlayout="row"] > #allowed_expense');
        adminMaximumBudget.clear();
        adminMaximumBudget.type(projectdata.AdminBudget);


        //To ensure that newly added users and teams are included in the project budget list, 
        cy.contains("automation project");
        cy.contains("yazhini R");
        cy.contains("Durga Devi");
        


        //Click the Save Button
        const SaveButton = cy.get('#save_btn');
        SaveButton.click();
        cy.wait(1000);

        //Check given start date and end date is correct
        cy.get('[style="margin-right: 5px;"]').should('contain', '01-Dec-2022')
        cy.get('.date-container > :nth-child(3)').should('contain', '30-Dec-2022');




    }

}

export default StartandEndDate;