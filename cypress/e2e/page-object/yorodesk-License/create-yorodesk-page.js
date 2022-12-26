/// <reference types="cypress" />

import Gotoboard from './create-ticket-page.js'

import Openticket from './open-ticket-page.js'

import Createsla from './create -sla-page.js'

import Statuschange from './change-status-label-page.js'

class CreateYorodesk{

    createNewYorodesk(yorodeskdata){
    // click on Support Board
    const deskName = cy.get('.mat-button-wrapper')
    deskName.click()
 
    // Enter Support board name
    const boardname =cy.get('#name')
    boardname.type(yorodeskdata.DeskName)
    
 
    // Clicl the next Button
    const clicknext = cy.get('form.ng-star-inserted > [fxlayout="row"] > #next > .mat-button-wrapper')
    clicknext.click()
 
    //click Again
    const click1 = cy.get('.mat-select-arrow-wrapper')
    click1.click()
 
    //Select email setting name 
    const savechannel = cy.get('#mat-option-8')
    savechannel.click()
 
   // Click to save desk
   const saveBoard = cy.get('app-yorodeskemail-config > .pr-3 > #next')
   saveBoard.click()

   // Click to save Permission
   const savePermission = cy.get('app-yorodesk-security > .pr-3 > #next')
   savePermission.click()

  // Select SLA policy 
   const selectSla = cy.get('#no')
   selectSla.click()
   cy.wait(3000);

    // create tic 
    this.createticket(yorodeskdata)

    // open tic
    this.openTicket(yorodeskdata)

    // change status 
    //this.changestatus(yorodeskdata)

    // add sla 
    this.createsla(yorodeskdata)

  
 

}

 //create tic
  createticket(yorodeskdata){
    const allBoard = new Gotoboard();
    allBoard.createticket(yorodeskdata)
   
  }
  
  openTicket(yorodeskdata){
    const opentic = new Openticket();
    opentic.openTicket(yorodeskdata)
    
    }

    changestatus(yorodeskdata){
      const changestatus = new Statuschange();
      changestatus.changestatus(yorodeskdata)
   }

    createsla (yorodeskdata){
      const createsla = new Createsla();
      createsla.createsla(yorodeskdata)
  
   
   }
 
 }
 export default CreateYorodesk