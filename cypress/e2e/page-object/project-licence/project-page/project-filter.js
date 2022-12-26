/// <reference types="cypress" />

class ProjectFilter {

    projectFilter(projectdata) {

        //Click on the Project Menu
        const projectMenu = cy.get('#menu_1');
        projectMenu.click();

        //Search the Project
        const searchProject = cy.get('#search');
        searchProject.type(projectdata.FilterProjectName);

        //Open the Project
        cy.contains('Filter Automation Testing').click();

        //Click Priority Filter
        const priorityFilter=cy.get('#priority_Filter');
        priorityFilter.click();

        //Click Urgent
        const selectUrgent=cy.get('#priority_option_0 > .mat-checkbox-layout > .mat-checkbox-label > [fxlayout="row"] > .ml-1');
        selectUrgent.click();

        cy.get('.cdk-overlay-transparent-backdrop').click(-50, -50, {
            force: true
        });

        cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card > [fxlayoutalign="end end"] > .task-count-css').should('contain','3')

        //Click the User Fiter
        const priorityFilterClear =cy.get('.fa-filter-circle-xmark');
        priorityFilterClear.click();

        

        //Click the User Fiter
        const userFilter = cy.get('#usersFilter > .fa-solid')
        userFilter.click();

        //Click the user
        cy.contains('automation project').click();

        cy.get('.cdk-overlay-transparent-backdrop').click(-50, -50, {
            force: true
        });

        cy.get(':nth-child(1) > #openTask > .mat-card-content > [fxlayoutalign="space-between start"]').should('contain', 'Assignee 3');
        cy.get(':nth-child(2) > #openTask > .mat-card-content > [fxlayoutalign="space-between start"] > [fxlayoutalign="start start"] > .fs_12').should('contain', 'Assignee 2');
        cy.get(':nth-child(3) > #openTask > .mat-card-content > [fxlayoutalign="space-between start"] > [fxlayoutalign="start start"] > .fs_12').should('contain', 'Assignee 1');
        cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card > [fxlayoutalign="end end"] > .task-count-css').should('contain', '3');

        //Clear the User  Filter
        const clearUserFilter = cy.get('.fa-filter-circle-xmark');
        clearUserFilter.click();

        //Apply the Label Filter
        const laeblFilter = cy.get('#label > .fa-solid');
        laeblFilter.click();

        //Select the Defect Label
        const labelName = cy.contains('Defect');
        labelName.click();

        cy.get('.cdk-overlay-transparent-backdrop').click(-50, -50, {
            force: true
        });

        cy.get(':nth-child(1) > #openTask > .mat-card-content > [fxlayoutalign="space-between start"] > [fxlayoutalign="start start"] > .fs_12').should('contain', 'Label 2');
        cy.get(':nth-child(2) > #openTask > .mat-card-content > [fxlayoutalign="space-between start"] > [fxlayoutalign="start start"] > .fs_12').should('contain', 'Label 1');
        cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card > [fxlayoutalign="end end"] > .task-count-css').should('contain', '2');
        cy.get('.fa-filter-circle-xmark').click();

        //Click the Group by Filter
        const groupbyFilter = cy.get('app-taskboard-group-by.ng-star-inserted > .mt-1 > .mat-icon');
        groupbyFilter.click();

        //Click the Priority
        const priority = cy.get('#group_by_2 > .mat-button-wrapper > div > .font-weight-normal');
        priority.click();

        cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card').should('contain', 'No Priority')

        cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card').should('contain', '9')

        cy.get(':nth-child(2) > .column-card').should('contain' ,'Urgent');
        cy.get(':nth-child(2) > .column-card').should('contain' ,'3');

        cy.get(':nth-child(3) > .column-card').should('contain' ,'High');
        cy.get(':nth-child(3) > .column-card').should('contain' ,'2');

        cy.get(':nth-child(4) > .column-card').should('contain' ,'Medium');
        cy.get(':nth-child(4) > .column-card').should('contain' ,'0');

        cy.get(':nth-child(5) > .column-card').should('contain' ,'Low');
        cy.get(':nth-child(5) > .column-card').should('contain' ,'0');

         //Click the Group by Filter
         const groupbyFilterAssignee = cy.get('app-taskboard-group-by.ng-star-inserted > .mt-1 > .mat-icon');
         groupbyFilterAssignee.click();

         cy.get('#group_by_1 > .mat-button-wrapper > div > .font-weight-normal').click();

         cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card').should('contain','UA');

         cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card').should('contain','8');

         cy.get(':nth-child(2) > .column-card').should('contain','DD');

         cy.get(':nth-child(2) > .column-card').should('contain','1');

         cy.get(':nth-child(3) > .column-card').should('contain','3');

         //Click the Group by Filter
         const groupbyFilterStatus = cy.get('app-taskboard-group-by.ng-star-inserted > .mt-1 > .mat-icon');
         groupbyFilterStatus.click();

         //Click Status Filter
         const statusFilter=cy.get('#group_by_0 > .mat-button-wrapper > div');
         statusFilter.click();

         cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card').should('contain','10');

         cy.get('[style="margin-left: 15px; background-color: transparent; filter: blur(); min-height: 574px;"] > .column-card').should('contain','Todo');

         cy.get(':nth-child(2) > .column-card').should('contain','Progress');

         cy.get(':nth-child(2) > .column-card').should('contain','2');

         cy.get(':nth-child(3) > .column-card').should('contain','Done');

         cy.get(':nth-child(3) > .column-card').should('contain','2');
         


    }



}
export default ProjectFilter;