/// <reference types="cypress" />
class ExportPDFWord {

    exportPDFWord(documentDetails) {

        //click on Export as button
        const exportAsButton1 = cy.get('#save > .mat-button-wrapper');
        exportAsButton1.click();

        //click on PDF option
        const exportAsPDF = cy.get('#changeColumn > .mat-button-wrapper > div');
        exportAsPDF.click();

        //click on portrait or landscape orientaion in popup and click eport button
        const exportButton = cy.get('#export');
        exportButton.click();

       //click on Export as button
        const exportAsButton2 = cy.get('#save > .mat-button-wrapper');
        exportAsButton2.click();

        //click on Word option
        const exportAsWord = cy.get('#exportWord > .mat-button-wrapper > div');
        exportAsWord.click();
    }

}
export default ExportPDFWord;