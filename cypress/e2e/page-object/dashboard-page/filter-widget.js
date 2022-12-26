/// <reference types="cypress" />
class FilterApplyWidgetPage {
    widgetFilter(dashboardDetails) {
        
        
//Click on the Viewing icon.
const viewingWidget = cy.get('#Viewing > .h_14');
viewingWidget.click();

//Click on the apply date filter icon.
const dateFilterWidget = cy.get('[fxlayout="row wrap"] > div');
dateFilterWidget.click();

//Click on the date filter dropdown icon.
const datedropdownWidget = cy.get('.mat-select-arrow');
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

/*Click on the user icon.
const userFilter = cy.get('#card_0_0 > .pt-2 > .mt-1 > .row > app-user-filter.ng-star-inserted > .mat-menu-trigger > .fa-solid');
userFilter.click();

//Click on the user Checkbox.
const userCheckbox = cy.get('#mat-checkbox-8210 > .mat-checkbox-layout > .mat-checkbox-inner-container');
userCheckbox.click();

//Click on the user multi Checkbox.
const multiCheckbox = cy.get('#mat-checkbox-8211 > .mat-checkbox-layout > .mat-checkbox-inner-container');
multiCheckbox.click();

//Click on the user Outbox.
const selectOutbox = cy.get('.cdk-overlay-backdrop');
cy.get('.cdk-overlay-backdrop').click(-50, -50, { force: true });
//selectOutbox.click();

//Click on the user clear filter.
const clearFilter = cy.get('.mt-1 > .row > .mat-focus-indicator > .mat-button-wrapper');
clearFilter.click();

//Click on the Board icon.
const boardFilter = cy.get('#board_filter');
boardFilter.click();

//Click on the board Checkbox.
const boardCheckbox =cy.get('#mat-checkbox-7056 > .mat-checkbox-layout > .mat-checkbox-inner-container');
boardCheckbox.click();

//Click on the board multi Checkbox.
const boardmultiCheckbox = cy.get('#mat-checkbox-7057 > .mat-checkbox-layout > .mat-checkbox-inner-container');
boardmultiCheckbox.click();

//Click on the board Outbox.
const boardselectOutbox = cy.get('.cdk-overlay-backdrop');
cy.get('.cdk-overlay-backdrop').click(-50, -50, { force: true });
//selectOutbox.click();

//Click on the board clear filter.
const boardclearFilter = cy.get('.mt-1 > .row > .mat-focus-indicator > .mat-button-wrapper');
boardclearFilter.click();


//Click on the widget fullscreen.
const fullScreen = cy.get('#expand_button');
fullScreen.click();
    
 //Click on the close fullscreen.
 const closeFullscreen = cy.get('app-widget-preview.ng-star-inserted > [fxlayout="row"] > .mat-icon');
 closeFullscreen.click();



//Click on the filter icon.
const filterWidget = cy.get('.ipad_mn_w_45 > .row > .mat-menu-trigger > .mat-button-wrapper');
filterWidget.click();*/
    }
}

export default FilterApplyWidgetPage;