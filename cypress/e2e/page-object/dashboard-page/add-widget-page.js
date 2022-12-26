/// <reference types="cypress" />
class AddWidgetPage {
    addwidget(dashboardDetails) {

//Click on the Add Widget icon.
const addwidgeticon = cy.get('.justify-content-center > .mat-focus-indicator > .mat-button-wrapper');
addwidgeticon.click();

//Click on the Add New Widget.
const WorkloadWidget = cy.get(':nth-child(1) > .card');
WorkloadWidget.click();

//Click on the widget editing icon.
const editingWidget = cy.get('#Editing > .h_14');
editingWidget.click();

//Click on the Add Widget icon.
const addwidgeticonedit = cy.get('#addWidget > .mat-button-wrapper');
addwidgeticonedit.click();

//Click on the Add New Widget.
const StatisticsWidget = cy.get(':nth-child(2) > .card');
StatisticsWidget.click();

//Click on the Add Widget icon.
const addwidgetedit = cy.get('#addWidget > .mat-button-wrapper');
addwidgetedit.click();

//Click on the Add New Widget.
const Workflowicon =cy.get(':nth-child(2) > .mat-button-wrapper > .h_14');
Workflowicon.click();

//Click on the Add New Widget.
const WorkflowwidgetTime =cy.get('#menu_3 > .mat-button-wrapper > span');
WorkflowwidgetTime.click();

//Click on the Add New Widget.
const Workflowwidget =cy.get(':nth-child(1) > .card');
Workflowwidget.click();

/*Click on the apply date filter icon.
const dateFilterWidget = cy.get('[fxlayout="row wrap"] > div');
dateFilterWidget.click();

//Click on the date filter dropdown icon.
const datedropdownWidget = cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow');
datedropdownWidget.click();

//Click on the date dropdown select icon.
const dateselectWidget = cy.get('#filter_4 > .mat-option-text');
dateselectWidget.click();

//Click on the date filter apply  button.
const applyWidget = cy.get('[fxlayout="row"] > .mat-primary');
applyWidget.click();

//Click on the date filter close icon.
const closeWidget = cy.get('.mat-card > [fxlayout="row"] > div > .mat-icon');
closeWidget.click();



//Click on the add widget icon.
const editpageaddWidget = cy.get('#addWidget > .mat-button-wrapper');
editpageaddWidget.click();

//Click on the select workflow widget icon.
const selectworkflowWidget = cy.get(':nth-child(2) > .mat-button-wrapper > .h_14');
selectworkflowWidget.click();

//Click on the add new team task by task name widget icon.
const teamtaskWidget = cy.get(':nth-child(2) > .card');
teamtaskWidget.click();

//Click on the Viewing icon.
const viewingWidget = cy.get('#Viewing > .h_14');
viewingWidget.click();*/
    }
}

export default AddWidgetPage;
