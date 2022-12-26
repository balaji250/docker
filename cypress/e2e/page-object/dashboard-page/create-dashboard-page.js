/// <reference types="cypress" />
import AddWidgetPage from "./add-widget-page.js";

import FilterApplyWidgetPage from "./filter-widget.js";

//import SystemDashboardPage from "./system-dashboard.js";

class CreateDashboardPage {
  createDashboard(dashboardDetails) {

    //Click on the dashboard menu
    const dashboardMenu = cy.get('.pb-0 > :nth-child(4) > .mat-icon');
    dashboardMenu.click();

    //Click on the new dashboard icon.
    const createDashboard = cy.get('#new_task > .mat-button-wrapper');
    createDashboard.click();

    //Enter the dashboard name.
    const dashboardName = cy.get('#mat-input-4');
    dashboardName.type(dashboardDetails.DashboardName);

    //Click on the dashboard create button.
    const dashboardcreateButton = cy.get('[fxlayout="row"] > .mat-primary > .mat-button-wrapper');
    dashboardcreateButton.click();

    this.addwidget(dashboardDetails)

    this.widgetFilter(dashboardDetails)

   // this.systemDashboard(dashboardDetails)


  }


  //Editing the Already Existing dashboard
  addwidget(dashboardDetails) {
    const addWidget = new AddWidgetPage()
    addWidget.addwidget(dashboardDetails)
  }

  //Editing the Filter dashboard
  widgetFilter(dashboardDetails) {
    const WidgetfilterApply = new FilterApplyWidgetPage()
    WidgetfilterApply .widgetFilter(dashboardDetails)
  }

   //Editing the System dashboard
   //systemDashboard(dashboardDetails) {
   // const AllDashboard  = new SystemDashboardPage()
   // AllDashboard .systemDashboard(dashboardDetails)
  //}

  
}

export default CreateDashboardPage;