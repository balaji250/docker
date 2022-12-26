/// <reference types="cypress" />

class Gotoboard{

    createticket(yorodeskdata){
    //click on gotoboard
    const goboard = cy.get('#board_btn')
    goboard.click()

    //Select Board
    const dropdown =cy.get('.ng-untouched > .mat-menu-trigger > .mat-icon')
    dropdown.click()
 
    //find name 
    const findname =cy.get('.input-group > .ng-untouched')
    findname.type(yorodeskdata.SearchName)

   //Select name
   const selectname=cy.get('#board_0 > .mat-checkbox-layout > .mat-checkbox-inner-container')
   selectname.click()

   //create task
   const addTask =cy.get('[fxlayout="row"] > div > .mat-tooltip-trigger > .mat-icon')
   addTask.click()

 //Enter Subject
 const enterSubject = cy.get('#Subject')
 enterSubject.type(yorodeskdata.Subject)

   //Enter Description
   const enterDec = cy.get('#Description')
    enterDec.type(yorodeskdata.Description)
    //cy.wait(8000)
   
   // create Ticket
   const ticketCreate = cy.get('#button')
   ticketCreate.click()
  
   //Cancel Task 
   const canceltic =cy.get('app-uppy-component.ng-star-inserted > div.ng-star-inserted > .mat-icon')
   canceltic.click()

  // Add ticket
  const saveTic =cy.get('#Create_Ticket')
  saveTic.click()


    //Open a Ticket
   //const openTic = cy.get('#row_0 > #cell_1 > #subject_1')
   //openTic.click()


  // Reply to ticket 
   //const repltic = cy.get('[style="margin-left: 5px;"]')
  // repltic.click()

   // Add comment 
   //const cmtAdd = cy.get('#quill-editor')
   //cmtAdd.click().type(Reply)

   // Save Comment 
   //const saveCmt = cy.get('#mat-button-toggle-6-button > .mat-button-toggle-label-content > .text-white')
   //saveCmt.click()

   // Add priority 
   //const addPrir = cy.get('.flag-css')
   //addPrir.click()

   // Apply priority 
   //const aplyPrir = cy.get('#priority_option_1 > .mat-button-wrapper')
   //aplyPrir.click()

    }

}
export default Gotoboard