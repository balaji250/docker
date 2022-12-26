/// <reference types="cypress" />
class DeleteDocumentPage {
    deleteDocument(documentNameToDelete) {

        //Click on the document menu
        const documentMenu = cy.get('.pb-0 > :nth-child(5)');
        documentMenu.click();

        //Enter the Value in Search Field to Delete
        const searchDocumentNameToDelete = cy.get('#border_less > #search');
        searchDocumentNameToDelete.type(documentNameToDelete);

        //Selecting Searched Document to delete
        const searchDocumentToDelete = cy.contains('Customer Requirement');
        searchDocumentToDelete.click();
       
        //Click on menu option to delete
        const menuToDelete =cy.get('.icon-align');
        menuToDelete.click();
        
        //click on delete button
         const deleteButton =cy.get('.mat-button-wrapper > div > span');
         deleteButton.click();


          


    }

}
export default DeleteDocumentPage;