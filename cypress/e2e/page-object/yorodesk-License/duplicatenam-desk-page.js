/// <reference types="cypress" />

class DuplicateNameCheck {

  dupllicatename(yorodeskdata) {

    // click on Support Board
    const deskName = cy.get('.mat-button-wrapper')
    deskName.click()

    // Enter Support board name
    const boardname = cy.get('#name')
    boardname.type(yorodeskdata.DeskName)

    // Clicl the next Button
    const clicknext = cy.get('form.ng-star-inserted > [fxlayout="row"] > #next > .mat-button-wrapper')
    clicknext.click()

    cy.contains('Yorodesk Name is Already Exist')

    // rename

    const reName = cy.get('#name')
    reName.type(yorodeskdata.Rename)

    // submit name 
    const submitName =  cy.get('form.ng-star-inserted > [fxlayout="row"] > #next > .mat-button-wrapper')
    submitName.click()

    // select smtp

    const smtp = cy.get('.mat-select-arrow');
    smtp.click();

    //apply smtp
    const applysmtp = cy.get('#mat-option-8 > .mat-option-text')
    applysmtp.click()

    // click next to save
    const save = cy.get('app-yorodeskemail-config > .pr-3 > #next')
    save.click()


    cy.contains('Email already configured with other board')

    // click to back 
    const previous = cy.get('.active > .mat-icon')
    previous.click()


    // click to home
     const homeButton = cy.get('#btnYes > .mat-button-wrapper')
     homeButton.click()


    


    
    }

}
export default DuplicateNameCheck