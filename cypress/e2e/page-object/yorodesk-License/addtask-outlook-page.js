/// <reference types="cypress" />

class AddTaskInOutlookBoard{

    AddTaskInOutlookBoard(yorodeskdata){
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
   const selectname=cy.get('#board_0 > .mat-checkbox-layout')
   selectname.click()

   //create task
   const addTask = cy.get('div > .mat-tooltip-trigger > .mat-icon')
   addTask.click()

 //Enter Subject
 const enterSubject = cy.get('#Subject')
 enterSubject.type(yorodeskdata.Subject)

   //Enter Description
    const enterDec = cy.get('#Description')
    enterDec.type(yorodeskdata.Description)

    //Click to save Ticket
   
    const saveTic = cy.get('.submit')
    saveTic.click()

    }
}
export default AddTaskInOutlookBoard