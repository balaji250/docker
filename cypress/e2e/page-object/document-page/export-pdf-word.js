/// <reference types="cypress" />
class ExportPDFWord {

     
    exportPDFWord(documentname) {

         //Click on the document menu
         const documentMenu = cy.get('.pb-0 > :nth-child(5)');
         documentMenu.click();
 
        //Enter the Value in Search Field
        const searchDocumentName = cy.get('#border_less > #search');
        searchDocumentName.type(documentname)

        //Selecting Searched Document
        const searchDocument = cy.contains('Customer Requirement');
        searchDocument.click();

        //click on Export as button
        this.exportAsButton();

        //click on PDF option
        const exportAsPDF = cy.get('#changeColumnColor > .mat-button-wrapper > div > span');
        exportAsPDF.click();

        //click on portrait or landscape orientaion in popup and click eport button
        const exportButton = cy.get('#export');
        exportButton.click();

        this.exportAsButton();

         //click on Word option
         const exportAsWord = cy.get('#exportWord > .mat-button-wrapper > div > span');
         exportAsWord.click();
    }

    
    //click on Export as button
    exportAsButton() {
               
        //click on Export as button
        const exportAsButton = cy.get('#save > .mat-button-wrapper');
        exportAsButton.click();


    }

}


export default ExportPDFWord;
