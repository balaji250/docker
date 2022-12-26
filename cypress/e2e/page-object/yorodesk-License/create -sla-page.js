/// <reference types="cypress" />

class Createsla {

  createsla (yorodeskdata){

 // click board view
    const boardView = cy.get('#view_1')
    boardView.click()

   // click Action button
   const clickButton = cy.get('#taskboard_menu') 
   clickButton.click()

   // click configuration
   const configuration = cy.get('#taskboard_config')
   configuration.click()

   //select sla option 
   const selectSla = cy.get('#mat-tab-label-0-1')
   selectSla.click()

   // sla list
   const slaList = cy.get('#sla_list')
   slaList.click()

   // create sla 
   const createSla = cy.get('#mat-option-25 > .mat-option-text')
   createSla.click()

   //enter sla name 
    const slaName = cy.get('#slaName')
    slaName.type(yorodeskdata.SLA)

    // Add priority
    const addPriority = cy.get('#mat-slide-toggle-5 > .mat-slide-toggle-label')
    addPriority.click()

    // add another priority
    const priority = cy.get('#mat-slide-toggle-7 > .mat-slide-toggle-label')
    priority.click()

    // click to save Sla 
    const saveSla = cy.get('.px-3 > .justify-content-end > .mat-primary')
    saveSla.click()

    // click close button
    const close = cy.get('#close_btn')
    close.click()


  }


}

export default Createsla