/// <reference types="cypress" />
class ExistingDashboard {
    existingDashboard(dashboarddata) {

        //Click on the dashboard menu
        const dashboardMenu = cy.get('.pb-0 > :nth-child(4) > .mat-icon');
        dashboardMenu.click();

        //Click on the search box icon.
        const searchDashboard = cy.get('.input-control');
        searchDashboard.type(dashboarddata.ExistingDashboard);

        //Click on the search data icon.
        const searchData = cy.get('.child_menu > .fs_12.ng-star-inserted');
        searchData.click();

        
    }

}

export default ExistingDashboard;