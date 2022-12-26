/// <reference types="cypress" />
class SystemDashboardPage {
    systemDashboard(dashboardDetails) {

        //Click on the dashboard menu
        //const dashboardMenu = cy.get('.pb-0 > :nth-child(4) > .mat-icon');
       // dashboardMenu.click();

        //Click on the system dashboard icon.
        const systemDashboardicon = cy.get('.active_li');
        systemDashboardicon.click();

        //Click on the taskboard icon.
        const taskboardicon = cy.get(':nth-child(2) > .mat-card');
        taskboardicon.click();

        //Click on the workflow icon.
        const workflowicon =cy.get(':nth-child(3) > .mat-card');
        workflowicon.click();

        //Click on the Pastdue icon.
        const pastdueicon = cy.get(':nth-child(4) > .mat-card');
        pastdueicon.click();

        
    }

}

export default SystemDashboardPage;