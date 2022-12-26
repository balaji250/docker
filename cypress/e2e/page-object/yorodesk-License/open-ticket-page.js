/// <reference types="cypress" />

class Openticket{

    openTicket(yorodeskdata){

  // add task in board
  //const addTask = cy.get('[fxlayout="row"] > div > .mat-tooltip-trigger > .mat-icon')
  //addTask.click()


//  //click on gotoboard
//  const goboard = cy.get('#board_btn')
//  goboard.click()

//  //Select Board
//  const dropdown =cy.get('.ng-untouched > .mat-menu-trigger > .mat-icon')
//  dropdown.click()

//  //find name 
//  const findname =cy.get('.input-group > .ng-untouched')
//  findname.type(SearchName)

// //Select name
// const selectname=cy.get('#board_0 > .mat-checkbox-layout > .mat-checkbox-inner-container')
// selectname.click()

// Open a Ticket
cy.wait(3000);
   const openTic = cy.get('#subject_1')
   openTic.click()


  // Reply to ticket 
   const repltic = cy.get('[style="margin-left: 5px;"]')
   repltic.click()

   // Add comment 
   const cmtAdd = cy.get('#quill-editor')
   cmtAdd.click().type(yorodeskdata.Reply)

   // Save Comment 
   const saveCmt = cy.get('#mat-button-toggle-1-button')
   saveCmt.click()

   // Add priority 
   const addPrir = cy.get('.flag-css')
   addPrir.click()

   // Apply priority 
   const aplyPrir = cy.get('#priority_option_1 > .mat-button-wrapper')
   aplyPrir.click()

   // Assign to Agent

   const aggagt = cy.get('.user-container-css > .circle-css')
   aggagt.click()

   // Enter Name
   //const entname = cy.get('#mat-chip-list-input-0')
   //entname.click().type(Name)

   // Aggign team
   const Assignteam = cy.get(':nth-child(1) > .mat-card > [fxlayout="row"]')
   Assignteam.click()

   // Save the Assigneg Ticket
   const saveAssignticket = cy.get('.mr-3 > .mat-button-wrapper')
   saveAssignticket.click()

   // back to table view
   const backTable = cy.get('[fxlayoutalign="start"] > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
   backTable.click()

    }

}
export default Openticket